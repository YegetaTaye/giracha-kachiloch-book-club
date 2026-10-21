"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { IconTelegram } from "@/components/InfoBar";
import { site } from "@/content/site";
import { Tibeb } from "@/components/Tibeb";

// The organiser's own Telegram, so support offers reach a person directly.
const supportContact = "https://t.me/fretamelaku";

export function SupportContent() {
  const { t } = useLanguage();
  const support = t.supportPage;

  return (
    <>
      <section className="bg-ink text-parchment">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 pt-10 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:pb-14 lg:pt-14">
          <div className="lg:col-span-7">
            <h1 className="type-display">{support.heading}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sand sm:text-xl">{support.intro}</p>
            <p className="mt-6 font-display text-2xl font-extrabold [font-variation-settings:'wdth'_80]">
              {support.note}
            </p>
            <a
              href={supportContact}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-gold px-6 font-bold text-ink transition-colors hover:bg-parchment"
            >
              <IconTelegram className="h-5 w-5" />
              {support.cta}
            </a>
          </div>
          {/* A real night in the room: what support keeps happening. */}
          <figure className="self-center lg:col-span-5">
            <Image
              src="/images/scenes/venue-ambience.jpg"
              alt={support.photoAlt}
              width={800}
              height={800}
              sizes="(min-width: 1024px) 40vw, 92vw"
              className="aspect-square w-full rounded-[1.75rem] object-cover"
              priority
            />
            <figcaption className="mt-3 text-sm text-sand">{support.photoCaption}</figcaption>
          </figure>
        </div>
        <Tibeb />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8 lg:py-16">
        <h2 className="type-h2 text-ink">{support.waysHeading}</h2>
        <ul className="mt-8 grid border-t-2 border-ink md:grid-cols-2 md:gap-x-12">
          {support.ways.map((way) => (
            <li key={way.key} className="border-b border-ink/20 py-7">
              <h3 className="type-h3 text-ink">{way.title}</h3>
              <p className="mt-2 max-w-md text-lg leading-relaxed">{way.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-[62ch] text-lg leading-relaxed text-ink-soft">{support.message}</p>
        <p className="mt-6 flex flex-wrap gap-x-6">
          <a
            href={site.social.telegram}
            target="_blank"
            rel="noreferrer noopener"
            className="py-2 font-semibold text-ink underline decoration-ink/40 underline-offset-4 hover:decoration-ink"
          >
            Telegram
          </a>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="py-2 font-semibold text-ink underline decoration-ink/40 underline-offset-4 hover:decoration-ink"
          >
            Instagram
          </a>
        </p>
      </section>
    </>
  );
}
