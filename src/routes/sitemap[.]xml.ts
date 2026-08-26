import { createFileRoute } from "@tanstack/react-router";

const BASE_URL = "https://www.1080solutions.co.uk";

const PATHS = [
  "/",
  "/smart-home-glasgow",
  "/control4-glasgow",
  "/home-automation-glasgow",
  "/smart-lighting-glasgow",
  "/lutron-glasgow",
  "/smart-home-for-architects",
  "/smart-home-for-interior-designers",
  "/alarms-and-cctv",
  "/data-networking-and-wifi",
  "/multi-room-audio-and-video",
  "/door-entry-and-access",
  "/home-cinema",
  "/about",
  "/faq",
  "/contact",
  "/projects",
  "/projects/whitecraigs-glasgow",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = PATHS.map((path) =>
          [
            "  <url>",
            `    <loc>${BASE_URL}${path}</loc>`,
            `    <changefreq>${path === "/" ? "weekly" : "monthly"}</changefreq>`,
            `    <priority>${path === "/" ? "1.0" : path === "/smart-home-glasgow" ? "0.9" : "0.8"}</priority>`,
            "  </url>",
          ].join("\n"),
        );

        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...urls,
          "</urlset>",
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
