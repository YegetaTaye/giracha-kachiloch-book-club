import type { Metadata } from "next";
import { GuestsContent } from "@/components/GuestsContent";

export const metadata: Metadata = {
  title: "Writers & Poets",
  description:
    "Poets, authors, and journalists who have joined Gracha Qachlotch nights.",
};

export default function GuestsPage() {
  return <GuestsContent />;
}
