import Link from "next/link";
import Reveal from "./Reveal";
import LoomEmbed from "./LoomEmbed";

export default function FlagshipSeven() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24 text-center">
        <Reveal>
          <p className="font-mono text-sm font-semibold tracking-widest text-accent">
            UK REAL ESTATE
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold text-navy sm:text-6xl">
            Replaced seven people.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg text-muted">
            One AI agent. Every landlord reply, handled. No human needed.
            Still running today.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-12 sm:mt-16">
          <p className="font-mono text-sm font-semibold tracking-widest text-accent">
            HOW A LEAD MOVES THROUGH IT
          </p>
          <p className="mx-auto mt-3 max-w-lg text-muted">
            From the moment someone comes in as a lead to the moment they
            get a reply — fully automatic.
          </p>
          <div className="mt-8">
            <LoomEmbed id="6c5d35d920fe4d8f9422a9aa17d70796" title="Lead qualification system" />
            <p className="mt-2 text-sm text-muted">Step 1 — sorted into hot, warm, or cold in under 60 seconds</p>
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-8">
          <LoomEmbed id="9a49064c7e2a4da8895a62540ffad69a" title="Lead nurture sequence explained" />
          <p className="mt-2 text-sm text-muted">Step 2 — the automatic day-by-day follow-up sequence, explained</p>
        </Reveal>

        <Reveal delay={350} className="mt-8 text-center">
          <Link
            href="/work/uk-real-estate-ai-agent"
            className="inline-flex items-center gap-2 font-mono text-sm font-semibold text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
          >
            Read the full case study <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
