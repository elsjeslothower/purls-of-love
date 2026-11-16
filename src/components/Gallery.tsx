import { InstagramIcon } from "./icons";
import SocialLinks from "./SocialLinks";

const orgName = "Purls of Love";

const gallery = {
  eyebrow: "Gallery",
  heading: "Fresh off the needles.",
  paragraph:
    "For the latest updates, follow us on Instagram and Facebook. We post finished pieces, drop-off days, and behind-the-scenes stitching.",
};

// SnapWidget (https://snapwidget.com) pulls the live public feed client-side.
// To turn on the embedded feed: sign up free, connect @purlsoflovebysara, click
// "Get Widget", and paste the widget ID below. Until then visitors see the
// fallback card with the follow buttons above.
// TODO: replace with the real widget ID, e.g. "1234567"
const SNAPWIDGET_ID = "";//"1130602";

export default function Gallery() {
  const t = gallery;

  return (
    <section id="gallery" className="mx-auto max-w-5xl px-6 py-20">
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-berry">{t.eyebrow}</p>
      <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
        {t.heading}
      </h2>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-foreground-muted">{t.paragraph}</p>
      <SocialLinks className="mt-6" showEmail={false} />

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
          <div className="flex h-[240px] flex-col items-center justify-center gap-4 px-6 text-center">
            <InstagramIcon className="h-8 w-8 text-foreground-muted" />
            <p className="max-w-sm text-sm leading-relaxed text-foreground-muted">
              Our newest photos are on Instagram and Facebook. Follow along to see what we&apos;re
              making.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
