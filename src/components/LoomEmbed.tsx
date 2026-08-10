export default function LoomEmbed({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg border border-border">
      <iframe
        src={`https://www.loom.com/embed/${id}`}
        title={title}
        allow="fullscreen"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  );
}
