"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function LanguageToggle() {
  const { lang, toggle, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggle}
      className="rounded-full border border-ink/20 px-4 py-1.5 font-body-en text-sm text-ink transition-colors hover:border-gold hover:text-gold"
      aria-label="Switch language"
    >
      <span className={lang === "am" ? "font-body-en" : "font-body-am"}>
        {t.langToggle}
      </span>
    </button>
  );
}
