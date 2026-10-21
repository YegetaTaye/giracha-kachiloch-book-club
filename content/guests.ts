export type Guest = {
  slug: string;
  nameAm: string;
  nameEn: string;
  roleAm: string;
  roleEn: string;
  /** Cropped portrait, text-free, for card grids. */
  image: string;
  /** The original event poster/flyer this portrait was cropped from. */
  poster: string;
  /**
   * Where `image` was sourced from, when it isn't the event poster crop —
   * a news article, author-bio page, etc. Kept so provenance isn't lost.
   */
  imageSource?: string;
  /**
   * How confident the web-sourced `image` match is. "high" = a dedicated,
   * clearly-attributed bio/interview page. "medium" = plausible and
   * consistent with known bio facts, but from a third-party blog/directory
   * rather than the person's own channel — worth a personal sanity check.
   * IMPORTANT: none of these photos are known to be freely licensed for
   * reuse — they're press/blog photos of the person, not stock images.
   * Get permission (or swap in a club-owned photo) before this goes live.
   */
  imageConfidence?: "high" | "medium";
  /** Short credited excerpt from something they read on the night, if known. */
  quoteAm?: string;
  quoteEn?: string;
  bioAm?: string;
  bioEn?: string;
  featured?: boolean;
};

// Names and roles are transliterated from the original Amharic filenames in
// the /guests archive. Bios and quotes are intentionally left blank until
// real copy is supplied — replace rather than invent them.
export const guests: Guest[] = [
  {
    slug: "zebib-melke",
    nameAm: "ዘቢብ መልኬ",
    nameEn: "Zebib Melke",
    roleAm: "ደራሲ",
    roleEn: "Author",
    image: "/images/portraits-web/zebib-melke.jpg",
    poster: "/images/guests/zebib-melke.jpg",
    imageSource:
      "https://media.licdn.com/dms/image/v2/D4D03AQErJe7FNH2yGA/profile-displayphoto-scale_400_400/B4DZwEpUEyHYAk-/0/1769604466917",
    imageConfidence: "high",
  },
  {
    slug: "bedilu-wakjira",
    nameAm: "ዶ/ር በድሉ ዋቅጅራ",
    nameEn: "Dr. Bedilu Wakjira",
    roleAm: "ደራሲ",
    roleEn: "Author",
    image: "/images/portraits-web/bedilu-wakjira.jpg",
    poster: "/images/guests/bedilu-wakjira.jpg",
    imageSource:
      "https://awibethiopia.org/wp-content/uploads/2025/07/Dr.-Bedilu-Wakjira-683x1024.jpg",
    imageConfidence: "high",
  },
  {
    slug: "endalegetachew-kebede",
    nameAm: "ደራሲ እንዳለጌታ ከበደ (ዶ/ር)",
    nameEn: "Endalegetachew Kebede, PhD",
    roleAm: "ደራሲ",
    roleEn: "Author",
    image: "/images/portraits-web/endalegetachew-kebede.png",
    poster: "/images/guests/endalegetachew-kebede.jpg",
    imageSource:
      "https://afroreadapp.com/Store/AuthorStore/1a68d931-d62f-4bb4-aac1-08d8ef8e7b02",
    imageConfidence: "high",
  },
  {
    slug: "zenebe-wola",
    nameAm: "ደራሲ እና ጋዜጠኛ ዘነበ ወላ",
    nameEn: "Zenebe Wola",
    roleAm: "ደራሲ እና ጋዜጠኛ",
    roleEn: "Author & Journalist",
    image: "/images/portraits-web/zenebe-wola.jpg",
    poster: "/images/guests/zenebe-wola.jpg",
    imageSource: "https://tewedajewikipedia.com/%E1%8B%98%E1%8A%90%E1%89%A0-%E1%8B%88%E1%88%8B-%E1%8B%88%E1%8C%8B/",
    imageConfidence: "medium",
    featured: true,
  },
  {
    slug: "hiwot-emishaw",
    nameAm: "ደራሲት ህይወት እምሻው",
    nameEn: "Hiwot Emishaw",
    roleAm: "ደራሲት",
    roleEn: "Author",
    // Portrait swapped in from a Google Images thumbnail (414x741, cropped to
    // 4:5 for the card grid). Clearly her, and better framed than the previous
    // landscape news photo — but a `gstatic.com/images?q=tbn:` URL is a Google
    // cache entry, so the original publisher is unknown and the link will rot.
    // Previous attributed source, kept so provenance isn't lost:
    // https://capitalethiopia.com/2024/08/05/hiwot-emishaw-launches-fourth-book-le-erkan-rub-guday/
    image: "/images/portraits-web/hiwot-emishaw.jpg",
    poster: "/images/guests/hiwot-emishaw.jpg",
    imageSource:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTteP-nziEgHX4ry19t9JDzAHAPXgWhJmCZD8BitkUIjZNYqAqlESluIR_i&s=10",
    imageConfidence: "medium",
  },
  {
    slug: "alemayehu-gelagay",
    nameAm: "ደራሲ አለማየው ገላጋይ",
    nameEn: "Alemayehu Gelagay",
    roleAm: "ደራሲ",
    roleEn: "Author",
    // Goodreads author photo. The trailing `p<n>` in the path is a size
    // variant — p8 is the largest available (385x439); p5 was 200x228.
    // Previous attributed source, kept so provenance isn't lost:
    // https://ethiopianbusinessreview.net/alemayehu-gelagay-a-writer-echoing-the-lives-of-the-marginalized/
    image: "/images/portraits-web/alemayehu-gelagay.jpg",
    poster: "/images/guests/alemayehu-gelagay.jpg",
    imageSource:
      "https://images.gr-assets.com/authors/1438863346p8/14203430.jpg",
    imageConfidence: "high",
    featured: true,
  },
  {
    slug: "sirak-wondimu",
    nameAm: "ደራሲ ሲራክ ወንድሙ",
    nameEn: "Sirak Wondimu",
    roleAm: "ደራሲ",
    roleEn: "Author",
    // No verifiable photo found online — kept on the original poster crop
    // rather than guessing with an unconfirmed match.
    image: "/images/portraits/sirak-wondimu.jpg",
    poster: "/images/guests/sirak-wondimu.jpg",
  },
  {
    slug: "ahmed-hus",
    nameAm: "ደራሲ አህመድ ሁስ (ሻድ)",
    nameEn: 'Ahmed Hus ("Shad")',
    roleAm: "ደራሲ",
    roleEn: "Author",
    image: "/images/portraits-web/ahmed-hus.jpg",
    poster: "/images/guests/ahmed-hus.jpg",
    imageSource: "https://www.ethiowriters.com/2026/06/ahmed-huss.html",
    imageConfidence: "high",
  },
  {
    slug: "bekele-mekonnen",
    nameAm: "ፕሮፌሰር በቀለ መኮንን",
    nameEn: "Professor Bekele Mekonnen",
    roleAm: "ፕሮፌሰር",
    roleEn: "Professor",
    image: "/images/portraits-web/bekele-mekonnen.jpg",
    poster: "/images/guests/bekele-mekonnen.jpg",
    // Medium confidence: a real, well-documented professor/sculptor by this
    // name exists, but "Bekele Mekonnen" is a common Ethiopian name and this
    // couldn't be directly tied to Gracha Qachlotch's own event — please
    // double-check this is the same person before publishing.
    imageSource:
      "https://artsandculture.google.com/asset/bekele-mekonnen-nigussu-assistant-professor-of-fine-arts-alle-school-of-fine-art-design/HAH0Jh1SuVr2Fg",
    imageConfidence: "medium",
  },
  {
    slug: "habtamu-hadera",
    nameAm: "ገጣሚ ሀብታሙ ሀደራ",
    nameEn: "Habtamu Hadera",
    roleAm: "ገጣሚ",
    roleEn: "Poet",
    image: "/images/portraits-web/habtamu-hadera.jpg",
    poster: "/images/guests/habtamu-hadera.jpg",
    imageSource: "https://www.ethiowriters.com/2026/07/habtamu-hadera.html",
    imageConfidence: "medium",
    featured: true,
  },
];

export const featuredGuests = guests.filter((g) => g.featured);
