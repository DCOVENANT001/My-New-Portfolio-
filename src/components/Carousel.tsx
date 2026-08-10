"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Carousel({
  images,
}: {
  images: { src: string; caption: string }[];
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3200);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div>
      <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border">
        {images.map((img, i) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.caption}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === index ? 1 : 0 }}
            priority={i === 0}
          />
        ))}
      </div>
      <p className="mt-2 text-center text-sm text-muted">
        {images[index].caption}
      </p>
      <div className="mt-2 flex justify-center gap-1.5">
        {images.map((img, i) => (
          <button
            key={img.src}
            aria-label={`Show image ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-5 bg-accent" : "w-1.5 bg-navy/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
