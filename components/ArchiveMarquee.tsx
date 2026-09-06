import Image from "next/image";
import type { PastNight } from "@/content/pastNights";

/**
 * Continuously scrolling right-to-left reel of every past-night poster.
 * The track renders the list twice back to back; the CSS animation
 * (see .marquee-track in globals.css) translates it by exactly -50%,
 * so the loop point is invisible. Hover pauses it (desktop) so a poster
 * can actually be read.
 */
export function ArchiveMarquee({ nights }: { nights: PastNight[] }) {
  const track = [...nights, ...nights];

  return (
    <div className="relative overflow-hidden">
      <div className="marquee-track flex w-max gap-6 py-1">
        {track.map((night, i) => {
          const isDuplicate = i >= nights.length;
          return (
            <div
              key={`${night.slug}-${i}`}
              aria-hidden={isDuplicate || undefined}
              className="group relative aspect-[3/4] w-52 shrink-0 overflow-hidden bg-parchment-dim sm:w-64 md:w-72"
            >
              <Image
                src={night.coverImage}
                alt={night.titleEn}
                fill
                sizes="(min-width: 768px) 288px, (min-width: 640px) 256px, 208px"
                loading="eager"
                // Bypasses next/image's on-demand sharp resize pipeline for
                // this reel specifically. With 8 unique posters all eager
                // (the track needs every frame ready immediately, not
                // scroll-triggered), the dev-mode image optimizer's
                // concurrent-request handling would silently stall a subset
                // of them indefinitely — confirmed via network trace: some
                // requests never resolved to either a response or a failure.
                // These files are already reasonably small, so serving the
                // originals directly trades a bit of format/size
                // optimization for images that are guaranteed to load.
                unoptimized
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-parchment/10" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-body-en text-[10px] uppercase tracking-[0.2em] text-parchment/70">
                  {night.dateLabelEn}
                </p>
                <p className="mt-1 font-display-am text-base leading-snug text-parchment">
                  {night.titleAm}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-ink to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-ink to-transparent sm:w-28" />
    </div>
  );
}
