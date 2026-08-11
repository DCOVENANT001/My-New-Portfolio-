export default function FloatingBadge({
  label,
  className = "",
  delay = 0,
}: {
  label: string;
  className?: string;
  delay?: number;
}) {
  return (
    <span
      style={{ animationDelay: `${delay}s` }}
      className={`float absolute z-10 flex h-14 w-14 items-center justify-center rounded-full border border-navy/10 bg-white font-mono text-[10px] font-semibold tracking-tight text-navy shadow-md ${className}`}
    >
      {label}
    </span>
  );
}
