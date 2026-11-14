import { createFileRoute } from "@tanstack/react-router";
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
import securityImage from "@/assets/security-home.jpg";

const FAQS = [
  {
    question: "Do you install CCTV and alarms for homes and businesses in Glasgow?",
    answer:
      "Yes. 1080 Solutions supplies and installs CCTV and intruder alarms for residential and commercial properties across Glasgow and Central Scotland. We assess coverage, cable routes, recording requirements and how you want to use the system before preparing a quotation.",
  },
  {
    question: "Can you upgrade an existing CCTV system?",
    answer:
      "We assess the existing cameras, recorder, cabling and network before recommending what to retain or replace. Compatibility and cable condition determine whether an upgrade can reuse existing equipment.",
  },
  {
    question: "Can I view my cameras remotely and receive alerts?",
    answer:
      "Remote viewing and event notifications can be configured on suitable systems. Features depend on the selected cameras, recorder, app and internet connection. We agree the required functions in the specification and explain their use at handover.",
  },
  {
    question: "Can security work with Control4 and smart lighting?",
    answer:
      "Compatible security equipment can be integrated with Control4 and lighting scenes. We check the exact models, available drivers and supported functions before promising an integration; not every alarm or camera exposes the same controls.",
  },
];

export const Route = createFileRoute("/alarms-and-cctv")({
  head: () =>
    seoHead({
      title: "Alarms & CCTV Glasgow | Home Security | 1080 Solutions",
      description:
        "CCTV and intruder alarm installation in Glasgow for homes and businesses. System upgrades, remote viewing and security integration from 1080 Solutions.",
      path: "/alarms-and-cctv",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Alarms & CCTV", path: "/alarms-and-cctv" },
      ],
      jsonLd: [
        serviceJsonLd({
          name: "Alarms and CCTV Glasgow",
          description:
            "CCTV and intruder alarm design, installation and upgrades for homes and businesses across Glasgow and Central Scotland.",
          path: "/alarms-and-cctv",
        }),
        faqJsonLd(FAQS),
      ],
    }),
  component: AlarmsCctvPage,
});

function AlarmsCctvPage() {
  return (
    <>
      <PageHero
        eyebrow="Security · Glasgow"
        title="Alarms and CCTV in Glasgow."
        lede="1080 Solutions designs, installs and upgrades CCTV and intruder alarms for homes and businesses across Glasgow and Central Scotland, with remote viewing and integration specified around your property."
        image={securityImage}
        imageAlt="Discreet CCTV camera on a sandstone villa near Glasgow at dusk"
      >
        <CtaPrimary to="/contact">Arrange a Consultation</CtaPrimary>
        <CtaSecondary to="/door-entry-and-access">Door Entry &amp; Access</CtaSecondary>
      </PageHero>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="Quietly Watchful"
              title="CCTV that watches without watching over you."
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground lg:pt-12">
              <p>
                We design security into the architecture rather than onto it: cameras tucked under
                eaves and into soffits, detectors that disappear into ceilings, recording held
                privately on site — not in someone else's cloud.
              </p>
              <p>
                Because we also automate the rest of the house, security becomes part of how the
                home behaves: the alarm arms when the last door closes at night, lights and blinds
                simulate occupancy when you're away, and the gate, cameras and lighting respond
                together when someone approaches.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <CardGrid
              cols={3}
              items={[
                {
                  title: "Discreet CCTV",
                  text: "High-resolution cameras positioned with the architecture in mind, with encrypted recording stored privately on site.",
                },
                {
                  title: "Monitored alarms",
                  text: "Intruder alarms with optional monitoring, perimeter detection and part-set modes for night-time.",
                },
                {
                  title: "Smart alerts",
                  text: "Meaningful notifications — a person at the gate, a car in the drive — not an alert every time a fox passes.",
                },
                {
                  title: "Occupancy simulation",
                  text: "Lights, blinds and audio follow realistic patterns when the house is empty.",
                },
                {
                  title: "One app",
                  text: "Cameras, alarm state and door entry appear inside the same Control4 interface as lighting and AV.",
                  to: "/control4-glasgow",
                },
                {
                  title: "Door entry & access",
                  text: "Video intercoms, gates and managed access for family, staff and deliveries.",
                  to: "/door-entry-and-access",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Takeovers Welcome"
            title="Unhappy with an existing system?"
            lede="We take over and upgrade CCTV and alarm systems across Glasgow — replacing unreliable recorders, re-siting poor cameras and integrating everything properly with the rest of the house."
          />
          <div className="mt-8">
            <CtaSecondary to="/contact">Book a Security Survey</CtaSecondary>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Published Project"
            title="Commercial CCTV across four Scottish stores."
          />
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Hikvision’s European success stories publication features 1080 Solutions’ CCTV upgrade
              for four fast-food stores in Glasgow, Motherwell and Stenhousemuir. The project
              replaced ageing analogue surveillance with IP cameras and central viewing.
            </p>
            <p>
              This is a documented example of our commercial installation work, alongside our
              residential security services.
            </p>
            <a
              href="https://www.hikvision.com/content/dam/hikvision/eu/support/brochures/success-stories/Europe-Success-Stories---March.-2021.pdf"
              className="inline-block font-medium text-primary underline underline-offset-4"
            >
              Read Hikvision’s European success stories (PDF, March 2021)
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading eyebrow="Questions" title="CCTV and alarm installation FAQs." />
          <div className="mt-10">
            <Faq items={FAQS} />
          </div>
        </div>
      </section>

      <AreasServed intro="CCTV and alarm installation across Glasgow, Whitecraigs, Newton Mearns, Giffnock, Bearsden, Milngavie, Bothwell, East Kilbride, Hamilton, Renfrewshire and Lanarkshire." />
      <CtaBand title="Secure the house properly." />
    </>
  );
}
