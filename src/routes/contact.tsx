import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useRef, useState, type FormEvent } from "react";
import { PageHero, SectionHeading } from "@/components/site/Sections";
import { seoHead } from "@/lib/seo";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { submitContact } from "@/lib/contact-submit";

export const Route = createFileRoute("/contact")({
  head: () =>
    seoHead({
      title: "Contact 1080 Solutions | Smart Home Glasgow",
      description:
        "Contact 1080 Solutions about smart home, home cinema, lighting or security projects in Glasgow and Central Scotland. Call 0800 772 0012.",
      path: "/contact",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ],
    }),
  component: ContactPage,
});

const inputCls =
  "w-full rounded-sm border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring";

function ContactPage() {
  const [sent, setSent] = useState(false);

  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const inFlight = useRef(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inFlight.current) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    inFlight.current = true;
    setSending(true);
    setSent(false);
    setError("");
    try {
      await submitContact(Object.fromEntries(data));
      setSent(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Please try again or contact us directly.");
    } finally {
      inFlight.current = false;
      setSending(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Arrange a consultation."
        lede="Tell us about the house and what you'd like it to do. We'll come back to you within one working day."
      />

      <section>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <SectionHeading eyebrow="Get in Touch" title="Talk to us." />
            <div className="mt-8 space-y-5">
              <a
                href={PHONE_TEL}
                className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sm bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Phone
                  </span>
                  <span className="block font-display text-lg font-semibold text-foreground">
                    {PHONE_DISPLAY}
                  </span>
                </span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sm bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Email
                  </span>
                  <span className="block truncate font-display text-lg font-semibold text-foreground">
                    {EMAIL}
                  </span>
                </span>
              </a>
              <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sm bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Area
                  </span>
                  <span className="block font-display text-lg font-semibold text-foreground">
                    Glasgow &amp; Central Scotland
                  </span>
                </span>
              </div>
            </div>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              Consultations are available at your home, from your architect's drawings, or by video
              call. We work with homeowners, architects, interior designers and main contractors.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold">Send an enquiry</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              A few details help us point you to the right engineer.
            </p>
            <form
              className="mt-6 grid gap-4"
              onSubmit={handleSubmit}
              onInput={() => setSent(false)}
              aria-busy={sending}
            >
              <fieldset disabled={sending} className="grid min-w-0 gap-4">
                <div hidden aria-hidden="true">
                  <label htmlFor="website">Leave this field blank</label>
                  <input id="website" name="website" tabIndex={-1} autoComplete="off" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      maxLength={120}
                      autoComplete="name"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={254}
                      autoComplete="email"
                      className={inputCls}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    maxLength={50}
                    autoComplete="tel"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                    About your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    maxLength={5000}
                    placeholder="e.g. New build in Newton Mearns — interested in Control4, lighting and a cinema room."
                    className={inputCls}
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85 disabled:cursor-wait disabled:opacity-60"
                >
                  {sending ? "Sending…" : "Send Enquiry"}
                </button>
              </fieldset>
              <p className="text-xs text-muted-foreground">
                We use your details to respond to your enquiry. Read our{" "}
                <a href="/privacy" className="underline">
                  privacy policy
                </a>
                .
              </p>
              {error && (
                <p className="text-sm text-destructive" role="alert">
                  {error}
                </p>
              )}
              {sent && (
                <p className="text-sm text-muted-foreground" role="status">
                  Thank you. Your enquiry has been sent. We'll reply within one working day.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
