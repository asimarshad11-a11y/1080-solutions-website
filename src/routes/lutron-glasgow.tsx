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
import lightingImage from "@/assets/smart-lighting.jpg";
import blindsImage from "@/assets/automated-blinds.jpg";

const FAQS = [
  {
    question: "Which Lutron system is right for my home?",
    answer:
      "For existing homes and smaller projects, Lutron's wireless systems retrofit beautifully. For new builds and full renovations we typically specify a wired Lutron system with centralised dimming panels for maximum reliability and the cleanest walls. We'll recommend the right tier after a survey.",
  },
  {
    question: "Can Lutron control blinds as well as lights?",
    answer:
      "Yes — Lutron's motorised shading is one of its strengths. Roller blinds, Roman blinds and curtain tracks can sit on the same keypads and scenes as the lighting, and track the sun automatically.",
  },
  {
    question: "Does Lutron work with Control4?",
    answer:
      "Natively. We pair Lutron lighting and shading with Control4 so a single app, keypad or remote runs the whole house — lighting scenes, AV, heating and security together.",
  },
  {
    question: "What keypad finishes are available?",
    answer:
      "Lutron keypads come in a wide range of finishes including bronze, brass, nickel, glass and stone, with custom engraving. We bring samples to the design meeting so you can see them against your interiors.",
  },
];

export const Route = createFileRoute("/lutron-glasgow")({
  head: () =>
    seoHead({
      title: "Lutron Glasgow | Lighting & Blinds | 1080 Solutions",
      description:
        "Lutron lighting control in Glasgow. Keypads, dimming, automated blinds and shading — designed, installed and programmed by 1080 Solutions.",
      path: "/lutron-glasgow",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Lutron Glasgow", path: "/lutron-glasgow" },
      ],
      jsonLd: [
        serviceJsonLd({
          name: "Lutron Lighting Glasgow",
          description:
            "Lutron lighting control, keypads, dimming and motorised shading design and installation across Glasgow and Central Scotland.",
          path: "/lutron-glasgow",
        }),
        faqJsonLd(FAQS),
      ],
    }),
  component: LutronPage,
});

function LutronPage() {
  return (
    <>
      <PageHero
        eyebrow="Lutron · Glasgow"
        title="Lutron lighting control in Glasgow."
        lede="The reference standard for lighting control and motorised shading — designed, installed and programmed by 1080 Solutions across Glasgow and Central Scotland."
        image={lightingImage}
        imageAlt="Lutron keypad and architectural lighting in a Glasgow home"
      >
        <CtaPrimary to="/contact">Arrange a Consultation</CtaPrimary>
        <CtaSecondary to="/smart-lighting-glasgow">Smart Lighting Glasgow</CtaSecondary>
      </PageHero>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading eyebrow="Why Lutron" title="Keypads, not switch banks." />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground lg:pt-12">
              <p>
                A Lutron keypad replaces a row of plastic switches with a single engraved plate in
                bronze, brass or stone. Press “Entertain” and the room composes itself. Press
                “Goodnight” and the whole house settles.
              </p>
              <p>
                Behind the wall, Lutron's dimming is smooth, flicker-free and silent — the benchmark
                the rest of the industry measures itself against. It's why Lutron sits at the heart
                of most of the homes we build.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <CardGrid
              cols={3}
              items={[
                {
                  title: "Whole-home lighting",
                  text: "Centralised or wireless dimming with engraved keypads, scene control and astronomical timeclock scheduling.",
                },
                {
                  title: "Motorised shading",
                  text: "Whisper-quiet roller blinds, Romans and curtain tracks on the same keypads and scenes as the lighting.",
                },
                {
                  title: "Tunable white",
                  text: "Circadian lighting that warms as the evening draws in — specified as part of the lighting design, not bolted on.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <img
            src={blindsImage}
            alt="Lutron motorised sheer curtains in a Glasgow bedroom"
            width={1920}
            height={1080}
            loading="lazy"
            className="aspect-video w-full rounded-lg border border-border object-cover"
          />
          <div>
            <SectionHeading
              eyebrow="Lutron + Control4"
              title="Lighting and shading inside one system."
            />
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                We integrate Lutron with Control4 so lighting and blinds become part of the
                whole-house experience: cinema scenes, security modes, holiday simulation and
                welcome-home lighting all include the shades automatically.
              </p>
              <p>
                And because both platforms are engineered for decades of service, the system you
                commission today is the system you'll still be enjoying in ten years.
              </p>
            </div>
            <div className="mt-8">
              <CtaSecondary to="/control4-glasgow">Control4 Glasgow</CtaSecondary>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading eyebrow="Questions" title="Lutron FAQs." />
          <div className="mt-10">
            <Faq items={FAQS} />
          </div>
        </div>
      </section>

      <AreasServed intro="Lutron lighting and shading across Glasgow, Bearsden, Milngavie, Whitecraigs, Newton Mearns, Giffnock, Clarkston, Bothwell, Hamilton and Central Scotland." />
      <CtaBand
        title="See Lutron keypads and finishes."
        lede="Book a consultation and we'll bring keypad finishes and fabric samples to you."
      />
    </>
  );
}
