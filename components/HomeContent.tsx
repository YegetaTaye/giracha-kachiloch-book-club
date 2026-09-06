"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PullQuote } from "@/components/PullQuote";
import { SmokeWisp } from "@/components/SmokeWisp";
import { CoffeeRing } from "@/components/CoffeeRing";
import { Carousel } from "@/components/Carousel";
import { ArchiveMarquee } from "@/components/ArchiveMarquee";
import { EmailSignupForm } from "@/components/EmailSignupForm";
import { BookCard } from "@/components/BookCard";
import { site } from "@/content/site";
import { pastNights } from "@/content/pastNights";
import { featuredBooks } from "@/content/books";

function IconMail({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </svg>
  );
}

function IconPin({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

// Stand-in photos until real event footage (book discussion, a poet reading,
// the guitarist playing) replaces these — swap the files in
// /public/images/scenes/ and this list, no other changes needed.
const aboutSlides = [
  {
    src: "/images/scenes/carousel-book-discussion.jpg",
    alt: "Readers gathered around a book in conversation",
  },
  {
    src: "/images/scenes/carousel-poetry-reading.jpg",
    alt: "A poet reading aloud at the microphone",
  },
  {
    src: "/images/scenes/carousel-guitar.jpg",
    alt: "Acoustic guitar played between readings",
  },
];

export function HomeContent() {
  const { t, lang } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-dvh min-h-[560px] items-end overflow-hidden bg-ink text-parchment">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        >
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <SmokeWisp className="absolute right-8 top-10 h-40 w-24 opacity-60 sm:right-16" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20">
          <p className="font-body-en text-xs uppercase tracking-[0.3em] text-gold">
            {site.location.town} · {site.location.country}
          </p>
          <h1 className="mt-4 max-w-3xl font-display-am text-4xl leading-[1.15] text-balance text-parchment sm:text-6xl md:text-7xl">
            {site.nameAm}
          </h1>
          <p className="mt-2 max-w-xl font-display-en text-lg italic text-parchment/75 sm:text-2xl">
            {site.taglineEn} — {site.missionEn}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#community"
              className="rounded-full bg-gold px-6 py-3 font-body-en text-sm font-medium text-ink transition-colors hover:bg-parchment"
            >
              {t.hero.cta}
            </a>
            <span className="font-body-en text-sm text-parchment/60">
              {lang === "am"
                ? site.nextGathering.patternAm
                : site.nextGathering.patternEn}
            </span>
          </div>
        </div>
      </section>

      {/* Next gathering strip */}
      <section className="border-b border-ink/10 bg-parchment-dim">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <p className="font-body-en text-xs uppercase tracking-[0.2em] text-gold">
              {t.nextGathering.eyebrow}
            </p>
            <p className="mt-1 font-display-am text-xl text-ink">
              {lang === "am"
                ? site.nextGathering.themeAm
                : site.nextGathering.themeEn}
            </p>
            <p className="font-body-en text-sm text-ink/60">
              {lang === "am"
                ? site.nextGathering.dateAm
                : site.nextGathering.dateEn}{" "}
              · {site.venue.nameEn}, {site.location.town}
            </p>
          </div>
          <a
            href="#community"
            className="inline-block whitespace-nowrap rounded-full border border-ink/25 px-5 py-2 font-body-en text-sm text-ink transition-colors hover:border-gold hover:text-gold"
          >
            {t.nextGathering.notify}
          </a>
        </div>
      </section>

      {/* About / Ceremony */}
      <section className="relative overflow-hidden px-5 py-24 sm:px-8">
        <CoffeeRing className="pointer-events-none absolute -left-16 -top-10 h-72 w-72" />
        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow={t.about.eyebrow}
              am={t.about.heading}
              en={lang === "am" ? "The Ceremony" : undefined}
            />
          </Reveal>

          <div className="mt-14 grid gap-x-16 gap-y-10 lg:grid-cols-[0.85fr_1fr]">
            {/* Sticky, cross-fading carousel — stays in view while the story column
                scrolls past it. See aboutSlides above to swap in real footage. */}
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <div className="group relative aspect-[4/5] overflow-hidden bg-parchment-dim">
                <Carousel slides={aboutSlides} />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink/10" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 font-body-en text-[11px] uppercase tracking-[0.2em] text-parchment/90">
                  {site.venue.nameEn}, {site.location.town}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute right-3 top-3 origin-top-right -rotate-90 whitespace-nowrap font-body-en text-[10px] uppercase tracking-[0.3em] text-parchment/70"
                >
                  {site.nameAm} · {site.taglineEn}
                </span>
              </div>
            </Reveal>

            {/* Story + ceremony rounds */}
            <div className="flex flex-col gap-12">
              <Reveal>
                <p className="font-body-en text-lg leading-relaxed text-ink/80">
                  {t.about.origin}
                </p>
              </Reveal>

              <Reveal delay={100}>
                <h3 className="font-display-am text-2xl text-terracotta">
                  {t.about.programHeading}
                </h3>
                <p className="mt-3 font-body-en text-base leading-relaxed text-ink/70">
                  {t.about.programIntro}
                </p>

                <ol className="mt-6 flex flex-col divide-y divide-ink/10">
                  {t.about.segments.map((segment, i) => (
                    <li
                      key={segment.key}
                      className="group flex items-start gap-5 py-5 first:pt-0 last:pb-0"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/50 font-body-en text-xs text-gold transition-colors duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                        0{i + 1}
                      </span>
                      <div>
                        <p className="font-display-am text-xl text-ink transition-colors duration-300 group-hover:text-terracotta">
                          {segment.title}
                        </p>
                        <p className="mt-1 font-body-en text-sm leading-relaxed text-ink/65">
                          {segment.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>

          <Reveal delay={120} className="mt-20">
            <PullQuote
              am={site.missionAm}
              en={site.missionEn}
              creditAm={site.nameAm}
              creditEn={site.taglineEn}
              className="mx-auto max-w-3xl text-center"
            />
          </Reveal>
        </div>
      </section>

      {/* Past nights — full archive, as a continuously scrolling right-to-left reel */}
      <section className="overflow-hidden bg-ink py-24 text-parchment">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow={t.pastNights.eyebrow}
              am={t.pastNights.heading}
              en={lang === "am" ? "Past Nights" : undefined}
            />
          </Reveal>
        </div>

        <Reveal delay={100} className="mt-12">
          <ArchiveMarquee nights={pastNights} />
        </Reveal>
      </section>

      {/* Books currently in the club's collection */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow={t.books.eyebrow}
              am={t.books.heading}
                en={lang === "am" ? "Books in hand" : undefined}
            />
            <Link
              href="/books"
              className="font-body-en text-sm text-gold underline underline-offset-4 hover:text-terracotta"
            >
              {t.books.seeAll} →
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {featuredBooks.map((book, i) => (
              <Reveal key={book.slug} delay={(i % 3) * 90}>
                <BookCard book={book} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community / Join */}
      <section
        id="community"
        className="relative overflow-hidden bg-terracotta px-5 py-24 text-parchment sm:px-8"
      >
        <SmokeWisp className="pointer-events-none absolute -bottom-4 left-10 h-48 w-28 opacity-30" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionHeading
              eyebrow={t.community.eyebrow}
              am={t.community.heading}
              en={lang === "am" ? "Join the Community" : undefined}
              align="center"
            />
            <p className="mx-auto mt-5 max-w-xl font-body-en text-base leading-relaxed text-parchment/85">
              {t.community.body}
            </p>
            <div className="mt-8 flex justify-center">
              <EmailSignupForm />
            </div>
            <div className="mt-8 flex justify-center gap-6">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="font-body-en text-sm text-parchment/80 underline underline-offset-4 hover:text-gold"
              >
                Instagram
              </a>
              <a
                href={site.social.telegram}
                target="_blank"
                rel="noreferrer noopener"
                className="font-body-en text-sm text-parchment/80 underline underline-offset-4 hover:text-gold"
              >
                Telegram
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section className="relative overflow-hidden px-5 py-24 sm:px-8">
        <CoffeeRing className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80" />
        <div className="relative mx-auto max-w-6xl">
          <Reveal className="text-center">
            <SectionHeading
              eyebrow={t.contact.eyebrow}
              am={t.contact.heading}
              en={lang === "am" ? "Get in Touch" : undefined}
              align="center"
            />
            <p className="mx-auto mt-4 max-w-lg font-body-en text-base leading-relaxed text-ink/70">
              {t.contact.intro}
            </p>
          </Reveal>

          {/* Channel list — mirrors the numbered-round pattern from the
              Program section above, swapped for icons since these are
              distinct channels rather than sequential steps. Centered as a
              pair so it reads as one balanced unit above the map. */}
          <Reveal>
            <ul className="mx-auto mt-12 flex max-w-3xl flex-col divide-y divide-ink/10 sm:flex-row sm:divide-y-0 sm:divide-x">
              <li className="group flex flex-1 items-start gap-4 py-6 first:pt-0 sm:justify-center sm:px-8 sm:py-0 sm:first:pl-0 sm:last:pr-0">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold transition-colors duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                  <IconMail className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-body-en text-xs uppercase tracking-[0.2em] text-gold">
                    {t.contact.emailLabel}
                  </p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 block font-display-am text-xl text-ink transition-colors duration-300 group-hover:text-terracotta"
                  >
                    {site.email}
                  </a>
                  <p className="mt-1 font-body-en text-sm leading-relaxed text-ink/60">
                    {t.contact.pressNote}
                  </p>
                </div>
              </li>

              <li className="group flex flex-1 items-start gap-4 py-6 last:pb-0 sm:justify-center sm:px-8 sm:py-0 sm:first:pl-0 sm:last:pr-0">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold transition-colors duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                  <IconPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-body-en text-xs uppercase tracking-[0.2em] text-gold">
                    {t.contact.addressLabel}
                  </p>
                  <p className="mt-1 font-display-am text-xl text-ink transition-colors duration-300 group-hover:text-terracotta">
                    {site.venue.nameEn}
                  </p>
                  <p className="font-body-en text-sm leading-relaxed text-ink/60">
                    {lang === "am" ? site.venue.detailAm : site.venue.detailEn},{" "}
                    {site.location.town}, {site.location.country}
                  </p>
                </div>
              </li>
            </ul>
          </Reveal>

          {/* Map — full-width, centered, and considerably larger than the
              About photo card since it's the section's focal point here. */}
          <Reveal delay={100}>
            <div className="group relative mx-auto mt-16 h-[340px] w-full overflow-hidden bg-parchment-dim sm:h-[420px] lg:h-[520px]">
              <iframe
                title={`Map to ${site.venue.nameEn}, ${site.location.town}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.venue.mapQuery)}&output=embed`}
                className="h-full w-full grayscale-[25%] contrast-[1.05] sepia-[10%]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink/10" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <span className="pointer-events-none absolute bottom-4 left-4 font-body-en text-[11px] uppercase tracking-[0.2em] text-parchment/90">
                {t.contact.mapCaption}
              </span>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.venue.mapQuery)}`}
                target="_blank"
                rel="noreferrer noopener"
                className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-parchment/95 px-4 py-2 font-body-en text-xs font-medium text-ink shadow-sm transition-colors hover:bg-gold"
              >
                {t.contact.directions}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
