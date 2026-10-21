// Site-wide facts. Edit this file to update contact info, socials, and the
// "next gathering" teaser without touching any page component.

export const site = {
  nameAm: "ግራጫ ቃጭሎች",
  nameEn: "Giracha Kachiloch",
  // Public origin, used to turn the OG image into the absolute URL crawlers
  // require. Set NEXT_PUBLIC_SITE_URL=https://your-domain at deploy time. Left
  // unset, Next.js falls back to the deployment URL on Vercel and to
  // http://localhost:3000 in dev (it warns about this during `next build`).
  url: process.env.NEXT_PUBLIC_SITE_URL,
  // Real lockup taken from the club's own logo/posters.
  taglineAm: "የንባብ ቤት",
  taglineEn: "House of Reading",
  missionAm:
    "ግጥም፣ ሙዚቃ እና ቡና በአንድ ማዕድ ላይ የምናገናኝበት፣ ለጸሐፍት እና ለአንባቢዎች ክፍት የሆነ ማኅበረሰብ።",
  missionEn:
    "A community that brings poetry, live music, and coffee to the same table — open to writers and readers alike.",
  location: {
    town: "Bishoftu",
    townAm: "ቢሾፍቱ",
    country: "Ethiopia",
    countryAm: "ኢትዮጵያ",
  },
  // Real recurring venue, read off the club's own event posters.
  venue: {
    nameEn: "Carmel Kitchen",
    detailAm: "ዝቋላ ራሔል ፋርማሲ አጠገብ",
    detailEn: "near Zikwala Rahel Pharmacy",
    // Used for the embedded map and "get directions" link on the Contact
    // section. A text query (rather than fixed coordinates) since we don't
    // have a verified lat/lng for the venue — Google resolves the search.
    mapQuery: "Carmel Kitchen, Bishoftu, Ethiopia",
  },
  // No public address yet. The email channel on the home page and footer
  // only renders once this is set to a real address.
  email: undefined as string | undefined,
  social: {
    instagram: "https://instagram.com/giracha.bookclub",
    telegram: "https://t.me/girachabookclub",
  },
  // A specific next date isn't confirmed yet — this only states the usual
  // recurring pattern seen across past posters (Saturdays, 11:30, at the
  // venue above). Replace with a firm date/theme once one is announced.
  nextGathering: {
    status: "tbd" as const,
    patternAm: "ምሽቶቻችን አብዛኛውን ጊዜ ቅዳሜ፣ 11:30 ላይ ይካሄዳሉ።",
    patternEn: "Gatherings are usually held on Saturdays at 03:30 PM.",
    dateAm: "ቀጣዩ ቀን በቅርቡ ይገለጻል",
    dateEn: "Date to be announced",
    themeAm: "ገጣሚዎች እና ደራሲያን በድጋሚ ይሰበሰባሉ",
    themeEn: "Writers and poets, gathering again",
  },
};
