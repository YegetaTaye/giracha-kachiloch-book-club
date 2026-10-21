"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { site } from "@/content/site";
import { Tibeb } from "@/components/Tibeb";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-ink-deep text-parchment">
      <Tibeb />
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-2xl font-extrabold [font-variation-settings:'wdth'_80]">
            {site.nameAm} <span className="text-sand">· {site.taglineAm}</span>
          </p>
          <p className="mt-1 text-sm text-sand">
            {site.nameEn} · {t.footer.location}
          </p>
        </div>
        <div className="flex flex-col gap-1 sm:items-end">
          <div className="flex gap-5">
            {site.email && (
              <a href={`mailto:${site.email}`} className="py-2 text-sm font-semibold hover:underline">
                {t.contact.emailLabel}
              </a>
            )}
            <a href={site.social.telegram} target="_blank" rel="noreferrer noopener" className="py-2 text-sm font-semibold hover:underline">
              Telegram
            </a>
            <a href={site.social.instagram} target="_blank" rel="noreferrer noopener" className="py-2 text-sm font-semibold hover:underline">
              Instagram
            </a>
          </div>
          <p className="text-xs text-sand">
            &copy; {new Date().getFullYear()} {site.nameEn}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
