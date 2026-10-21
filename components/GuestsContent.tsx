"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { PageIntro } from "@/components/PageIntro";
import { GuestCard } from "@/components/GuestCard";
import { guests } from "@/content/guests";

// Crops cycled down the masonry so neighbouring portraits never share a
// height, which keeps the columns' edges ragged and irregular.
const CROPS = ["aspect-[3/4]", "aspect-square", "aspect-[2/3]", "aspect-[4/5]", "aspect-[5/4]", "aspect-[3/5]", "aspect-[4/3]", "aspect-[5/7]"];

export function GuestsContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageIntro title={t.guestsPage.heading} intro={t.guestsPage.intro} />
      {/* Masonry: each portrait keeps its own proportions and the columns
          pack them without gaps. */}
      <ul className="mx-auto max-w-7xl columns-1 gap-8 px-4 py-14 sm:columns-2 sm:px-8 lg:columns-3 lg:py-20">
        {guests.map((guest, i) => (
          <li key={guest.slug} className="mb-12 break-inside-avoid">
            <GuestCard guest={guest} crop={CROPS[i % CROPS.length]} />
          </li>
        ))}
      </ul>
    </>
  );
}
