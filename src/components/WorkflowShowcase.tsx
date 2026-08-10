"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import Lightbox from "./Lightbox";
import { workflowsByPlatform } from "@/data/workflowProof";

export default function WorkflowShowcase() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const current = workflowsByPlatform[active];
  const track = [...current.shots, ...current.shots];

  useEffect(() => {
    setLightbox(null);
  }, [active]);

  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="text-center">
          <p className="font-mono text-sm font-semibold tracking-widest text-accent">
            SEE THE WORKFLOWS
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold text-navy sm:text-5xl">
            I&rsquo;ve built these, tool by tool.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Real automations, real screenshots — pick a platform, click any
            shot to look closer.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10 flex flex-wrap justify-center gap-2">
          {workflowsByPlatform.map((group, i) => (
            <button
              key={group.platform}
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2.5 font-mono text-sm font-semibold transition-colors ${
                i === active
                  ? "bg-navy text-white"
                  : "border border-navy/15 bg-background text-navy hover:border-accent hover:text-accent"
              }`}
            >
              {group.platform}
            </button>
          ))}
        </Reveal>

        <Reveal delay={150} className="marquee-fade marquee-pausable mt-10 overflow-hidden">
          <div className="marquee-track flex w-max gap-6">
            {track.map((shot, i) => (
              <button
                key={`${shot.src}-${i}`}
                onClick={() => setLightbox(i % current.shots.length)}
                className="card-hover w-72 shrink-0 rounded-lg border border-border bg-background text-left"
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
        </Reveal>
      </div>

      {lightbox !== null && (
        <Lightbox
          shots={current.shots}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onIndexChange={setLightbox}
          loop
        />
      )}
    </section>
  );
}
