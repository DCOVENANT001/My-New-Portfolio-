"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export type LightboxShot = { src: string; caption: string };

export default function Lightbox({
  shots,
  index,
  onClose,
  onIndexChange,
  loop = false,
}: {
  shots: LightboxShot[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
  loop?: boolean;
}) {
  const canPrev = loop || index > 0;
  const canNext = loop || index < shots.length - 1;
  const touchStartX = useRef<number | null>(null);

  const goPrev = () => {
    if (!canPrev) return;
    onIndexChange(loop ? (index - 1 + shots.length) % shots.length : index - 1);
  };

  const goNext = () => {
    if (!canNext) return;
    onIndexChange(loop ? (index + 1) % shots.length : index + 1);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, shots.length, loop]);

  const shot = shots[index];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 40) return;
    if (delta > 0) goPrev();
    else goNext();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy/95 p-6"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full bg-navy/60 px-4 py-3 font-mono text-sm text-white/70 hover:text-white"
      >
        CLOSE ✕
      </button>

      <button
        aria-label="Previous"
        disabled={!canPrev}
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white hover:bg-white/30 disabled:opacity-20 disabled:hover:bg-white/20 sm:left-8"
      >
        ←
      </button>
      <button
        aria-label="Next"
        disabled={!canNext}
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white hover:bg-white/30 disabled:opacity-20 disabled:hover:bg-white/20 sm:right-8"
      >
        →
      </button>

      <div
        className="relative max-h-[75vh] w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={shot.src}
            alt={shot.caption}
            fill
            sizes="90vw"
            className="object-contain"
          />
        </div>
      </div>
      <p className="mt-4 max-w-2xl text-center text-sm text-white/80">
        {shot.caption}
      </p>
      <p className="mt-1 font-mono text-xs text-white/40">
        {index + 1} / {shots.length}
      </p>
    </div>
  );
}
