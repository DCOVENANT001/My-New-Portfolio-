"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import ShotMarquee from "./ShotMarquee";
import { workflowsByPlatform } from "@/data/workflowProof";

export default function WorkflowShowcase() {
  const [active, setActive] = useState(0);
  const current = workflowsByPlatform[active];

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

        <Reveal delay={150} className="mt-10">
          {/* Keyed by platform so switching tabs restarts the loop and closes any open lightbox. */}
          <ShotMarquee key={current.platform} shots={current.shots} />
        </Reveal>
      </div>
    </section>
  );
}
