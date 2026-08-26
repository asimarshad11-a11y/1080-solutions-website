import { createFileRoute } from "@tanstack/react-router";

import { SITE_NAME, SITE_URL } from "@/lib/site";

type VisitorAlertPayload = {
  path?: unknown;
  title?: unknown;
  referrer?: unknown;
};

const BOT_PATTERN =
  /\b(bot|crawler|spider|slurp|headless|preview|lighthouse|pagespeed|pingdom|uptimerobot)\b/i;

const REGION_NAMES: Record<string, string> = {
  ENG: "England",
  NIR: "Northern Ireland",
  SCT: "Scotland",
  WLS: "Wales",
};

export const Route = createFileRoute("/api/visitor-alert")({
  server: {
    handlers: {
      POST: async ({ request }) => handleVisitorAlert(request),
    },
  },
});

async function handleVisitorAlert(request: Request): Promise<Response> {
  if (process.env["VERCEL_ENV"] && process.env["VERCEL_ENV"] !== "production") {
    return noContent();
  }

  if (!isSameOriginRequest(request) || shouldIgnoreRequest(request)) {
    return noContent();
  }

  const webhookUrl = getGoogleChatWebhookUrl();
  if (!webhookUrl) return noContent();

  const payload = await readPayload(request);
  if (!payload) return noContent();

  const path = safePath(payload.path);
  const pageTitle = safeText(payload.title, 120) || labelFromPath(path);
  const source = referralSource(payload.referrer);
  const location = requestLocation(request);
  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date());

  const visitSentence = location
    ? `Someone from ${location} visited your website today at ${time}.`
    : `Someone visited your website today at ${time}.`;

  const message = [
    "🔔 *New website visitor*",
    visitSentence,
    `*Page:* ${pageTitle}`,
    `*Source:* ${source}`,
    `${SITE_URL}${path}`,
  ].join("\n");

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ text: message }),
    });

    if (!response.ok) {
      console.error(`Google Chat visitor alert failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Google Chat visitor alert request failed", error);
  }

  return noContent();
}

function getGoogleChatWebhookUrl(): string | undefined {
  const value = process.env["GOOGLE_CHAT_WEBHOOK_URL"]?.trim();
  if (!value) return undefined;

  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.hostname !== "chat.googleapis.com") {
      return undefined;
    }
    return url.toString();
  } catch {
    return undefined;
  }
}

function isSameOriginRequest(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return false;

  try {
    const requestOrigin = new URL(request.url).origin;
    return origin === requestOrigin || origin === SITE_URL;
  } catch {
    return false;
  }
}

function shouldIgnoreRequest(request: Request): boolean {
  const userAgent = request.headers.get("user-agent") ?? "";
  const purpose = `${request.headers.get("purpose") ?? ""} ${
    request.headers.get("sec-purpose") ?? ""
  }`;

  return BOT_PATTERN.test(userAgent) || /prefetch|prerender/i.test(purpose);
}

async function readPayload(request: Request): Promise<VisitorAlertPayload | undefined> {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().startsWith("application/json")) return undefined;

  try {
    return (await request.json()) as VisitorAlertPayload;
  } catch {
    return undefined;
  }
}

function requestLocation(request: Request): string | undefined {
  const city = decodedHeader(request.headers.get("x-vercel-ip-city"));
  if (city) return city;

  const regionCode = decodedHeader(request.headers.get("x-vercel-ip-country-region"));
  if (regionCode) return REGION_NAMES[regionCode.toUpperCase()] ?? regionCode;

  const countryCode = decodedHeader(request.headers.get("x-vercel-ip-country"));
  if (countryCode === "GB") return "the United Kingdom";
  return countryCode;
}

function decodedHeader(value: string | null): string | undefined {
  if (!value) return undefined;

  try {
    return safeText(decodeURIComponent(value), 80) || undefined;
  } catch {
    return safeText(value, 80) || undefined;
  }
}

function safePath(value: unknown): string {
  if (typeof value !== "string" || !value.startsWith("/")) return "/";

  try {
    const url = new URL(value, SITE_URL);
    if (url.origin !== SITE_URL || url.pathname.startsWith("/api/")) return "/";
    return url.pathname.slice(0, 200) || "/";
  } catch {
    return "/";
  }
}

function safeText(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return [...value]
    .map((character) => {
      const code = character.charCodeAt(0);
      return code <= 31 || code === 127 ? " " : character;
    })
    .join("")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function referralSource(value: unknown): string {
  const referrer = safeText(value, 500);
  if (!referrer) return "Direct / unknown";

  try {
    const hostname = new URL(referrer).hostname.toLowerCase().replace(/^www\./, "");
    const siteHostname = new URL(SITE_URL).hostname.replace(/^www\./, "");

    if (hostname === siteHostname) return "Another page on the site";
    if (hostname === "google.com" || hostname.endsWith(".google.com")) return "Google";
    if (hostname === "bing.com" || hostname.endsWith(".bing.com")) return "Bing";
    if (hostname === "facebook.com" || hostname.endsWith(".facebook.com")) return "Facebook";
    if (hostname === "instagram.com" || hostname.endsWith(".instagram.com")) return "Instagram";
    return hostname;
  } catch {
    return "Direct / unknown";
  }
}

function labelFromPath(path: string): string {
  if (path === "/") return `${SITE_NAME} home page`;

  return path
    .split("/")
    .filter(Boolean)
    .pop()!
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function noContent(): Response {
  return new Response(null, {
    status: 204,
    headers: { "cache-control": "no-store" },
  });
}
