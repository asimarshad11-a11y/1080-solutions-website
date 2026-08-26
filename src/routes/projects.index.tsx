import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/Sections";
import { seoHead } from "@/lib/seo";
import whitecraigsImage from "@/assets/whitecraigs-cinema.jpg";
import lightingImage from "@/assets/smart-lighting.jpg";
import heroImage from "@/assets/hero-smart-home.jpg";

export const Route = createFileRoute("/projects/")({
  head: () =>
    seoHead({
      title: "Our Projects | Smart Home & AV Glasgow | 1080 Solutions",
      description:
        "Recent smart home, home cinema and lighting projects by 1080 Solutions across Glasgow and Central Scotland, including a Whitecraigs Dolby Atmos cinema.",
      path: "/projects",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
      ],
    }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Recent work across Glasgow."
        lede="A selection of recent residences. Client privacy matters to us — we publish details only where owners are happy for us to share them."
      />

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          {/* Featured case study */}
          <Link
            to="/projects/whitecraigs-glasgow"
            className="group grid items-center gap-8 overflow-hidden rounded-lg border border-border bg-card lg:grid-cols-2"
          >
            <div className="relative overflow-hidden">
              <img
                src={whitecraigsImage}
                alt="Dolby Atmos home cinema with star ceiling in Whitecraigs, Glasgow"
                width={1920}
                height={1080}
                loading="lazy"
                className="aspect-video h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 sm:p-10">
              <p className="eyebrow">Case Study · Whitecraigs, Glasgow</p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                A reference 9.4.4 Dolby Atmos home cinema.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                M&amp;K loudspeakers throughout, a StormAudio ISR Fusion 20 at the rack, JVC DLA-NZ8
                projection with a Panamorph anamorphic lens onto a 192-inch Projecta screen —
                completed by Control4, tunable-white architectural lighting and a Starscape ceiling.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                View project <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </div>
          </Link>

          {/* Capability snapshot */}
          <div className="mt-16">
            <SectionHeading
              eyebrow="Elsewhere"
              title="The kind of work we do, every week."
              lede="Beyond published case studies, our engineers are at work across Glasgow and Central Scotland on projects like these."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="overflow-hidden rounded-lg border border-border bg-card">
                <img
                  src={lightingImage}
                  alt="Whole-home smart lighting installation"
                  width={1920}
                  height={1080}
                  loading="lazy"
                  className="aspect-video w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold">
                    Whole-home lighting &amp; automation
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Control4 and Lutron lighting, heating and shading installations in family homes
                    across Newton Mearns, Giffnock and Bearsden.
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg border border-border bg-card">
                <img
                  src={heroImage}
                  alt="Smart home living space with concealed AV"
                  width={1920}
                  height={1080}
                  loading="lazy"
                  className="aspect-video w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold">
                    Renovations &amp; system takeovers
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Retrofit automation, networking upgrades and Control4 takeovers in Glasgow's
                    sandstone villas, townhouses and country properties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Your project could be next."
        lede="Tell us about the house and what you'd like it to do — we'll show you relevant examples from our recent work in person."
      />
    </>
  );
}
