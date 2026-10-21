import { SupportContent } from "@/components/SupportContent";
import { pageMetadata } from "@/lib/seo";

const title = "Support the House";
const description =
  "Help keep Giracha Kachiloch, a community reading house in Bishoftu, Ethiopia, running: give money, books, skills or production help.";

export const metadata = pageMetadata(title, description, "/support");

export default function SupportPage() {
  return <SupportContent />;
}
