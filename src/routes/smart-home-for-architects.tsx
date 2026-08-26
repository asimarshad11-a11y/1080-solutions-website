import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AreasServed,
  CardGrid,
  CtaBand,
  CtaPrimary,
  CtaSecondary,
  Faq,
  FeatureSplit,
  PageHero,
  SectionHeading,
} from "@/components/site/Sections";
import { faqJsonLd, seoHead, serviceJsonLd } from "@/lib/seo";
import networkImage from "@/assets/network-rack.jpg";
import lightingImage from "@/assets/smart-lighting.jpg";
import cinemaImage from "@/assets/whitecraigs-cinema.jpg";

const FAQS = [
  {
    question: "At what stage should we bring you into a project?",
    answer:
      "Ideally at concept or early technical design, while plans are still moving. Riser positions, rack location and ventilation, containment routes, keypad and screen positions, ceiling speaker set-out and lighting circuit design are all inexpensive decisions on paper and expensive ones on site.",
  },
  {
    question: "What information will you issue for the electrician?",
    answer:
      "Layouts marked with device and outlet positions, a containment and cable schedule, a lighting circuit schedule with load and dimming requirements, rack elevations with power and heat load, and a first-fix checklist. We attend site at first fix to confirm set-out before plaster.",
  },
  {
    question: "Do you take responsibility for the lighting design itself?",
    answer:
      "We work to the lighting designer's scheme where there is one, advising on control, dimming compatibility, driver locations and scene structure. Where there isn't, we can advise on layout and circuiting so the control layer has a coherent scheme to work with.",
  },
  {
    question: "Can you work with KNX or DALI rather than a proprietary system?",
    answer:
      "Yes. We specify Lutron, KNX or DALI depending on the scale of the scheme, the electrical design and the client's expectations, and integrate whichever is chosen into the wider automation platform so the client still has one interface.",
  },
  {
    question: "How do you coordinate with the main contractor?",
    answer:
      "With a defined programme position: builder's work and containment agreed before first fix, our first-fix visit scheduled into the build sequence, second fix after decoration, then rack build, programming and commissioning. We aim to be predictable — information when it's needed and no late variations forced on the electrician.",
  },
];

export const Route = createFileRoute("/smart-home-for-architects")({
  head: () =>
    seoHead({
      title: "Smart Home Systems for Architects | Glasgow | 1080 Solutions",
      description:
        "Smart home and AV coordination for Glasgow architects: Control4, Lutron, lighting, containment, service drawings, first fix and commissioning.",
      path: "/smart-home-for-architects",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Smart Home for Architects", path: "/smart-home-for-architects" },
      ],
      jsonLd: [
        serviceJsonLd({
          name: "Smart Home Technology Consultancy for Architects",
          description:
            "Early-stage smart home and AV coordination for architects across Glasgow and Central Scotland: services drawings, containment schedules, lighting control specification, first-fix and commissioning.",
          path: "/smart-home-for-architects",
        }),
        faqJsonLd(FAQS),
      ],
    }),
  component: ArchitectsPage,
});

function ArchitectsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Architects · Glasgow & Scotland"
        title="Smart home coordination for architects."
        lede="A technology partner who reads drawings, issues schedules the electrician can build to, and keeps visible kit out of your elevations. Working with practices across Glasgow and Central Scotland."
        image={networkImage}
        imageAlt="Structured cabling and equipment rack in a Glasgow new build"
      >
        <CtaPrimary to="/contact">Discuss a live project</CtaPrimary>
        <CtaSecondary to="/projects/whitecraigs-glasgow">See a completed project</CtaSecondary>
      </PageHero>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="Early Engagement"
              title="Decisions worth making before plaster."
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground lg:pt-12">
              <p>
                Most technology compromises on a house are not budget failures — they are sequencing
                failures. A rack in a cupboard with no ventilation, a keypad position that lands on
                a returned wall, ceiling speakers fighting downlights, a media wall with no route
                for power: each is trivial at technical design and awkward once the ceiling is
                closed.
              </p>
              <p>
                We prefer to be involved from concept or early technical design. That usually takes
                one meeting and a marked-up set of plans, and it removes the late variations that
                otherwise arrive on the electrician's desk during first fix.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <CardGrid
              cols={3}
              items={[
                {
                  title: "Riser, rack and plant",
                  text: "Rack location, footprint, power, heat load and ventilation agreed early, with riser and containment routes coordinated against structure and services.",
                },
                {
                  title: "Set-out on plan",
                  text: "Keypads, touch screens, speakers, cameras, door stations and outlets marked on your layouts so the design team sees them before they exist.",
                },
                {
                  title: "Fabric-aware cabling",
                  text: "Cable routes planned around insulation lines, acoustic separation, fire compartmentation and airtightness rather than cut through them afterwards.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <FeatureSplit
        eyebrow="Lighting Control"
        title="Control that suits the scheme, not the other way round."
        image={lightingImage}
        imageAlt="Architectural lighting and a brushed keypad in a Glasgow home"
        bullets={[
          "Lutron for the smoothest dimming and the widest keypad finish range",
          "KNX or DALI where the electrical design or scale calls for an open standard",
          "Circuit and load schedules issued for the electrical package",
          "Tunable-white and circadian control where the interior calls for it",
          "Keypad plates and engraving coordinated with ironmongery and joinery",
        ]}
      >
        <p>
          Lighting is where architecture and technology meet most visibly. We work to the lighting
          designer's scheme, advising on circuiting, dimming compatibility, driver locations and
          scene structure, then specify the control layer around it — see{" "}
          <Link to="/smart-lighting-glasgow" className="text-primary hover:underline">
            smart lighting
          </Link>{" "}
          and{" "}
          <Link to="/lutron-glasgow" className="text-primary hover:underline">
            Lutron lighting control
          </Link>
          .
        </p>
        <p>
          The aim is fewer plates on the wall, warm and flicker-free dimming at the bottom of the
          curve, and no visible driver boxes in finished spaces.
        </p>
      </FeatureSplit>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Scope We Coordinate"
            title="One package instead of six subcontractors."
            lede="Pulling the technology disciplines into a single coordinated package reduces the number of interfaces the design team has to manage."
          />
          <div className="mt-10">
            <CardGrid
              cols={3}
              items={[
                {
                  title: "Automation platform",
                  text: "Control4 as the integration layer so lighting, AV, climate, shading and security share one interface and one support relationship.",
                  to: "/control4-glasgow",
                },
                {
                  title: "Audio and video",
                  text: "Multi-room audio with plaster-in or trimless speakers, concealed televisions, media walls and centralised sources.",
                  to: "/multi-room-audio-and-video",
                },
                {
                  title: "Home cinema",
                  text: "Room geometry, acoustic treatment, sightlines, seating tiers, projection throw and masking resolved alongside the architecture.",
                  to: "/home-cinema",
                },
                {
                  title: "Networking and Wi-Fi",
                  text: "Structured cabling, business-grade switching, access point positions surveyed against construction and outbuildings cabled properly.",
                  to: "/data-networking-and-wifi",
                },
                {
                  title: "HVAC and climate",
                  text: "Underfloor heating, zoning, ventilation and cooling brought into the same schedules and interface as the rest of the house.",
                },
                {
                  title: "Security and access",
                  text: "Alarm, CCTV, door entry, gates and access control designed into the architecture rather than surface-mounted onto it.",
                  to: "/alarms-and-cctv",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading eyebrow="Documentation" title="Drawings and schedules you can issue." />
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                We issue information in a form the design team and the electrical subcontractor can
                actually build from: device and outlet layouts on your plans, a containment and
                cable schedule, lighting circuit and load schedules, rack elevations with power and
                thermal figures, and speaker and camera set-out dimensioned against ceiling grids.
              </p>
              <p>
                Where a project runs on a shared model or drawing register, we work to it and keep
                revisions traceable, so the technology package doesn't drift from the architectural
                set.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold">Typical deliverables</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                {[
                  "Marked-up device and containment layouts",
                  "Cable and containment schedule",
                  "Lighting circuit, load and dimming schedule",
                  "Rack elevation with power and heat load",
                  "AV and speaker set-out dimensions",
                  "First-fix checklist and site attendance",
                  "Commissioning and handover documentation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="On Site"
            title="First fix, second fix, commissioning."
            lede="A defined position in the build programme, so the technology package never becomes the reason a ceiling waits."
          />
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Design",
                text: "Survey, brief with the client, room-by-room proposal, and schedules issued to the design team.",
              },
              {
                step: "02",
                title: "First fix",
                text: "Containment and cabling installed or supervised alongside the electrician, set-out confirmed before plaster.",
              },
              {
                step: "03",
                title: "Second fix",
                text: "Keypads, screens, speakers, cameras and door stations fitted after decoration, finishes as specified.",
              },
              {
                step: "04",
                title: "Commissioning",
                text: "Rack build, programming, calibration, client handover and documented aftercare.",
              },
            ].map((s) => (
              <li key={s.step} className="rounded-lg border border-border bg-background p-6">
                <span className="font-display text-sm font-bold tracking-widest text-primary">
                  {s.step}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FeatureSplit
        eyebrow="Project Proof"
        title="Whitecraigs, Glasgow."
        image={cinemaImage}
        imageAlt="Dedicated home cinema in Whitecraigs, Glasgow, with tiered seating and a 192-inch screen"
        reverse
      >
        <p>
          A dedicated cinema built into a Glasgow-area home, with in-wall loudspeakers, projection,
          masking and tunable-white architectural lighting coordinated with the room's construction
          rather than added afterwards, and{" "}
          <Link to="/control4-glasgow" className="text-primary hover:underline">
            Control4 integration
          </Link>{" "}
          tying it into the wider house.
        </p>
        <p>
          <Link to="/projects/whitecraigs-glasgow" className="text-primary hover:underline">
            Read the Whitecraigs case study
          </Link>{" "}
          for the full technical specification, or browse{" "}
          <Link to="/projects" className="text-primary hover:underline">
            other projects
          </Link>
          .
        </p>
      </FeatureSplit>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading eyebrow="Questions" title="Working with us." />
          <div className="mt-10">
            <Faq items={FAQS} />
          </div>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Working on interiors rather than the shell? See{" "}
            <Link to="/smart-home-for-interior-designers" className="text-primary hover:underline">
              smart home for interior designers
            </Link>
            .
          </p>
        </div>
      </section>

      <AreasServed intro="We work with practices and design teams across Glasgow, Whitecraigs, Newton Mearns, Giffnock, Clarkston, Bearsden, Milngavie, Bothwell, East Kilbride, Hamilton, Renfrewshire, Lanarkshire and wider Central Scotland." />
      <CtaBand
        title="Send us the drawings."
        lede="Share a plan set and we'll come back with the technology implications and the schedules your electrical package needs."
      />
    </>
  );
}
