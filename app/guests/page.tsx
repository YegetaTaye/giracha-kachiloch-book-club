import { GuestsContent } from "@/components/GuestsContent";
import { JsonLd } from "@/components/JsonLd";
import { guests } from "@/content/guests";
import { siteUrl } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

const title = "Writers & Poets";
const description =
  "Ethiopian authors, poets and journalists who have sat with the audience at Giracha Kachiloch literary nights in Bishoftu.";

export const metadata = pageMetadata(title, description, "/guests");

// Every guest as a Person, so their names connect the club to them in search.
const guestList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Guests of Giracha Kachiloch",
  itemListElement: guests.map((guest, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Person",
      name: guest.nameEn,
      alternateName: guest.nameAm,
      jobTitle: guest.roleEn,
      image: `${siteUrl}${guest.image}`,
    },
  })),
};

export default function GuestsPage() {
  return (
    <>
      <JsonLd data={guestList} />
      <GuestsContent />
    </>
  );
}
