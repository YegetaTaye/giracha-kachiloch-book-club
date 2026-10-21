"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { Lightbox } from "@/components/Lightbox";
import type { Guest } from "@/content/guests";

/**
 * A guest: their portrait, who they are, and their night's poster. Every
 * portrait sits under the same warm ink wash so photos from very different
 * sources read as one set; hover lifts it to show the original colour.
 */
export function GuestCard({ guest, crop = "aspect-[4/5]" }: { guest: Guest; crop?: string }) {
  const { t, lang } = useLanguage();
  const [posterOpen, setPosterOpen] = useState(false);
  const name = lang === "am" ? guest.nameAm : guest.nameEn;

  return (
    <article className="group">
      <div className={`relative overflow-hidden rounded-2xl bg-ink ${crop}`}>
        <Image
          src={guest.image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 46vw, 92vw"
          className="object-cover object-top grayscale-[0.55] sepia-[0.35] transition duration-500 ease-out group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:sepia-0"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/15 to-gold/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0"
        />
      </div>
      <div className="mt-4 border-t-2 border-ink pt-3">
        <h2 className="font-display text-2xl font-extrabold leading-tight text-ink [font-variation-settings:'wdth'_80]">
          {guest.nameAm}
        </h2>
        <p lang="en" className="text-base text-ink-soft">{guest.nameEn}</p>
        <p className="mt-1 text-sm font-semibold text-gold-deep">{lang === "am" ? guest.roleAm : guest.roleEn}</p>
        <button
          type="button"
          onClick={() => setPosterOpen(true)}
          className="mt-2 min-h-11 text-sm font-semibold text-ink underline decoration-ink/40 underline-offset-4 hover:decoration-ink"
        >
          {t.guestsPage.poster}
        </button>
      </div>
      {posterOpen && (
        <Lightbox src={guest.poster} alt={name} onClose={() => setPosterOpen(false)} />
      )}
    </article>
  );
}
