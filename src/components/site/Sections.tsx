import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Star } from "lucide-react";
import type { ReactNode } from "react";
import { AREAS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

/* ---------- Page hero ---------- */

export function PageHero(props: {
  eyebrow: string;
  title: string;
  lede: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {props.image && (
        <>
          <img
            src={props.image}
            alt={props.imageAlt ?? ""}
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"
            aria-hidden
          />
        </>
      )}
      {!props.image && <div className="glow-brass absolute inset-0" aria-hidden />}
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <p className="eyebrow">{props.eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          {props.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{props.lede}</p>
        {props.children && <div className="mt-8 flex flex-wrap gap-3">{props.children}</div>}
      </div>
    </section>
  );
}

/* ---------- Section heading ---------- */

export function SectionHeading(props: { eyebrow: string; title: string; lede?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{props.eyebrow}</p>
      <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {props.title}
      </h2>
      {props.lede && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{props.lede}</p>
      )}
    </div>
  );
}

/* ---------- Primary / secondary CTA links ---------- */

export function CtaPrimary(props: {
  to?: string;
  params?: Record<string, string>;
  href?: string;
  children: ReactNode;
}) {
  const cls =
    "inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85";
  if (props.href) {
    return (
      <a href={props.href} className={cls}>
        {props.children}
      </a>
    );
  }
  return (
    <Link to={props.to ?? "/contact"} params={props.params as never} className={cls}>
      {props.children}
    </Link>
  );
}

export function CtaSecondary(props: {
  to: string;
  params?: Record<string, string>;
  children: ReactNode;
}) {
  return (
    <Link
      to={props.to}
      params={props.params as never}
      className="inline-flex items-center justify-center gap-2 rounded-sm border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/60 hover:text-primary"
    >
      {props.children}
    </Link>
  );
}

/* ---------- CTA band ---------- */

export function CtaBand(props: { title?: string; lede?: string }) {
  return (
    <section className="border-t border-border">
      <div className="glow-brass">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div className="min-w-0">
              <p className="eyebrow">By Appointment</p>
              <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {props.title ?? "Arrange a consultation."}
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {props.lede ??
                  "Private consultations for homeowners, architects and designers across Glasgow and Central Scotland — from first drawings through long-term care of the system."}
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <CtaPrimary to="/contact">Arrange a Consultation</CtaPrimary>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary" aria-hidden />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ (accessible disclosure) ---------- */

export function Faq(props: { items: { question: string; answer: string }[] }) {
  return (
    <div className="divide-y divide-border rounded-lg border border-border bg-card">
      {props.items.map((f) => (
        <details key={f.question} className="group px-5 py-5 sm:px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-medium text-foreground [&::-webkit-details-marker]:hidden">
            {f.question}
            <span
              className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border text-primary transition-transform group-open:rotate-45"
              aria-hidden
            >
              +
            </span>
          </summary>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">{f.answer}</p>
        </details>
      ))}
    </div>
  );
}

/* ---------- Areas served ---------- */

export function AreasServed(props: { intro?: string }) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Service Areas"
          title="Glasgow and Central Scotland."
          lede={
            props.intro ??
            "We design, install and maintain systems across Glasgow and the surrounding counties — from city townhouses and new builds to country estates."
          }
        />
        <ul className="mt-8 flex flex-wrap gap-2.5">
          {AREAS.map((area) => (
            <li
              key={area}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Testimonials (real client quotes carried from the existing site) ---------- */

const TESTIMONIALS = [
  {
    quote:
      "The house simply behaves. Lighting, music, climate — nothing to think about, nothing on display. That was exactly the brief.",
    source: "Private Residence, Bearsden",
  },
  {
    quote:
      "1080 worked alongside our architect from first drawings. The result is technology you feel rather than see.",
    source: "Country Estate, Perthshire",
  },
  {
    quote:
      "Ten years on from our first install, they still look after the house. That kind of stewardship is rare.",
    source: "Townhouse Client, Edinburgh New Town",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading eyebrow="Client Feedback" title="What our clients say." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.source} className="rounded-lg border border-border bg-background p-6">
              <div className="flex gap-1 text-primary" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 text-xs font-medium tracking-wide text-muted-foreground">
                {t.source}
              </figcaption>
            </figure>
          ))}
        </div>
        {/* Placeholder for verified Google reviews — link out rather than fabricate. */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-lg border border-dashed border-border p-6 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">
            Verified Google reviews from recent projects will appear here shortly.
          </p>
          <a
            href="https://www.google.com/search?q=1080+solutions+glasgow+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Read our reviews on Google
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Image / text feature split ---------- */

export function FeatureSplit(props: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  bullets?: string[];
}) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className={props.reverse ? "lg:order-2" : ""}>
          <p className="eyebrow">{props.eyebrow}</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {props.title}
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
            {props.children}
          </div>
          {props.bullets && (
            <ul className="mt-6 space-y-2.5">
              {props.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden
                  />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={props.reverse ? "lg:order-1" : ""}>
          <img
            src={props.image}
            alt={props.imageAlt}
            width={1920}
            height={1080}
            loading="lazy"
            className="aspect-video w-full rounded-lg border border-border object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Card grid ---------- */

export function CardGrid(props: {
  items: { title: string; text: string; to?: string }[];
  cols?: 2 | 3;
}) {
  return (
    <div className={`grid gap-5 sm:grid-cols-2 ${props.cols === 3 ? "lg:grid-cols-3" : ""}`}>
      {props.items.map((item) => {
        const inner = (
          <>
            <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            {item.to && (
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Learn more <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            )}
          </>
        );
        const cls =
          "rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50";
        return item.to ? (
          <Link key={item.title} to={item.to} className={cls}>
            {inner}
          </Link>
        ) : (
          <div key={item.title} className={cls}>
            {inner}
          </div>
        );
      })}
    </div>
  );
}
