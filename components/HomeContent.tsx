"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { InfoBar, IconTelegram } from "@/components/InfoBar";
import { PosterRow } from "@/components/PosterRow";
import { Tibeb } from "@/components/Tibeb";
import { site } from "@/content/site";
import { pastNights } from "@/content/pastNights";
import { bookCategories, books } from "@/content/books";

export function HomeContent() {
  const { t, lang } = useLanguage();
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.venue.mapQuery)}`;

  return (
    <>
      {/* Full-screen opening: the room itself, with the name too big for the frame. */}
      <section className="relative flex h-[calc(100svh-6.75rem)] min-h-[34rem] flex-col justify-between overflow-hidden bg-ink text-parchment md:h-[calc(100svh-3.8125rem)]">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          aria-label={lang === "am" ? "ካለፈ ምሽት የተወሰደ ቪዲዮ" : "Video from a past night at Carmel Kitchen"}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/20 to-ink" />

        <div className="relative mx-auto flex w-full max-w-7xl items-start justify-between gap-6 px-4 pt-6 sm:px-8 sm:pt-10">
          <p className="max-w-md text-lg leading-snug text-parchment sm:text-xl">
            {lang === "am" ? site.missionAm : site.missionEn}
          </p>
          <span className="hidden shrink-0 rounded-full bg-ink/70 px-3 py-1.5 text-sm font-semibold backdrop-blur-sm sm:block">
            {t.about.photoCaption}
          </span>
        </div>

        {/* The name at the full width of the screen, in gold so it sits in the
            room's warm light rather than glaring. Phones stack its two words. */}
        <h1 className="relative mx-auto w-full max-w-7xl px-4 pb-6 font-display text-[26vw] font-black leading-[0.85] text-gold [font-variation-settings:'wdth'_70] sm:whitespace-nowrap sm:px-8 sm:pb-8 sm:text-[min(14vw,13rem)]">
          {site.nameAm.split(" ").map((word, i) => (
            <span key={word} className="block sm:inline">
              {i > 0 && <span className="hidden sm:inline"> </span>}
              {word}
            </span>
          ))}
        </h1>
      </section>
      <Tibeb />

      {/* The night's programme, given its own screen. */}
      <section className="bg-ink text-parchment">
        <div className="mx-auto grid min-h-[calc(100svh-3.8125rem)] max-w-7xl content-center gap-10 px-4 py-16 sm:px-8 lg:grid-cols-12 lg:gap-12">
          <h2 className="type-display lg:col-span-5">{t.programme.heading}</h2>

          {/* The running order: each part rides its own rule, like a printed programme. */}
          <div className="lg:col-span-7">
            <ol>
              {t.programme.parts.map((part, i) => (
                <li
                  key={part.key}
                  className="programme-part relative pb-8 pt-5"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <span aria-hidden="true" className="programme-rule absolute inset-x-0 top-0 h-0.5 bg-gold" />
                  <h3 className="font-display text-[1.75rem] font-extrabold leading-tight [font-variation-settings:'wdth'_78] sm:text-[2.25rem]">
                    {part.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-lg leading-relaxed text-sand">{part.body}</p>
                </li>
              ))}
            </ol>
            <p
              className="programme-part relative pt-4 text-sm text-sand"
              style={{ "--i": 3 } as React.CSSProperties}
            >
              <span aria-hidden="true" className="programme-rule absolute inset-x-0 top-0 h-0.5 bg-gold/50" />
              {t.programme.coffee}
            </p>
          </div>

          <InfoBar className="lg:col-span-12" />
        </div>
      </section>

      {/* How it began */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:py-28">
        <div className="lg:col-span-7">
          <h2 className="type-h2 text-ink">{t.about.heading}</h2>
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-ink">{t.about.origin}</p>
        </div>
        {/* The house roundel from the posters, at the scale of a seal. */}
        <Image
          src="/images/logo.png"
          alt={`${site.nameAm} · ${site.taglineAm}`}
          width={1024}
          height={1024}
          sizes="(min-width: 1024px) 26rem, 70vw"
          className="mx-auto w-[min(70vw,26rem)] lg:col-span-4 lg:col-start-9"
        />
      </section>

      {/* Past nights, as the posters that announced them */}
      <section className="bg-ink pb-14 pt-20 text-parchment lg:pb-20 lg:pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <h2 className="type-h2">{t.pastNights.heading}</h2>
          <p className="mt-4 max-w-xl text-lg text-sand">{t.pastNights.intro}</p>
        </div>
        <PosterRow nights={pastNights} className="mt-10">
          <Link
            href="/guests"
            className="inline-flex min-h-12 items-center rounded-full border-2 border-parchment/40 px-6 font-semibold transition-colors hover:border-parchment"
          >
            {t.pastNights.allGuests}
          </Link>
        </PosterRow>
      </section>

      {/* The shelf */}
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:py-28">
        <div className="lg:col-span-6">
          <h2 className="type-h2 text-ink">{t.shelf.heading}</h2>
          <p className="mt-6 max-w-[55ch] text-lg leading-relaxed">{t.shelf.body}</p>
          <ul className="mt-8 border-t-2 border-ink">
            {bookCategories.map((category) => {
              const count = books.filter((book) => book.category === category.key).length;
              return (
                <li key={category.key}>
                  <Link
                    href={`/books#${category.key}`}
                    className="group flex items-baseline justify-between gap-4 border-b border-ink/20 py-4"
                  >
                    <span className="font-display text-2xl font-extrabold text-ink [font-variation-settings:'wdth'_80] group-hover:text-gold-deep">
                      {lang === "am" ? category.labelAm : category.labelEn}
                    </span>
                    <span className="text-sm font-semibold text-ink-soft">
                      {count} {count === 1 ? t.booksPage.shelf : t.booksPage.shelves}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/books"
            className="mt-8 inline-flex min-h-11 items-center rounded-full bg-ink px-6 font-semibold text-parchment transition-colors hover:bg-ink-deep"
          >
            {t.shelf.seeAll}
          </Link>
        </div>
        <Link
          href="/books"
          aria-label={t.shelf.seeAll}
          className="relative block aspect-[2/3] overflow-hidden rounded-[1.75rem] bg-ink lg:col-span-5 lg:col-start-8"
        >
          <Image
            src={books[0].cover}
            alt=""
            fill
            sizes="(min-width: 1024px) 40vw, 92vw"
            className="object-cover"
          />
        </Link>
      </section>

      {/* The close: where to be, and the one action */}
      <section className="bg-terracotta text-parchment">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 lg:py-28">
          <h2 className="type-display max-w-4xl">{t.visit.heading}</h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="font-display text-3xl font-extrabold [font-variation-settings:'wdth'_80]">
                {site.venue.nameEn}
              </p>
              <p className="mt-2 text-lg text-cream">
                {lang === "am" ? site.venue.detailAm : site.venue.detailEn},{" "}
                {lang === "am" ? site.location.townAm : site.location.town}
              </p>
              <p className="mt-1 text-lg text-cream">{t.info.when}</p>
              {site.email && (
                <p className="mt-6 text-lg">
                  <a href={`mailto:${site.email}`} className="underline underline-offset-4">
                    {site.email}
                  </a>
                </p>
              )}
            </div>
            <div className="flex flex-col gap-4 lg:col-span-6">
              <p className="max-w-md text-lg text-cream">{t.visit.body}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={site.social.telegram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-parchment px-6 font-bold text-terracotta transition-colors hover:bg-white"
                >
                  <IconTelegram className="h-5 w-5" />
                  {t.visit.join}
                </a>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-12 items-center rounded-full border-2 border-parchment/40 px-6 font-semibold transition-colors hover:border-parchment"
                >
                  {t.visit.directions}
                </a>
              </div>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="self-start py-2 text-cream underline decoration-parchment/50 underline-offset-4 hover:text-parchment"
              >
                {t.visit.instagram}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
