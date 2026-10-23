import Link from "next/link";
import type { CaseStudy as CaseStudyData } from "@/data/caseStudies";
import Reveal from "./Reveal";
import BrandLogo from "./BrandLogo";
import LoomEmbed from "./LoomEmbed";
import ShotGrid from "./ShotGrid";
import ShotMarquee from "./ShotMarquee";
import CountUp from "./CountUp";
import BookCallButton from "./BookCallButton";

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="font-mono text-sm font-semibold tracking-widest text-accent">
      {children}
    </p>
  );
}

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
      {paragraphs.map((text) => (
        <p key={text}>{text}</p>
      ))}
    </div>
  );
}

function BackLink() {
  return (
    <Link
      href="/#work"
      className="inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent"
    >
      <span aria-hidden>←</span> Back to all work
    </Link>
  );
}

export default function CaseStudy({ study }: { study: CaseStudyData }) {
  return (
    <article className="mx-auto max-w-6xl px-6 pb-16 pt-28 sm:pb-24 sm:pt-36">
      <Reveal className="mx-auto max-w-3xl">
        <BackLink />
        <p className="mt-8 font-mono text-sm font-semibold tracking-widest text-accent">
          {study.eyebrow}
        </p>
        <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.05] text-navy sm:text-6xl">
          {study.tagline}
        </h1>
        <p className="mt-5 text-xl text-navy sm:text-2xl">{study.title}</p>
      </Reveal>

      {study.stats && (
        <Reveal delay={100} className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {study.stats.map((stat) => (
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
      )}

      <div className="mx-auto mt-12 max-w-3xl space-y-12 sm:mt-16">
        <Reveal delay={100}>
          <Eyebrow>THE PROBLEM</Eyebrow>
          <Prose paragraphs={study.problem} />
        </Reveal>
        <Reveal delay={100}>
          <Eyebrow>WHAT I BUILT</Eyebrow>
          <Prose paragraphs={study.built} />
        </Reveal>
        <Reveal delay={100}>
          <Eyebrow>THE RESULT</Eyebrow>
          <Prose paragraphs={study.result} />
        </Reveal>
      </div>

      <Reveal delay={100} className="mt-12 sm:mt-16">
        <p className="text-center font-mono text-sm font-semibold tracking-widest text-accent">
          WATCH IT WORK
        </p>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted">
          Short recordings of the actual system running — no slides, no
          staging.
        </p>
        <div
          className={`mx-auto mt-8 grid gap-6 ${
            study.videos.length > 1 ? "sm:grid-cols-2" : "max-w-3xl"
          }`}
        >
          {study.videos.map((video) => (
            <div key={video.id}>
              <LoomEmbed id={video.id} title={video.title} />
              <p className="mt-2 text-center text-sm text-muted">{video.caption}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {study.galleries.map((gallery) => (
        <Reveal key={gallery.label} delay={100} className="mt-12 sm:mt-16">
          <p className="text-center font-mono text-sm font-semibold tracking-widest text-accent">
            {gallery.label}
          </p>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted">
            {gallery.intro}
          </p>
          {gallery.layout === "grid" ? (
            <ShotGrid shots={gallery.shots} />
          ) : (
            <div className="mt-8">
              <ShotMarquee shots={gallery.shots} />
            </div>
          )}
        </Reveal>
      ))}

      <Reveal delay={100} className="mt-12 text-center sm:mt-16">
        <p className="font-mono text-sm font-semibold tracking-widest text-accent">
          TOOLS
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {study.tools.map((tool) => (
            <BrandLogo key={tool.name} name={tool.name} label={tool.label} />
          ))}
        </div>
      </Reveal>

      <Reveal delay={100} className="mt-14 rounded-2xl border border-border bg-surface px-6 py-10 text-center sm:mt-20">
        <h2 className="font-serif text-3xl font-bold text-navy sm:text-4xl">
          Want a system like this?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-muted">
          Tell me what&rsquo;s eating your time. 30 minutes, no pitch deck.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <BookCallButton className="btn-glow rounded-full bg-accent px-8 py-3.5 font-mono text-sm font-semibold text-white">
            Book a call
          </BookCallButton>
          <BackLink />
        </div>
      </Reveal>
    </article>
  );
}
