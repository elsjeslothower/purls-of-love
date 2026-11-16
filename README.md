This is a [Next.js](https://nextjs.org) project for the Purls of Love nonprofit site, built with the same stack as [elsje.codes](https://elsje.codes) and deployed to GitHub Pages.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Before going live

A few placeholders need real content — search for `TODO` across the repo, or check these directly:

- `src/lib/links.ts` — Instagram, Facebook, and email shared by About, Gallery, Contact, and the footer
- `src/components/Gallery.tsx` — `SNAPWIDGET_ID` for the embedded Instagram feed
- `src/components/Donate.tsx` — the real Venmo link
- Content lives in each component (`About.tsx`, `Partners.tsx`, `Patterns.tsx`, ...)

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds a static export (`npm run build` → `out/`) and publishes it to GitHub Pages. Enable Pages in the repo settings with source set to "GitHub Actions".
