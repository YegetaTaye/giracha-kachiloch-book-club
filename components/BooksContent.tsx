"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { PageIntro } from "@/components/PageIntro";
import { ShelfSheet } from "@/components/ShelfSheet";
import { bookCategories, books } from "@/content/books";

export function BooksContent() {
  const { t, lang } = useLanguage();

  return (
    <>
      <PageIntro title={t.booksPage.heading} intro={t.booksPage.intro}>
        <nav aria-label={t.booksPage.categories} className="mt-10 flex flex-wrap gap-2">
          {bookCategories.map((category) => (
            <a
              key={category.key}
              href={`#${category.key}`}
              className="inline-flex min-h-11 items-center rounded-full border-2 border-parchment/30 px-5 font-semibold transition-colors hover:border-parchment hover:bg-parchment hover:text-ink"
            >
              {lang === "am" ? category.labelAm : category.labelEn}
            </a>
          ))}
        </nav>
      </PageIntro>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 lg:py-24">
        {bookCategories.map((category) => {
          const categoryBooks = books.filter((book) => book.category === category.key);
          return (
            <section
              key={category.key}
              id={category.key}
              aria-labelledby={`${category.key}-heading`}
              className="scroll-mt-32 pb-20 last:pb-0"
            >
              <div className="flex items-baseline justify-between gap-4 border-b-2 border-ink pb-3">
                <h2 id={`${category.key}-heading`} className="type-h2 text-ink">
                  {lang === "am" ? category.labelAm : category.labelEn}
                </h2>
                <span className="text-sm font-semibold text-ink-soft">
                  {categoryBooks.length}{" "}
                  {categoryBooks.length === 1 ? t.booksPage.shelf : t.booksPage.shelves}
                </span>
              </div>
              <ul className="mt-8 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
                {categoryBooks.map((book) => (
                  <li key={book.slug}>
                    <ShelfSheet book={book} />
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </>
  );
}
