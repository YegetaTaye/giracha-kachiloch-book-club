"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function LanguageToggle() {
  const { lang, toggle, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggle}
      lang={lang === "am" ? "en" : "am"}
      className="min-h-11 shrink-0 rounded-full border-2 border-ink/20 px-4 text-sm font-semibold text-ink transition-colors hover:border-ink"
      aria-label={lang === "am" ? "Switch to English" : "ወደ አማርኛ ቀይር"}
    >
      {t.langToggle}
    </button>
  );
}
