import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AreasServed,
  CardGrid,
  CtaBand,
  CtaPrimary,
  CtaSecondary,
  Faq,
  FeatureSplit,
  PageHero,
  SectionHeading,
} from "@/components/site/Sections";
import { faqJsonLd, seoHead, serviceJsonLd } from "@/lib/seo";
import lightingImage from "@/assets/smart-lighting.jpg";
import avImage from "@/assets/multi-room-av.jpg";
import blindsImage from "@/assets/automated-blinds.jpg";

const FAQS = [
  {
    question: "How early do you need to be involved on an interiors project?",
    answer:
      "Before joinery and lighting packages are fixed. Speaker positions, keypad locations, television recesses, blind pockets and rack space all interact with cabinetry and ceiling set-out, so agreeing them alongside your drawings avoids compromise later.",
  },
  {
    question: "Can keypads and plates match the ironmongery?",
    answer:
      "Usually, yes. Lutron and other premium control ranges offer bronze, brass, nickel, black, glass and stone finishes with custom engraving, so plates can be coordinated with switch plates, ironmongery and metalwork. We bring samples to design meetings.",
  },
  {
    question: "Can speakers be completely invisible?",
    answer:
      "Yes — plaster-in in-ceiling and in-wall speakers are skimmed and decorated flush, leaving no visible grille. Where a fully invisible finish isn't required, trimless bezels sit tight to the ceiling line in the fitting's own colour.",
  },
  {
    question: "Where does the equipment live?",
    answer:
      "In a single ventilated rack — a utility room, plant room, understairs cupboard or dedicated cabinet. Rooms then need only a screen, a speaker line and a keypad, with no boxes, no visible cabling and no flashing lights in the living space.",
  },
  {
    question: "Will the client be able to use it without a manual?",
    answer:
      "That's the test we design to. Keypads are engraved in the language of the household rather than technical labels, scenes are set on site with the client present, and the same logic repeats room to room so nobody has to learn two systems.",
  },
];

export const Route = createFileRoute("/smart-home-for-interior-designers")({
  head: () =>
    seoHead({
      title: "Smart Home for Interior Designers | Glasgow | 1080 Solutions",
      description:
        "Discreet smart home integration for Glasgow interior designers: refined keypads, lighting scenes, invisible speakers, concealed TVs, blinds and climate.",
      path: "/smart-home-for-interior-designers",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Smart Home for Interior Designers", path: "/smart-home-for-interior-designers" },
      ],
      jsonLd: [
        serviceJsonLd({
          name: "Smart Home Technology for Interior Designers",
          description:
            "Discreet smart home and AV integration for interior design teams across Glasgow and Central Scotland: finish coordination, lighting scenes, concealed audio and video, shading and equipment concealment.",
          path: "/smart-home-for-interior-designers",
        }),
        faqJsonLd(FAQS),
      ],
    }),
  component: DesignersPage,
});

function DesignersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Interior Designers · Glasgow & Scotland"
        title="Technology that respects the interior."
        lede="Fewer plates, no visible boxes, speakers you can't see and lighting that flatters the scheme. We work alongside interior designers across Glasgow and Central Scotland."
        image={lightingImage}
        imageAlt="Warm architectural lighting and a brushed brass keypad in a Glasgow interior"
      >
        <CtaPrimary to="/contact">Talk to us about a scheme</CtaPrimary>
        <CtaSecondary to="/projects/whitecraigs-glasgow">See a completed project</CtaSecondary>
      </PageHero>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="Our Starting Point"
              title="The best system is the one nobody notices."
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground lg:pt-12">
              <p>
                Technology damages interiors in predictable ways: a bank of six plates beside a
                doorway, a grille in the middle of a plaster ceiling, a soundbar breaking a joinery
                line, a thermostat in a hallway that was carefully composed without one.
              </p>
              <p>
                Our job is to remove those objects from the room. Everything possible moves into a
                rack, wall devices are reduced to a single engraved plate, and the parts that must
                stay visible are chosen and positioned with your drawings in front of us.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <CardGrid
              cols={3}
              items={[
                {
                  title: "One plate, not six",
                  text: "Scene keypads replace switch banks, engraved in the household's own language and finished to match the ironmongery.",
                },
                {
                  title: "Invisible audio",
                  text: "Plaster-in and trimless speakers disappear into ceilings and walls, with amplification centralised out of sight.",
                },
                {
                  title: "Nothing on show",
                  text: "Sources, processing, network and power consolidated into a ventilated rack, so rooms carry no visible equipment.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <FeatureSplit
        eyebrow="Lighting & Scenes"
        title="Light the scheme, not the ceiling plan."
        image={lightingImage}
        imageAlt="Layered architectural lighting scene in a Glasgow living room"
        bullets={[
          "Keypad finishes in bronze, brass, nickel, glass, stone and painted plates",
          "Custom engraving instead of technical labels",
          "Scenes set on site with the designer and client present",
          "Warm, flicker-free dimming to the bottom of the curve",
          "Tunable white where the palette shifts between day and evening",
        ]}
      >
        <p>
          Lighting control is the part of a smart home that most affects how an interior reads.
          Layered scenes let the same room be a working kitchen at eight in the morning and a low,
          warm space at nine at night, without touching a dimmer.
        </p>
        <p>
          We specify{" "}
          <Link to="/lutron-glasgow" className="text-primary hover:underline">
            Lutron lighting control
          </Link>{" "}
          on most premium interiors for its dimming quality and finish range — more on approach
          under{" "}
          <Link to="/smart-lighting-glasgow" className="text-primary hover:underline">
            smart lighting
          </Link>
          .
        </p>
      </FeatureSplit>

      <FeatureSplit
        eyebrow="Audio, Television & Media Walls"
        title="Sound without objects."
        image={avImage}
        imageAlt="Concealed multi-room audio and a flush-mounted television in a Glasgow interior"
        reverse
        bullets={[
          "Plaster-in speakers skimmed and decorated flush",
          "Televisions recessed flush, framed as art, or hidden behind joinery and lifts",
          "Media walls detailed with power, ventilation and cable routes resolved early",
          "Central rack so no source equipment sits in the room",
        ]}
      >
        <p>
          Music in every room does not require visible speakers, and a television does not have to
          dominate a wall. Both depend on decisions made while joinery is still on paper — recess
          depths, ventilation, cable routes and screen positions.
        </p>
        <p>
          See{" "}
          <Link to="/multi-room-audio-and-video" className="text-primary hover:underline">
            multi-room audio and video
          </Link>{" "}
          for how the distribution works, and{" "}
          <Link to="/home-cinema" className="text-primary hover:underline">
            home cinema
          </Link>{" "}
          where a dedicated room is in scope.
        </p>
      </FeatureSplit>

      <FeatureSplit
        eyebrow="Shading & Climate"
        title="Fabric, not hardware."
        image={blindsImage}
        imageAlt="Motorised sheer curtains in a Glasgow bedroom"
        bullets={[
          "Blind pockets, curtain tracks and pelmets detailed with your joinery",
          "Whisper-quiet motors on roller blinds, Romans and curtains",
          "Fabrics chosen by you; we specify only the mechanism",
          "Heating, underfloor zones and cooling controlled without wall clutter",
        ]}
      >
        <p>
          Motorised shading only looks effortless if the pocket, track and power were drawn in from
          the start. We coordinate those details with the joinery package so the finished window
          shows fabric and reveal, not a bracket.
        </p>
        <p>
          Climate control follows the same rule: zoning and scheduling handled by the system, so a
          carefully composed hallway doesn't need a thermostat on the wall.
        </p>
      </FeatureSplit>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Interfaces"
            title="Touch screens, remotes and phones."
            lede="What stays in the room is chosen as carefully as everything we take out of it."
          />
          <div className="mt-10">
            <CardGrid
              cols={3}
              items={[
                {
                  title: "Wall interfaces",
                  text: "Flush-mounted touch screens in key rooms, sized and positioned on plan, or keypads alone where a screen would intrude.",
                  to: "/control4-glasgow",
                },
                {
                  title: "Handheld control",
                  text: "A single weighted remote for cinema and media rooms, with backlit keys, so coffee tables aren't a graveyard of controllers.",
                },
                {
                  title: "Phone and voice",
                  text: "App and voice control as an addition rather than the primary interface — guests and family shouldn't need a phone to turn on a light.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading eyebrow="Working Together" title="Quiet on the design team." />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground lg:pt-12">
              <p>
                We attend design meetings with samples rather than brochures, mark our devices on
                your drawings so nothing appears as a surprise on site, and coordinate directly with
                the joiner, electrician and main contractor so you aren't relaying technical detail
                on our behalf.
              </p>
              <p>
                Where a project also involves the shell and services, our{" "}
                <Link to="/smart-home-for-architects" className="text-primary hover:underline">
                  architect coordination
                </Link>{" "}
                covers containment, riser and first-fix planning. Reliable infrastructure sits
                behind all of it — see{" "}
                <Link to="/data-networking-and-wifi" className="text-primary hover:underline">
                  networking and Wi-Fi
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Project Proof"
            title="Whitecraigs, Glasgow."
            lede="A dedicated cinema where every loudspeaker is in-wall, the lighting is tunable-white architectural LED, and the only object in the room is the screen."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaSecondary to="/projects/whitecraigs-glasgow">Read the case study</CtaSecondary>
            <CtaSecondary to="/projects">All projects</CtaSecondary>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading eyebrow="Questions" title="Common design-team questions." />
          <div className="mt-10">
            <Faq items={FAQS} />
          </div>
        </div>
      </section>

      <AreasServed intro="We collaborate with interior designers across Glasgow, Whitecraigs, Newton Mearns, Giffnock, Clarkston, Bearsden, Milngavie, Bothwell, East Kilbride, Hamilton, Renfrewshire, Lanarkshire and wider Central Scotland." />
      <CtaBand
        title="Bring us in at concept."
        lede="Share the scheme and we'll tell you what the technology needs from the joinery, ceilings and plates — with finish samples in hand."
      />
    </>
  );
}
