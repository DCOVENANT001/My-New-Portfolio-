import Reveal from "./Reveal";
import ToolBadge from "./ToolBadge";
import LoomEmbed from "./LoomEmbed";
import { proofGrid } from "@/data/proofGrid";

export default function ProofGrid() {
  return (
    <section id="proof" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="text-center">
        <p className="font-mono text-sm font-semibold tracking-widest text-accent">
          MORE PROOF
        </p>
        <h2 className="mt-4 font-serif text-4xl font-bold text-navy sm:text-5xl">
          Still running.
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {proofGrid.map((item, i) => (
          <Reveal key={item.id} delay={i * 60}>
            <div className="card-hover flex h-full flex-col rounded-xl border border-border bg-surface p-6">
              {item.loomId && (
                <div className="mb-4">
                  <LoomEmbed id={item.loomId} title={item.title} />
                </div>
              )}
              <h3 className="font-serif text-xl text-navy">{item.title}</h3>
              <p className="mt-2 font-mono text-xs text-accent">
                {item.outcome}
              </p>
              <p className="mt-3 flex-1 text-sm text-muted">
                {item.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <ToolBadge key={tag} name={tag} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
