import Reveal from "./Reveal";

const quotes = [
  {
    quote: "Thank you very much for all your assistance, mentoring and support. It is very much appreciated.",
    source: "Academy student",
  },
  {
    quote: "My brother, well done. I went over the recording and brought myself up to date. Thank you very much.",
    source: "Academy student, environmental health practitioner",
  },
  {
    quote: "You're the best!",
    source: "Client",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <Reveal>
        <p className="font-mono text-sm tracking-wide text-accent">
          IN THEIR WORDS
        </p>
      </Reveal>
      <div className="mt-8 space-y-10">
        {quotes.map((item, i) => (
          <Reveal key={item.source} delay={i * 80}>
            <p className="font-serif text-2xl text-navy sm:text-3xl">
              &ldquo;{item.quote}&rdquo;
            </p>
            <p className="mt-3 font-mono text-xs text-muted">
              — {item.source}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
