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
import cinemaImage from "@/assets/home-cinema.jpg";
import whitecraigsImage from "@/assets/whitecraigs-cinema.jpg";

export const Route = createFileRoute("/home-cinema")({
  head: () =>
    seoHead({
      title: "Home Cinema Glasgow | Cinema Room Design | 1080 Solutions",
      description:
        "Home cinema design and installation in Glasgow. Dolby Atmos cinema rooms, acoustic treatment and reference-grade projection from 1080 Solutions.",
      path: "/home-cinema",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Home Cinema", path: "/home-cinema" },
      ],
      jsonLd: [
        serviceJsonLd({
          name: "Home Cinema Glasgow",
          description:
            "Dedicated home cinema design and installation in Glasgow: Dolby Atmos, reference projection, acoustic treatment and architectural lighting.",
          path: "/home-cinema",
        }),
      ],
    }),
  component: HomeCinemaPage,
});

function HomeCinemaPage() {
  return (
    <>
      <PageHero
        eyebrow="Home Cinema · Glasgow"
        title="Home cinema in Glasgow."
        lede="Reference-grade Dolby Atmos rooms, acoustically treated and calibrated by hand. An evening out, without leaving."
        image={cinemaImage}
        imageAlt="Dedicated home cinema with star ceiling and tiered seating"
      >
        <CtaPrimary to="/contact">Arrange a Consultation</CtaPrimary>
        <CtaSecondary to="/projects/whitecraigs-glasgow">View a Recent Cinema</CtaSecondary>
      </PageHero>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading eyebrow="Designed, Not Decorated" title="Cinema is engineering." />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground lg:pt-12">
              <p>
                A great cinema room is built on maths before aesthetics: room ratios, speaker
                placement, acoustic treatment, sightlines and light control. We design every element
                together — so the room sounds as composed as it looks.
              </p>
              <p>
                From a media wall in the family room to a dedicated theatre with tiered seating and
                a star ceiling, we handle design, build coordination, installation and final
                calibration ourselves.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <CardGrid
              cols={3}
              items={[
                {
                  title: "Dolby Atmos design",
                  text: "Immersive multi-channel layouts engineered to the room — from 5.1 media walls to 9.4.4 reference theatres.",
                },
                {
                  title: "Reference projection",
                  text: "Native 4K projection with anamorphic lenses and acoustically transparent, fixed-frame screens.",
                },
                {
                  title: "Acoustic treatment",
                  text: "Absorption and diffusion designed into the fabric of the room — heard, not seen.",
                },
                {
                  title: "Cinema lighting",
                  text: "Tunable-white COB lighting, LED coves and star ceilings, all on one-touch scenes.",
                },
                {
                  title: "One-button control",
                  text: "Press play: the lights fade, the screen masks and the film starts. Control4 makes the technology vanish.",
                  to: "/control4-glasgow",
                },
                {
                  title: "Seating & joinery",
                  text: "Tiered seating, bespoke joinery and finishes coordinated with your interior designer.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Case study link */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <img
            src={whitecraigsImage}
            alt="9.4.4 Dolby Atmos home cinema in Whitecraigs, Glasgow"
            width={1920}
            height={1080}
            loading="lazy"
            className="aspect-video w-full rounded-lg border border-border object-cover"
          />
          <div>
            <SectionHeading eyebrow="Case Study" title="9.4.4 Dolby Atmos in Whitecraigs." />
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our recent Whitecraigs project pairs an M&amp;K loudspeaker array with a StormAudio
              ISR Fusion 20 processor, JVC DLA-NZ8 projection onto a 192-inch Projecta screen, and a
              full Control4-controlled lighting scheme with a Starscape ceiling.
            </p>
            <div className="mt-8">
              <CtaPrimary to="/projects/whitecraigs-glasgow">Read the Case Study</CtaPrimary>
            </div>
          </div>
        </div>
      </section>

      <AreasServed intro="Home cinema design and installation across Glasgow, Whitecraigs, Newton Mearns, Bearsden, Milngavie, Bothwell and Central Scotland." />
      <CtaBand title="Design your cinema room." />
    </>
  );
}
