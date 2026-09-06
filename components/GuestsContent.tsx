"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { GuestCard } from "@/components/GuestCard";
import { guests } from "@/content/guests";

export function GuestsContent() {
  const { t, lang } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <Reveal className="max-w-2xl">
        <SectionHeading
          eyebrow={t.guestsPage.eyebrow}
          am={t.guestsPage.heading}
          en={lang === "am" ? "Writers & Poets" : undefined}
        />
        <p className="mt-5 font-body-en text-base leading-relaxed text-ink/70">
          {t.guestsPage.intro}
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-3 lg:grid-cols-4">
        {guests.map((guest, i) => (
          <Reveal key={guest.slug} delay={(i % 4) * 90}>
            <GuestCard guest={guest} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
