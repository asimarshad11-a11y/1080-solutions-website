import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { AREAS, EMAIL, PHONE_DISPLAY, PHONE_TEL, SERVICES, SITE_LEGAL_NAME } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-14 place-items-center rounded-sm border border-primary/50 font-display text-sm font-bold tracking-widest text-primary">
                1080
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-sm font-semibold tracking-[0.18em]">
                  SOLUTIONS
                </span>
                <span className="text-[0.65rem] font-medium tracking-[0.28em] text-muted-foreground">
                  ALGO AV · GLASGOW
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Smart home, home cinema, lighting, networking and security specialists serving Glasgow
              and Central Scotland.
            </p>
            <div className="mt-6 space-y-2.5 text-sm">
              <a
                href={PHONE_TEL}
                className="flex items-center gap-2.5 font-semibold text-foreground hover:text-primary"
              >
                <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                {EMAIL}
              </a>
              <p className="flex items-center gap-2.5 text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                Glasgow &amp; Central Scotland
              </p>
            </div>
          </div>

          <nav aria-label="Footer services">
            <h2 className="eyebrow">Services</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.to}>
                  <Link
                    to={s.to}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer more services">
            <h2 className="eyebrow">More Services</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.slice(5).map((s) => (
                <li key={s.to}>
                  <Link
                    to={s.to}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer company">
            <h2 className="eyebrow">Company</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/projects/whitecraigs-glasgow"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Whitecraigs Home Cinema
                </Link>
              </li>
              <li>
                <Link
                  to="/smart-home-for-architects"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  For Architects
                </Link>
              </li>
              <li>
                <Link
                  to="/smart-home-for-interior-designers"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  For Interior Designers
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <p className="text-xs leading-relaxed text-muted-foreground">
            Areas served: {AREAS.join(" · ")}
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            © {new Date().getFullYear()} {SITE_LEGAL_NAME} trading as Algo AV. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
