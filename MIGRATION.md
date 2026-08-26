# Legacy Site → GitHub/Cloudflare Migration Notes

## Domain

The new site assumes the production domain `https://www.1080solutions.co.uk`.
Canonical tags, `og:url`, `sitemap.xml` and `robots.txt` all point at this domain.
When going live, point the domain's DNS at the new host and publish.

This GitHub repository is now the single replacement source of truth for the site.
No canonical, sitemap or `og:url` value points at a `lovable.app` host.

## Route inventory: source → destination

### Wix static-page API inventory

| Source URL (Wix)              | Destination URL (this project) | Status                |
| ----------------------------- | ------------------------------ | --------------------- |
| `/`                           | `/`                            | SAME-PATH / preserved |
| `/alarms-and-cctv`            | `/alarms-and-cctv`             | SAME-PATH / preserved |
| `/faq`                        | `/faq`                         | SAME-PATH / preserved |
| `/home-cinema`                | `/home-cinema`                 | SAME-PATH / preserved |
| `/contact`                    | `/contact`                     | SAME-PATH / preserved |
| `/multi-room-audio-and-video` | `/multi-room-audio-and-video`  | SAME-PATH / preserved |
| `/about`                      | `/about`                       | SAME-PATH / preserved |
| `/data-networking-and-wifi`   | `/data-networking-and-wifi`    | SAME-PATH / preserved |
| `/door-entry-and-access`      | `/door-entry-and-access`       | SAME-PATH / preserved |

### Current Search Console sitemap URLs

| Source URL                           | Destination URL (this project)       | Status                |
| ------------------------------------ | ------------------------------------ | --------------------- |
| `/`                                  | `/`                                  | SAME-PATH / preserved |
| `/home-automation-glasgow`           | `/home-automation-glasgow`           | SAME-PATH / preserved |
| `/control4-glasgow`                  | `/control4-glasgow`                  | SAME-PATH / preserved |
| `/smart-lighting-glasgow`            | `/smart-lighting-glasgow`            | SAME-PATH / preserved |
| `/lutron-glasgow`                    | `/lutron-glasgow`                    | SAME-PATH / preserved |
| `/smart-home-for-architects`         | `/smart-home-for-architects`         | SAME-PATH / preserved |
| `/smart-home-for-interior-designers` | `/smart-home-for-interior-designers` | SAME-PATH / preserved |
| `/projects`                          | `/projects`                          | SAME-PATH / preserved |
| `/projects/whitecraigs-glasgow`      | `/projects/whitecraigs-glasgow`      | SAME-PATH / preserved |

**No 301 redirects are required for any URL above — every path is unchanged.**

### Additional page with no legacy equivalent

| URL                   | Notes                                                               |
| --------------------- | ------------------------------------------------------------------- |
| `/smart-home-glasgow` | New cornerstone landing page (primary target: "smart home glasgow") |

## Indexable URL list (matches `/sitemap.xml`)

`/`, `/smart-home-glasgow`, `/control4-glasgow`, `/home-automation-glasgow`,
`/smart-lighting-glasgow`, `/lutron-glasgow`, `/smart-home-for-architects`,
`/smart-home-for-interior-designers`, `/alarms-and-cctv`,
`/data-networking-and-wifi`, `/multi-room-audio-and-video`,
`/door-entry-and-access`, `/home-cinema`, `/about`, `/faq`, `/contact`,
`/projects`, `/projects/whitecraigs-glasgow`

## 301 redirect rules (only if unlisted legacy Wix URLs resurface in GSC)

If Google Search Console reports legacy Wix URLs that are not in the tables above,
map them with 301 redirects at the hosting layer. Suggested mappings for common
Wix patterns:

```
# Example nginx/host-level rules — adjust to the actual legacy URLs GSC reports.
/blank        →  /                (301)
/home         →  /                (301)
/services     →  /smart-home-glasgow  (301)
/security     →  /alarms-and-cctv (301)
/cctv         →  /alarms-and-cctv (301)
/wifi         →  /data-networking-and-wifi (301)
/audio-video  →  /multi-room-audio-and-video (301)
```

Rules of thumb:

1. Never redirect everything to `/` — map each legacy URL to its closest topical
   match so link equity and relevance are preserved.
2. Use 301 (permanent), not 302.
3. After launch, submit `https://www.1080solutions.co.uk/sitemap.xml` in Google
   Search Console and monitor Coverage/Pages for any missed legacy URLs.
4. Keep the redirects in place for at least 12 months.

## Post-launch checklist

- [ ] DNS pointing at new host, HTTPS certificate active
- [ ] `/sitemap.xml` reachable and submitted in Google Search Console
- [ ] `robots.txt` returns the sitemap directive
- [ ] Verify each preserved URL returns HTTP 200 (not a redirect chain)
- [ ] Request indexing for `/smart-home-glasgow`, `/faq`,
      `/smart-home-for-architects` and `/smart-home-for-interior-designers`
- [ ] Watch GSC for 404s from legacy Wix URLs and add 301s per the table above
- [ ] Swap placeholder generated imagery for original photography where available
- [ ] Add the real Google Business Profile review link in the testimonials section
