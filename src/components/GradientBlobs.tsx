export default function GradientBlobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="blob absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
      />
      <div
        className="blob absolute -right-32 top-10 h-[380px] w-[380px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent-2), transparent 70%)", animationDelay: "4s" }}
      />
      <div
        className="blob absolute bottom-[-160px] left-1/3 h-[360px] w-[360px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--navy-soft), transparent 70%)", animationDelay: "8s" }}
      />
    </div>
  );
}
