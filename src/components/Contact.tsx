"use client";

import { type FormEvent } from "react";
import { site } from "@/content/site";

export default function Contact() {
  const t = site.contact;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const body = `${message}\n\n—\n${name} (${email})`;
    const mailtoUrl = `mailto:${t.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  }

  return (
    <section id="contact" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-clay">{t.eyebrow}</p>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {t.heading}
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-foreground-muted">{t.tagline}</p>

        <form onSubmit={handleSubmit} className="mt-10 grid max-w-2xl gap-5">

          <label className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-foreground-muted">
              {t.subjectLabel}
            </span>
            <input
              type="text"
              name="subject"
              required
              defaultValue={t.presetSubject}
              className="rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-terracotta"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-foreground-muted">
              {t.messageLabel}
            </span>
            <textarea
              name="message"
              required
              rows={5}
              className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-terracotta"
            />
          </label>

          <div className="mt-2 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-clay"
            >
              {t.submitLabel}
            </button>
          </div>
          <p className="text-xs text-foreground-muted">{t.helperText}</p>
        </form>
      </div>
    </section>
  );
}
