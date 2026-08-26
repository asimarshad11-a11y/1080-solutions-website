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
import multiroomImage from "@/assets/multi-room-av.jpg";

export const Route = createFileRoute("/multi-room-audio-and-video")({
  head: () =>
    seoHead({
      title: "Multi-Room Audio & Video Glasgow | 1080 Solutions",
      description:
        "Multi-room audio and video installation in Glasgow. Music and TV in every room from concealed speakers and one central system — by 1080 Solutions.",
      path: "/multi-room-audio-and-video",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Multi-Room Audio & Video", path: "/multi-room-audio-and-video" },
      ],
      jsonLd: [
        serviceJsonLd({
          name: "Multi-Room Audio and Video Glasgow",
          description:
            "Multi-room audio and video distribution with concealed loudspeakers and centralised equipment across Glasgow and Central Scotland.",
          path: "/multi-room-audio-and-video",
        }),
      ],
    }),
  component: MultiRoomPage,
});

function MultiRoomPage() {
  return (
    <>
      <PageHero
        eyebrow="Multi-Room AV · Glasgow"
        title="Multi-room audio and video in Glasgow."
        lede="A film, a playlist or the match — in any room, from one system. Concealed loudspeakers, central equipment, and control that anyone in the house can use."
        image={multiroomImage}
        imageAlt="Living space with concealed in-ceiling speakers and automated blinds"
      >
        <CtaPrimary to="/contact">Arrange a Consultation</CtaPrimary>
        <CtaSecondary to="/home-cinema">Home Cinema</CtaSecondary>
      </PageHero>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading eyebrow="Every Room" title="Music that follows the household." />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground lg:pt-12">
              <p>
                Multi-room AV done properly is invisible: loudspeakers disappear into ceilings and
                walls, equipment lives in a single ventilated rack, and every room plays its own
                thing — or the whole house plays together when you're entertaining.
              </p>
              <p>
                We design systems on Control4 and Sonos with loudspeakers from Sonance, Origin
                Acoustics and Bang &amp; Olufsen, distributing audio and 4K video over the
                structured network so quality never depends on Wi-Fi luck.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <CardGrid
              cols={3}
              items={[
                {
                  title: "Concealed loudspeakers",
                  text: "In-wall and in-ceiling speakers from Sonance and Origin Acoustics — including plaster-in models that vanish entirely.",
                },
                {
                  title: "Centralised equipment",
                  text: "Sky boxes, streamers and amplifiers live in one rack; every TV gets every source without clutter.",
                },
                {
                  title: "4K video distribution",
                  text: "Any source to any screen over the wired network — no compression artefacts, no remote-control juggling.",
                },
                {
                  title: "Garden & outdoor audio",
                  text: "Weatherproof speakers and buried subwoofers that bring the system outside without disturbing the neighbours.",
                },
                {
                  title: "Simple control",
                  text: "Keypads, touch screens, the Halo remote or your phone — the same interface in every room.",
                  to: "/control4-glasgow",
                },
                {
                  title: "A dedicated cinema too",
                  text: "When a room deserves more, we design reference-grade Dolby Atmos cinemas.",
                  to: "/home-cinema",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Upgrades"
            title="Tidy up a tangle of systems."
            lede="If the house has accumulated a Sonos here, an amp there and a cupboard of mystery remotes, we consolidate it into one documented, supportable system."
          />
          <div className="mt-8">
            <CtaSecondary to="/contact">Discuss an Upgrade</CtaSecondary>
          </div>
        </div>
      </section>

      <AreasServed intro="Multi-room audio and video across Glasgow, Whitecraigs, Newton Mearns, Giffnock, Bearsden, Milngavie, Bothwell and Central Scotland." />
      <CtaBand title="Fill the house with music." />
    </>
  );
}
