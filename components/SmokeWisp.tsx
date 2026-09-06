export function SmokeWisp({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M60 198c8-14-14-22-14-38 0-14 20-18 20-34 0-14-18-20-18-36 0-14 16-20 16-34s-12-22-4-34"
        stroke="var(--color-gold)"
        strokeOpacity="0.35"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M78 198c6-12-10-20-10-34 0-13 16-16 16-30 0-13-14-18-14-32 0-12 13-18 13-30"
        stroke="var(--color-gold)"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
