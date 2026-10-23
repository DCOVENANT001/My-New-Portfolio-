import Image from "next/image";
import WaveBackdrop from "./WaveBackdrop";
import GradientBlobs from "./GradientBlobs";
import BookCallButton from "./BookCallButton";
import BrandLogo from "./BrandLogo";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <GradientBlobs />
      <div className="absolute inset-0">
        <WaveBackdrop />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 pb-16 pt-32 sm:gap-12 sm:pb-24 sm:pt-40 lg:flex-row lg:items-center lg:gap-4">
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
          <p
            className="reveal in-view mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg lg:mx-0"
            style={{ animationDelay: "200ms" }}
          >
            I&rsquo;m Covenant Ademola, an AI automation engineer. I build AI
            lead generation systems, voice and chat agents, and CRM
            automations for real estate, web design agencies, legal,
            e-commerce and coaching businesses in Canada, the US, the UK and
            Ireland.
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
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/portrait.jpg"
              alt="Covenant Ademola"
              fill
              priority
              sizes="(max-width: 640px) 320px, (max-width: 1024px) 384px, 400px"
              className="object-cover"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {[
              { name: "n8n", label: "n8n" },
              { name: "zapier", label: "Zapier" },
              { name: "make", label: "Make" },
              { name: "gohighlevel", label: "GoHighLevel" },
              { name: "openai", label: "OpenAI" },
            ].map((tool) => (
              <BrandLogo key={tool.name} name={tool.name} label={tool.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
