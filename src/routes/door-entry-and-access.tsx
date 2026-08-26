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

export const Route = createFileRoute("/door-entry-and-access")({
  head: () =>
    seoHead({
      title: "Door Entry & Access Control Glasgow | 1080 Solutions",
      description:
        "Door entry and access control in Glasgow. Video intercoms, gates, keyless entry and managed access for family and staff — by 1080 Solutions.",
      path: "/door-entry-and-access",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Door Entry & Access", path: "/door-entry-and-access" },
      ],
      jsonLd: [
        serviceJsonLd({
          name: "Door Entry and Access Control Glasgow",
          description:
            "Video intercoms, gate automation, keyless and biometric access control for homes across Glasgow and Central Scotland.",
          path: "/door-entry-and-access",
        }),
      ],
    }),
  component: DoorEntryPage,
});

function DoorEntryPage() {
  return (
    <>
      <PageHero
        eyebrow="Access Control · Glasgow"
        title="Door entry and access control in Glasgow."
        lede="See who's at the gate from anywhere, let in the delivery while you're out, and give family, staff and trades exactly the access they need — nothing more."
        image={securityImage}
        imageAlt="Sandstone home near Glasgow with integrated door entry and security lighting"
      >
        <CtaPrimary to="/contact">Arrange a Consultation</CtaPrimary>
        <CtaSecondary to="/alarms-and-cctv">Alarms &amp; CCTV</CtaSecondary>
      </PageHero>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading eyebrow="Managed Access" title="The front door, from anywhere." />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground lg:pt-12">
              <p>
                Modern door entry is about more than a buzzer. Video intercoms ring your phone
                wherever you are; gates open as your car approaches; the cleaner's code works on
                Tuesdays only; and every entry is logged.
              </p>
              <p>
                Because access control sits inside the same Control4 system as lighting, alarms and
                CCTV, the house responds as a whole: answer the gate from the kitchen touch screen,
                and the drive lights come on as it opens.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <CardGrid
              cols={3}
              items={[
                {
                  title: "Video intercoms",
                  text: "Architectural door stations that ring in-home touch screens and your phone — see and speak to visitors from anywhere.",
                },
                {
                  title: "Gate automation",
                  text: "Sliding and swing gates with vehicle detection, safety systems and integration with the intercom and lighting.",
                },
                {
                  title: "Keyless & biometric entry",
                  text: "Fingerprint readers, keypads and fobs — with time-limited codes for staff, trades and deliveries.",
                },
                {
                  title: "Delivery management",
                  text: "Let couriers into a secure porch or gate remotely, with the cameras watching as you do.",
                },
                {
                  title: "Entry logging",
                  text: "A quiet record of who came and went — useful for families, staff and peace of mind.",
                },
                {
                  title: "Part of the whole house",
                  text: "Access sits alongside alarms and CCTV in one interface, not a separate app.",
                  to: "/alarms-and-cctv",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <AreasServed intro="Door entry and access control across Glasgow, Whitecraigs, Newton Mearns, Giffnock, Bearsden, Bothwell, Hamilton and Central Scotland." />
      <CtaBand title="Take control of the front door." />
    </>
  );
}
