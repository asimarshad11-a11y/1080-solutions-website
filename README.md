# 1080 Solutions website

Production website for 1080 Solutions / Algo AV, serving Glasgow and Central Scotland.

## Local development

Use a current Node.js LTS release and npm.

```sh
npm ci
npm run dev
```

Quality checks:

```sh
npm run lint
npm run build
```

## Cloudflare Workers

The production build targets the Nitro `cloudflare_module` preset. Build before running the
generated Wrangler configuration:

```sh
npm run build
npm run preview:worker
npm run deploy
```

For Cloudflare Workers Builds, use `npm run build` as the build command and `npm run deploy` as
the deploy command. The production branch is `main`.

## Stack

- TanStack Start
- TypeScript
- React
- Tailwind CSS
- Nitro
- Cloudflare Workers

## Private visitor alerts

The root layout sends one cookie-free visit signal per page lifetime to
`/api/visitor-alert`. On Vercel production, the route uses Vercel's approximate
city header and posts a short message to a private Google Chat space.

Create a Google Chat incoming webhook and add its complete URL as the server-only
`GOOGLE_CHAT_WEBHOOK_URL` environment variable in Vercel. Enable it for Production
only. Never commit the webhook URL or expose it with a `VITE_` prefix.

See [MIGRATION.md](./MIGRATION.md) for the preserved route inventory and launch checklist.

## Contact enquiries (Vercel)

The contact form posts to the same-origin `/api/contact` server route and sends
mail to `sales@1080solutions.co.uk` through Gmail SMTP with TLS. The visitor's
address is Reply-To, never the sender. No confirmation email is sent to visitors.

Required server-only environment variables:

- `GMAIL_SMTP_USER`: `sales@1080solutions.co.uk`.
- `GMAIL_SMTP_APP_PASSWORD`: a dedicated Google App Password for that account,
  stored in Vercel as a Secret. Never add it to the repository or a client-prefixed
  variable. Provision only after the account owner approves mailbox access. Scope
  preview access to the contact-fix branch; do not expose it to arbitrary previews.

Deploy again after adding or changing environment variables. A ready deployment
alone does not prove email delivery. Before production release, verify a uniquely
labelled enquiry actually arrives in the sales inbox and Reply-To is correct.
Without credentials, the endpoint returns an error and preserves the form input.

The honeypot, same-origin check, input limits and browser submission lock reduce
accidental or basic automated submissions. They are not a distributed rate limit.
Before public launch, configure and review a narrowly scoped host-level rate limit
for `POST /api/contact`; do not rely on process memory across serverless instances.
Do not change unrelated firewall rules or disable deployment protection.

Run `npm run test:contact` for mock-only server and client tests (no email sent).
The deployment target is Vercel's Node runtime, built with
`VERCEL=1 NITRO_PRESET=vercel npm run build`. The Gmail SMTP implementation is not
intended for the Cloudflare Workers runtime described in the older section above.
