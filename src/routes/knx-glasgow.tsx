import { createFileRoute, Link } from "@tanstack/react-router";
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
import lightingImage from "@/assets/smart-lighting.jpg";
import heroImage from "@/assets/hero-smart-home.jpg";

const FAQS = [
  {
    question: "What is KNX and when is it the right choice?",
    answer:
      "KNX is an open international standard for building control. It is particularly well suited to new builds, major renovations and larger homes where lighting, heating, blinds, ventilation and other services need dependable wired control without tying the property to one manufacturer.",
  },
  {
    question: "Do you design and install KNX systems in Glasgow?",
    answer:
      "Yes. We design the control architecture, prepare cable and panel schedules, coordinate with the electrical contractor, specify compatible KNX devices, commission the installation in ETS and document the finished system for future support.",
  },
  {
    question: "Can KNX work with Control4?",
    answer:
      "Yes. KNX can provide the dependable building-control layer while Control4 supplies a consistent interface for lighting, climate, blinds, audio, video and security. We design the integration so essential functions continue to work locally even if the internet is unavailable.",
  },
  {
    question: "Can KNX control DALI lighting?",
    answer:
      "Yes. A KNX-to-DALI gateway can bring individually addressable DALI fittings and groups into the KNX system. This is useful for larger lighting schemes, tunable-white fittings and projects that require detailed scene control and feedback.",
  },
  {
    question: "Can you take over or repair an existing KNX installation?",
    answer:
      "We can survey an existing system, inspect its panels and network, recover or rebuild ETS documentation where practical, diagnose failed devices and plan upgrades. Access to the original ETS project file makes a takeover faster, but we will explain the available options after the survey.",
  },
  {
    question: "When should KNX be planned into a project?",
    answer:
      "Ideally before electrical first fix. Early design lets us agree circuiting, cable routes, panel space, sensors, keypad locations and integration points with the architect, electrical contractor and mechanical team before the walls close.",
  },
];

export const Route = createFileRoute("/knx-glasgow")({
  head: () =>
    seoHead({
      title: "KNX Installer Glasgow | Design & Integration | 1080 Solutions",
      description:
        "KNX installer in Glasgow for lighting, heating, blinds and building automation. Design, ETS commissioning, Control4 integration and ongoing support.",
      path: "/knx-glasgow",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "KNX Glasgow", path: "/knx-glasgow" },
      ],
      jsonLd: [
        serviceJsonLd({
          name: "KNX Installation Glasgow",
          description:
            "KNX building automation design, installation, ETS commissioning, Control4 integration and support across Glasgow and Central Scotland.",
          path: "/knx-glasgow",
        }),
        faqJsonLd(FAQS),
      ],
    }),
  component: KnxGlasgowPage,
});

function KnxGlasgowPage() {
  return (
    <>
      <PageHero
        eyebrow="KNX · Glasgow & Central Scotland"
        title="KNX installer in Glasgow."
        lede="Open-standard building control for lighting, heating, blinds and climate — designed, commissioned in ETS and integrated by 1080 Solutions."
        image={lightingImage}
        imageAlt="KNX-controlled architectural lighting in a Glasgow home"
      >
        <CtaPrimary to="/contact">Discuss a KNX Project</CtaPrimary>
        <CtaSecondary to="/smart-lighting-glasgow">Smart Lighting Glasgow</CtaSecondary>
      </PageHero>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="Open Building Control"
              title="One engineered backbone, without a closed ecosystem."
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground lg:pt-12">
              <p>
                KNX is a manufacturer-independent standard used to connect lighting, heating,
                cooling, blinds, sensors and other building services. The intelligence is
                distributed across the installation, so essential functions keep working locally and
                the system can evolve without depending on a single product range.
              </p>
              <p>
                As a KNX installer serving Glasgow and Central Scotland, we turn the architectural,
                electrical and mechanical requirements into one coordinated design. That includes
                panel architecture, cable schedules, device specification, ETS programming, testing,
                handover documentation and long-term support.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <CardGrid
              cols={3}
              items={[
                {
                  title: "Design & coordination",
                  text: "Circuit schedules, panel layouts, keypad and sensor locations, network topology and clear information for the electrical and mechanical teams.",
                },
                {
                  title: "ETS commissioning",
                  text: "Individual addressing, group-address structure, scene logic, testing and a documented ETS project prepared for future maintenance.",
                },
                {
                  title: "Integration & support",
                  text: "KNX connected with Control4, DALI, heating, shading and security, followed by system handover and ongoing engineering support.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <SectionHeading
              eyebrow="KNX + Control4 + DALI"
              title="The building layer and the user experience, working together."
            />
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                KNX provides a robust control layer for the building. DALI can manage individual
                light fittings and tunable-white groups. Control4 can then bring those systems into
                the same interface as music, television, cinema, security and door entry.
              </p>
              <p>
                We define which platform owns each function, keep essential controls local and
                document the integration points. The result is easier to use and easier to support
                than a collection of overlapping systems.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaSecondary to="/control4-glasgow">Control4 Glasgow</CtaSecondary>
              <CtaSecondary to="/smart-home-glasgow">Smart Home Glasgow</CtaSecondary>
            </div>
          </div>
          <img
            src={heroImage}
            alt="Integrated KNX and Control4 smart home system in Glasgow"
            width={1920}
            height={1080}
            loading="lazy"
            className="aspect-video w-full rounded-lg border border-border object-cover"
          />
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="Project Delivery"
              title="Plan KNX before the electrical first fix."
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground lg:pt-12">
              <p>
                The best KNX projects start while the drawings are still changing. We work with
                homeowners, architects, interior designers, electrical contractors and mechanical
                teams to resolve circuiting, plant interfaces, panel space and keypad positions
                before work begins on site.
              </p>
              <p>
                For existing installations, we begin with a technical survey. We inspect the bus,
                panels, IP interfaces and available ETS records, then provide a clear plan for
                repair, takeover or staged modernisation. You can also read about our wider{" "}
                <Link to="/smart-lighting-glasgow" className="text-primary hover:underline">
                  smart lighting work in Glasgow
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading eyebrow="Questions" title="KNX FAQs." />
          <div className="mt-10">
            <Faq items={FAQS} />
          </div>
        </div>
      </section>

      <AreasServed intro="KNX design, ETS commissioning, integration and support across Glasgow, Bearsden, Milngavie, Whitecraigs, Newton Mearns, Giffnock, Bothwell and Central Scotland." />
      <CtaBand
        title="Plan your KNX system properly."
        lede="Bring us in before first fix for coordinated drawings, clear responsibilities and a system designed for long-term support."
      />
    </>
  );
}
