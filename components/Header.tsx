"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { LanguageToggle } from "@/components/LanguageToggle";
import { site } from "@/content/site";

export function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === "/";

  // On the home page the header floats over the full-bleed hero video and
  // only fades in once the reader scrolls past it, so the hero gets the
  // whole screen on first load. Every other page keeps a normal sticky bar.
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const revealed = !isHome || scrolledPastHero;

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => {
      setScrolledPastHero(window.scrollY > window.innerHeight * 0.75);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/guests", label: t.nav.guests },
    { href: "/books", label: t.nav.books },
  ];

  const positionClasses = isHome ? "fixed inset-x-0 top-0" : "sticky top-0";
  const chromeClasses =
    !isHome || revealed
      ? "border-ink/10 bg-parchment/90 opacity-100 backdrop-blur-sm translate-y-0"
      : "pointer-events-none border-transparent opacity-0 -translate-y-2";

  return (
    <header
      className={`z-50 border-b transition-all duration-500 ${positionClasses} ${chromeClasses}`}
      aria-hidden={isHome && !revealed}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-1 ring-ink/10">
            <Image
              src="/images/logo-mark.png"
              alt={`${site.nameEn} logo`}
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display-am text-xl text-ink">
              {site.nameAm}
            </span>
            <span className="font-body-en text-[11px] uppercase tracking-[0.25em] text-ink/50">
              {site.taglineEn}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body-en text-sm tracking-wide transition-colors ${
                  active ? "text-gold" : "text-ink/70 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle />
        </div>
      </div>

      <nav className="flex items-center gap-6 overflow-x-auto border-t border-ink/10 px-5 py-2 sm:hidden">
        {links.map((link) => {
          const active =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap font-body-en text-sm ${
                active ? "text-gold" : "text-ink/70"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
