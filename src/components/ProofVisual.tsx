import Image from "next/image";

export default function ProofVisual({
  caption,
  src,
  aspect = "aspect-video",
}: {
  caption: string;
  src?: string;
  aspect?: string;
}) {
  const cleanCaption = caption.replace(/^\[\s*/, "").replace(/\s*\]$/, "");

  if (src) {
    return (
      <figure>
        <div className={`${aspect} relative w-full overflow-hidden rounded-lg border border-border`}>
          <Image
            src={src}
            alt={cleanCaption}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
          />
        </div>
        <figcaption className="mt-2 text-center text-sm text-muted">
          {cleanCaption}
        </figcaption>
      </figure>
    );
  }

  return (
    <figure>
      <div
        className={`${aspect} w-full rounded-lg border border-dashed border-navy/20 bg-navy/[0.03] flex items-center justify-center p-6`}
      >
        <p className="font-mono text-xs text-muted text-center max-w-xs">
          Coming soon
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm text-muted">
        {cleanCaption}
      </figcaption>
    </figure>
  );
}
