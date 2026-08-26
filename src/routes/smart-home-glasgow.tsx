import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AreasServed,
  CardGrid,
  CtaBand,
  CtaPrimary,
  CtaSecondary,
  Faq,
  SectionHeading,
} from "@/components/site/Sections";
import { faqJsonLd, seoHead, serviceJsonLd } from "@/lib/seo";
import heroImage from "@/assets/hero-smart-home.jpg";
import controlImage from "@/assets/control4-panel.jpg";
import lightingImage from "@/assets/smart-lighting.jpg";
import blindsImage from "@/assets/automated-blinds.jpg";
import cinemaImage from "@/assets/whitecraigs-cinema.jpg";

const FAQS = [
  {
    question: "How much does a smart home system cost in Glasgow?",
    answer:
      "It depends on the size of the property and how many systems are integrated. A single-room media or lighting upgrade starts in the low thousands; a complete whole-house Control4 system with lighting, heating, blinds, AV and security for a larger Glasgow home is typically a five-figure investment. After an initial consultation we provide a detailed, itemised proposal so you can see exactly where the budget goes.",
  },
  {
    question: "Can you automate my existing home, or only new builds?",
    answer:
      "Both. Around half of our work is retrofitting existing houses — including sandstone villas and traditional Glasgow tenements — using wireless lighting, careful cable routing and discreet equipment placement. New builds and major renovations allow deeper integration, but an existing home is rarely a barrier.",
  },
  {
    question: "Do I need Control4, or are there other options?",
    answer:
      "Control4 is our primary platform because it reliably unifies lighting, audio, video, heating and security in one interface. For lighting we also work with Lutron, and we use open protocols such as KNX and DALI where a project calls for them. We recommend the platform that suits the house, not the other way round.",
  },
  {
    question: "Can you take over a smart home system installed by another company?",
    answer:
      "Yes. We regularly take over, repair and upgrade Control4, Lutron and multi-room AV systems installed by other integrators. We start with a site survey, document what exists, stabilise the network, and then agree a plan for improvements and ongoing maintenance.",
  },
  {
    question: "What happens if the internet goes down?",
    answer:
      "Properly designed systems keep working locally. Lighting keypads, heating schedules, cinema control and security all continue to operate on the local network without an internet connection. Remote access and cloud features resume automatically when the connection returns.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes. We offer maintenance plans covering remote monitoring, priority callouts, firmware updates and annual system health checks. Many of our Glasgow clients have been with us for over a decade.",
  },
  {
    question: "Which areas around Glasgow do you cover?",
    answer:
      "We cover Glasgow and Central Scotland, including Whitecraigs, Newton Mearns, Giffnock, Clarkston, Bearsden, Milngavie, Bothwell, East Kilbride, Hamilton, Renfrewshire and Lanarkshire. For larger projects we travel further across Scotland.",
  },
];

export const Route = createFileRoute("/smart-home-glasgow")({
  head: () =>
    seoHead({
      title: "Smart Home Glasgow | Control4 Home Automation | 1080 Solutions",
      description:
        "Smart home installation in Glasgow. Control4 home automation, smart lighting, Lutron, heating, blinds, multi-room AV, home cinema, CCTV and Wi-Fi.",
      path: "/smart-home-glasgow",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Smart Home Glasgow", path: "/smart-home-glasgow" },
      ],
      jsonLd: [
        serviceJsonLd({
          name: "Smart Home Installation Glasgow",
          description:
            "Complete smart home design and installation in Glasgow: Control4 automation, Lutron smart lighting, heating and climate control, automated blinds, multi-room AV, home cinema, CCTV, door entry and networking.",
          path: "/smart-home-glasgow",
        }),
        faqJsonLd(FAQS),
      ],
    }),
  component: SmartHomeGlasgowPage,
});

function SmartHomeGlasgowPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={heroImage}
          alt="Smart home living room in Glasgow at dusk with automated lighting and concealed AV"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/65 to-background"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <p className="eyebrow">1080 Solutions · Algo AV</p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Smart Home Glasgow
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Complete smart home design and installation across Glasgow and Central Scotland.
            Lighting, heating, blinds, music, cinema, Wi-Fi and security — engineered into one
            system that simply behaves.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaPrimary to="/contact">Arrange a Consultation</CtaPrimary>
            <CtaSecondary to="/projects">View Projects</CtaSecondary>
          </div>
        </div>
      </section>

      {/* Complete home automation intro */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="Complete Home Automation"
              title="A house that answers before it's asked."
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground lg:pt-12">
              <p>
                A well-designed smart home isn't a collection of apps and gadgets. It's one
                considered system: a keypad by the door that sets the whole ground floor, a bedtime
                scene that locks up, lowers the blinds and arms the alarm, heating that follows the
                weather rather than a timer.
              </p>
              <p>
                We've been designing these systems from Glasgow for over a decade — in sandstone
                villas in Bearsden, new builds in Newton Mearns and Whitecraigs, townhouses in the
                West End and family homes across Renfrewshire and Lanarkshire. Every one is designed
                around how the household actually lives.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <CardGrid
              cols={3}
              items={[
                {
                  title: "One interface, not ten apps",
                  text: "Control4 brings lighting, heating, AV, blinds and security into a single app, touch screen and handset — consistent in every room.",
                },
                {
                  title: "Designed with your architect",
                  text: "We work from first drawings alongside architects, interior designers and contractors, so technology disappears into the fabric of the house.",
                },
                {
                  title: "Engineered to last",
                  text: "Wired infrastructure wherever possible, enterprise-grade networking underneath, and equipment chosen for a decade of service — not a product cycle.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Control4 */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <p className="eyebrow">Control4</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Control4 home automation.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Control4 is the operating system for the house. It orchestrates lighting, audio,
              video, heating, shading and security as one system — controlled from elegant keypads,
              touch screens, the Halo remote or your phone, at home or away. As a{" "}
              <Link to="/control4-glasgow" className="text-primary hover:underline">
                Control4 installer in Glasgow
              </Link>
              , we handle the design, programming and ongoing support ourselves.
            </p>

            <ul className="mt-6 space-y-2.5">
              {[
                "Whole-home scenes for mornings, evenings, entertaining and holidays",
                "One app for every room, with the same interface on wall panels and phones",
                "Integrates with Lutron, KNX, DALI, Sonos, and leading heating and security systems",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden
                  />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CtaSecondary to="/control4-glasgow">Control4 in Glasgow</CtaSecondary>
            </div>
          </div>
          <img
            src={controlImage}
            alt="Control4 wall panel and smart lighting keypad in a dark hallway"
            width={1920}
            height={1080}
            loading="lazy"
            className="aspect-video w-full rounded-lg border border-border object-cover"
          />
        </div>
      </section>

      {/* Smart lighting / Lutron */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <img
            src={lightingImage}
            alt="Lutron smart lighting and architectural LED in a Glasgow kitchen"
            width={1920}
            height={1080}
            loading="lazy"
            className="aspect-video w-full rounded-lg border border-border object-cover lg:order-1"
          />
          <div className="lg:order-2">
            <p className="eyebrow">Smart Lighting · Lutron</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Light shaped around the day.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We design and programme lighting on Lutron, KNX and DALI — soft warmth at breakfast,
              clarity in the kitchen, a low glow along the hallway at midnight. Keypads in bronze,
              brass and stone finishes replace rows of plastic switches.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaSecondary to="/smart-lighting-glasgow">Smart Lighting Glasgow</CtaSecondary>
              <CtaSecondary to="/lutron-glasgow">Lutron Glasgow</CtaSecondary>
            </div>
          </div>
        </div>
      </section>

      {/* Heating & climate + Blinds */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Comfort"
            title="Heating, climate, blinds and curtains."
            lede="Comfort systems that anticipate the light and the weather before you notice either."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold">Heating &amp; climate</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Zone-by-zone control of underfloor heating, radiators and cooling, integrated with
                the same app and keypads as everything else. Rooms hold their own schedules, the
                house reacts to occupancy, and you stop thinking about it.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold">
                Automated blinds &amp; curtains
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Silent motorised blinds and curtain tracks that follow the sun — rooms never
                overheat, finishes never fade, and the house closes itself up at dusk. Wired where
                possible for a lifetime of quiet reliability.
              </p>
            </div>
          </div>
          <img
            src={blindsImage}
            alt="Automated sheer curtains in a Glasgow bedroom at sunrise"
            width={1920}
            height={1080}
            loading="lazy"
            className="mt-5 aspect-[21/9] w-full rounded-lg border border-border object-cover"
          />
        </div>
      </section>

      {/* AV / cinema / security / networking */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="The Whole House"
            title="Entertainment, security and the network beneath it all."
          />
          <div className="mt-10">
            <CardGrid
              cols={2}
              items={[
                {
                  title: "Multi-room audio & video",
                  text: "Music, film and sport in every room — concealed in-wall and in-ceiling loudspeakers, TVs that appear on demand, all fed from one central system.",
                  to: "/multi-room-audio-and-video",
                },
                {
                  title: "Home cinema",
                  text: "Reference-grade Dolby Atmos rooms, acoustically treated and calibrated by hand — from media walls to dedicated theatres.",
                  to: "/home-cinema",
                },
                {
                  title: "CCTV, door entry & security",
                  text: "Discreet CCTV, monitored alarms and managed access for family, staff and deliveries — viewable from the same interface as everything else.",
                  to: "/alarms-and-cctv",
                },
                {
                  title: "Networking & Wi-Fi",
                  text: "Enterprise-grade wired and wireless infrastructure with total coverage — the silent foundation every other system depends on.",
                  to: "/data-networking-and-wifi",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* New builds / renovations / takeovers */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Every Stage of a Project"
            title="New builds, renovations and system takeovers."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold">New builds</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The ideal time to automate. We produce cabling and lighting designs from the
                architect's drawings, first-fix alongside the build, and commission before you move
                in. Nothing visible, nothing retrofitted.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold">Renovations</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A renovation opens the walls — the moment to put proper infrastructure in. We
                regularly work within occupied homes across Glasgow, keeping disruption contained
                and finishes respected.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold">Upgrades &amp; takeovers</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Inherited a system that doesn't work, or been left without support? We take over
                existing Control4, Lutron and AV systems — stabilise, document, then improve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design process */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading eyebrow="How We Work" title="A design process with no surprises." />
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "01",
                "Consultation",
                "A conversation about how you live, at our expense of time — not yours. We listen more than we talk.",
              ],
              [
                "02",
                "Design & proposal",
                "A room-by-room design with an itemised proposal: systems, cabling, equipment and costs, in plain English.",
              ],
              [
                "03",
                "Install & commission",
                "First fix, second fix and commissioning by our own engineers — tidy, programmed and fully documented.",
              ],
              [
                "04",
                "Care for the long term",
                "Remote monitoring, priority support and annual health checks. We stay with the house after handover.",
              ],
            ].map(([step, title, text]) => (
              <li key={step} className="rounded-lg border border-border bg-card p-6">
                <span className="font-display text-sm font-semibold text-primary">{step}</span>
                <h3 className="mt-3 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Glasgow-area projects */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <p className="eyebrow">Glasgow-Area Projects</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Recent work across Glasgow.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our recent projects include a reference 9.4.4 Dolby Atmos cinema in Whitecraigs,
              whole-home Control4 and Lutron installations in Newton Mearns and Giffnock, and
              security and networking upgrades in Bearsden and Bothwell.
            </p>
            <div className="mt-8">
              <CtaPrimary to="/projects/whitecraigs-glasgow">
                View the Whitecraigs Cinema
              </CtaPrimary>
            </div>
          </div>
          <img
            src={cinemaImage}
            alt="Dolby Atmos home cinema installed by 1080 Solutions in Whitecraigs, Glasgow"
            width={1920}
            height={1080}
            loading="lazy"
            className="aspect-video w-full rounded-lg border border-border object-cover"
          />
        </div>
      </section>

      <AreasServed intro="Smart home installation across Glasgow, Whitecraigs, Newton Mearns, Giffnock, Clarkston, Bearsden, Milngavie, Bothwell, East Kilbride, Hamilton, Renfrewshire, Lanarkshire and the wider Central Scotland region." />

      {/* FAQ */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Questions"
            title="Smart home FAQs."
            lede="The questions Glasgow homeowners ask us most often. Anything else — just call."
          />
          <div className="mt-10">
            <Faq items={FAQS} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Talk to us about your smart home."
        lede="Whether it's a single room or a whole-house system, the first step is a consultation — at your home or from your drawings."
      />
    </>
  );
}
