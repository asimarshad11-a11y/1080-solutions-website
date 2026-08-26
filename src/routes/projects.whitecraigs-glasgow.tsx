import { createFileRoute, Link } from "@tanstack/react-router";
import { AreasServed, CtaBand, CtaPrimary, SectionHeading } from "@/components/site/Sections";
import { seoHead } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import whitecraigsImage from "@/assets/whitecraigs-cinema.jpg";
import cinemaImage from "@/assets/home-cinema.jpg";

export const Route = createFileRoute("/projects/whitecraigs-glasgow")({
  head: () =>
    seoHead({
      title: "Whitecraigs Home Cinema Project | 1080 Solutions",
      description:
        "Case study: a 9.4.4 Dolby Atmos home cinema in Whitecraigs, Glasgow — M&K speakers, StormAudio processing, JVC projection and Control4 automation.",
      path: "/projects/whitecraigs-glasgow",
      ogType: "article",
      image: whitecraigsImage,
      imageAlt: "9.4.4 Dolby Atmos home cinema in Whitecraigs, Glasgow",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Whitecraigs, Glasgow", path: "/projects/whitecraigs-glasgow" },
      ],
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "A 9.4.4 Dolby Atmos Home Cinema in Whitecraigs, Glasgow",
          url: `${SITE_URL}/projects/whitecraigs-glasgow`,
          mainEntityOfPage: `${SITE_URL}/projects/whitecraigs-glasgow`,
          description:
            "Premium home cinema case study: M&K loudspeaker array, StormAudio ISR Fusion 20, JVC DLA-NZ8 with Panamorph anamorphic lens, 192-inch Projecta screen, Control4 automation and tunable-white architectural lighting.",
          author: {
            "@type": "Organization",
            "@id": `${SITE_URL}/#business`,
            name: SITE_NAME,
          },
          about: { "@type": "Place", name: "Whitecraigs, Glasgow" },
        },
      ],
    }),
  component: WhitecraigsPage,
});

const SPECS: { group: string; items: [string, string][] }[] = [
  {
    group: "Audio",
    items: [
      ["Layout", "9.4.4 Dolby Atmos"],
      ["Front LCR", "M&K IW300 (in-wall)"],
      ["Surrounds", "M&K IW150T Tripole; M&K IW150 / IW150A (surround & Atmos)"],
      ["Subwoofers", "Multiple M&K, including X+ Series and IW28S in-wall"],
      ["Processing", "StormAudio ISR Fusion 20"],
    ],
  },
  {
    group: "Video",
    items: [
      ["Projector", "JVC DLA-NZ8 (native 4K laser)"],
      ["Lens", "Panamorph DCR-J1 anamorphic"],
      ["Screen", "192-inch Projecta fixed-frame"],
      ["Sources", "Apple TV; high-specification Panasonic Blu-ray"],
    ],
  },
  {
    group: "Control & Lighting",
    items: [
      ["Control", "Control4 with Halo remote"],
      ["Lighting", "Architectural LED; 2700–6000K tunable-white COB"],
      ["Ceiling", "Starscape fibre-optic star ceiling"],
    ],
  },
];

function WhitecraigsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={whitecraigsImage}
          alt="9.4.4 Dolby Atmos home cinema with star ceiling in Whitecraigs, Glasgow"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/65 to-background"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <p className="eyebrow">Case Study · Whitecraigs, Glasgow</p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            A reference home cinema in Whitecraigs.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A dedicated 9.4.4 Dolby Atmos room built for a family who take film seriously —
            engineered, calibrated and lit to disappear the moment the screen lights up.
          </p>
        </div>
      </section>

      {/* The brief */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading eyebrow="The Brief" title="Cinema-grade, without compromise." />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground lg:pt-12">
              <p>
                The brief for this Whitecraigs residence was a true reference room: full Dolby Atmos
                immersion, a genuine widescreen cinema image, and lighting that could move from
                practical to atmospheric without a single visible switch bank.
              </p>
              <p>
                We designed the room around a 9.4.4 speaker layout — nine ear-level channels, four
                subwoofers and four height channels — with every loudspeaker concealed behind an
                acoustically transparent screen and fabric walls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spec sheet */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="The System"
            title="Specification."
            lede="Chosen for performance and longevity, then calibrated in the room."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {SPECS.map((group) => (
              <div key={group.group} className="rounded-lg border border-border bg-card p-6 sm:p-8">
                <h2 className="eyebrow">{group.group}</h2>
                <dl className="mt-5 space-y-4">
                  {group.items.map(([term, desc]) => (
                    <div key={term}>
                      <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {term}
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-foreground">{desc}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail sections */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <SectionHeading eyebrow="The Room" title="Nine channels, four subs, four heights." />
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                M&amp;K's IW300 handles front left, centre and right duties behind the screen, with
                IW150T Tripole surrounds wrapping the seating and IW150 / IW150A loudspeakers
                covering the remaining surround and Atmos height positions. Bass comes from multiple
                M&amp;K subwoofers — including the X+ Series and in-wall IW28S — distributed around
                the room for even, effortless low frequencies at every seat.
              </p>
              <p>
                The StormAudio ISR Fusion 20 ties it all together: twenty channels of processing and
                amplification with room calibration that lets us tune the system to the space, not
                the spec sheet.
              </p>
            </div>
          </div>
          <img
            src={cinemaImage}
            alt="Tiered seating and acoustic panelling inside the Whitecraigs cinema"
            width={1920}
            height={1080}
            loading="lazy"
            className="aspect-video w-full rounded-lg border border-border object-cover"
          />
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                A true widescreen image.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                The JVC DLA-NZ8 laser projector fires through a Panamorph DCR-J1 anamorphic lens
                onto a 192-inch Projecta fixed-frame screen — filling the full Cinemascope ratio
                without black bars, exactly as the director framed it. Sources include Apple TV and
                a high-specification Panasonic Blu-ray player for reference-quality disc playback.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Light that sets the scene.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Architectural LED lighting runs on 2700–6000K tunable-white COB fittings, from
                bright practical light for cleaning to a warm glow that fades as the film starts. A
                Starscape fibre-optic ceiling completes the room. Everything — projector, processor,
                sources, lighting and masking — runs from{" "}
                <Link to="/control4-glasgow" className="text-primary hover:underline">
                  Control4
                </Link>{" "}
                with a Halo remote: one button, and the room does the rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
          <p className="eyebrow">The Result</p>
          <blockquote className="mt-6 text-balance font-display text-2xl font-medium leading-snug sm:text-3xl">
            “You stop noticing the room within the first minute of the film. That's the entire
            point.”
          </blockquote>
          <p className="mt-6 text-sm text-muted-foreground">
            Private residence, Whitecraigs, Glasgow — designed, installed and calibrated by 1080
            Solutions.
          </p>
          <div className="mt-10">
            <CtaPrimary to="/contact">Discuss Your Cinema Room</CtaPrimary>
          </div>
        </div>
      </section>

      <AreasServed intro="Home cinema design and installation across Glasgow, Whitecraigs, Newton Mearns, Giffnock, Bearsden, Milngavie, Bothwell and Central Scotland." />
      <CtaBand
        title="Planning a cinema room?"
        lede="From media walls to dedicated theatres, we design and build cinemas across Glasgow and Central Scotland."
      />
    </>
  );
}
