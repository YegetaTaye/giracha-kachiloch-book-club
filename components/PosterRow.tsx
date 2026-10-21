"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { Lightbox } from "@/components/Lightbox";
import type { PastNight } from "@/content/pastNights";

// Pixels per second; slow enough to read a poster title as it passes.
const SPEED = 40;

/**
 * Past-night posters drifting right to left in an endless loop. The list is
 * rendered twice so the wrap point is invisible. It pauses while the visitor
 * hovers, touches, focuses or opens a poster, has its own pause button, and
 * never moves for visitors who prefer reduced motion. Arrows still step it
 * by hand.
 */
export function PosterRow({
  nights,
  className = "",
  children,
}: {
  nights: PastNight[];
  className?: string;
  /** Rendered at the start of the controls row, opposite the arrows. */
  children?: React.ReactNode;
}) {
  const { t, lang } = useLanguage();
  const rowRef = useRef<HTMLUListElement>(null);
  const [open, setOpen] = useState<PastNight | null>(null);
  const [userPaused, setUserPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const holdUntil = useRef(0);
  const hovering = useRef(false);
  const position = useRef(0);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  const running = !userPaused && !reducedMotion && !open;

  useEffect(() => {
    const row = rowRef.current;
    if (!row || !running) return;
    position.current = row.scrollLeft;
    let last = performance.now();
    let frame = requestAnimationFrame(function step(now) {
      const dt = Math.min(now - last, 100) / 1000;
      last = now;
      if (!hovering.current && now > holdUntil.current) {
        const half = row.scrollWidth / 2;
        // Track a float position: scrollLeft rounds to whole pixels.
        position.current += SPEED * dt;
        if (position.current >= half) position.current -= half;
        row.scrollLeft = position.current;
      } else {
        position.current = row.scrollLeft;
      }
      frame = requestAnimationFrame(step);
    });
    return () => cancelAnimationFrame(frame);
  }, [running]);

  const hold = (ms: number) => {
    holdUntil.current = performance.now() + ms;
  };

  const scrollBy = (direction: 1 | -1) => {
    const row = rowRef.current;
    if (!row) return;
    hold(2500);
    const half = row.scrollWidth / 2;
    // Stepping back from the start jumps into the duplicate copy first.
    if (direction === -1 && row.scrollLeft < row.clientWidth) row.scrollLeft += half;
    row.scrollBy({ left: direction * row.clientWidth * 0.8, behavior: "smooth" });
  };

  const track = [...nights, ...nights];

  return (
    <div className={className}>
      <ul
        ref={rowRef}
        className="no-scrollbar flex gap-4 overflow-x-auto px-4 pb-2 sm:gap-6 sm:px-8"
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") hovering.current = true;
        }}
        onPointerLeave={() => {
          hovering.current = false;
        }}
        onTouchStart={() => hold(4000)}
        onFocus={() => {
          hovering.current = true;
        }}
        onBlur={() => {
          hovering.current = false;
        }}
      >
        {track.map((night, i) => {
          const title = lang === "am" ? night.titleAm : night.titleEn;
          const duplicate = i >= nights.length;
          return (
            // Posters keep their own proportions (portrait, square, one wide
            // banner) at a shared height, so the date strip stays readable.
            <li key={`${night.slug}-${i}`} aria-hidden={duplicate || undefined} className="max-w-[86vw] shrink-0">
              <button
                type="button"
                tabIndex={duplicate ? -1 : undefined}
                onClick={() => setOpen(night)}
                className="block overflow-hidden rounded-2xl bg-ink-deep"
                aria-label={title}
              >
                <Image
                  src={night.coverImage}
                  alt=""
                  width={1024}
                  height={1280}
                  sizes="(min-width: 1024px) 420px, 86vw"
                  className="h-[min(26rem,62vh)] w-auto max-w-[86vw] object-contain transition-opacity duration-300 hover:opacity-90"
                />
              </button>
              <p className="mt-3 max-w-xs font-display text-lg font-bold leading-snug">{title}</p>
            </li>
          );
        })}
      </ul>

      <div className="mx-auto mt-6 flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-8">
        <div>{children}</div>
        <div className="flex shrink-0 gap-2">
          {!reducedMotion && (
            <button
              type="button"
              onClick={() => setUserPaused((paused) => !paused)}
              aria-label={userPaused ? t.pastNights.play : t.pastNights.pause}
              aria-pressed={userPaused}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-parchment/40 transition-colors hover:border-parchment"
            >
              {userPaused ? (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" />
                </svg>
              )}
            </button>
          )}
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label={t.pastNights.prev}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-parchment/40 transition-colors hover:border-parchment"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label={t.pastNights.next}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-parchment/40 transition-colors hover:border-parchment"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <Lightbox
          src={open.coverImage}
          alt={lang === "am" ? open.titleAm : open.titleEn}
          onClose={() => setOpen(null)}
        />
      )}
    </div>
  );
}
