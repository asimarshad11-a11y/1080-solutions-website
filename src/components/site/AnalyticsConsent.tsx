import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const MEASUREMENT_ID = "G-HZEC1D6LE8";
const STORAGE_KEY = "1080-analytics-consent";

type ConsentChoice = "granted" | "denied" | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

function installGoogleAnalytics() {
  if (typeof window === "undefined" || window.gtag) return;

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("config", MEASUREMENT_ID, {
    send_page_view: false,
    anonymize_ip: true,
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  script.dataset.analytics = "ga4";
  document.head.appendChild(script);
}

function removeAnalyticsCookies() {
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0]?.trim();
    if (!name || (!name.startsWith("_ga") && name !== "_gid")) continue;
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.1080solutions.co.uk; SameSite=Lax`;
  }
}

export function AnalyticsConsent() {
  const location = useLocation();
  const [choice, setChoice] = useState<ConsentChoice>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "granted" || stored === "denied") setChoice(stored);
  }, []);

  useEffect(() => {
    if (choice !== "granted") {
      setReady(false);
      return;
    }

    window[`ga-disable-${MEASUREMENT_ID}`] = false;
    installGoogleAnalytics();
    setReady(true);
  }, [choice]);

  useEffect(() => {
    if (!ready || !window.gtag) return;
    window.gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: `${location.pathname}${location.searchStr || ""}`,
    });
  }, [location.pathname, location.searchStr, ready]);

  function saveChoice(next: Exclude<ConsentChoice, null>) {
    window.localStorage.setItem(STORAGE_KEY, next);
    setChoice(next);

    if (next === "denied") {
      window[`ga-disable-${MEASUREMENT_ID}`] = true;
      window.gtag?.("consent", "update", { analytics_storage: "denied" });
      removeAnalyticsCookies();
    }
  }

  function resetChoice() {
    window.localStorage.removeItem(STORAGE_KEY);
    if (choice === "granted") {
      window[`ga-disable-${MEASUREMENT_ID}`] = true;
      window.gtag?.("consent", "update", { analytics_storage: "denied" });
      removeAnalyticsCookies();
    }
    setChoice(null);
  }

  if (choice) {
    return (
      <button
        type="button"
        onClick={resetChoice}
        className="fixed bottom-3 left-3 z-50 rounded-sm border border-border bg-background/95 px-3 py-2 text-xs font-medium text-muted-foreground shadow-lg backdrop-blur hover:text-foreground"
      >
        Privacy choices
      </button>
    );
  }

  return (
    <div
      role="dialog"
      aria-label="Analytics privacy choice"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-2xl rounded-lg border border-border bg-background/95 p-4 shadow-2xl backdrop-blur sm:p-5"
    >
      <p className="text-sm font-semibold text-foreground">Help us improve the website?</p>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
        We use Google Analytics only if you agree. It helps us understand which pages people find
        useful. You can say no and the site works normally. Read our{" "}
        <Link to="/privacy" className="text-primary hover:underline">
          privacy notice
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => saveChoice("granted")}
          className="rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/85"
        >
          Allow analytics
        </button>
        <button
          type="button"
          onClick={() => saveChoice("denied")}
          className="rounded-sm border border-border px-4 py-2 text-sm font-semibold text-foreground hover:border-primary/60"
        >
          No thanks
        </button>
      </div>
    </div>
  );
}
