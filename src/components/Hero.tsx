import Image from "next/image";
import WaveBackdrop from "./WaveBackdrop";
import GradientBlobs from "./GradientBlobs";
import FloatingBadge from "./FloatingBadge";
import BookCallButton from "./BookCallButton";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <GradientBlobs />
      <div className="absolute inset-0">
        <WaveBackdrop />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 pb-24 pt-40 lg:flex-row lg:items-center lg:gap-4">
        <div className="flex-1 text-center lg:text-left">
          <p
            className="reveal in-view font-mono text-sm font-semibold tracking-widest text-accent"
            style={{ animationDelay: "0ms" }}
          >
            AI ENGINEER &amp; AUTOMATION SPECIALIST
          </p>
          <h1
            className="reveal in-view mt-5 font-serif text-4xl font-bold leading-[1.05] text-navy sm:text-6xl sm:leading-[0.95] lg:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            Systems that
            <br />
            run <span className="text-gradient">themselves.</span>
          </h1>
          <p
            className="reveal in-view mt-6 font-mono text-sm tracking-wide text-muted"
            style={{ animationDelay: "160ms" }}
          >
            Real clients. Real systems. Still running.
          </p>
          <div
            className="reveal in-view mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            style={{ animationDelay: "240ms" }}
          >
            <BookCallButton className="btn-glow rounded-full bg-accent px-8 py-4 font-mono text-sm font-semibold text-white">
              Book a call
            </BookCallButton>
            <a
              href="#work"
              className="btn-glow rounded-full border border-navy/20 bg-surface px-8 py-4 font-mono text-sm font-semibold text-navy hover:border-accent hover:text-accent"
            >
              See the work
            </a>
          </div>
        </div>

        <div
          className="reveal in-view relative w-full max-w-xs flex-1 lg:max-w-sm"
          style={{ animationDelay: "320ms" }}
        >
          <FloatingBadge label="n8n" className="-left-4 top-6 lg:-left-6" delay={0} />
          <FloatingBadge label="ZAP" className="-right-2 top-16" delay={0.4} />
          <FloatingBadge label="GHL" className="-left-2 bottom-20" delay={0.8} />
          <FloatingBadge label="AI" className="-right-4 bottom-8 lg:-right-6" delay={1.2} />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/portrait.jpg"
              alt="Covenant Ademola"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 400px"
              className="object-cover"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:hidden">
            {["n8n", "ZAP", "GHL", "AI"].map((label) => (
              <span
                key={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/10 bg-white font-mono text-[10px] font-semibold tracking-tight text-navy shadow-sm"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
