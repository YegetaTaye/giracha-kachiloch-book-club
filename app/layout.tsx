import type { Metadata } from "next";
import { Archivo, Noto_Sans_Ethiopic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";

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
      className={`${archivo.variable} ${notoSansEthiopic.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-parchment font-body text-ink">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
