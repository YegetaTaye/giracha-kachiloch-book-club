"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { site } from "@/content/site";

export function IconTelegram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
    </svg>
  );
}

function IconClock({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className} aria-hidden="true">
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2.5 2.5M5 4 3 6M19 4l2 2" />
    </svg>
  );
}

function IconPin({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

/**
 * The strip every club poster ends with: when | where, then the terracotta
 * Telegram stamp, the action the whole page leads to.
 */
export function InfoBar({ className = "" }: { className?: string }) {
  const { t, lang } = useLanguage();

  return (
    <div className={`grid overflow-hidden rounded-2xl sm:grid-cols-[1fr_1fr_auto] ${className}`}>
      <div className="flex items-center gap-4 bg-gold-deep px-5 py-4 text-parchment">
        <IconClock className="h-9 w-9 shrink-0" />
        <div>
          <p className="type-label">{t.info.usually}</p>
          <p className="mt-0.5 font-display text-lg font-bold leading-tight">{t.info.when}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 bg-gold px-5 py-4 text-ink">
        <IconPin className="h-9 w-9 shrink-0" />
        <div>
          <p className="font-display text-lg font-bold leading-tight">{site.venue.nameEn}</p>
          <p className="text-sm">{lang === "am" ? site.venue.detailAm : site.venue.detailEn}</p>
        </div>
      </div>
      <a
        href={site.social.telegram}
        target="_blank"
        rel="noreferrer noopener"
        className="group flex items-center justify-between gap-4 bg-terracotta px-6 py-4 text-white transition-colors hover:bg-terracotta-pressed"
      >
        <span className="font-display text-xl font-extrabold leading-tight">{t.visit.join}</span>
        <IconTelegram className="h-8 w-8 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}
