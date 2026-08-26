import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AreasServed,
  CardGrid,
  CtaBand,
  CtaPrimary,
  CtaSecondary,
  Faq,
  SectionHeading,
} from "@/components/site/Sections";
import { faqJsonLd, seoHead, serviceJsonLd } from "@/lib/seo";
import whitecraigsImage from "@/assets/whitecraigs-cinema.jpg";
import controlImage from "@/assets/control4-panel.jpg";
import lightingImage from "@/assets/smart-lighting.jpg";

const FAQS = [
  {
    question: "Do you install smart home systems in Whitecraigs?",
    answer:
      "Yes. We design, install and support smart home systems in Whitecraigs and the surrounding south Glasgow areas, including Newton Mearns, Giffnock, Clarkston and Mearnskirk. Projects range from single-room upgrades to complete whole-house automation.",
  },
  {
    question: "Can you retrofit automation into an existing Whitecraigs home?",
    answer:
      "Yes. Existing detached homes and renovated properties can usually be upgraded without turning the house into a building site. We survey the existing wiring and network first, then use a mixture of wired infrastructure, discreet cable routes and wireless devices where appropriate.",
  },
  {
    question: "Which systems do you install?",
    answer:
      "Control4 is our main whole-home control platform. For lighting we also work with Lutron, KNX and DALI, alongside professional networking, CCTV, door entry, heating integration, motorised blinds, multi-room audio and home cinema systems.",
  },
  {
    question: "Do you work with architects and builders on renovations?",
    answer:
      "Yes. The best results come when we are involved early. We work from architectural and electrical drawings, produce first-fix requirements, coordinate lighting and AV positions, and then return for commissioning and programming once the build is ready.",
  },
];

export const Route = createFileRoute("/smart-home-whitecraigs")({
  head: () =>
    seoHead({
      title: "Smart Home Whitecraigs | Control4 & Lutron | 1080 Solutions",
      description:
        "Smart home installation in Whitecraigs, Glasgow. Control4, Lutron lighting, cinema, audio, heating, blinds, CCTV and professional Wi-Fi.",
      path: "/smart-home-whitecraigs",
      image: whitecraigsImage,
      imageAlt: "Whitecraigs smart home and dedicated home cinema project in Glasgow",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Smart Home Glasgow", path: "/smart-home-glasgow" },
        { name: "Whitecraigs", path: "/smart-home-whitecraigs" },
      ],
      jsonLd: [
        serviceJsonLd({
          name: "Smart Home Installation Whitecraigs",
          description:
            "Smart home design and installation in Whitecraigs, Glasgow, including Control4, Lutron lighting, multi-room audio, cinema, heating, blinds, CCTV and networking.",
          path: "/smart-home-whitecraigs",
        }),
        faqJsonLd(FAQS),
      ],
    }),
  component: SmartHomeWhitecraigsPage,
});

function SmartHomeWhitecraigsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={whitecraigsImage}
          alt="Home cinema and smart lighting installation in Whitecraigs, Glasgow"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <p className="eyebrow">Whitecraigs · Glasgow</p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Smart Home Whitecraigs
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Whole-home automation for Whitecraigs properties — Control4, Lutron lighting, heating,
            blinds, cinema, audio, security and Wi-Fi designed as one reliable system.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaPrimary to="/contact">Arrange a Consultation</CtaPrimary>
            <CtaSecondary to="/projects/whitecraigs-glasgow">View Our Whitecraigs Project</CtaSecondary>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="Local Smart Home Design"
              title="Technology designed around the property, not bolted onto it."
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground lg:pt-12">
              <p>
                Whitecraigs has a mix of substantial detached houses, extensively renovated family
                homes and newer high-specification properties. Those homes often need more than a
                collection of consumer smart devices. Lighting, heating, entertainment, security and
                networking all need to work together, while the visible technology stays discreet.
              </p>
              <p>
                We start with the infrastructure: a stable wired network, sensible equipment
                locations and a clear plan for lighting, AV and control. From there we build the
                system around the way the household uses the property — everyday scenes, entertaining,
                cinema, night-time security and remote access.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="What We Integrate"
            title="One system for the whole house."
            lede="The aim is simple: fewer apps, fewer remotes and fewer compromises."
          />
          <div className="mt-10">
            <CardGrid
              cols={3}
              items={[
                {
                  title: "Control4 home automation",
                  text: "Lighting, heating, AV, security and shading controlled from one consistent interface, with scenes programmed around daily routines.",
                  to: "/control4-glasgow",
                },
                {
                  title: "Lutron & architectural lighting",
                  text: "Centralised or wireless lighting control, elegant keypads, dimming, scenes and integration with DALI or KNX where the project requires it.",
                  to: "/lutron-glasgow",
                },
                {
                  title: "Home cinema & media rooms",
                  text: "Dedicated cinemas, media rooms, projection, Dolby Atmos, acoustic treatment and simple one-button control.",
                  to: "/home-cinema",
                },
                {
                  title: "Multi-room audio & video",
                  text: "Music and TV distributed around the property using discreet architectural speakers and centrally managed sources.",
                  to: "/multi-room-audio-and-video",
                },
                {
                  title: "CCTV, entry & security",
                  text: "Cameras, door entry, alarms and access control integrated into the wider smart-home experience rather than left as isolated systems.",
                  to: "/alarms-and-cctv",
                },
                {
                  title: "Professional Wi-Fi & networking",
                  text: "Enterprise-grade networking designed to support automation, streaming, CCTV, work-from-home traffic and reliable coverage throughout the property.",
                  to: "/data-networking-and-wifi",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <p className="eyebrow">Whitecraigs Case Study</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Real work in Whitecraigs, not a generic location page.
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Our Whitecraigs portfolio includes a dedicated 9.4.4 Dolby Atmos cinema using M&amp;K
                loudspeakers, StormAudio processing, JVC laser projection, a 192-inch Projecta screen,
                Control4 automation and architectural tunable-white lighting.
              </p>
              <p>
                The value of that project is not only the equipment list. It demonstrates the same
                approach we use across larger smart-home projects: proper design, hidden infrastructure,
                calibrated performance and one control experience from start to finish.
              </p>
            </div>
            <div className="mt-8">
              <CtaSecondary to="/projects/whitecraigs-glasgow">Read the Whitecraigs Case Study</CtaSecondary>
            </div>
          </div>
          <img
            src={whitecraigsImage}
            alt="Completed Whitecraigs home cinema with star ceiling, projection and Control4 automation"
            width={1920}
            height={1080}
            loading="lazy"
            className="aspect-video w-full rounded-lg border border-border object-cover"
          />
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <img
            src={controlImage}
            alt="Control4 smart home control panel and keypad"
            width={1920}
            height={1080}
            loading="lazy"
            className="aspect-video w-full rounded-lg border border-border object-cover"
          />
          <div>
            <p className="eyebrow">Renovation & New Build</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Get the smart-home design into the drawings early.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              During a renovation or extension, the cheapest cable is the one installed before the
              walls close. We coordinate with architects, interior designers, electricians and other
              trades so lighting circuits, keypads, speakers, access points, cameras, blinds and rack
              locations are planned before first fix rather than improvised near the end of the job.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              If the property is already finished, we survey what is available and build a retrofit
              plan around the existing structure. The goal is always the same: reliable control with
              as little visual clutter as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <p className="eyebrow">Lighting Matters</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Smart lighting is often the part of automation you use most.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Instead of rows of switches, a well-designed lighting system gives each room a small
              set of meaningful scenes. Kitchen, evening, entertaining, night and away scenes can set
              multiple circuits at once, while Control4 links lighting with blinds, AV and security.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              For high-end renovations we can design around Lutron, KNX and DALI, depending on the
              lighting specification and how much flexibility the project needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaSecondary to="/smart-lighting-glasgow">Smart Lighting Glasgow</CtaSecondary>
              <CtaSecondary to="/lutron-glasgow">Lutron Glasgow</CtaSecondary>
            </div>
          </div>
          <img
            src={lightingImage}
            alt="Architectural smart lighting in a modern Glasgow kitchen"
            width={1920}
            height={1080}
            loading="lazy"
            className="aspect-video w-full rounded-lg border border-border object-cover"
          />
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Why 1080 Solutions"
            title="Design, installation, programming and support under one roof."
          />
          <div className="mt-10">
            <CardGrid
              cols={3}
              items={[
                {
                  title: "Technical depth",
                  text: "Control4, Lutron, KNX, DALI, professional networking, AV and security are treated as one engineered system rather than separate subcontract packages.",
                },
                {
                  title: "Real local project experience",
                  text: "Our Whitecraigs case study gives homeowners and design teams a real local reference point for the standard of work we deliver.",
                },
                {
                  title: "Long-term support",
                  text: "We remain involved after handover for programming changes, upgrades, remote support and system maintenance as the property evolves.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading eyebrow="Questions" title="Smart home installation in Whitecraigs." />
          <div className="mt-10">
            <Faq items={FAQS} />
          </div>
        </div>
      </section>

      <AreasServed intro="Based in Glasgow and working throughout Whitecraigs, Newton Mearns, Giffnock, Clarkston, Bearsden, Milngavie, Bothwell and Central Scotland." />
      <CtaBand
        title="Planning a smart home in Whitecraigs?"
        lede="Send us the drawings or tell us what you want the property to do. We can review the project before first fix or survey an existing home."
      />
    </>
  );
}
