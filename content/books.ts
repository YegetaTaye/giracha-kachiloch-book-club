export type BookCategory =
  | "fiction"
  | "history-and-biography"
  | "nonfiction"
  | "miscellaneous"
  | "novella"
  | "poem";

export type Book = {
  slug: string;
  titleAm: string;
  titleEn: string;
  cover: string;
  category: BookCategory;
};

export type BookCategoryInfo = {
  key: BookCategory;
  labelAm: string;
  labelEn: string;
};

// This is the club's physical inventory. The shelf folders are the source of
// truth; the inventory code keeps a cover identifiable until full bibliographic
// details are added for each book.
export const bookCategories: BookCategoryInfo[] = [
  { key: "fiction", labelAm: "ልብ ወለድ", labelEn: "Fiction" },
  { key: "novella", labelAm: "ኖቬላ", labelEn: "Novella" },
  { key: "poem", labelAm: "ግጥም", labelEn: "Poetry" },
  {
    key: "history-and-biography",
    labelAm: "ታሪክ እና የሕይወት ታሪክ",
    labelEn: "History & Biography",
  },
  { key: "nonfiction", labelAm: "ልብ ወለድ ያልሆነ", labelEn: "Nonfiction" },
  { key: "miscellaneous", labelAm: "የተለያዩ", labelEn: "Miscellaneous" },
];

const shelfBooks: Record<BookCategory, string[]> = {
  fiction: ["n1", "n2", "n3", "n4", "n5", "n6"],
  "history-and-biography": ["hb1"],
  nonfiction: ["nf1"],
  miscellaneous: ["m1", "m2", "m3"],
  novella: ["nv1", "nv2"],
  poem: ["p1", "p2"],
};

// Each image is one printed shelf sheet listing several books, so it is
// titled as a shelf of its category rather than as a single book.
export const books: Book[] = bookCategories.flatMap(({ key, labelAm, labelEn }) =>
  shelfBooks[key].map((code, i) => ({
    slug: `${key}-${code}`,
    titleAm: `${labelAm} · መደርደሪያ ${i + 1}`,
    titleEn: `${labelEn} · Shelf ${i + 1}`,
    cover: `/book-shelf/${key}/${code}.jpg`,
    category: key,
  })),
);

// Keep the homepage compact while giving it a representative title from each
// category. The full categorized inventory is shown on /books.
export const featuredBooks = bookCategories
  .map(({ key }) => books.find((book) => book.category === key))
  .filter((book): book is Book => Boolean(book));
