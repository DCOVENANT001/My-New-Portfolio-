"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import Lightbox from "./Lightbox";
import { workflowsByPlatform } from "@/data/workflowProof";

export default function WorkflowShowcase() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const current = workflowsByPlatform[active];
  const track = [...current.shots, ...current.shots];

  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
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
              onClick={() => {
                setActive(i);
                setLightbox(null);
              }}
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

        <Reveal delay={150} className="mt-10">
          {/* Phones: a native swipe row with snap points. sm and up: the auto-scrolling marquee. */}
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
                  onClick={() => setLightbox(i % current.shots.length)}
                  className={`card-hover w-72 shrink-0 snap-start rounded-lg border border-border bg-background text-left ${
                    i >= current.shots.length ? "hidden sm:block" : ""
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
