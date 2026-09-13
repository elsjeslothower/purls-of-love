"use client";

import { useState } from "react";
import { basePath } from "@/lib/basePath";

const patterns = {
  eyebrow: "Patterns",
  heading: "Free patterns for our volunteer makers.",
  intro:
    "Every pattern below has been tested by our community and approved for donation projects. Beginner-friendly options are marked, so new volunteers always have a place to start.",

  items: [
    {
      title: "Cardiac Recovery Heart Pillow",
      creator: "Michele Bilyeu",
      level: "Beginner",
      description: "Making a Heart Pillow: Breast Cancer, Cardiac or Recovery of Any Kind. From a local-to-Salem fiber artist.",
      formats: ["Sew"],
      pdfUrl: "/patterns/cardiac-heart-pillow.pdf",
      pdfReady: false,
      websiteUrl: "https://www.with-heart-and-hands.com/2009/09/making-cardiac-heart-pillow.html",
    },
    {
      title: "Giving Hat",
      creator: "Purl Soho",
      level: "Beginner",
      description: "A stretchy ribbed hat that works for kids and adults alike.",
      formats: ["Knit"],
      pdfUrl: "/patterns/purlsoho-giving-hat.pdf",
      pdfReady: true,
      websiteUrl: "https://www.purlsoho.com/create/2025/12/06/giving-hat/",
    },
    {
      title: "Easy Sew Fleece Chemo Cap",
      creator: "Sparkles of Sunshine",
      level: "Beginner",
      description: "An easy sew fleece chemo cap that can be made in just a few minutes. Part of the 'pink ribbon projects' collection.",
      formats: ["Sew"],
      pdfUrl: "/patterns/easy-sew-fleece-chemo-cap.pdf",
      pdfReady: true,
      websiteUrl: "https://www.sparklesofsunshine.com/pink-ribbon-projects-easy-sew-fleece-chemo-cap/",
    },
    {
      title: "Quick Scarf with Pockets",
      creator: "Yarnspirations",
      level: "Beginner",
      description: "A one-skein scarf that knits up in a weekend.",
      formats: ["Crochet"],
      pdfUrl: "/patterns/scarf-with-pockets.pdf",
      pdfReady: true,
      websiteUrl: "https://www.yarnspirations.com/products/caron-marshmallow-scarf-with-pockets?variant=51504861086011",
    },
    {
      title: "Granny Square Blanket",
      creator: "Yarnspirations",
      level: "Intermediate",
      description: "Patchwork Homestead Crochet Granny Blanket from Bernat. Modular, portable, and endlessly customizable.",
      formats: ["Crochet"],
      pdfUrl: "/patterns/granny-square-blanket.pdf",
      pdfReady: true,
      websiteUrl: "https://www.yarnspirations.com/products/bernat-patchwork-homestead-crochet-granny-blanket?variant=51514226934075",
    },
    {
      title: "Ginnel Fingerless Mitts",
      creator: "Claire Walls",
      level: "Beginner",
      description: "Quick handwarmers for shelter and outreach donations.",
      formats: ["Knit"],
      pdfUrl: "/patterns/ginnel-fingerless-mittens.pdf",
      pdfReady: true,
      websiteUrl: "https://www.ravelry.com/patterns/library/ginnel",
    },
    {
      title: "Textured Fingerless Mitts",
      creator: "Knit Picks",
      level: "Expert",
      description: "Diamond handwarmers for shelter and outreach donations that feature a Gansey-inspired stitch pattern.",
      formats: ["Knit"],
      pdfUrl: "/patterns/diamond-textured-mitts.pdf",
      pdfReady: true,
      websiteUrl: "https://www.knitpicks.com/textured-mitts-free-knitting-pattern/p/50705",
    },
    {
      title: "Color Block Beanie",
      creator: "Claire Borchardt",
      level: "Intermediate",
      description: "A vibrant beanie with a colorblock design and fluffy pom-pom.",
      formats: ["Knit"],
      pdfUrl: "/patterns/color-block-beanie.pdf",
      pdfReady: true,
      websiteUrl: "https://www.ravelry.com/patterns/library/color-block-beanie-4",
    },
  ],
};

const levelOptions = ["All", "Beginner", "Intermediate", "Expert"];
const levelColors: Record<string, string> = {
  Beginner: "var(--color-lavender)",
  Intermediate: "var(--color-berry)",
  Expert: "var(--color-mauve)",
};
const fiberOptions = ["All", "Knit", "Crochet", "Sew"];
const fiberColor = "var(--color-orchid)";

function FilterGroup({
  label,
  options,
  selected,
  onSelect,
  getColor,
}: {
  label: string;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
  getColor: (option: string) => string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="font-mono text-xs uppercase tracking-widest text-foreground-muted">{label}</span>
      {options.map((option) => {
        const isSelected = selected === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onSelect(option)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
              isSelected
                ? "text-white"
                : "border-border bg-background text-foreground-muted hover:text-foreground"
            }`}
            style={isSelected ? { borderColor: getColor(option), backgroundColor: getColor(option) } : undefined}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default function Patterns() {
  const t = patterns;
  const [level, setLevel] = useState("All");
  const [fiber, setFiber] = useState("All");

  const visibleItems = t.items.filter(
    (pattern) =>
      (level === "All" || pattern.level === level) && (fiber === "All" || pattern.formats.includes(fiber))
  );

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="animate-fade-in-up">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-berry">{t.eyebrow}</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {t.heading}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted">{t.intro}</p>
      </div>

      <div className="mt-10 flex flex-col gap-3 rounded-2xl border border-border bg-surface p-5">
        <FilterGroup
          label="Skill level"
          options={levelOptions}
          selected={level}
          onSelect={setLevel}
          getColor={(option) => levelColors[option] ?? "var(--color-mauve)"}
        />
        <FilterGroup
          label="Fiber type"
          options={fiberOptions}
          selected={fiber}
          onSelect={setFiber}
          getColor={() => fiberColor}
        />
      </div>

      {visibleItems.length === 0 ? (
        <p className="mt-10 text-sm text-foreground-muted">No patterns match those filters yet.</p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {visibleItems.map((pattern, i) => (
            <div
              key={pattern.title}
              className="animate-fade-in-up flex flex-col rounded-2xl border border-border bg-surface p-6"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="rounded-full px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wide"
                  style={{
                    background: levelColors[pattern.level] ?? "var(--color-mauve)",
                    color: "#ffffff",
                  }}
                >
                  {pattern.level}
                </span>
                {pattern.formats.map((format) => (
                  <span
                    key={format}
                    className="rounded-full px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wide"
                    style={{ background: fiberColor, color: "#ffffff" }}
                  >
                    {format}
                  </span>
                ))}
              </div>
              <p className="mt-4 font-mono text-sm uppercase tracking-[0.2em] text-berry">{pattern.creator}</p>
              <h2 className="mt-2 font-display text-xl font-semibold text-foreground">{pattern.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{pattern.description}</p>

              <div className="mt-auto flex flex-wrap gap-3 pt-5">
                <a
                  href={pattern.pdfReady ? `${basePath}${pattern.pdfUrl}` : `${basePath}/patterns/coming-soon/`}
                  download={pattern.pdfReady}
                  className="rounded-full bg-mauve px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-berry"
                >
                  PDF
                </a>
                <a
                  href={pattern.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border px-4 py-2 text-xs font-medium transition-colors hover:border-mauve hover:text-berry"
                >
                  Original pattern →
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
