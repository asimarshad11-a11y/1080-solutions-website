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
import heroImage from "@/assets/hero-smart-home.jpg";

const FAQS = [
  {
    question: "What is included in a landscape lighting design?",
    answer:
      "We plan the lighting around the property, architecture and garden rather than simply adding fittings. That includes beam angles, colour temperature, glare control, cable routes, switching, dimming and scene control.",
  },
  {
    question: "Can landscape lighting be automated?",
    answer:
      "Yes. Exterior lighting can run on schedules, astronomical time clocks, motion sensors and smart-home scenes, including integration with Control4, Lutron and wider home automation systems.",
  },
  {
    question: "Do you install lighting for existing gardens as well as new projects?",
    answer:
      "Yes. We work on new landscaping schemes, renovations and upgrades to existing gardens, entrances, driveways and outdoor living areas across Glasgow and Central Scotland.",
  },
  {
    question: "What colour temperature works best outdoors?",
    answer:
      "For most residential landscape lighting we favour warm white light, often around 2700K to 3000K, because it complements planting, stone and timber without making the garden feel harsh.",
  },
];

export const Route = createFileRoute("/landscape-lighting-glasgow")({
  head: () =>
    seoHead({
      title: "Landscape Lighting Glasgow | Design & Installation | 1080 Solutions",
      description:
        "Landscape lighting design and installation in Glasgow. Premium exterior lighting for gardens, pathways, entrances, driveways and outdoor living spaces.",
      path: "/landscape-lighting-glasgow",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Landscape Lighting Glasgow", path: "/landscape-lighting-glasgow" },
      ],
      jsonLd: [
        serviceJsonLd({
          name: "Landscape Lighting Glasgow",
          description:
            "Landscape and exterior lighting design and installation for homes, gardens, pathways, entrances and outdoor living spaces across Glasgow and Central Scotland.",
          path: "/landscape-lighting-glasgow",
        }),
        faqJsonLd(FAQS),
      ],
    }),
  component: LandscapeLightingPage,
});

function LandscapeLightingPage() {
  return (
    <>
      <PageHero
        eyebrow="Landscape Lighting · Glasgow"
        title="Landscape lighting designed around the architecture."
        lede="Warm, discreet exterior lighting for gardens, entrances, pathways, driveways and outdoor living spaces — designed and installed across Glasgow and Central Scotland."
        image={lightingImage}
        imageAlt="Architectural landscape lighting at a modern home in Glasgow"
      >
        <CtaPrimary to="/contact">Arrange a Consultation</CtaPrimary>
        <CtaSecondary to="/smart-lighting-glasgow">Smart Lighting Glasgow</CtaSecondary>
      </PageHero>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading eyebrow="Exterior Lighting Design" title="Make the outside feel as considered as the inside." />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground lg:pt-12">
              <p>
                Good landscape lighting is subtle. It reveals texture, frames planting, guides movement and gives the exterior of the home depth after dark without flooding the garden with light.
              </p>
              <p>
                We design the fittings, positions, beam angles, colour temperature and control together so the finished result feels intentional from every viewpoint.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <CardGrid
              cols={2}
              items={[
                {
                  title: "Gardens & planting",
                  text: "Layered light for trees, planting, walls and architectural features with careful control of glare and spill.",
                },
                {
                  title: "Paths, steps & entrances",
                  text: "Safe, low-level illumination for movement through the property without harsh floodlighting.",
                },
                {
                  title: "Driveways & façades",
                  text: "Architectural lighting that gives the home presence after dark while keeping the installation discreet.",
                },
                {
                  title: "Outdoor living",
                  text: "Lighting scenes for terraces, kitchens, seating areas and entertaining spaces that shift from practical to relaxed at the touch of a button.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <SectionHeading eyebrow="Smart Control" title="Exterior lighting that runs itself." />
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Landscape lighting works best when the control is invisible. We use schedules, dusk-to-dawn logic, sensors and scenes so the right areas come on automatically at the right time.
              </p>
              <p>
                Where the home already has smart control, exterior lighting can form part of the same system — alongside security, gates, CCTV, blinds, heating and AV.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaSecondary to="/control4-glasgow">Control4 Glasgow</CtaSecondary>
              <CtaSecondary to="/lutron-glasgow">Lutron Glasgow</CtaSecondary>
            </div>
          </div>
          <img
            src={heroImage}
            alt="Exterior architectural lighting integrated with a smart home system"
            width={1920}
            height={1080}
            loading="lazy"
            className="aspect-video w-full rounded-lg border border-border object-cover"
          />
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading eyebrow="Questions" title="Landscape lighting FAQs." />
          <div className="mt-10">
            <Faq items={FAQS} />
          </div>
        </div>
      </section>

      <AreasServed intro="Landscape lighting design and installation across Glasgow, Bearsden, Milngavie, Whitecraigs, Newton Mearns, Giffnock, Bothwell, Lanarkshire and Central Scotland." />
      <CtaBand title="Let's design your exterior lighting." />
    </>
  );
}
