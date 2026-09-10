"use client";

import { useRouter } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { YarnIcon } from "@/components/icons";

export default function NotFound() {
  const router = useRouter();

  function goBack() {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  }

  return (
    <>
      <Nav />
      <main className="flex flex-1 items-center justify-center px-6 py-24">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <div className="animate-stitch-in flex h-40 w-40 items-center justify-center rounded-full border border-border bg-surface text-mauve">
            <YarnIcon className="h-20 w-20" />
          </div>
          <p className="mt-6 font-mono text-sm uppercase tracking-[0.2em] text-berry">Page not found</p>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            This thread ran out.
          </h1>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-foreground-muted">
            We couldn&apos;t find the page you&apos;re looking for. Let&apos;s get you back to the good stuff.
          </p>
          <button
            type="button"
            onClick={goBack}
            className="mt-8 rounded-full bg-mauve px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-berry"
          >
            Go back
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
