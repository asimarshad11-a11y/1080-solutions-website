import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { PHONE_DISPLAY, PHONE_TEL, SERVICES } from "@/lib/site";

const TOP_NAV = [
  { label: "Smart Home", to: "/smart-home-glasgow" },
  { label: "Home Cinema", to: "/home-cinema" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link
          to="/"
          className="flex min-w-0 shrink-0 items-center gap-3"
          aria-label="1080 Solutions home"
        >
          <span className="grid h-9 w-14 shrink-0 place-items-center rounded-sm border border-primary/50 font-display text-sm font-bold tracking-widest text-primary">
            1080
          </span>
          <span className="hidden min-w-0 flex-col leading-tight sm:flex">
            <span className="font-display text-sm font-semibold tracking-[0.18em] text-foreground">
              SOLUTIONS
            </span>
            <span className="text-[0.65rem] font-medium tracking-[0.28em] text-muted-foreground">
              GLASGOW · SCOTLAND
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {TOP_NAV.slice(0, 1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-sm px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}

          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 rounded-sm px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              aria-haspopup="true"
            >
              Services
              <ChevronDown
                className="h-3.5 w-3.5 transition-transform group-hover:rotate-180"
                aria-hidden
              />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 w-[34rem] -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="grid grid-cols-2 gap-1 rounded-lg border border-border bg-popover p-3 shadow-2xl shadow-black/50">
                {SERVICES.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="rounded-md px-3 py-2.5 transition-colors hover:bg-accent"
                  >
                    <span className="block text-sm font-medium text-foreground">{s.label}</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">{s.blurb}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {TOP_NAV.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-sm px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href={PHONE_TEL}
            className="hidden items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary md:flex"
          >
            <Phone className="h-4 w-4 text-primary" aria-hidden />
            {PHONE_DISPLAY}
          </a>
          <Link
            to="/contact"
            className="hidden rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85 lg:inline-flex"
          >
            Arrange a Consultation
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-sm border border-border text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-border bg-background lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-6 sm:px-6" aria-label="Mobile">
            <div className="grid gap-1">
              {[...TOP_NAV, { label: "Contact", to: "/contact" }].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 font-display text-lg font-medium text-foreground hover:bg-accent"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <p className="eyebrow mt-8 px-3">Services</p>
            <div className="mt-2 grid gap-1 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  {s.label}
                </Link>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 border-t border-border px-3 pt-6">
              <a
                href={PHONE_TEL}
                className="flex items-center gap-2 text-lg font-semibold text-foreground"
              >
                <Phone className="h-5 w-5 text-primary" aria-hidden />
                {PHONE_DISPLAY}
              </a>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-sm bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
              >
                Arrange a Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
