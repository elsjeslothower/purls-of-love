const partners = {
  eyebrow: "Partners",
  heading: "Organizations we work alongside.",
  paragraph:
    "We partner with hospitals, shelters, and community groups to make sure every handmade piece reaches someone who needs it.",
  items: [
    {
      name: "Salem Health Cancer Resource Center",
      blurb: "Handmade items to provide comfort during difficult treatments. Most useful: hats, scarves, and blankets.",
      href: "https://www.salemhealth.org/services/cancer",
    },
    {
      name: "The Kindness Club",
      blurb: "Provides food bags and clothes to at-risk students in Dallas, Oregon.",
      href: "https://www.thekindnessclubdallasoregon.com/",
    },
    {
      name: "Purls of Love: Santas for Seniors",
      blurb: "A Purls of Love seasonal event. Handmade cards and knit or crocheted clothes given to senior citizens who do not have any family with whom to spend the holidays.",
      href: "https://elsjeslothower.github.io/purls-of-love/#contact",
    },
    {
      name: "Salem Health NICU",
      blurb: "NICU hats and preemie blankets delivered to families. If you would like to volunteer for this effort, please reach out before beginning a project, as there are specific requirements for these items.",
      href: "https://www.salemhealth.org/services/family-birth-center/neonatal-intensive-care-unit",
    },
  ],
};

export default function Partners() {
  const t = partners;

  return (
    <section id="partners" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-berry">{t.eyebrow}</p>
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
              className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-colors hover:border-mauve"
            >
              <span
                aria-hidden
                className="flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-semibold text-white"
                style={{ background: "var(--color-lavender)" }}
              >
                {partner.name.charAt(0)}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                {partner.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{partner.blurb}</p>
              <span className="mt-4 text-sm font-medium text-berry transition-colors group-hover:text-mauve">
                Visit site →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
