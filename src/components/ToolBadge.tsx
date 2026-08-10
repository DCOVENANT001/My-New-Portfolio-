export default function ToolBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-navy/15 bg-surface px-3 py-1 font-mono text-xs tracking-wide text-navy">
      {name}
    </span>
  );
}
