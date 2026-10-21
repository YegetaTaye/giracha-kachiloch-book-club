"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { Lightbox } from "@/components/Lightbox";
import type { Book } from "@/content/books";

/** One printed shelf sheet; opens full size so its titles can be read. */
export function ShelfSheet({ book }: { book: Book }) {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const title = lang === "am" ? book.titleAm : book.titleEn;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${title}, ${t.booksPage.viewFull}`}
        className="group block w-full overflow-hidden rounded-xl bg-ink"
      >
        <Image
          src={book.cover}
          alt=""
          width={853}
          height={1280}
          sizes="(min-width: 1024px) 280px, (min-width: 640px) 30vw, 46vw"
          className="aspect-[2/3] w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
        />
      </button>
      <p className="mt-2 font-display text-base font-bold leading-snug text-ink">{title}</p>
      {open && <Lightbox src={book.cover} alt={title} onClose={() => setOpen(false)} />}
    </>
  );
}
