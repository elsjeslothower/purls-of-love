import { basePath } from "@/lib/basePath";
import { YarnIcon } from "@/components/icons";

export default function PdfComingSoon() {
  return (
    <section className="flex flex-1 items-center justify-center px-6 py-24">
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <div className="animate-stitch-in flex h-40 w-40 items-center justify-center rounded-full border border-border bg-surface text-mauve">
          <YarnIcon className="h-20 w-20" />
        </div>
        <p className="mt-6 font-mono text-sm uppercase tracking-[0.2em] text-berry">Still on the needles</p>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          This PDF isn&apos;t ready yet.
        </h1>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-foreground-muted">
          We&apos;re still writing up this pattern. Check back soon, or reach out and we can send it your way once
          it&apos;s ready.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`${basePath}/patterns/`}
            className="rounded-full bg-mauve px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-berry"
          >
            Back to patterns
          </a>
          <a
            href={`${basePath}/#contact`}
            className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-mauve hover:text-berry"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}
