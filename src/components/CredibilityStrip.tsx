import Reveal from "./Reveal";
import CountUp from "./CountUp";

const stats = [
  { value: "300+", label: "professionals coached" },
  { value: "1,820+", label: "leads managed in one system" },
  { value: "< 60s", label: "AI lead response time" },
  { value: "Since 2024", label: "building for real clients" },
  { value: "0", label: "systems ever replaced" },
];

export default function CredibilityStrip() {
  return (
    <section className="border-y border-border bg-surface">
      <Reveal>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="flex items-center justify-center gap-2 font-serif text-3xl font-bold text-navy sm:justify-start sm:text-4xl">
                <span className="live-dot h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
                <CountUp value={stat.value} />
              </p>
              <p className="mt-1 font-mono text-xs text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
