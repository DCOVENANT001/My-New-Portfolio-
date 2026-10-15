import Reveal from "./Reveal";
import CountUp from "./CountUp";

const stats: { value: string; label: string; animate?: boolean }[] = [
  { value: "300+", label: "professionals coached" },
  { value: "1,820+", label: "leads managed in one system" },
  { value: "< 60s", label: "AI lead response time" },
  { value: "2+", label: "years building for real clients" },
  { value: "0", label: "systems ever replaced" },
];

export default function CredibilityStrip() {
  return (
    <section className="border-y border-border bg-surface">
      <Reveal>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-6 py-12 sm:grid-cols-3 sm:gap-8 sm:py-14 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center sm:text-left ${i === stats.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}
            >
              <p className="flex items-center justify-center gap-2 font-serif text-3xl font-bold text-navy sm:justify-start sm:text-4xl">
                <span className="live-dot h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
                <CountUp value={stat.value} animate={stat.animate ?? true} />
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
