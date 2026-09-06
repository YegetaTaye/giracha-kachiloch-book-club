import type { Metadata } from "next";
import { BooksContent } from "@/components/BooksContent";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Books currently held by Giracha Kachiloch House of Reading, arranged by category.",
};

export default function BooksPage() {
  return <BooksContent />;
}
