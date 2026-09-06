export function CoffeeRing({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle
        cx="200"
        cy="200"
        r="160"
        stroke="var(--color-terracotta)"
        strokeOpacity="0.12"
        strokeWidth="10"
      />
      <circle
        cx="200"
        cy="200"
        r="140"
        stroke="var(--color-terracotta)"
        strokeOpacity="0.08"
        strokeWidth="3"
      />
      <circle
        cx="212"
        cy="196"
        r="150"
        stroke="var(--color-gold)"
        strokeOpacity="0.06"
        strokeWidth="14"
      />
    </svg>
  );
}
