import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  AreasServed,
  CardGrid,
  CtaBand,
  CtaPrimary,
  CtaSecondary,
  SectionHeading,
  Testimonials,
} from "@/components/site/Sections";
import { seoHead } from "@/lib/seo";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import heroImage from "@/assets/hero-smart-home.jpg";
import cinemaImage from "@/assets/home-cinema.jpg";
import lightingImage from "@/assets/smart-lighting.jpg";
import whitecraigsImage from "@/assets/whitecraigs-cinema.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    seoHead({
      title: "Smart Home & AV Specialists Glasgow | 1080 Solutions",
      description:
        "Premium smart home, Control4 automation, home cinema, Lutron lighting, networking and security installation across Glasgow and Central Scotland.",
      path: "/",
    }),
  component: HomePage,
});

const SERVICES_GRID = [
  {
    title: "Smart Home Automation",
    text: "Complete home automation built on Control4 — lighting, heating, blinds, AV and security in one calm, reliable system.",
    to: "/smart-home-glasgow",
  },
  {
    title: "Control4 Smart Home Systems",
    text: "Design, installation, programming and long-term support as a Control4 integrator in Glasgow and Central Scotland.",
    to: "/control4-glasgow",
  },

  {
    title: "Home Cinema",
    text: "Reference-grade Dolby Atmos cinema rooms, acoustically designed and calibrated by hand.",
    to: "/home-cinema",
  },
  {
    title: "Smart Lighting",
    text: "Lighting design and control on Lutron, KNX and DALI — keypads, scenes and automated shading.",
    to: "/smart-lighting-glasgow",
  },
  {
    title: "Multi-Room Audio & Video",
    text: "Music, film and sport in every room — distributed over a structured network, controlled from anywhere.",
    to: "/multi-room-audio-and-video",
  },
  {
    title: "Networking & Wi-Fi",
    text: "Enterprise-grade wired and wireless infrastructure with total coverage and silent reliability.",
    to: "/data-networking-and-wifi",
  },
  {
    title: "Security & Access",
    text: "Discreet CCTV, monitored alarms, door entry and access control — woven quietly into the architecture.",
    to: "/alarms-and-cctv",
  },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={heroImage}
          alt="Smart living room in a Glasgow home at dusk, with warm architectural lighting and a concealed television"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/60 to-background"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-36 lg:px-8 lg:py-44">
          <p className="eyebrow">Tomorrow's Technology, Today</p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Smart Home &amp; AV Specialists in Glasgow
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            1080 Solutions designs, installs and maintains complete smart home systems — Control4
            automation, Lutron lighting, home cinema, multi-room AV, networking and security —
            across Glasgow and Central Scotland.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaPrimary to="/contact">Arrange a Consultation</CtaPrimary>
            <CtaSecondary to="/projects">View Projects</CtaSecondary>
          </div>
          <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["10+", "Years in the industry"],
              ["200+", "Residences completed"],
              ["Glasgow", "& Central Scotland"],
            ].map(([stat, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-2xl font-semibold text-primary sm:text-3xl">
                  {stat}
                </dd>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Intro */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="Home Automation, Designed in Glasgow"
              title="One system. Every room. Nothing on display."
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground lg:pt-12">
              <p>
                1080 Solutions Ltd is a smart home integrator working from Glasgow across Central
                Scotland — from city townhouses and new builds in Whitecraigs and Newton Mearns to
                country estates in Lanarkshire. We design, install and maintain complete home
                automation systems built on{" "}
                <Link to="/control4-glasgow" className="text-primary hover:underline">
                  Control4
                </Link>
                , with{" "}
                <Link to="/lutron-glasgow" className="text-primary hover:underline">
                  Lutron, KNX and DALI lighting
                </Link>
                ,{" "}
                <Link to="/multi-room-audio-and-video" className="text-primary hover:underline">
                  multi-room audio and video
                </Link>{" "}
                and{" "}
                <Link to="/alarms-and-cctv" className="text-primary hover:underline">
                  CCTV and alarm systems
                </Link>{" "}
                engineered into a single platform.
              </p>
              <p>
                We work alongside architects, interior designers and main contractors from first
                drawings through commissioning — and we stay with the house long after handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="What We Do"
            title="Every discipline, one considered system."
            lede="Each service is designed as part of the whole house — never bolted on, never left to fend for itself."
          />
          <div className="mt-10">
            <CardGrid items={SERVICES_GRID} cols={3} />
          </div>
        </div>
      </section>

      {/* Featured project */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <p className="eyebrow">Featured Project</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              A reference home cinema in Whitecraigs, Glasgow.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A 9.4.4 Dolby Atmos cinema built around M&amp;K loudspeakers, a StormAudio ISR Fusion
              20 processor and a JVC DLA-NZ8 projecting onto a 192-inch screen — with{" "}
              <Link to="/control4-glasgow" className="text-primary hover:underline">
                Control4 integration
              </Link>
              , tunable-white architectural lighting and a Starscape ceiling completing the room.
            </p>

            <div className="mt-8">
              <CtaPrimary to="/projects/whitecraigs-glasgow">
                View the Whitecraigs Project
              </CtaPrimary>
            </div>
          </div>
          <Link
            to="/projects/whitecraigs-glasgow"
            className="group relative block overflow-hidden rounded-lg border border-border"
            aria-label="View the Whitecraigs home cinema project"
          >
            <img
              src={whitecraigsImage}
              alt="Dedicated home cinema in Whitecraigs, Glasgow with star ceiling and widescreen projection"
              width={1920}
              height={1080}
              loading="lazy"
              className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-sm bg-background/80 px-3 py-2 text-xs font-semibold text-foreground backdrop-blur">
              Whitecraigs, Glasgow <ArrowRight className="h-3.5 w-3.5 text-primary" aria-hidden />
            </span>
          </Link>
        </div>
      </section>

      {/* Cinema + lighting splits */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <Link
            to="/home-cinema"
            className="group relative block overflow-hidden rounded-lg border border-border"
          >
            <img
              src={cinemaImage}
              alt="Private home cinema with tiered seating and fibre-optic star ceiling"
              width={1920}
              height={1080}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:aspect-video"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent"
              aria-hidden
            />
            <div className="absolute bottom-0 p-6 sm:p-8">
              <p className="eyebrow">Private Cinema</p>
              <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
                An evening out, without leaving.
              </h2>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                Dolby Atmos rooms, acoustically treated and calibrated by hand.
              </p>
            </div>
          </Link>
          <Link
            to="/smart-lighting-glasgow"
            className="group relative block overflow-hidden rounded-lg border border-border"
          >
            <img
              src={lightingImage}
              alt="Architectural LED lighting and a brushed bronze keypad in a modern Glasgow kitchen"
              width={1920}
              height={1080}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:aspect-video"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent"
              aria-hidden
            />
            <div className="absolute bottom-0 p-6 sm:p-8">
              <p className="eyebrow">Smart Lighting</p>
              <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
                Light shaped around the day.
              </h2>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                Lutron, KNX and DALI lighting design with scenes that follow the sun.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Smart home Glasgow banner link */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div className="min-w-0">
              <p className="eyebrow">Smart Home Glasgow</p>
              <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Considering a smart home in Glasgow?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                From a single-room upgrade to a whole-house Control4 system with lighting, heating,
                blinds, cinema and security — read how we approach smart homes across Glasgow and
                Central Scotland.
              </p>
            </div>
            <div className="shrink-0">
              <CtaSecondary to="/smart-home-glasgow">Explore Smart Homes</CtaSecondary>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <AreasServed />
      <CtaBand />

      {/* Bottom contact strip */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-8 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">
            Prefer to talk it through? Call us on{" "}
            <a href={PHONE_TEL} className="font-semibold text-foreground hover:text-primary">
              {PHONE_DISPLAY}
            </a>
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Send us an enquiry <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
