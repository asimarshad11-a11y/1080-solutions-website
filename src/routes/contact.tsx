import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { PageHero, SectionHeading } from "@/components/site/Sections";
import { seoHead } from "@/lib/seo";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

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

  // No backend yet: compose a mailto so the enquiry reaches sales@ directly.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Website enquiry — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
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
            <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                    Name
                  </label>
                  <input id="name" name="name" required autoComplete="name" className={inputCls} />
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
                    autoComplete="email"
                    className={inputCls}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                  Phone (optional)
                </label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputCls} />
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
                  placeholder="e.g. New build in Newton Mearns — interested in Control4, lighting and a cinema room."
                  className={inputCls}
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
              >
                Send Enquiry
              </button>
              {sent && (
                <p className="text-sm text-muted-foreground" role="status">
                  Your email app should now open with the enquiry ready to send. If it doesn't,
                  email us directly at {EMAIL} or call {PHONE_DISPLAY}.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
