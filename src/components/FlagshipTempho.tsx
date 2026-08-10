"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import BrandLogo from "./BrandLogo";
import LoomEmbed from "./LoomEmbed";
import Lightbox from "./Lightbox";
import CountUp from "./CountUp";

const stats = [
  { value: "1,820+", label: "opportunities managed" },
  { value: "3,360", label: "landlords reached" },
  { value: "53", label: "listings converted" },
  { value: "24/7", label: "AI coverage" },
];

const product = [
  { src: "/images/tempho-landlord-portal.png", caption: "Landlord portal — 53 properties listed and live" },
  { src: "/images/tempho-ai-chat.png", caption: "AI chat — helps renters search properties instantly" },
  { src: "/images/tempho-crm.png", caption: "The CRM behind it — 1,820+ opportunities tracked" },
];

const receipts = [
  { src: "/images/tempho-scraping-pipeline.png", caption: "The pipeline that finds new landlords daily, start to finish" },
  { src: "/images/tempho-execution-log-1.png", caption: "One real run: 646 steps completed automatically in 17 seconds" },
  { src: "/images/tempho-execution-log-2.png", caption: "A later run: 1,552 steps completed in 41 seconds — same system, still running" },
];

const tools = [
  { name: "apify", label: "Apify" },
  { name: "make", label: "Make" },
  { name: "gohighlevel", label: "GoHighLevel" },
  { name: "n8n", label: "n8n" },
  { name: "voiceai", label: "Voice AI" },
];

function ShotGrid({
  shots,
  onOpen,
}: {
  shots: typeof product;
  onOpen: (i: number) => void;
}) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-3">
      {shots.map((shot, i) => (
        <button
          key={shot.src}
          onClick={() => onOpen(i)}
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
  );
}

export default function FlagshipTempho() {
  const [productLightbox, setProductLightbox] = useState<number | null>(null);
  const [receiptsLightbox, setReceiptsLightbox] = useState<number | null>(null);

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="text-center">
        <p className="font-mono text-sm font-semibold tracking-widest text-accent">
          FLAGSHIP — TEMPHO LUXE, CANADA
        </p>
        <h2 className="mt-4 font-serif text-4xl font-bold text-navy sm:text-6xl">
          I was their entire tech team.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
          The website. The AI agent. The CRM. All of it, built by one
          person.
        </p>
      </Reveal>

      <Reveal delay={100} className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="card-hover rounded-xl border border-border bg-surface p-5 text-center"
          >
            <p className="flex items-center justify-center gap-2 font-serif text-3xl font-bold text-navy">
              <span className="live-dot h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
              <CountUp value={stat.value} />
            </p>
            <p className="mt-1 font-mono text-xs text-muted">{stat.label}</p>
          </div>
        ))}
      </Reveal>

      <Reveal delay={150} className="mt-16">
        <p className="text-center font-mono text-sm font-semibold tracking-widest text-accent">
          THE PRODUCT
        </p>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted">
          What landlords and tenants actually use, live today. Click a shot
          to look closer.
        </p>
        <ShotGrid shots={product} onOpen={setProductLightbox} />
      </Reveal>

      <Reveal delay={200} className="mt-16">
        <p className="text-center font-mono text-sm font-semibold tracking-widest text-accent">
          WATCH IT WORK
        </p>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted">
          Short recordings of the actual system running — no slides, no
          staging.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div>
            <LoomEmbed id="ce52a6780423414688dbced4ea629ee0" title="CRM walkthrough" />
            <p className="mt-2 text-center text-sm text-muted">A walkthrough of the CRM managing landlord and tenant leads</p>
          </div>
          <div>
            <LoomEmbed id="36a54869700548d4821b2206725e1b78" title="Voice AI agent live call" />
            <p className="mt-2 text-center text-sm text-muted">The voice agent answering a real phone call, unscripted</p>
          </div>
          <div>
            <LoomEmbed id="87b3418f5d9a4f48a43c379dd44ef473" title="Social media AI agent" />
            <p className="mt-2 text-center text-sm text-muted">The chat agent replying to a real Instagram/Facebook message</p>
          </div>
          <div>
            <LoomEmbed id="787dbf49e2ad4694bc031224eeb50568" title="Landlord automation workflows tour" />
            <p className="mt-2 text-center text-sm text-muted">A tour of the 5 automations that run landlord outreach end to end</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={250} className="mt-16">
        <p className="text-center font-mono text-sm font-semibold tracking-widest text-accent">
          THE RECEIPTS
        </p>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted">
          Not a demo — a real system, caught mid-run. Every number below is
          from an actual execution log, not a projection. Click a shot to
          look closer.
        </p>
        <ShotGrid shots={receipts} onOpen={setReceiptsLightbox} />
      </Reveal>

      <Reveal delay={300} className="mt-14 text-center">
        <p className="text-muted">
          Scraped daily. Cleaned automatically. Routed straight into the
          CRM.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {tools.map((tool) => (
            <BrandLogo key={tool.name} name={tool.name} label={tool.label} />
          ))}
        </div>
      </Reveal>

      {productLightbox !== null && (
        <Lightbox
          shots={product}
          index={productLightbox}
          onClose={() => setProductLightbox(null)}
          onIndexChange={setProductLightbox}
        />
      )}
      {receiptsLightbox !== null && (
        <Lightbox
          shots={receipts}
          index={receiptsLightbox}
          onClose={() => setReceiptsLightbox(null)}
          onIndexChange={setReceiptsLightbox}
        />
      )}
    </section>
  );
}
