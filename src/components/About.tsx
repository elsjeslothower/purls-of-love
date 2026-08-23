import { basePath } from "@/lib/basePath";

const about = {
  eyebrow: "About Us",
  heading: "Every stitch is a small act of care.",
  paragraphs: [
    "Purls of Love started with a single skein of yarn and a simple idea: handmade things carry a warmth that store-bought ones can't. Today we're a community of volunteer knitters and crocheters who make blankets, hats, and blankets for people going through hard seasons — new babies in the NICU, families in shelters, seniors in care homes, and anyone who could use a reminder that someone out there is thinking of them.",
    "We're entirely volunteer-run and donation-funded. Every pattern we share, every partnership we build, and every finished piece we deliver is powered by people who believe that kindness, made by hand, still matters.",
  ],
  founderName: "Sara Keck",
  founderRole: "Knitter. Crocheter. Founder.",
  founderQuote:
    "“The goal of Purls of Love is to bring warmth and love to individuals in need of support.”",
  // TODO: replace with a real photo (e.g. /about/founder.jpg) and update this path.
  photo: "/about/founder.svg",
  photoAlt: "Sara Keck, founder of Purls of Love",
};

export default function About() {
  const t = about;

  return (
    <section id="about" className="relative overflow-hidden">
      <div
        aria-hidden
        className="animate-stitch-in pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] opacity-15"
      >
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <circle cx="100" cy="100" r="85" fill="none" stroke="var(--color-terracotta)" strokeWidth="1.5" />
          <path
            d="M40 70c30 15 30 45 0 60M70 40c15 30 45 30 60 0M160 70c-30 15-30 45 0 60M70 160c15-30 45-30 60 0"
            fill="none"
            stroke="var(--color-sage)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-5xl gap-12 px-6 py-20 sm:grid-cols-5 sm:items-center">
        <div className="animate-fade-in-up sm:col-span-2">
          <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${basePath}${t.photo}`}
              alt={t.photoAlt}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <p className="mt-4 text-sm font-medium text-foreground">{t.founderName}</p>
          <p className="font-mono text-xs uppercase tracking-widest text-foreground-muted">
            {t.founderRole}
          </p>
        </div>

        <div className="animate-fade-in-up sm:col-span-3" style={{ animationDelay: "80ms" }}>
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-clay">{t.eyebrow}</p>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {t.heading}
          </h1>
          {t.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted">
              {paragraph}
            </p>
          ))}
          <blockquote className="mt-8 max-w-xl border-l-2 border-terracotta pl-5 font-display text-xl italic leading-relaxed text-foreground">
            {t.founderQuote}
          </blockquote>
        </div>
      </div>
    </section>
  );
}
