"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { BookCard } from "@/components/BookCard";
import { bookCategories, books } from "@/content/books";

export function BooksContent() {
  const { t, lang } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <Reveal className="max-w-2xl">
        <SectionHeading
          eyebrow={t.booksPage.eyebrow}
          am={t.booksPage.heading}
          en={lang === "am" ? "Books" : undefined}
        />
        <p className="mt-5 font-body-en text-base leading-relaxed text-ink/70">
          {t.booksPage.intro}
        </p>
      </Reveal>

      <div className="mt-14 space-y-20">
        {bookCategories.map((category) => {
          const categoryBooks = books.filter(
            (book) => book.category === category.key,
          );

          return (
            <section key={category.key} aria-labelledby={`${category.key}-heading`}>
              <div className="flex items-baseline justify-between gap-4 border-b border-ink/15 pb-3">
                <h2
                  id={`${category.key}-heading`}
                  className="font-display-am text-2xl text-terracotta sm:text-3xl"
                >
                  {lang === "am" ? category.labelAm : category.labelEn}
                </h2>
                <span className="font-body-en text-xs uppercase tracking-[0.2em] text-ink/45">
                  {categoryBooks.length} {categoryBooks.length === 1 ? "book" : "books"}
                </span>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-14 sm:grid-cols-3">
                {categoryBooks.map((book, i) => (
                  <Reveal key={book.slug} delay={(i % 3) * 90}>
                    <BookCard book={book} />
                  </Reveal>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
