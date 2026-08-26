import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  AreasServed,
  CardGrid,
  CtaBand,
  CtaPrimary,
  CtaSecondary,
  Faq,
  PageHero,
  SectionHeading,
} from "@/components/site/Sections";
import { faqJsonLd, seoHead, serviceJsonLd } from "@/lib/seo";
import controlImage from "@/assets/control4-panel.jpg";
import heroImage from "@/assets/hero-smart-home.jpg";
import lightingImage from "@/assets/smart-lighting.jpg";
import networkImage from "@/assets/network-rack.jpg";
import whitecraigsImage from "@/assets/whitecraigs-cinema.jpg";

const FAQS = [
  {
    question: "What does a Control4 installer in Glasgow actually do?",
    answer:
      "Far more than fitting hardware. The work starts with design — deciding what each room needs, where keypads and screens belong, and what cabling and network the house requires. Then comes first-fix wiring, equipment installation, programming, calibration and a proper handover so the household can use the system without a manual. Control4 is only sold and programmed through professional integrators for exactly this reason: the quality of the design and programming decides how the house feels to live in.",
  },
  {
    question: "Do you cover Control4 across Scotland, or only Glasgow?",
    answer:
      "We are based in Glasgow and most of our projects sit in and around the city — Whitecraigs, Newton Mearns, Giffnock, Clarkston, Bearsden, Milngavie, Bothwell, East Kilbride and Hamilton — with regular work throughout Renfrewshire, Lanarkshire and the rest of Central Scotland. For larger projects we travel further across Scotland.",
  },
  {
    question: "Can you take over and support a Control4 system installed by someone else?",
    answer:
      "Yes, and it's a regular part of our work. We survey the existing installation, document what is actually there, update controllers and firmware, correct programming that no longer matches how the house is used, and stabilise the network underneath. From there we agree either a one-off remedial visit or an ongoing support arrangement.",
  },
  {
    question: "What can Control4 integrate with?",
    answer:
      "Lighting on Lutron, KNX and DALI; multi-room audio and video; home cinema processors and projectors; heating, underfloor zones and cooling; motorised blinds and curtains; CCTV, alarms, door entry, gates and intercoms; and streaming sources such as Apple TV and Sonos. The point of the platform is breadth — bringing established, serviceable systems together rather than replacing them with a single closed ecosystem.",
  },
  {
    question: "We're building a new house — when should Control4 be planned in?",
    answer:
      "As early as possible, ideally while the drawings are still moving. Decisions about cable routes, keypad positions, speaker locations, rack space, ventilation and lighting circuits are far cheaper on paper than on site. We work directly with architects, interior designers and main contractors, issue drawings for the electrician, and commission before you move in.",
  },
  {
    question: "How is Control4 different from a collection of smart-home apps?",
    answer:
      "Individual smart devices each solve one problem and each want their own app, account and update cycle. Control4 sits above them as one interface with consistent behaviour in every room — so a single keypad press can dim the lighting, close the blinds, adjust the heating and start the music. It also runs locally, so the house keeps working during a broadband outage, and it scales as you add rooms or systems.",
  },
  {
    question: "What ongoing support is available after installation?",
    answer:
      "Systems are documented at handover, and we offer support arrangements covering remote monitoring, firmware and programming updates, priority callouts and scheduled health checks. Most issues in a monitored system are resolved remotely, often before the household notices anything.",
  },
];

export const Route = createFileRoute("/control4-glasgow")({
  head: () =>
    seoHead({
      title: "Control4 Installer Glasgow & Scotland | 1080 Solutions",
      description:
        "Control4 installer serving Glasgow and Central Scotland. Design, programming and support for whole-home automation, lighting, AV, cinema and security.",
      path: "/control4-glasgow",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Control4 Glasgow", path: "/control4-glasgow" },
      ],
      jsonLd: [
        serviceJsonLd({
          name: "Control4 Installation Glasgow & Scotland",
          description:
            "Control4 smart home design, installation, programming, system takeover and ongoing support across Glasgow, Central Scotland and the wider country — covering lighting, multi-room AV, home cinema, heating, shading, security and networking.",
          path: "/control4-glasgow",
        }),
        faqJsonLd(FAQS),
      ],
    }),
  component: Control4Page,
});

