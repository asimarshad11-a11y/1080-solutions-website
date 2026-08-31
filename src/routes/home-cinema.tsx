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
import cinemaImage from "@/assets/home-cinema.jpg";
import whitecraigsImage from "@/assets/whitecraigs-cinema.jpg";

const FAQS = [
  {
    question: "Do you design dedicated home cinemas and media rooms in Glasgow?",
    answer:
      "Yes. We design everything from discreet family media rooms and TV-based cinema spaces to fully dedicated projection rooms with tiered seating, acoustic treatment, architectural lighting and immersive audio.",
  },
  {
    question: "When should a home cinema be planned into a renovation or new build?",
    answer:
      "As early as possible. Speaker positions, screen size, projector throw, cable routes, ventilation, lighting circuits and seating sightlines are much easier to resolve before walls and ceilings are finished. We coordinate the technical design with the wider build team before installation begins.",
  },
  {
    question: "Can Control4 run the whole cinema room?",
    answer:
      "Yes. Control4 can bring the projector or display, AV processor, sources, lighting, blinds, masking and volume into one simple interface, so starting a film can be reduced to a single scene or button press.",
  },
  {
    question: "What is included in a properly designed Dolby Atmos cinema?",
    answer:
      "The room is designed as a complete system: speaker and subwoofer layout, amplification and processing, screen and projection, acoustic treatment, seating and sightlines, lighting, control and final calibration. The exact specification depends on the room and the performance target.",
  },
];

export const Route = createFileRoute("/home-cinema")({
  head: () =>
    seoHead({
      title: "Home Cinema Glasgow | Design & Installation | 1080 Solutions",
      description:
        "Home cinema design and installation in Glasgow. Dedicated cinema rooms and media rooms with Dolby Atmos, projection, acoustics, lighting and Control4.",
      path: "/home-cinema",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Home Cinema", path: "/home-cinema" },
      ],
      jsonLd: [
        serviceJsonLd({
          name: "Home Cinema Design & Installation Glasgow",
          description:
            "Dedicated home cinema and media room design and installation in Glasgow: Dolby Atmos, reference projection, acoustic treatment, architectural lighting and integrated control.",
          path: "/home-cinema",
        }),
        faqJsonLd(FAQS),
      ],
    }),
  component: HomeCinemaPage,
});

function HomeCinemaPage() {
  return (
    <>
      <PageHero
        eyebrow="Home Cinema · Glasgow"
        title="Home cinema design and installation in Glasgow."
        lede="Dedicated Dolby Atmos cinema rooms and considered media rooms — designed around the acoustics, sightlines, lighting and control from the start."
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

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Our Process"
            title="Design the room before choosing the equipment."
            lede="The best cinema specification comes from the room, the seating plan and the performance target — not from a shopping list."
          />
          <div className="mt-10">
            <CardGrid
              cols={3}
              items={[
                {
                  title: "1. Survey & concept",
                  text: "We assess the room, seating, screen size, sightlines, speaker geometry, noise control and how the cinema fits into the wider property.",
                },
                {
                  title: "2. Technical design",
                  text: "We define the audio layout, projection or display, amplification, acoustic treatment, lighting, control, rack space and cable requirements before first fix.",
                },
                {
                  title: "3. Installation & calibration",
                  text: "Equipment is installed, integrated and commissioned as one system, then the room is calibrated and the control experience refined for everyday use.",
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

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading eyebrow="Questions" title="Home cinema FAQs." />
          <div className="mt-10">
            <Faq items={FAQS} />
          </div>
        </div>
      </section>

      <AreasServed intro="Home cinema design and installation across Glasgow, Whitecraigs, Newton Mearns, Bearsden, Milngavie, Bothwell and Central Scotland." />
      <CtaBand title="Design your cinema room." />
    </>
  );
}
