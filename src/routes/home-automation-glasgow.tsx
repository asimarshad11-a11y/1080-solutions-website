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
import blindsImage from "@/assets/automated-blinds.jpg";
import lightingImage from "@/assets/smart-lighting.jpg";

const FAQS = [
  {
    question: "What's the difference between home automation and a smart home?",
    answer:
      "In practice, nothing — the terms are interchangeable. What matters is whether devices act independently through separate apps, or work together as one designed system. Our work is the latter: lighting, heating, blinds, AV and security engineered to operate as a whole.",
  },
  {
    question: "Which systems can be automated in a home?",
    answer:
      "Lighting, heating and cooling, motorised blinds and curtains, multi-room audio and video, home cinema, CCTV and alarms, door entry, gates, garden lighting and irrigation — essentially any electrical system in the house.",
  },
  {
    question: "Can home automation reduce my energy bills?",
    answer:
      "Yes, meaningfully. Zoned heating, occupancy-based lighting, automated shading and standby management typically reduce wasted energy without any change in comfort. We can show live energy data in the same interface.",
  },
  {
    question: "Will it work with my period property?",
    answer:
      "Yes. Much of our work is in Glasgow's sandstone villas and traditional homes. Wireless lighting, careful cable routes and discreet equipment mean automation doesn't require a modern box — just careful design.",
  },
];

export const Route = createFileRoute("/home-automation-glasgow")({
  head: () =>
    seoHead({
      title: "Home Automation Glasgow | 1080 Solutions",
      description:
        "Home automation in Glasgow: lighting, heating, blinds, AV and security working as one system. Design, installation and support from 1080 Solutions.",
      path: "/home-automation-glasgow",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Home Automation Glasgow", path: "/home-automation-glasgow" },
      ],
      jsonLd: [
        serviceJsonLd({
          name: "Home Automation Glasgow",
          description:
            "Whole-home automation in Glasgow: lighting, heating, shading, multi-room AV and security integrated into one Control4-based system.",
          path: "/home-automation-glasgow",
        }),
        faqJsonLd(FAQS),
      ],
    }),
  component: HomeAutomationPage,
});

function HomeAutomationPage() {
  return (
    <>
      <PageHero
        eyebrow="Home Automation · Glasgow"
        title="Home automation in Glasgow."
        lede="Lighting, climate, blinds, entertainment and security — designed as one system, controlled as one system. Serving Glasgow and Central Scotland."
        image={blindsImage}
        imageAlt="Automated curtains in a Glasgow home at sunrise"
      >
        <CtaPrimary to="/contact">Arrange a Consultation</CtaPrimary>
        <CtaSecondary to="/control4-glasgow">Control4 Glasgow</CtaSecondary>
      </PageHero>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="One System"
              title="Automation that disappears into the house."
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground lg:pt-12">
              <p>
                Good home automation is invisible. The house warms before you wake, lights follow
                you at night at ten percent, blinds track the afternoon sun, and the alarm sets
                itself when the last door closes. You notice the comfort — not the technology.
              </p>
              <p>
                We build these systems on{" "}
                <Link to="/control4-glasgow" className="text-primary hover:underline">
                  Control4
                </Link>{" "}
                with Lutron, KNX and DALI underneath — proven, serviceable platforms rather than
                disposable gadgets — and we design them room by room around how your household
                actually lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading eyebrow="What We Automate" title="Every system in the house." />
          <div className="mt-10">
            <CardGrid
              cols={3}
              items={[
                {
                  title: "Lighting",
                  text: "Scene-based lighting on Lutron, KNX and DALI — keypads instead of switch banks, and light that follows the time of day.",
                  to: "/smart-lighting-glasgow",
                },
                {
                  title: "Heating & HVAC",
                  text: "Zone-by-zone control of underfloor heating, radiators and cooling, integrated with occupancy and weather.",
                },
                {
                  title: "Blinds & curtains",
                  text: "Silent motorised shading that manages heat, glare and privacy automatically.",
                },
                {
                  title: "Audio & video",
                  text: "Multi-room music and TV from concealed speakers and central equipment.",
                  to: "/multi-room-audio-and-video",
                },
                {
                  title: "Security & access",
                  text: "Alarms, CCTV, door entry and gates tied into the same scenes and the same app.",
                  to: "/alarms-and-cctv",
                },
                {
                  title: "Networking",
                  text: "The enterprise-grade wired and wireless foundation everything else depends on.",
                  to: "/data-networking-and-wifi",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <img
            src={lightingImage}
            alt="Automated architectural lighting in a Glasgow kitchen and hallway"
            width={1920}
            height={1080}
            loading="lazy"
            className="aspect-video w-full rounded-lg border border-border object-cover"
          />
          <div>
            <SectionHeading
              eyebrow="Built To Last"
              title="Engineering depth behind the calm surface."
            />
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Under every elegant keypad sits structured cabling, a properly designed network and
                equipment chosen for longevity. We document everything, label everything and build
                systems another engineer could maintain — though we intend to be the ones who do.
              </p>
              <p>
                That's why so many of our Glasgow clients have stayed with us for over a decade: the
                system keeps working, and so do we.
              </p>
            </div>
            <div className="mt-8">
              <CtaSecondary to="/smart-home-glasgow">Smart Home Glasgow</CtaSecondary>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading eyebrow="Questions" title="Home automation FAQs." />
          <div className="mt-10">
            <Faq items={FAQS} />
          </div>
        </div>
      </section>

      <AreasServed />
      <CtaBand title="Plan your home automation project." />
    </>
  );
}
