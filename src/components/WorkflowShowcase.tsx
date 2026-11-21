"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import ShotMarquee from "./ShotMarquee";
import { workflowsByPlatform } from "@/data/workflowProof";

// "GHL" -> "ghl", "n8n" -> "n8n", etc.
const slugs = workflowsByPlatform.map((g) => g.platform.toLowerCase());

function indexFromHash(hash: string): number {
  const match = hash.replace(/^#/, "").match(/^workflows-(.+)$/);
  return match ? slugs.indexOf(match[1]) : -1; // -1 = not a workflow link
}

export default function WorkflowShowcase() {
  const [active, setActive] = useState(0);
  const current = workflowsByPlatform[active];

  useEffect(() => {
    const syncFromHash = () => {
      const i = indexFromHash(window.location.hash);
      if (i === -1) return;
      setActive(i);
      // Nothing on the page has id="workflows-make", so the browser won't
      // scroll by itself. Scroll to the section ourselves.
      requestAnimationFrame(() => {
        document.getElementById("workflows")?.scrollIntoView();
      });
    };

    syncFromHash(); // on load
    window.addEventListener("hashchange", syncFromHash); // on hash change
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const selectTab = (i: number) => {
    setActive(i);
    // Updates the address bar without scrolling or firing hashchange.
    history.replaceState(null, "", `#workflows-${slugs[i]}`);
  };

  return (
    <section
      id="workflows"
      className="scroll-mt-24 border-y border-border bg-surface"
    >
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
              onClick={() => selectTab(i)}
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