import { site } from "@/content/site";

export default function Patterns() {
  const t = site.patterns;

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="animate-fade-in-up">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-clay">{t.eyebrow}</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {t.heading}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted">{t.intro}</p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {t.items.map((pattern, i) => (
          <div
            key={pattern.title}
            className="animate-fade-in-up rounded-2xl border border-border bg-surface p-6"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="rounded-full px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wide"
                style={{
                  background: pattern.level === "Beginner" ? "var(--color-sage)" : "var(--color-honey)",
                  color: "#ffffff",
                }}
              >
                {pattern.level}
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-foreground-muted">
                {pattern.format}
              </span>
            </div>
            <h2 className="mt-4 font-display text-xl font-semibold text-foreground">{pattern.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{pattern.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
