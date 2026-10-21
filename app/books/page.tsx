import { BooksContent } from "@/components/BooksContent";
import { pageMetadata } from "@/lib/seo";

const title = "The Shelf · Books to Borrow";
const description =
  "The lending shelf of Giracha Kachiloch House of Reading in Bishoftu: Amharic fiction, poetry and more, arranged by category for members to borrow.";

export const metadata = pageMetadata(title, description, "/books");

export default function BooksPage() {
  return <BooksContent />;
}
