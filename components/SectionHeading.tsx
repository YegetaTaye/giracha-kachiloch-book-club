export function SectionHeading({
  eyebrow,
  am,
  en,
  align = "left",
}: {
  eyebrow?: string;
  am: string;
  en?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className="mb-2 font-body-en text-xs uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </p>
      )}
      {/* Colors are inherited so the same heading works on the parchment
          sections and on the dark/terracotta ones, which set text-parchment. */}
      <h2 className="font-display-am text-3xl sm:text-4xl md:text-5xl">
        {am}
      </h2>
      {en && (
        <p className="mt-1 font-display-en text-lg italic opacity-60 sm:text-xl">
          {en}
        </p>
      )}
    </div>
  );
}
