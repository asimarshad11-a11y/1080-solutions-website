import { readFile } from "node:fs/promises";
import { extname, join, resolve, sep } from "node:path";

import worker from "../.output/server/index.mjs";

const ORIGIN = "https://www.1080solutions.co.uk";
const PUBLIC_DIRECTORY = resolve(".output/public");

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8",
};

const assets = {
  async fetch(request) {
    const { pathname } = new URL(request.url);
    const relativePath = decodeURIComponent(pathname).replace(/^\/+/, "");
    const filePath = resolve(join(PUBLIC_DIRECTORY, relativePath));

    if (filePath !== PUBLIC_DIRECTORY && !filePath.startsWith(`${PUBLIC_DIRECTORY}${sep}`)) {
      return new Response("Not found", { status: 404 });
    }

    try {
      const body = await readFile(filePath);
      return new Response(body, {
        headers: {
          "content-type":
            contentTypes[extname(filePath).toLowerCase()] ?? "application/octet-stream",
        },
      });
    } catch {
      return new Response("Not found", { status: 404 });
    }
  },
};

const executionContext = { waitUntil() {} };
const pages = new Map();
const failures = [];

function check(condition, message) {
  if (!condition) failures.push(message);
}

async function fetchWorker(pathOrUrl) {
  const url = new URL(pathOrUrl, ORIGIN);
  return worker.fetch(new Request(url), { ASSETS: assets }, executionContext);
}

function decodeHtml(value = "") {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function extract(html, expression) {
  return decodeHtml(html.match(expression)?.[1]?.trim());
}

function extractMeta(html, attribute, value) {
  const escaped = value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const direct = new RegExp(
    `<meta[^>]*${attribute}=["']${escaped}["'][^>]*content=["']([^"']*)["'][^>]*>`,
    "i",
  );
  const reversed = new RegExp(
    `<meta[^>]*content=["']([^"']*)["'][^>]*${attribute}=["']${escaped}["'][^>]*>`,
    "i",
  );
  return extract(html, direct) || extract(html, reversed);
}

function extractSchemas(html) {
  return [
    ...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi),
  ].map((match) => JSON.parse(decodeHtml(match[1])));
}

function schemaNodes(value) {
  if (!value || typeof value !== "object") return [];
  if (Array.isArray(value)) return value.flatMap(schemaNodes);
  return [value, ...Object.values(value).flatMap(schemaNodes)];
}

const sitemapResponse = await fetchWorker("/sitemap.xml");
check(sitemapResponse.status === 200, "sitemap.xml must return 200");
const sitemap = await sitemapResponse.text();
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => decodeHtml(match[1]));
check(urls.length === 21, `sitemap must contain 21 URLs (found ${urls.length})`);
check(new Set(urls).size === urls.length, "sitemap URLs must be unique");

for (const url of urls) {
  const response = await fetchWorker(url);
  const html = await response.text();
  const path = new URL(url).pathname;
  const title = extract(html, /<title>(.*?)<\/title>/is);
  const description = extractMeta(html, "name", "description");
  const canonical =
    extract(html, /<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i) ||
    extract(html, /<link[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["'][^>]*>/i);
  const schemas = extractSchemas(html);
  const nodes = schemas.flatMap(schemaNodes);
  const h1Count = (html.match(/<h1(?:\s|>)/gi) ?? []).length;
  const robots = extractMeta(html, "name", "robots");
  const ogImage = extractMeta(html, "property", "og:image");
  const twitterImage = extractMeta(html, "name", "twitter:image");
  const normalizedHtml = html.replaceAll("<!-- -->", "");

  pages.set(path, { html, title, description, canonical, schemas, nodes });

  check(response.status === 200, `${path}: must return 200`);
  check(Boolean(title), `${path}: title is missing`);
  check(title.length <= 65, `${path}: title exceeds 65 characters (${title.length})`);
  check(Boolean(description), `${path}: meta description is missing`);
  check(
    description.length <= 160,
    `${path}: meta description exceeds 160 characters (${description.length})`,
  );
  check(canonical === url, `${path}: canonical must equal ${url} (found ${canonical})`);
  check(h1Count === 1, `${path}: must contain exactly one H1 (found ${h1Count})`);
  check(!/noindex/i.test(robots), `${path}: must not contain noindex`);
  check(
    nodes.some((node) => node["@type"] === "ProfessionalService"),
    `${path}: ProfessionalService schema is missing`,
  );
  check(ogImage.startsWith(`${ORIGIN}/`), `${path}: absolute og:image is missing`);
  check(twitterImage === ogImage, `${path}: Twitter image must match og:image`);
  check(!html.includes("1080 Solutions Ltd"), `${path}: obsolete legal name is still present`);
  check(
    normalizedHtml.includes("Algo AV Limited trading as 1080 Solutions"),
    `${path}: current legal identity is missing from the footer`,
  );
  check(html.includes("SC824474"), `${path}: company number is missing`);
  check(
    html.includes("https://www.instagram.com/1080solutionsltd/"),
    `${path}: Instagram link is missing`,
  );
  check(html.includes("https://www.facebook.com/1080cctv/"), `${path}: Facebook link is missing`);

  if (ogImage) {
    const imageResponse = await fetchWorker(ogImage);
    check(imageResponse.status === 200, `${path}: og:image must return 200`);
    check(
      imageResponse.headers.get("content-type")?.startsWith("image/"),
      `${path}: og:image must have an image content type`,
    );
  }
}

const home = pages.get("/");
const business = home?.nodes.find((node) => node["@type"] === "ProfessionalService");
check(business?.["@id"] === `${ORIGIN}/#business`, "business @id is incorrect");
check(business?.name === "1080 Solutions", "business name is incorrect");
check(business?.legalName === "Algo AV Limited", "business legalName is incorrect");
check(business?.identifier?.value === "SC824474", "Companies House identifier is incorrect");
check(
  business?.identifier?.propertyID === "Companies House",
  "Companies House identifier property is incorrect",
);
check(
  Array.isArray(business?.sameAs) && business.sameAs.length === 2,
  "business sameAs must contain both official social profiles",
);
check(Boolean(business?.image), "business schema image is missing");

const internalPaths = new Set();
for (const { html } of pages.values()) {
  for (const match of html.matchAll(/<a[^>]*href=["']([^"']+)["']/gi)) {
    const href = decodeHtml(match[1]);
    if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      continue;
    }
    const target = new URL(href, ORIGIN);
    if (target.origin === ORIGIN) internalPaths.add(target.pathname);
  }
}

for (const path of [...internalPaths].sort()) {
  const response = await fetchWorker(path);
  check(response.status === 200, `internal link ${path}: must return 200`);
}

const robotsResponse = await fetchWorker("/robots.txt");
const robots = await robotsResponse.text();
check(robotsResponse.status === 200, "robots.txt must return 200");
check(robots.includes(`Sitemap: ${ORIGIN}/sitemap.xml`), "robots sitemap is incorrect");

console.table(
  [...pages.entries()].map(([path, page]) => ({
    path,
    status: 200,
    title: page.title.length,
    description: page.description.length,
  })),
);

if (failures.length) {
  console.error(`\nSEO smoke test failed (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(
    `\nSEO smoke test passed: ${pages.size} pages, ${internalPaths.size} internal paths, metadata, schema, social previews, robots and sitemap.`,
  );
}
