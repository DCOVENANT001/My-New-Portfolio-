export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-center font-mono text-xs text-muted sm:flex-row sm:text-left">
        <p>&copy; {new Date().getFullYear()} Covenant Ademola</p>
        <p>Architected by me. Built with AI. Still running.</p>
      </div>
    </footer>
  );
}
