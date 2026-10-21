import type { Metadata, Viewport } from "next";
import { Archivo, Noto_Sans_Ethiopic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { site, siteUrl } from "@/content/site";
import { openGraphBase } from "@/lib/seo";

// Both faces carry a width axis, so the display roles can run condensed and
// heavy like the lettering on the club's posters, and body text at full width.
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const notoSansEthiopic = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  axes: ["wdth"],
  variable: "--font-noto-sans-ethiopic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.nameAm} · ${site.nameEn} — ${site.seo.titleEn}`,
    // Child routes only declare their own name — see app/guests/page.tsx.
    template: `%s · ${site.nameAm} ${site.nameEn}`,
  },
  description: site.seo.descriptionEn,
  keywords: site.seo.keywords,
  applicationName: `${site.nameAm} · ${site.nameEn}`,
  category: "literature",
  alternates: { canonical: "/" },
  // og:image comes from app/opengraph-image.jpg (+ .alt.txt) by convention.
  // Child routes set their own tags through lib/seo.ts; Next.js fills the
  // twitter:* tags from these, defaulting to a summary_large_image card.
  openGraph: { ...openGraphBase, url: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#2b1b12",
};

// The club itself, described once for every page.
const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: site.nameEn,
  alternateName: [site.nameAm, `${site.nameAm} ${site.taglineAm}`, `${site.nameEn} ${site.taglineEn}`],
  description: site.seo.descriptionEn,
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  sameAs: [site.social.telegram, site.social.instagram],
  areaServed: { "@type": "City", name: site.location.town },
  location: {
    "@type": "Place",
    name: site.venue.nameEn,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.venue.nameEn}, ${site.venue.detailEn}`,
      addressLocality: site.location.town,
      addressCountry: "ET",
    },
  },
  knowsLanguage: ["am", "en"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="am"
      // Lets Next.js drop the smooth scrolling from globals.css while it
      // changes route, so every new page opens at the very top.
      data-scroll-behavior="smooth"
      className={`${archivo.variable} ${notoSansEthiopic.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-parchment font-body text-ink">
        <JsonLd data={organization} />
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
