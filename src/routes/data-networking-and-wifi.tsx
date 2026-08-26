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
import rackImage from "@/assets/network-rack.jpg";

export const Route = createFileRoute("/data-networking-and-wifi")({
  head: () =>
    seoHead({
      title: "Home Networking & Wi-Fi Glasgow | 1080 Solutions",
      description:
        "Home networking and Wi-Fi installation in Glasgow. Enterprise-grade wired networks and whole-property Wi-Fi from 1080 Solutions.",
      path: "/data-networking-and-wifi",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Data Networking & Wi-Fi", path: "/data-networking-and-wifi" },
      ],
      jsonLd: [
        serviceJsonLd({
          name: "Home Networking and Wi-Fi Glasgow",
          description:
            "Structured cabling, enterprise-grade networking and whole-property Wi-Fi design and installation across Glasgow and Central Scotland.",
          path: "/data-networking-and-wifi",
        }),
      ],
    }),
  component: NetworkingPage,
});

function NetworkingPage() {
  return (
    <>
      <PageHero
        eyebrow="Networking · Glasgow"
        title="Data networking and Wi-Fi in Glasgow."
        lede="The silent foundation every smart home depends on: structured cabling, enterprise-grade networking and Wi-Fi that covers the whole property — indoors and out."
        image={rackImage}
        imageAlt="Professionally installed network and AV rack"
      >
        <CtaPrimary to="/contact">Arrange a Consultation</CtaPrimary>
        <CtaSecondary to="/smart-home-glasgow">Smart Home Glasgow</CtaSecondary>
      </PageHero>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading eyebrow="The Foundation" title="Wi-Fi that simply works, everywhere." />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground lg:pt-12">
              <p>
                Thick sandstone walls, foil-backed insulation and sprawling floor plans defeat
                domestic Wi-Fi. We engineer networks the way commercial buildings do: a wired
                backbone to every key location, properly sited wireless access points, and a single
                network that covers the house, garden office and grounds.
              </p>
              <p>
                The result is boring in the best way — video calls that never drop, 4K streaming in
                every room, and a smart home that never hesitates.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <CardGrid
              cols={3}
              items={[
                {
                  title: "Structured cabling",
                  text: "A wired backbone to every TV, access point, camera and key location — installed neatly and documented fully.",
                },
                {
                  title: "Whole-property Wi-Fi",
                  text: "Professionally sited access points delivering seamless roaming across the house and garden, on one network name.",
                },
                {
                  title: "Enterprise-grade equipment",
                  text: "Networks built on Ubiquiti and Araknis — designed for years of silent reliability, with remote management.",
                },
                {
                  title: "Remote monitoring",
                  text: "With a maintenance plan we watch the network's health and resolve most issues before you notice them.",
                },
                {
                  title: "Work from home, properly",
                  text: "Prioritised traffic for video calls, wired desks where it matters and coverage in the garden office.",
                },
                {
                  title: "Built for smart homes",
                  text: "The network underneath Control4, multi-room AV and security — designed together, not as an afterthought.",
                  to: "/smart-home-glasgow",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Surveys"
            title="Wi-Fi dead spots? Start with a survey."
            lede="We measure coverage properly, identify interference and construction issues, and provide a fixed proposal for a network that covers the whole property."
          />
          <div className="mt-8">
            <CtaSecondary to="/contact">Book a Wi-Fi Survey</CtaSecondary>
          </div>
        </div>
      </section>

      <AreasServed intro="Networking and Wi-Fi installation across Glasgow, Bearsden, Milngavie, Whitecraigs, Newton Mearns, Giffnock, Bothwell and Central Scotland." />
      <CtaBand title="Fix the Wi-Fi for good." />
    </>
  );
}
