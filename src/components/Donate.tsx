import { site } from "@/content/site";

export default function Donate() {
  const t = site.donate;

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="animate-fade-in-up">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-clay">{t.eyebrow}</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {t.heading}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted">{t.intro}</p>
        <a
          href={t.venmoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-clay"
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
            className="group animate-fade-in-up flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-terracotta"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <span className="font-display text-3xl font-semibold text-clay">{option.amount}</span>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{option.description}</p>
            <span className="mt-4 text-sm font-medium text-clay transition-colors group-hover:text-terracotta">
              {t.ctaLabel} →
            </span>
          </a>
        ))}
      </div>

      <p className="mt-8 text-xs text-foreground-muted">{t.helperText}</p>
    </section>
  );
}
