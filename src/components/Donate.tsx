const donate = {
  eyebrow: "Donate",
  heading: "Provide support.",
  intro:
    "Purls of Love runs entirely on donated materials and volunteer time. Every dollar goes straight toward yarn, needles, and hooks for our next project — no overhead, no middleman.",
  // TODO: replace with the real Venmo profile link, e.g. "https://venmo.com/u/YourHandle"
  venmoUrl: "https://venmo.com/u/YOUR_VENMO_HANDLE",
  ctaLabel: "Give on Venmo",
  suggestedAmounts: [
    { amount: "$5", description: "A new pattern to knit or crochet" },
    { amount: "$15", description: "A skein of soft, washable yarn" },
    { amount: "$20", description: "2 skeins for a preemie blanket" },
    { amount: "$35", description: "A set of needles or hooks for a new volunteer" },
    { amount: "$50", description: "Materials for a shawl" },
    { amount: "$75", description: "Materials for a full lap blanket" },
  ],
  helperText: "Every suggested amount below links to the same Venmo profile — give whatever feels right.",
};

export default function Donate() {
  const t = donate;

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="animate-fade-in-up">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-berry">{t.eyebrow}</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {t.heading}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted">{t.intro}</p>
        <a
          href={t.venmoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-mauve px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-berry"
        >
          {t.ctaLabel}
        </a>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.suggestedAmounts.map((option, i) => (
          <a
            key={option.amount}
            href={t.venmoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group animate-fade-in-up flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-mauve"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <span className="font-display text-3xl font-semibold text-berry">{option.amount}</span>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{option.description}</p>
            <span className="mt-4 text-sm font-medium text-berry transition-colors group-hover:text-mauve">
              {t.ctaLabel} →
            </span>
          </a>
        ))}
      </div>

      <p className="mt-8 text-xs text-foreground-muted">{t.helperText}</p>
    </section>
  );
}
