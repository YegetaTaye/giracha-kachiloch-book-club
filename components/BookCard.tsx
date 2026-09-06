"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Book } from "@/content/books";
import { CoffeeRing } from "@/components/CoffeeRing";

export function BookCard({ book }: { book: Book }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // The card renders inside <Reveal>, and its reveal-up animation leaves a
  // transform on that wrapper. A transformed ancestor becomes the containing
  // block for position: fixed, which pins this overlay to the grid cell instead
  // of the viewport — so the viewer is portalled to <body> to escape it.
  const viewer =
    isOpen && typeof document !== "undefined"
      ? createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Full-screen view of ${book.titleEn}`}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-5 sm:p-10"
            onClick={() => setIsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="fixed right-5 top-5 z-10 rounded-full border border-parchment/40 bg-ink/70 px-4 py-2 font-body-en text-xs uppercase tracking-[0.15em] text-parchment transition-colors hover:border-gold hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:right-8 sm:top-8"
            >
              Close
            </button>
            <Image
              src={book.cover}
              alt={book.titleEn}
              width={1200}
              height={1800}
              sizes="100vw"
              priority
              className="h-auto max-h-full w-auto max-w-full object-contain"
            />
          </div>,
          document.body,
        )
      : null;

  return (
    <article className="mx-auto w-full max-w-[330px]">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative block aspect-[2/3] w-full overflow-hidden bg-parchment-dim text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        aria-label={`View ${book.titleEn} full screen`}
      >
        {book.cover ? (
          <Image
            src={book.cover}
            alt={book.titleEn}
            fill
            sizes="(min-width: 640px) 330px, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="relative flex h-full w-full items-center justify-center border border-dashed border-ink/20 p-6 text-center">
            <CoffeeRing className="absolute inset-0 h-full w-full opacity-70" />
            <span className="relative font-body-en text-xs uppercase tracking-[0.2em] text-ink/40">
              {book.titleEn}
            </span>
          </div>
        )}
        <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-4 pb-4 pt-10 font-body-en text-[10px] uppercase tracking-[0.18em] text-parchment opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          View full screen
        </span>
      </button>

      {viewer}

      <div className="mt-4">
        <p className="font-display-am text-lg text-ink">{book.titleAm}</p>
        <p className="font-body-en text-sm text-ink/55">{book.titleEn}</p>
        <p className="mt-1 font-body-en text-xs uppercase tracking-wide text-terracotta">
          {book.authorName}
        </p>
      </div>
    </article>
  );
}
