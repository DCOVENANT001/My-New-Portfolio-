"use client";

import { useState } from "react";
import Image from "next/image";
import { useLoomThumbnail } from "./LoomThumbnails";

export default function LoomEmbed({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const thumbnail = useLoomThumbnail(id);
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const showPoster = Boolean(thumbnail) && !playing;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-surface">
      {showPoster ? (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play recording: ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer"
        >
          <Image
            src={thumbnail!}
            alt=""
            fill
            unoptimized
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
          <span className="absolute inset-0 bg-navy/10 transition-colors group-hover:bg-navy/20" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-transform group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      ) : (
        <>
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-muted">
              Loading recording…
            </div>
          )}
          <iframe
            src={`https://www.loom.com/embed/${id}${playing ? "?autoplay=1" : ""}`}
            title={title}
            allow="autoplay; fullscreen"
            allowFullScreen
            loading={playing ? "eager" : "lazy"}
            onLoad={() => setLoaded(true)}
            className="absolute inset-0 h-full w-full"
          />
        </>
      )}
    </div>
  );
}
