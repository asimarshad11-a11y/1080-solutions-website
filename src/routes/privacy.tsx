import { createFileRoute } from "@tanstack/react-router";

import { PageHero, SectionHeading } from "@/components/site/Sections";
import { seoHead } from "@/lib/seo";
import { COMPANY_NUMBER, EMAIL, SITE_LEGAL_NAME, SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () =>
    seoHead({
      title: `Privacy Notice | ${SITE_NAME}`,
      description: `How ${SITE_NAME} handles website visitor and enquiry information.`,
      path: "/privacy",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Privacy", path: "/privacy" },
      ],
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy notice."
        lede="A clear summary of the information this website uses and why."
      />

      <section>
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading eyebrow="Your Information" title="How we handle website data." />

          <div className="prose prose-invert mt-10 max-w-none space-y-9 text-sm leading-7 text-muted-foreground">
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">Who we are</h2>
              <p className="mt-3">
                {SITE_LEGAL_NAME}, trading as {SITE_NAME}, is the controller of information
                described in this notice. We are a company registered in Scotland under company
                number {COMPANY_NUMBER}. You can contact us at{" "}
                <a className="text-primary hover:underline" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">Website visits</h2>
              <p className="mt-3">
                Our hosting provider processes technical request information, including an IP
                address, to deliver and protect the website. For our private visitor alerts, the
                host derives an approximate city or country from that address. We receive only the
                approximate location, visit time, page title and referring website hostname. The
                alert does not include the raw IP address or precise location.
              </p>
              <p className="mt-3">
                This alert uses no cookie, local storage entry or persistent visitor identifier. We
                use the information for our legitimate interest in understanding interest in our
                services and managing website enquiries. Automated traffic and preview deployments
                are filtered where possible.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">Enquiries</h2>
              <p className="mt-3">
                If you contact us, we use the details you provide to answer your enquiry, prepare a
                quotation and take steps requested before entering a contract. We retain business
                correspondence only for as long as needed for the enquiry, our services and legal or
                accounting requirements.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                Service providers and retention
              </h2>
              <p className="mt-3">
                We use Vercel to host the website and Google Workspace to receive private visitor
                alerts and business communications. Visitor alert messages are accessible only to
                authorised Workspace users and are deleted when they are no longer useful for
                understanding recent website activity. Providers may process information under their
                contractual safeguards and applicable data protection terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">Your rights</h2>
              <p className="mt-3">
                Depending on the circumstances, you may ask us for access, correction, deletion or
                restriction, object to processing based on legitimate interests, or raise a concern
                with the UK Information Commissioner&apos;s Office. Email{" "}
                <a className="text-primary hover:underline" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>{" "}
                to exercise a right or ask a privacy question.
              </p>
            </div>

            <p className="border-t border-border pt-6 text-xs">Last updated: 26 August 2026.</p>
          </div>
        </div>
      </section>
    </>
  );
}
