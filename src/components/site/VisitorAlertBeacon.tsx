import { useEffect } from "react";

type AlertWindow = Window & {
  __visitorAlertSent?: boolean;
};

/**
 * Sends one lightweight visit signal for the lifetime of the current page.
 *
 * Deliberately avoids cookies, localStorage and persistent visitor IDs. Client-side
 * navigation keeps the root mounted, so browsing another page does not create a
 * second alert. A full reload or a new tab is treated as a new visit.
 */
export function VisitorAlertBeacon() {
  useEffect(() => {
    const alertWindow = window as AlertWindow;
    let cancelled = false;

    const sendAlert = () => {
      if (
        cancelled ||
        alertWindow.__visitorAlertSent ||
        navigator.webdriver ||
        document.visibilityState !== "visible"
      ) {
        return;
      }

      alertWindow.__visitorAlertSent = true;

      void fetch("/api/visitor-alert", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          path: window.location.pathname,
          title: document.title,
          referrer: document.referrer,
        }),
        credentials: "omit",
        keepalive: true,
      }).catch(() => {
        // Visitor alerts must never interrupt or visibly affect the website.
      });
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        sendAlert();
      }
    };

    const timeoutId = window.setTimeout(sendAlert, 900);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return null;
}
