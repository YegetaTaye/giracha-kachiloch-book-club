"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { LanguageToggle } from "@/components/LanguageToggle";
import { site } from "@/content/site";

export function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/guests", label: t.nav.guests },
    { href: "/books", label: t.nav.books },
    { href: "/support", label: t.nav.supportLong, mobileLabel: t.nav.support },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-parchment/95 text-ink backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-2 sm:px-8">
        <Link href="/" className="flex min-h-11 items-center gap-3">
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <Image
              src="/images/logo-mark.png"
              alt=""
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </span>
          <span className="flex flex-col">
            <span className="font-display text-xl font-extrabold leading-none [font-variation-settings:'wdth'_80]">
              {site.nameAm}
            </span>
            <span lang="en" className="mt-1 text-[0.6875rem] font-semibold uppercase leading-none tracking-[0.2em] text-ink-soft">
              {site.taglineEn}
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2.5 text-[0.9375rem] font-semibold transition-colors ${
                  active ? "bg-ink text-parchment" : "text-ink/80 hover:bg-ink/5 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <LanguageToggle />
      </div>

      <nav
        aria-label="Main"
        className="flex gap-1 overflow-x-auto border-t border-ink/10 px-2 md:hidden"
      >
        {links.map((link) => {
          const active = isActive(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={`whitespace-nowrap border-b-2 px-3 py-3 text-sm font-semibold ${
                active ? "border-terracotta text-ink" : "border-transparent text-ink/75"
              }`}
            >
              {link.mobileLabel ?? link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
