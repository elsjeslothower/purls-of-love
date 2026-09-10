import { InstagramIcon } from "./icons";

const orgName = "Purls of Love";

const gallery = {
  eyebrow: "Gallery",
  heading: "Fresh off the needles.",
  paragraph:
    "We post finished pieces, drop-off days, and behind-the-scenes stitching straight from our Instagram.",
  instagramHandle: "purlsoflove",
  instagramUrl: "https://www.instagram.com/purlsoflove/",
};

// SnapWidget (https://snapwidget.com) pulls the live public feed client-side —
// no API tokens or Meta developer app required. But it does require creating a
// widget in their dashboard first (sign up free, connect @purlsoflove, click
// "Get Widget"), which gives you a widget ID unique to that feed. Paste it below.
// TODO: replace with the real widget ID, e.g. "1234567"
const SNAPWIDGET_ID = "";

export default function Gallery() {
  const t = gallery;

  return (
    <section id="gallery" className="mx-auto max-w-5xl px-6 py-20">
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-berry">{t.eyebrow}</p>
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
          className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-mauve hover:text-berry"
        >
          <InstagramIcon className="h-4 w-4" />
          @{t.instagramHandle}
        </a>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface">
        {SNAPWIDGET_ID ? (
          <iframe
            src={`https://snapwidget.com/embed/${SNAPWIDGET_ID}`}
            className="snapwidget-widget h-[520px] w-full border-0"
            allowTransparency
            scrolling="no"
            title={`${orgName} Instagram feed`}
            loading="lazy"
          />
        ) : (
          <div className="flex h-[320px] flex-col items-center justify-center gap-4 px-6 text-center">
            <InstagramIcon className="h-8 w-8 text-foreground-muted" />
            <p className="max-w-sm text-sm leading-relaxed text-foreground-muted">
              The live feed isn&apos;t connected yet — set up a free widget at{" "}
              <a
                href="https://snapwidget.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-berry underline decoration-orchid decoration-2 underline-offset-4 hover:text-mauve"
              >
                snapwidget.com
              </a>{" "}
              and paste the widget ID into <code>SNAPWIDGET_ID</code> in{" "}
              <code>Gallery.tsx</code>. In the meantime, here&apos;s our profile:
            </p>
            <a
              href={t.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-mauve px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-berry"
            >
              <InstagramIcon className="h-4 w-4" />
              @{t.instagramHandle}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
