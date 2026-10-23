import Reveal from "./Reveal";
import { CLIENT_COUNTRIES, INDUSTRIES, SERVICES, TOOLS } from "@/lib/site";

const columns = [
  { label: "What I build", items: SERVICES },
  { label: "Who I build it for", items: INDUSTRIES },
  { label: "What I build it with", items: TOOLS },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-sm font-semibold tracking-widest text-accent">
          ABOUT
        </p>
        <h2 className="mt-4 font-serif text-4xl font-bold text-navy sm:text-5xl">
          I turn chaos into systems.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
          I architect the system. AI helps me build it, fast. I also coach
          300+ professionals to do the same.
        </p>
      </Reveal>

      <Reveal delay={100} className="mt-12 sm:mt-14">
        <p className="text-center font-mono text-sm font-semibold tracking-widest text-accent">
          WHAT I DO AND FOR WHOM
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {columns.map((column) => (
            <div
              key={column.label}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <h3 className="font-mono text-xs font-semibold tracking-widest text-muted">
                {column.label.toUpperCase()}
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-navy">
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-xl text-center text-sm text-muted">
          I work remotely with clients in {CLIENT_COUNTRIES.join(", ")}.
        </p>
      </Reveal>
    </section>
  );
}
