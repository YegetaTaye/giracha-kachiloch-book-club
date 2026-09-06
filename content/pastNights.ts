import { guests } from "./guests";
import { site } from "./site";

export type PastNight = {
  slug: string;
  titleAm: string;
  titleEn: string;
  guestSlug: string;
  dateLabelAm: string;
  dateLabelEn: string;
  coverImage: string;
  recapAm: string;
  recapEn: string;
  featured?: boolean;
};

// One "night" per event poster we currently hold in the archive — the
// cover image is the club's own real promotional flyer for that night.
// Exact dates are left as "coming soon" until confirmed; only the venue
// (Carmel Kitchen) is a verified recurring fact worth stating here.
export const pastNights: PastNight[] = guests.map((guest, index) => ({
  slug: guest.slug,
  titleAm: `ምሽት ከ${guest.nameAm}`,
  titleEn: `An Evening with ${guest.nameEn}`,
  guestSlug: guest.slug,
  dateLabelAm: "ቀን በቅርቡ ይታከላል",
  dateLabelEn: "Date to be added",
  coverImage: guest.poster,
  recapAm: `${guest.roleAm} ${guest.nameAm} በ${site.venue.nameEn} ተገኝተው ካነበቡልን ምሽቶች አንዱ። ሙሉ ማጠቃለያ በቅርቡ ይታከላል።`,
  recapEn: `One of the nights ${guest.nameEn} joined us to read at ${site.venue.nameEn}. A full recap is coming soon.`,
  featured: index < 3,
}));

export const featuredPastNights = pastNights.filter((n) => n.featured);
