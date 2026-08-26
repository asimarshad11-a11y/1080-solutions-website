import { AREAS, EMAIL, PHONE_DISPLAY, SITE_NAME, SITE_URL } from "./site";

type MetaEntry = Record<string, string>;
type LinkEntry = { rel: string; href: string; type?: string };
type ScriptEntry = { type: string; children: string };

export interface SeoHeadOptions {
  title: string;
  description: string;
  /** Absolute path on the site, e.g. "/smart-home-glasgow". */
  path: string;
  /** Extra JSON-LD objects to embed (Service, FAQPage, etc.). */
  jsonLd?: Record<string, unknown>[];
  /** Breadcrumb trail items after Home. */
  breadcrumbs?: { name: string; path: string }[];
  ogType?: string;
}

export function seoHead(opts: SeoHeadOptions): {
  meta: MetaEntry[];
  links: LinkEntry[];
  scripts: ScriptEntry[];
} {
  const url = `${SITE_URL}${opts.path}`;
  const meta: MetaEntry[] = [
    { title: opts.title },
    { name: "description", content: opts.description },
    { property: "og:title", content: opts.title },
    { property: "og:description", content: opts.description },
    { property: "og:type", content: opts.ogType ?? "website" },
    { property: "og:url", content: url },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: opts.title },
    { name: "twitter:description", content: opts.description },
  ];

  const links: LinkEntry[] = [{ rel: "canonical", href: url }];

  const scripts: ScriptEntry[] = [];
  if (opts.breadcrumbs && opts.breadcrumbs.length > 0) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify(breadcrumbJsonLd(opts.breadcrumbs)),
    });
  }
  for (const obj of opts.jsonLd ?? []) {
    scripts.push({ type: "application/ld+json", children: JSON.stringify(obj) });
  }

  return { meta, links, scripts };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "1080 Solutions Ltd (Algo AV)",
    alternateName: "Algo AV",
    url: SITE_URL,
    telephone: PHONE_DISPLAY,
    email: EMAIL,
    description:
      "Premium smart home, home cinema, smart lighting, multi-room AV, networking and security integrator serving Glasgow and Central Scotland.",
    areaServed: AREAS.map((area) => ({ "@type": "Place", name: area })),
    knowsAbout: [
      "Control4 home automation",
      "Lutron lighting control",
      "KNX and DALI lighting",
      "Home cinema design",
      "Multi-room audio and video",
      "Home networking and Wi-Fi",
      "CCTV and security systems",
      "Door entry and access control",
      "Heating and HVAC integration",
      "Automated blinds and curtains",
    ],
  };
}

export function serviceJsonLd(opts: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    provider: {
      "@type": "ProfessionalService",
      name: `${SITE_NAME} (Algo AV)`,
      url: SITE_URL,
      telephone: PHONE_DISPLAY,
      email: EMAIL,
    },
    areaServed: [
      { "@type": "City", name: "Glasgow" },
      { "@type": "Place", name: "Central Scotland" },
    ],
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
