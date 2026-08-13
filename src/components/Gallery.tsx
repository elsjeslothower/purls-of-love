import { site } from "@/content/site";
import { InstagramIcon } from "./icons";

// SnapWidget (https://snapwidget.com) pulls the live public feed for @purlsoflove
// client-side — no API tokens or Meta developer app required. Grab your own embed
// src from snapwidget.com if you want a different layout/size than the default.
export default function Gallery() {
  const t = site.gallery;

  return (
    <section id="gallery" className="mx-auto max-w-5xl px-6 py-20">
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-clay">{t.eyebrow}</p>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {t.heading}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-foreground-muted">{t.paragraph}</p>
        </div>
        <a
          href={t.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-terracotta hover:text-clay"
        >
          <InstagramIcon className="h-4 w-4" />
          @{t.instagramHandle}
        </a>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface">
        <iframe
          src={`https://snapwidget.com/embed/instagram-widget?handle=${t.instagramHandle}`}
          className="h-[520px] w-full border-0"
          title={`${site.orgName} Instagram feed`}
          loading="lazy"
        />
      </div>
    </section>
  );
}
