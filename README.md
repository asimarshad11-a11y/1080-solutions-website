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

See [MIGRATION.md](./MIGRATION.md) for the preserved route inventory and launch checklist.