function Control4Page() {
  return (
    <>
      <PageHero
        eyebrow="Control4 · Glasgow & Central Scotland"
        title="Control4 Installer Glasgow & Scotland"
        lede="1080 Solutions designs, installs, programmes and supports Control4 smart home systems — one considered interface for lighting, audio, video, cinema, heating, shading and security."
        image={heroImage}
        imageAlt="Control4 smart home living room in Glasgow at dusk"
      >
        <CtaPrimary to="/contact">Arrange a Consultation</CtaPrimary>
        <CtaSecondary to="/projects/whitecraigs-glasgow">See a Recent Project</CtaSecondary>
      </PageHero>

      {/* Intro */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="Professional Integration"
              title="Control4 is only as good as the people who design it."
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground lg:pt-12">
              <p>
                Control4 is not a product you unbox. It is a control platform that has to be
                designed around a specific house — the way its rooms connect, how the family moves
                through them, what the electrician needs to know before the walls close. That design
                work, the cabling and network beneath it, and the programming afterwards are what
                separate a system people love from one they tolerate.
              </p>
              <p>
                We work from Glasgow across Central Scotland, on everything from a single media room
                to a whole-house system covering lighting, heating, shading, entertainment and
                security. Our approach is deliberately unglamorous: survey properly, wire properly,
                programme carefully, document everything, then stay with the house afterwards. Read
                more about our wider{" "}
                <Link to="/smart-home-glasgow" className="text-primary hover:underline">
                  smart home work in Glasgow
                </Link>{" "}
                or how we approach{" "}
                <Link to="/home-automation-glasgow" className="text-primary hover:underline">
                  whole-house automation
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="mt-12">
            <CardGrid
              cols={3}
              items={[
                {
                  title: "Design before hardware",
                  text: "Room-by-room design, keypad and screen placement, cable schedules and rack layouts — issued as drawings your electrician and contractor can build from.",
                },
                {
                  title: "Programming that fits the house",
                  text: "Scenes, keypad engraving and interface layouts written around how your household actually lives, then refined after you've lived with it for a few weeks.",
                },
                {
                  title: "Support for the long term",
                  text: "Documented systems, remote monitoring, firmware and programming updates, and scheduled health checks — so the system stays as reliable in year eight as in week one.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Whole-home automation */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <p className="eyebrow">Whole-Home Control4</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              One interface for the entire house.
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Control4 unifies lighting, audio, video, heating, shading and security into a single
                system with the same behaviour everywhere — on wall keypads, in-wall and tabletop
                touch screens, the Halo remote and your phone. Anyone in the household can use it
                without being taught.
              </p>
              <p>
                Because control is processed locally in the house, lighting, heating, cinema and
                security keep working during a broadband outage; remote access simply resumes when
                the connection returns. And because the platform is modular, a system that starts
                with lighting and music can grow into cinema, blinds and CCTV later without being
                rebuilt.
              </p>
            </div>
            <ul className="mt-6 space-y-2.5">
              {[
                "Scenes for mornings, evenings, entertaining, away and holiday modes",
                "Consistent interface across keypads, screens, remotes and phones",
                "Local processing with secure remote access when you're away",
                "Scales room by room as the house and household change",
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
          </div>
          <img
            src={controlImage}
            alt="Control4 touch panel and lighting keypad in a Glasgow hallway"
            width={1920}
            height={1080}
            loading="lazy"
            className="aspect-video w-full rounded-lg border border-border object-cover"
          />
        </div>
      </section>

      {/* Lighting & Lutron */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <img
            src={lightingImage}
            alt="Architectural lighting and a brushed keypad in a Glasgow kitchen"
            width={1920}
            height={1080}
            loading="lazy"
            className="aspect-video w-full rounded-lg border border-border object-cover lg:order-1"
          />
          <div className="lg:order-2">
            <p className="eyebrow">Lighting</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Smart lighting and Lutron integration.
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Lighting is where most households feel automation first. We design lighting on
                Lutron, KNX and DALI and bring it into Control4, so a single keypad by the door can
                set an entire floor — and so the switch plates match the joinery rather than
                fighting it.
              </p>
              <p>
                Circuits are planned with the lighting designer or architect, dimming is matched to
                the fittings to avoid flicker and buzz, and scenes are tuned on site at night rather
                than guessed from a laptop.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaSecondary to="/smart-lighting-glasgow">Smart Lighting Glasgow</CtaSecondary>
              <CtaSecondary to="/lutron-glasgow">Lutron Integration</CtaSecondary>
            </div>
          </div>
        </div>
      </section>

      {/* Entertainment: AV + cinema */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Entertainment"
            title="Music, film and sport, wherever you are in the house."
            lede="Control4 was built around entertainment, and it still does it better than anything else we work with."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold">Multi-room audio &amp; video</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Concealed in-wall and in-ceiling loudspeakers, centralised amplification and video
                distribution from a single rack, with sources shared between rooms. Music follows
                the household from kitchen to garden; a film started in the snug can be finished
                upstairs.
              </p>
              <Link
                to="/multi-room-audio-and-video"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                Multi-room AV <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold">Home cinema</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                In a dedicated cinema, Control4 becomes the single button that dims the lighting,
                closes the blinds, wakes the projector, selects the source and sets masking and
                volume. Media walls and snugs benefit from exactly the same discipline on a smaller
                scale.
              </p>
              <Link
                to="/home-cinema"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                Home cinema design <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project proof block */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <p className="eyebrow">Project · Whitecraigs, Glasgow</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Control4 in a reference cinema room.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              In a private residence in Whitecraigs we built a 9.4.4 Dolby Atmos cinema around
              M&amp;K loudspeakers, StormAudio ISR Fusion 20 processing and a JVC DLA-NZ8 projecting
              onto a 192-inch screen. Control4 with a Halo remote runs the room — projector,
              processing, sources, masking and the tunable-white architectural lighting — from a
              single press.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              It's a useful illustration of what Control4 integration means in practice: not a new
              app, but one control layer over serious engineering.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaPrimary to="/projects/whitecraigs-glasgow">Read the Case Study</CtaPrimary>
              <CtaSecondary to="/projects">All Projects</CtaSecondary>
            </div>
          </div>
          <Link
            to="/projects/whitecraigs-glasgow"
            className="group relative block overflow-hidden rounded-lg border border-border"
            aria-label="Read the Whitecraigs, Glasgow home cinema case study"
          >
            <img
              src={whitecraigsImage}
              alt="Dolby Atmos home cinema in Whitecraigs, Glasgow controlled by Control4"
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

      {/* Comfort, security, shading */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Comfort & Security"
            title="Heating, shading and everything that keeps the house safe."
          />
          <div className="mt-10">
            <CardGrid
              cols={3}
              items={[
                {
                  title: "Heating & climate",
                  text: "Underfloor zones, radiators and cooling brought into the same interface and the same scenes — schedules per room, adjusted by occupancy and weather rather than guesswork.",
                },
                {
                  title: "Motorised blinds & curtains",
                  text: "Silent shading that manages glare, heat and privacy on its own, wired where the build allows it. Rooms stay comfortable and the house closes itself at dusk.",
                },
                {
                  title: "CCTV, alarms & door entry",
                  text: "Cameras, alarm status, door entry and gates appear alongside lighting and AV, with alerts that reach you wherever you are.",
                  to: "/alarms-and-cctv",
                },
                {
                  title: "Access control",
                  text: "Managed access for family, cleaners, trades and deliveries — including remote release and a record of who came and went.",
                  to: "/door-entry-and-access",
                },
                {
                  title: "Networking & Wi-Fi",
                  text: "Every Control4 system rests on the network. We build structured, enterprise-grade wired and wireless infrastructure with full coverage and headroom to spare.",
                  to: "/data-networking-and-wifi",
                },
                {
                  title: "Voice, where it helps",
                  text: "Voice assistants can sit alongside Control4 for hands-free moments without ever becoming the only way to operate the house.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Networking split */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <p className="eyebrow">Foundations</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Wiring and networking come first.
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Most unreliable smart homes are not a control problem — they are a network and
                cabling problem. We design structured cabling, rack layouts, ventilation and power,
                then build a managed network with proper access point placement and separate
                networks for AV, control and guests.
              </p>
              <p>
                Everything is labelled, tested and documented, so the next engineer in the cupboard
                — us or anyone else — can see how the house works in minutes.
              </p>
            </div>
            <div className="mt-8">
              <CtaSecondary to="/data-networking-and-wifi">Networking &amp; Wi-Fi</CtaSecondary>
            </div>
          </div>
          <img
            src={networkImage}
            alt="Structured network and AV rack installed in a Glasgow home"
            width={1920}
            height={1080}
            loading="lazy"
            className="aspect-video w-full rounded-lg border border-border object-cover"
          />
        </div>
      </section>

      {/* New builds, renovations, takeovers */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Every Stage"
            title="New builds, renovations and existing systems."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold">New builds</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We join at drawing stage, produce cabling and lighting documentation for the
                electrician, first-fix alongside the trades and commission before handover. Planning
                Control4 early costs a fraction of adding it late.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold">Renovations &amp; retrofit</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Open walls are an opportunity; occupied houses are a routine. We combine wired
                infrastructure where access allows with wireless lighting and networking where it
                doesn't — including Glasgow's sandstone villas and traditional homes.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold">Upgrades &amp; takeovers</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Inherited a system nobody supports? We survey and document it, update controllers,
                firmware and programming, stabilise the network, and put a clear support arrangement
                in place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architects & designers */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="Architects & Interior Designers"
              title="A technology partner who reads drawings."
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground lg:pt-12">
              <p>
                We work directly with architects, interior designers, lighting designers and main
                contractors across Glasgow and Central Scotland. That means coordinated cable and
                containment schedules, keypad and screen positions marked on plan, finishes chosen
                to match ironmongery and joinery, and speaker and camera locations agreed before
                ceilings are set out.
              </p>
              <p>
                Our aim on a design team is to be quiet and predictable: information when it's
                needed, no late surprises for the electrician, and no visible technology the design
                didn't ask for. See how we work with{" "}
                <Link to="/smart-home-for-architects" className="text-primary hover:underline">
                  architects
                </Link>{" "}
                and{" "}
                <Link
                  to="/smart-home-for-interior-designers"
                  className="text-primary hover:underline"
                >
                  interior designers
                </Link>
                , or{" "}
                <Link to="/contact" className="text-primary hover:underline">
                  get in touch about a live project
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading eyebrow="Questions" title="Control4 FAQs." />
          <div className="mt-10">
            <Faq items={FAQS} />
          </div>
        </div>
      </section>

      <AreasServed intro="Control4 design, installation, programming and support across Glasgow, Whitecraigs, Newton Mearns, Giffnock, Clarkston, Bearsden, Milngavie, Bothwell, East Kilbride, Hamilton, Renfrewshire, Lanarkshire and Central Scotland." />
      <CtaBand
        title="Talk to a Control4 specialist in Glasgow."
        lede="Tell us about the house — new build, renovation, or an existing Control4 system that needs a safe pair of hands. We'll tell you honestly what's worth doing."
      />
    </>
  );
}
