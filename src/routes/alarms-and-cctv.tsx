import { createFileRoute } from "@tanstack/react-router";
import {
  AreasServed,
  CardGrid,
  CtaBand,
  CtaPrimary,
  CtaSecondary,
  PageHero,
  SectionHeading,
} from "@/components/site/Sections";
import { seoHead, serviceJsonLd } from "@/lib/seo";
import securityImage from "@/assets/security-home.jpg";

export const Route = createFileRoute("/alarms-and-cctv")({
  head: () =>
    seoHead({
      title: "Alarms & CCTV Glasgow | Home Security | 1080 Solutions",
      description:
        "CCTV and alarm systems in Glasgow. Discreet cameras, monitored alarms and integrated home security designed and installed by 1080 Solutions.",
      path: "/alarms-and-cctv",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Alarms & CCTV", path: "/alarms-and-cctv" },
      ],
      jsonLd: [
        serviceJsonLd({
          name: "Alarms and CCTV Glasgow",
          description:
            "Discreet CCTV, monitored alarm systems and integrated home security across Glasgow and Central Scotland.",
          path: "/alarms-and-cctv",
        }),
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
        lede="Security as a silent concierge: discreet cameras, alarms that arm themselves as the house settles, and everything viewable from the same app as the rest of your home."
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
                  text: "Meaningful notifications — a person at the gate, a car in the drive — not a alert every time a fox passes.",
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

      <AreasServed intro="CCTV and alarm installation across Glasgow, Whitecraigs, Newton Mearns, Giffnock, Bearsden, Milngavie, Bothwell, East Kilbride, Hamilton, Renfrewshire and Lanarkshire." />
      <CtaBand title="Secure the house properly." />
    </>
  );
}
