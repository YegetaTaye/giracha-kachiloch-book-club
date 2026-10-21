"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/components/LanguageProvider";

/**
 * Full-screen viewer for a poster or shelf sheet. Portalled to <body> so a
 * transformed ancestor can't become the containing block for position: fixed.
 */
export function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  const { t } = useLanguage();
  const closeRef = useRef<HTMLButtonElement>(null);
  // Callers pass inline handlers; keep the latest in a ref so the mount
  // effect (focus, scroll lock) runs once per open, not on every render.
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseRef.current();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      opener?.focus();
    };
  }, []);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-deep/95 p-4 sm:p-10"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        className="fixed right-4 top-4 z-10 min-h-11 rounded-full bg-parchment px-5 type-label text-ink transition-colors hover:bg-white sm:right-8 sm:top-8"
      >
        {t.common.close}
      </button>
      <Image
        src={src}
        alt={alt}
        width={1280}
        height={1280}
        sizes="100vw"
        className="h-auto max-h-full w-auto max-w-full rounded-lg object-contain"
        onClick={(event) => event.stopPropagation()}
      />
    </div>,
    document.body,
  );
}
