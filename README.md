This is a [Next.js](https://nextjs.org) project for the Purls of Love nonprofit site, built with the same stack as [elsje.codes](https://elsje.codes) and deployed to GitHub Pages.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Before going live

A few placeholders need real content — search for `TODO` across the repo, or check these directly:

- `src/content/site.ts` — founder photo path, all copy (Instagram handle `@purlsoflove` is already wired up)
- `src/components/Contact.tsx` — `WEB3FORMS_ACCESS_KEY` (get one free at [web3forms.com](https://web3forms.com))
- `public/about/founder.svg` — replace with a real photo (e.g. `public/about/founder.jpg`) and update the path in `site.ts`
- `src/content/site.ts` `partners.items` — real partner organizations
- `src/content/site.ts` `patterns.items` — real pattern list

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds a static export (`npm run build` → `out/`) and publishes it to GitHub Pages. Enable Pages in the repo settings with source set to "GitHub Actions".
