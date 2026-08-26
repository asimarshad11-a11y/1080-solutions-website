import { createFileRoute } from "@tanstack/react-router";
import {
  AreasServed,
  CtaBand,
  CtaPrimary,
  PageHero,
  SectionHeading,
} from "@/components/site/Sections";
import { seoHead } from "@/lib/seo";
import controlImage from "@/assets/control4-panel.jpg";
import rackImage from "@/assets/network-rack.jpg";

export const Route = createFileRoute("/about")({
  head: () =>
    seoHead({
      title: "About 1080 Solutions | Smart Home & AV, Glasgow",
      description:
        "1080 Solutions (Algo AV) is a Glasgow smart home, AV and security integrator serving Central Scotland — over a decade in the industry, 200+ residences completed.",
      path: "/about",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ],
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About · Glasgow"
        title="1080 Solutions — Algo AV."
        lede="A smart home, AV and security integrator working from Glasgow across Central Scotland — from city townhouses and new builds to country estates."
        image={controlImage}
        imageAlt="Smart home control panel installed by 1080 Solutions"
      >
        <CtaPrimary to="/contact">Arrange a Consultation</CtaPrimary>
      </PageHero>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading eyebrow="Who We Are" title="Engineers first, salespeople never." />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground lg:pt-12">
              <p>
                1080 Solutions Ltd — trading as Algo AV — has spent over a decade designing,
                installing and maintaining smart home systems across Glasgow and Central Scotland,
                completing more than 200 residences along the way.
              </p>
              <p>
                We work alongside architects, interior designers and main contractors from first
                drawings through commissioning — and we stay with the house long after handover.
                Much of our work comes from recommendation, and many of our earliest clients are
                still with us.
              </p>
              <p>
                We build on platforms that last: Control4 for automation, Lutron for lighting and
                shading, open protocols like KNX and DALI where the project calls for them, and
                manufacturers we trust to go the distance — Sonance, Origin Acoustics, Sonos, Bang
                &amp; Olufsen, Ubiquiti and Araknis.
              </p>
            </div>
          </div>

          <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["10+", "Years in the industry"],
              ["200+", "Residences completed"],
              ["Glasgow", "Scotland, United Kingdom"],
            ].map(([stat, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-2xl font-semibold text-primary sm:text-3xl">
                  {stat}
                </dd>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <img
            src={rackImage}
            alt="A meticulously dressed equipment rack installed by 1080 Solutions"
            width={1920}
            height={1080}
            loading="lazy"
            className="aspect-video w-full rounded-lg border border-border object-cover"
          />
          <div>
            <SectionHeading eyebrow="How We Work" title="Stewardship, not just installation." />
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Anyone can sell equipment. Our value is in the design, the cabling you'll never see,
                the programming that makes a system feel obvious — and in answering the phone five
                years later.
              </p>
              <p>
                Every project is documented fully and supported with maintenance plans that include
                remote monitoring, priority callouts and annual health checks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AreasServed />
      <CtaBand
        title="Meet us, then decide."
        lede="A consultation costs you nothing but an hour. We'll tell you honestly what's worth doing — and what isn't."
      />
    </>
  );
}
