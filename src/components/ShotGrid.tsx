"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox, { type LightboxShot } from "./Lightbox";

/** A row of screenshot cards that open in the lightbox. Shows every shot at once. */
export default function ShotGrid({ shots }: { shots: LightboxShot[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {shots.map((shot, i) => (
          <button
            key={shot.src}
            onClick={() => setLightbox(i)}
            className="card-hover text-left"
          >
            <figure>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border">
                <Image
                  src={shot.src}
                  alt={shot.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="mt-2 text-center text-sm text-muted">
                {shot.caption}
              </figcaption>
            </figure>
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <Lightbox
          shots={shots}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onIndexChange={setLightbox}
        />
      )}
    </>
  );
}
