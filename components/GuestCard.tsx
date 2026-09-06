import Image from "next/image";
import type { Guest } from "@/content/guests";

export function GuestCard({ guest }: { guest: Guest }) {
  return (
    <div className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-parchment-dim">
        <Image
          src={guest.image}
          alt={guest.nameEn}
          fill
          sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover grayscale-[15%] transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink/10" />
      </div>
      <div className="mt-4">
        <p className="font-display-am text-xl text-ink">{guest.nameAm}</p>
        <p className="font-body-en text-sm text-ink/55">{guest.nameEn}</p>
        <p className="mt-1 font-body-en text-xs uppercase tracking-wide text-gold">
          {guest.roleAm} · {guest.roleEn}
        </p>
        {guest.bioEn && (
          <p className="mt-3 font-body-en text-sm leading-relaxed text-ink/70">
            {guest.bioEn}
          </p>
        )}
      </div>
    </div>
  );
}
