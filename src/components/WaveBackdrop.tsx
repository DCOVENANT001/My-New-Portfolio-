const nodes: [number, number][] = [
  [650, 60], [720, 140], [780, 90], [600, 220], [700, 280],
  [760, 340], [650, 400], [720, 440], [50, 50], [120, 120],
  [30, 180], [90, 260], [40, 340], [110, 420], [400, 40], [450, 460],
];

const lines: [number, number, number, number][] = [
  [650, 60, 720, 140],
  [720, 140, 780, 90],
  [720, 140, 700, 280],
  [700, 280, 760, 340],
  [760, 340, 650, 400],
  [650, 400, 720, 440],
  [600, 220, 700, 280],
  [50, 50, 120, 120],
  [120, 120, 30, 180],
  [30, 180, 90, 260],
  [90, 260, 40, 340],
  [40, 340, 110, 420],
  [400, 40, 650, 60],
  [400, 40, 120, 120],
  [450, 460, 650, 400],
  [450, 460, 110, 420],
];

const pulses: { path: string; delay: number; duration: number }[] = [
  { path: "M650 60 L720 140 L700 280 L760 340", delay: 0, duration: 6 },
  { path: "M50 50 L120 120 L30 180 L90 260 L40 340", delay: 1.4, duration: 7 },
  { path: "M400 40 L650 60 L720 140 L780 90", delay: 2.6, duration: 5.5 },
  { path: "M450 460 L650 400 L720 440", delay: 0.8, duration: 4.5 },
  { path: "M400 40 L120 120 L30 180", delay: 3.4, duration: 6.5 },
];

export default function WaveBackdrop() {
  return (
    <svg
      viewBox="0 0 800 500"
      fill="none"
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      {lines.map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="var(--navy)"
          strokeWidth="1"
          opacity="0.12"
        />
      ))}

      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i % 3 === 0 ? 3 : 2}
          fill={i % 4 === 0 ? "var(--accent)" : "var(--navy)"}
          opacity="0.25"
        />
      ))}

      {pulses.map((p, i) => (
        <circle
          key={i}
          r="3.5"
          fill={i % 2 === 0 ? "var(--accent)" : "var(--accent-2)"}
          className="pulse-dot"
          style={{
            offsetPath: `path("${p.path}")`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </svg>
  );
}
