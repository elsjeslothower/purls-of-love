"use client";

import { useState, type FormEvent } from "react";

const contact = {
  eyebrow: "Contact",
  heading: "Get in touch.",
  tagline: "Questions about volunteering, donating yarn, or partnering with us? We'd love to hear from you.",
  email: "purlsoflovebysara@gmail.com",
  presetSubject: "You have a message from the website about {}",
  reasonLabel: "I'm reaching out about",
  reasons: [
    { value: "volunteering", label: "Volunteering" },
    { value: "donating materials", label: "Donating materials" },
    { value: "partnering", label: "Partnering" },
    { value: "other", label: "Other" },
  ],
  otherPlaceholder: "Tell us in a few words",
  messageLabel: "Message",
  submitLabel: "Send",
  helperText: "This opens your email app with the message filled in, addressed to the founder.",
};

export default function Contact() {
  const t = contact;
  const [reason, setReason] = useState<string>(t.reasons[0].value);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const message = formData.get("message") as string;
    const otherReason = (formData.get("otherReason") as string) || "";

    const reasonLabel =
      reason === "other"
        ? otherReason.trim() || t.reasons.find((r) => r.value === "other")!.label.toLowerCase()
        : t.reasons.find((r) => r.value === reason)!.label.toLowerCase();

    const subject = t.presetSubject.replace("{}", reasonLabel);
    const mailtoUrl = `mailto:${t.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoUrl;
  }

  return (
    <section id="contact" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-berry">{t.eyebrow}</p>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {t.heading}
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-foreground-muted">{t.tagline}</p>

        <form onSubmit={handleSubmit} className="mt-10 grid max-w-2xl gap-5">
          <fieldset className="flex flex-col gap-3">
            <legend className="mb-3 font-mono text-xs uppercase tracking-widest text-foreground-muted">
              {t.reasonLabel}
            </legend>
            <div className="flex flex-wrap gap-3">
              {t.reasons.map((option) => (
                <label
                  key={option.value}
                  className="flex cursor-pointer items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm transition-colors has-[:checked]:border-mauve has-[:checked]:text-berry"
                >
                  <input
                    type="radio"
                    name="reason"
                    value={option.value}
                    checked={reason === option.value}
                    onChange={() => setReason(option.value)}
                    className="accent-mauve"
                  />
                  {option.label}
                </label>
              ))}
            </div>
            {reason === "other" && (
              <input
                type="text"
                name="otherReason"
                required
                placeholder={t.otherPlaceholder}
                className="rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-mauve"
              />
            )}
          </fieldset>

          <label className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-foreground-muted">
              {t.messageLabel}
            </span>
            <textarea
              name="message"
              required
              rows={5}
              className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-mauve"
            />
          </label>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="rounded-full bg-mauve px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-berry"
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
