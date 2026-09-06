"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";

export function SupportContent() {
  const { t } = useLanguage();
  const support = t.supportPage;
  const supportContact = "https://t.me/fretamelaku";
  const options = [
    { ...support.financial, number: "01" },
    { ...support.skills, number: "02" },
    { ...support.books, number: "03" },
    { ...support.materials, number: "04" },
  ];

  return (
    <div className="bg-paper-grain">
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
        <Reveal>
          <div className="flex items-center justify-between gap-8">
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow={support.eyebrow}
                am={support.heading}
                en="Support the House"
              />
              <p className="mt-6 max-w-2xl font-body-en text-base leading-7 text-ink/70">
                {support.intro}
              </p>
              <p className="mt-4 font-display-am text-lg text-terracotta sm:text-xl">
                {support.note}
              </p>
            </div>
            <div className="relative hidden w-full shrink-0 self-center sm:block md:w-[55%]">
              <Image
                src="/support.png"
                alt="Community support"
                width={710}
                height={281}
                sizes="(min-width: 768px) 55vw, 100vw"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-ink/15 sm:grid-cols-2">
          {options.map((option, index) => (
            <Reveal key={option.number} delay={index * 80} className="bg-parchment p-7 sm:p-9">
              <p className="font-body-en text-xs tracking-[0.2em] text-gold">{option.number}</p>
              <h2 className="mt-8 font-display-am text-2xl sm:text-3xl">{option.title}</h2>
              <p className="mt-4 max-w-md font-body-en leading-7 text-ink/65">{option.body}</p>
              <a
                href={supportContact}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-flex font-body-en text-sm text-terracotta underline decoration-terracotta/40 underline-offset-4 transition-colors hover:text-gold"
              >
                {option.action} <span className="ml-2" aria-hidden="true">↗</span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <p className="mx-auto mt-16 max-w-3xl text-center font-body-en text-lg leading-8 text-ink/70 sm:text-xl">
            {support.message}
          </p>
        </Reveal>
      </section>

      <section className="bg-terracotta px-5 py-16 text-parchment sm:px-8 sm:py-20">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="font-display-am text-2xl leading-relaxed sm:text-3xl">{support.closing}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-5 font-body-en text-sm">
            <a href={site.social.instagram} target="_blank" rel="noreferrer noopener" className="underline decoration-parchment/40 underline-offset-4 hover:text-gold">
              {support.instagram} ↗
            </a>
            <a href={site.social.telegram} target="_blank" rel="noreferrer noopener" className="underline decoration-parchment/40 underline-offset-4 hover:text-gold">
              {support.telegram} ↗
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
