export function PullQuote({
  am,
  en,
  creditAm,
  creditEn,
  className = "",
}: {
  am: string;
  en?: string;
  creditAm?: string;
  creditEn?: string;
  className?: string;
}) {
  return (
    <blockquote className={`relative ${className}`}>
      <span
        aria-hidden="true"
        className="absolute -top-6 -left-2 font-display-en text-6xl text-terracotta/40 select-none"
      >
        &ldquo;
      </span>
      <p className="font-display-am text-2xl leading-snug text-ink sm:text-3xl">
        {am}
      </p>
      {en && (
        <p className="mt-2 font-body-en text-base italic text-ink/60 sm:text-lg">
          {en}
        </p>
      )}
      {(creditAm || creditEn) && (
        <footer className="mt-4 font-body-en text-sm tracking-wide text-gold uppercase">
          — {creditAm ?? creditEn}
          {creditAm && creditEn ? ` · ${creditEn}` : ""}
        </footer>
      )}
    </blockquote>
  );
}
