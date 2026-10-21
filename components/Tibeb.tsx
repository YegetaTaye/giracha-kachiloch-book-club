/** A woven tibeb band, used where one section hands over to the next. */
export function Tibeb({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`tibeb ${className}`} />;
}
