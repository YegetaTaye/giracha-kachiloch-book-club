import type { Metadata } from "next";
import {
  Playfair_Display,
  Lora,
  Noto_Serif_Ethiopic,
  Noto_Sans_Ethiopic,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const notoSerifEthiopic = Noto_Serif_Ethiopic({
  subsets: ["ethiopic"],
  variable: "--font-noto-serif-ethiopic",
  display: "swap",
});

const notoSansEthiopic = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  variable: "--font-noto-sans-ethiopic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: site.url ? new URL(site.url) : undefined,
  title: {
    default: `${site.nameAm} · ${site.nameEn}`,
    // Child routes only declare their own name — see app/guests/page.tsx.
    template: `%s · ${site.nameAm}`,
  },
  description: site.missionEn,
  // og:image comes from app/opengraph-image.jpg (+ .alt.txt) by convention, and
  // og:title / og:description are deliberately omitted here so each route
  // inherits its own title and description. Next.js fills the twitter:* tags
  // from these, defaulting to a summary_large_image card.
  openGraph: {
    type: "website",
    siteName: `${site.nameAm} · ${site.nameEn}`,
    locale: "am_ET",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="am"
      className={`${playfair.variable} ${lora.variable} ${notoSerifEthiopic.variable} ${notoSansEthiopic.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-parchment font-body-en text-ink">
        <noscript>
          <style>{`.reveal { opacity: 1 !important; }`}</style>
        </noscript>
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
