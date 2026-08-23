const partners = {
  eyebrow: "Partners",
  heading: "Organizations we work alongside.",
  paragraph:
    "We partner with hospitals, shelters, and community groups to make sure every handmade piece reaches someone who needs it.",
  items: [
    {
      name: "Riverbend Children's Hospital",
      blurb: "NICU hats and preemie blankets delivered monthly to new families.",
      href: "https://example.org",
    },
    {
      name: "Harborlight Family Shelter",
      blurb: "Seasonal blanket and scarf drives for families in transitional housing.",
      href: "https://example.org",
    },
    {
      name: "Maplewood Senior Center",
      blurb: "Lap blankets and companionship visits for long-term residents.",
      href: "https://example.org",
    },
    {
      name: "Stitches for Veterans",
      blurb: "Warm accessories distributed through regional VA outreach events.",
      href: "https://example.org",
    },
    {
      name: "Willow Creek Women's Shelter",
      blurb: "Care packages with handmade wearables for residents rebuilding their lives.",
      href: "https://example.org",
    },
    {
      name: "Foothill Community Fridge Network",
      blurb: "Weatherproof accessories distributed alongside food resources.",
      href: "https://example.org",
    },
  ],
};

export default function Partners() {
  const t = partners;

  return (
    <section id="partners" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-clay">{t.eyebrow}</p>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {t.heading}
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-foreground-muted">{t.paragraph}</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-colors hover:border-terracotta"
            >
              <span
                aria-hidden
                className="flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-semibold text-white"
                style={{ background: "var(--color-sage)" }}
              >
                {partner.name.charAt(0)}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                {partner.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{partner.blurb}</p>
              <span className="mt-4 text-sm font-medium text-clay transition-colors group-hover:text-terracotta">
                Visit site →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
