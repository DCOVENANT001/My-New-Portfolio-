import Reveal from "./Reveal";

export default function BragLine() {
  return (
    <div className="border-y border-border bg-navy">
      <Reveal className="mx-auto max-w-4xl px-6 py-14 text-center">
        <p className="font-serif text-2xl italic leading-relaxed text-white sm:text-3xl">
          Not to brag, but one system I built replaced the work of{" "}
          <span className="text-accent not-italic">seven people</span> —
          and it still runs today.
        </p>
      </Reveal>
    </div>
  );
}
