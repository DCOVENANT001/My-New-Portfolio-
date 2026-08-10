import Reveal from "./Reveal";
import Carousel from "./Carousel";
import ToolBadge from "./ToolBadge";

const sessions = [
  { src: "/images/academy-session-1.jpg", caption: "A live cohort in session — faces blurred for student privacy" },
  { src: "/images/academy-session-2.jpg", caption: "Another cohort, another week — same rule, no one identifiable" },
  { src: "/images/academy-session-3.jpg", caption: "37 professionals in one live session" },
  { src: "/images/academy-session-4.jpg", caption: "27 professionals, mid-lesson" },
  { src: "/images/academy-session-5.jpg", caption: "29 professionals, hands-on and building" },
  { src: "/images/academy-session-6.jpg", caption: "Teaching live while building the automation on screen" },
];

export default function AcademyShowcase() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <Reveal>
          <p className="font-mono text-sm font-semibold tracking-widest text-accent">
            AI FOCUSED ACADEMY
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold text-navy sm:text-5xl">
            300+ professionals, coached live.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg text-muted">
            Lawyers, cybersecurity experts, HR managers, data analysts —
            taught hands-on, in real sessions, not pre-recorded theory.
            Faces are blurred throughout for student privacy.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-10">
          <Carousel images={sessions} />
        </Reveal>

        <Reveal delay={200} className="mt-8 flex flex-wrap justify-center gap-2">
          {["n8n", "Make", "Zapier", "GoHighLevel", "Claude", "ChatGPT"].map((tool) => (
            <ToolBadge key={tool} name={tool} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
