"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { site } from "@/content/site";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-ink/10 bg-ink text-parchment">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display-am text-2xl">{site.nameAm}</p>
            <p className="mt-1 font-body-en text-sm text-parchment/60">
              {site.nameEn}
            </p>
            <p className="mt-4 font-body-en text-sm text-parchment/70">
              {t.footer.location}
            </p>
          </div>

          <div>
            <p className="mb-3 font-body-en text-xs uppercase tracking-[0.2em] text-gold">
              {t.contact.eyebrow}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="font-body-en text-sm text-parchment/80 underline decoration-gold/40 underline-offset-4 hover:text-gold"
            >
              {site.email}
            </a>
            <p className="mt-3 font-body-en text-xs text-parchment/50">
              {t.contact.pressNote}
            </p>
          </div>

          <div>
            <p className="mb-3 font-body-en text-xs uppercase tracking-[0.2em] text-gold">
              {t.community.follow}
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="font-body-en text-sm text-parchment/80 hover:text-gold"
              >
                Instagram
              </a>
              <a
                href={site.social.telegram}
                target="_blank"
                rel="noreferrer noopener"
                className="font-body-en text-sm text-parchment/80 hover:text-gold"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-parchment/15 pt-6 font-body-en text-xs text-parchment/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.nameEn}. {t.footer.rights}
          </p>
          <p>{site.location.town} · {site.location.country}</p>
        </div>
      </div>
    </footer>
  );
}
