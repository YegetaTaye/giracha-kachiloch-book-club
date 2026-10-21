import type { Metadata } from "next";
import { SupportContent } from "@/components/SupportContent";

export const metadata: Metadata = {
  title: "Support the House",
  description:
    "Support Giracha Kachiloch with financial contributions, skills, books, or production materials.",
};

export default function SupportPage() {
  return <SupportContent />;
}
