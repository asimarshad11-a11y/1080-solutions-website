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
import heroImage from "@/assets/hero-smart-home.jpg";
import controlImage from "@/assets/control4-panel.jpg";
import lightingImage from "@/assets/smart-lighting.jpg";
import cinemaImage from "@/assets/home-cinema.jpg";

const FAQS = [
  {
    question: "Do you install smart home systems in Newton Mearns?",
    answer:
      "Yes. We design, install and support smart home systems throughout Newton Mearns, Mearnskirk and the surrounding south Glasgow area. Projects range from lighting and AV upgrades to complete whole-house Control4 systems.",
  },
  {
    question: "When should smart-home cabling be planned on a new build?",
    answer:
      "As early as possible. The best time is before first fix, when lighting circuits, data, Wi-Fi access points, speakers, cameras, blinds and rack locations can be coordinated from the architectural and electrical drawings.",
  },
  {
    question: "Can you integrate Lutron lighting with Control4?",
    answer:
      "Yes. We regularly combine Control4 with Lutron lighting so scenes, keypads, audio, heating, blinds and security work together from one interface. We also work with KNX and DALI where the project specification calls for them.",
  },
  {
    question: "Do you install home cinemas in Newton Mearns?",
    answer:
      "Yes. We design dedicated cinemas and media rooms with Dolby Atmos, projection or large-format displays, acoustic treatment, architectural speakers and simple one-button control through Control4.",
  },
];

export const Route = createFileRoute("/smart-home-newton-mearns")({
  head: () =>
    seoHead({
      title: "Smart Home Newton Mearns | Control4 & Lutron | 1080 Solutions",
      description:
        "Smart home installation in Newton Mearns. Control4, Lutron lighting, cinema, audio, heating, blinds, CCTV and professional Wi-Fi.",
      path: "/smart-home-newton-mearns",
      image: heroImage,
      imageAlt: "Smart home installation in Newton Mearns with integrated lighting and AV",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Smart Home Glasgow", path: "/smart-home-glasgow" },
        { name: "Newton Mearns", path: "/smart-home-newton-mearns" },
      ],
      jsonLd: [
        serviceJsonLd({
          name: "Smart Home Installation Newton Mearns",
          description:
            "Smart home design and installation in Newton Mearns, including Control4, Lutron lighting, multi-room audio, cinema, heating, blinds, CCTV and networking.",
          path: "/smart-home-newton-mearns",
        }),
        faqJsonLd(FAQS),
      ],
    }),
  component: SmartHomeNewtonMearnsPage,
});

function SmartHomeNewtonMearnsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={heroImage}
          alt="Whole-home automation in a modern Newton Mearns property"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/65 to-background" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <p className="eyebrow">Newton Mearns · East Renfrewshire</p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Smart Home Newton Mearns
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Control4, Lutron lighting, heating, blinds, cinema, audio, security and professional
            networking for new builds, renovations and high-specification family homes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaPrimary to="/contact">Arrange a Consultation</CtaPrimary>
            <CtaSecondary to="/smart-home-glasgow">Smart Home Glasgow</CtaSecondary>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="Designed For The Property"
              title="Smart-home infrastructure planned before the walls close."
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground lg:pt-12">
              <p>
                Newton Mearns has a large concentration of modern detached homes, major extensions,
                one-off new builds and full renovations. Those projects are ideal for proper
                infrastructure: structured data cabling, centralised equipment, lighting control,
                wired access points, architectural audio and discreet security planned from day one.
              </p>
              <p>
                We work from drawings with the architect, electrician and interior designer so the
                technology is coordinated before first fix. The result is cleaner walls, fewer
                visible devices and a system that is easier to support for the long term.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Whole-Home Integration"
            title="One system instead of a stack of separate apps."
            lede="Lighting, climate, entertainment and security should feel like parts of the same house."
          />
          <div className="mt-10">
            <CardGrid
              cols={3}
              items={[
                {
                  title: "Control4 automation",
                  text: "Whole-home scenes, touchscreens, Halo remotes and app control for lighting, heating, AV, blinds and security.",
                  to: "/control4-glasgow",
                },
                {
                  title: "Lutron smart lighting",
                  text: "Centralised or wireless lighting control with elegant keypads, dimming and scenes designed around each room.",
                  to: "/lutron-glasgow",
                },
                {
                  title: "Home cinema & media rooms",
                  text: "Dedicated cinema rooms and high-performance media spaces with Dolby Atmos, projection, acoustics and one-button control.",
                  to: "/home-cinema",
                },
                {
                  title: "Multi-room audio",
                  text: "Discreet in-ceiling and in-wall speakers with centrally managed music and television throughout the property.",
                  to: "/multi-room-audio-and-video",
                },
                {
                  title: "CCTV & access",
                  text: "Cameras, door entry and alarms integrated into the wider smart-home system with remote access when required.",
                  to: "/alarms-and-cctv",
                },
                {
                  title: "Wi-Fi & networking",
                  text: "Enterprise-grade wired and wireless infrastructure to support streaming, automation, CCTV and work-from-home traffic.",
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
            <p className="eyebrow">New Build & Renovation</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              The cheapest smart-home cable is the one installed at first fix.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              On a major Newton Mearns renovation or new build, we mark up drawings before the
              electrician starts. Data, access points, lighting control, speakers, keypads, cameras,
              door entry, blinds, rack space and future spare cabling are all coordinated before the
              plasterboard goes on.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              That early design work reduces compromises later and gives the property a reliable
              backbone for future upgrades rather than locking the homeowner into short-lived
              wireless products.
            </p>
          </div>
          <img
            src={controlImage}
            alt="Control4 smart home panel and architectural keypad"
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
            src={lightingImage}
            alt="Smart lighting in a contemporary kitchen"
            width={1920}
            height={1080}
            loading="lazy"
            className="aspect-video w-full rounded-lg border border-border object-cover"
          />
          <div>
            <p className="eyebrow">Lighting Control</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Lighting scenes built around how the house is used.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Large open-plan kitchens, double-height spaces, feature lighting and landscaped
              exteriors quickly create too many switches. Lutron, KNX or DALI allows those circuits
              to be grouped into useful scenes rather than controlled one fitting at a time.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Control4 then links lighting with blinds, audio, heating and security so evening,
              entertaining, away and bedtime scenes become one-touch routines.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaSecondary to="/smart-lighting-glasgow">Smart Lighting Glasgow</CtaSecondary>
              <CtaSecondary to="/lutron-glasgow">Lutron Glasgow</CtaSecondary>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <p className="eyebrow">Cinema & Entertainment</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              From a family media room to a dedicated cinema.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We design AV around the room rather than forcing the room around the equipment. That
              includes concealed speakers, Dolby Atmos layouts, large-format displays or projection,
              acoustic treatment and straightforward Control4 operation for everyone in the house.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              For an example of the standard we work to locally, our nearby Whitecraigs case study
              shows a complete 9.4.4 dedicated cinema with Control4, JVC projection and architectural
              lighting.
            </p>
            <div className="mt-8">
              <CtaSecondary to="/projects/whitecraigs-glasgow">View the Whitecraigs Cinema</CtaSecondary>
            </div>
          </div>
          <img
            src={cinemaImage}
            alt="Dedicated home cinema designed by 1080 Solutions"
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
            eyebrow="Local Authority Cluster"
            title="Newton Mearns connected to our wider Glasgow smart-home work."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Link
              to="/smart-home-glasgow"
              className="rounded-lg border border-border bg-card p-6 transition hover:border-primary/60"
            >
              <p className="eyebrow">Glasgow</p>
              <h3 className="mt-2 font-display text-xl font-semibold">Smart Home Glasgow</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Our main Glasgow service page covering Control4, lighting, climate, blinds, AV,
                cinema, security and networking.
              </p>
            </Link>
            <Link
              to="/smart-home-whitecraigs"
              className="rounded-lg border border-border bg-card p-6 transition hover:border-primary/60"
            >
              <p className="eyebrow">Nearby</p>
              <h3 className="mt-2 font-display text-xl font-semibold">Smart Home Whitecraigs</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Local smart-home design in Whitecraigs, backed by a real completed cinema project.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading eyebrow="Questions" title="Smart home installation in Newton Mearns." />
          <div className="mt-10">
            <Faq items={FAQS} />
          </div>
        </div>
      </section>

      <AreasServed intro="Smart home installation across Newton Mearns, Mearnskirk, Whitecraigs, Giffnock, Clarkston, Glasgow and the wider Central Scotland region." />
      <CtaBand
        title="Planning a smart home in Newton Mearns?"
        lede="Send us your architectural drawings before first fix, or arrange a survey for an existing property."
      />
    </>
  );
}
