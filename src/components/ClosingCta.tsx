import Reveal from "./Reveal";
import GradientBlobs from "./GradientBlobs";
import BookCallButton from "./BookCallButton";

export default function ClosingCta() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-navy">
      <GradientBlobs />
      <Reveal className="relative mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="font-serif text-4xl font-bold text-white sm:text-6xl">
          Stop being the bottleneck.
        </h2>
        <p className="mt-5 text-lg text-white/70">
          Tell me what&rsquo;s eating your time.
        </p>
        <BookCallButton className="btn-glow mt-8 inline-block rounded-full bg-accent px-8 py-3.5 font-mono text-sm font-medium text-white">
          Book a call
        </BookCallButton>
      </Reveal>
    </section>
  );
}
