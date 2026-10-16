"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox, { type LightboxShot } from "./Lightbox";

/**
 * The auto-scrolling row of screenshot cards used under "See the workflows".
 *
 * - From the sm breakpoint up: the shots are laid out twice and the track
 *   slides left by half its width on a 14s loop, so it never visibly jumps.
 *   Edges fade out, and the loop pauses while the mouse is over it.
 * - On phones: a native swipe row with snap points, one card at a time.
 * - Clicking any card opens the lightbox with looping previous/next.
 */
export default function ShotMarquee({ shots }: { shots: LightboxShot[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const track = [...shots, ...shots];

  return (
    <>
      <div
        className="no-scrollbar marquee-pausable -mx-6 snap-x snap-mandatory overflow-x-auto px-6 sm:mx-0 sm:marquee-fade sm:snap-none sm:overflow-hidden sm:px-0"
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        onTouchCancel={() => setPaused(false)}
      >
        <div
          className="flex w-max gap-4 sm:marquee-track sm:gap-6"
          style={paused ? { animationPlayState: "paused" } : undefined}
        >
          {track.map((shot, i) => (
            <button
              key={`${shot.src}-${i}`}
              onClick={() => setLightbox(i % shots.length)}
              className={`card-hover w-72 shrink-0 snap-start rounded-lg border border-border bg-background text-left ${
                i >= shots.length ? "hidden sm:block" : ""
              }`}
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                <Image
                  src={shot.src}
                  alt={shot.caption}
                  fill
                  sizes="288px"
                  className="object-cover object-top"
                />
              </div>
              <p className="px-3 py-2 text-xs text-muted">{shot.caption}</p>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <Lightbox
          shots={shots}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onIndexChange={setLightbox}
          loop
        />
      )}
    </>
  );
}
