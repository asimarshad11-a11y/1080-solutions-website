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
import lightingImage from "@/assets/instagram/led-1.jpg";
import heroImage from "@/assets/hero-smart-home.jpg";

const FAQS = [
  {
    question: "Can smart lighting be retrofitted without rewiring?",
    answer:
      "Often, yes. Wireless Lutron systems replace existing switches and dimmers with minimal disruption, making them ideal for finished Glasgow homes. For renovations and new builds, wired systems offer the deepest integration and longevity.",
  },
  {
    question: "What's the difference between Lutron, KNX and DALI?",
    answer:
      "Lutron is a complete lighting control ecosystem — keypads, dimming and shading. KNX is an open building-automation standard suited to larger or more complex homes. DALI is a protocol for individually addressable light fittings. We use each where it's strongest, often together.",
  },
  {
    question: "What is tunable-white lighting?",
    answer:
      "Tunable-white fittings shift colour temperature through the day — cooler and brighter in the morning, warmer and dimmer in the evening — supporting natural rhythms. We typically specify 2700–6000K COB fittings in key living spaces.",
  },
  {
    question: "Will smart lighting work if the internet goes down?",
    answer:
      "Yes. Keypads, sensors and schedules run locally on the lighting system itself. An internet outage affects remote app access only.",
  },
];

export const Route = createFileRoute("/smart-lighting-glasgow")({
  head: () =>
    seoHead({
      title: "Smart Lighting Glasgow | Design & Install | 1080 Solutions",
      description:
        "Smart lighting design and installation in Glasgow. Lutron, KNX and DALI lighting control, keypads, scenes and automated shading from 1080 Solutions.",
      path: "/smart-lighting-glasgow",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Smart Lighting Glasgow", path: "/smart-lighting-glasgow" },
      ],
      jsonLd: [
        serviceJsonLd({
          name: "Smart Lighting Glasgow",
          description:
            "Smart lighting design, installation and programming in Glasgow using Lutron, KNX and DALI — scenes, keypads, tunable white and automated shading.",
          path: "/smart-lighting-glasgow",
        }),
        faqJsonLd(FAQS),
      ],
    }),
  component: SmartLightingPage,
});

function SmartLightingPage() {
  return (
    <>
      <PageHero
        eyebrow="Smart Lighting · Glasgow"
        title="Smart lighting in Glasgow."
        lede="Lighting designed around how you live — installed on Lutron, KNX and DALI, and controlled from beautiful keypads rather than banks of switches."
        image={lightingImage}
        imageAlt="Architectural smart lighting in a modern Glasgow kitchen"
      >
        <CtaPrimary to="/contact">Arrange a Consultation</CtaPrimary>
        <CtaSecondary to="/lutron-glasgow">Lutron Glasgow</CtaSecondary>
      </PageHero>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading eyebrow="Lighting Design" title="Light shaped around the day." />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground lg:pt-12">
              <p>
                A soft warmth at breakfast. Clarity in the kitchen. A low glow along the hallway at
                midnight. Good lighting design is about layers and scenes — and smart control is
                what makes those scenes effortless.
              </p>
              <p>
                We design the lighting and the control together: fitting selection, circuit design,
                keypad placement and programming, so the result feels inevitable rather than
                installed.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <CardGrid
              cols={2}
              items={[
                {
                  title: "Lutron keypads & dimming",
                  text: "Elegant keypads in bronze, brass, stone and glass finishes. One button for the scene, not six switches for the room.",
                  to: "/lutron-glasgow",
                },
                {
                  title: "KNX & DALI for larger homes",
                  text: "Open-protocol control and addressable fittings for homes that need engineering depth behind the calm surface.",
                },
                {
                  title: "Automated shading",
                  text: "Blinds and curtains that follow the sun — rooms never overheat and finishes never fade.",
                },
                {
                  title: "Circadian scenes",
                  text: "Tunable-white lighting that shifts gently through the day, supporting sleep, focus and comfort.",
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
              eyebrow="Part of the Whole"
              title="Lighting that talks to everything else."
            />
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Lighting reaches its potential when it's part of the wider system: a “cinema” scene
                that dims the room as the film starts, a “night” scene that lights the path to the
                kitchen at five percent, security modes that make the house look occupied when
                you're away.
              </p>
              <p>
                That's why we integrate lighting with Control4 — so it works in concert with
                heating, AV and security rather than alongside them.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaSecondary to="/control4-glasgow">Control4 Glasgow</CtaSecondary>
              <CtaSecondary to="/smart-home-glasgow">Smart Home Glasgow</CtaSecondary>
            </div>
          </div>
          <img
            src={heroImage}
            alt="Layered evening lighting scene in a Glasgow living room"
            width={1920}
            height={1080}
            loading="lazy"
            className="aspect-video w-full rounded-lg border border-border object-cover"
          />
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading eyebrow="Questions" title="Smart lighting FAQs." />
          <div className="mt-10">
            <Faq items={FAQS} />
          </div>
        </div>
      </section>

      <AreasServed intro="Smart lighting design and installation across Glasgow, Bearsden, Milngavie, Whitecraigs, Newton Mearns, Giffnock, Bothwell and Central Scotland." />
      <CtaBand title="Let's design your lighting." />
    </>
  );
}
