import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-24 text-center">
      <Reveal>
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
    </section>
  );
}
