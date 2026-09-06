"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export function EmailSignupForm({ className = "" }: { className?: string }) {
  const { t, lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className={`font-body-en text-sm text-gold ${className}`}>
        {lang === "am"
          ? "አመሰግናለሁ! ስለ ቀጣዩ ስብሰባ እናሳውቅዎታለን።"
          : "Thank you — we'll let you know about the next gathering."}
      </p>
    );
  }

  return (
    <form
      className={`flex flex-col gap-3 sm:flex-row ${className}`}
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <input
        type="email"
        required
        placeholder={t.community.emailPlaceholder}
        aria-label={t.community.emailPlaceholder}
        className="w-full rounded-full border border-ink/25 bg-parchment px-5 py-2.5 font-body-en text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none sm:max-w-xs"
      />
      <button
        type="submit"
        className="whitespace-nowrap rounded-full bg-ink px-6 py-2.5 font-body-en text-sm text-parchment transition-colors hover:bg-terracotta"
      >
        {t.community.submit}
      </button>
    </form>
  );
}
