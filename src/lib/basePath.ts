// GitHub Pages serves this project site under /purls-of-love/, not the domain
// root, so next.config.ts sets `basePath` to match. Next.js auto-applies that to
// next/link and next/router, but NOT to plain <a>/<img> tags or metadata icon
// URLs — those need this prefix added by hand wherever they appear.
//
// If a custom domain is ever set up at the root (see public/CNAME), set this
// back to "" and remove `basePath` from next.config.ts.
export const basePath = "/purls-of-love";
