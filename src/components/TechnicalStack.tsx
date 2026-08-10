import Reveal from "./Reveal";
import BrandLogo from "./BrandLogo";

const groups = [
  {
    label: "AI-native development",
    items: [
      { name: "claude", label: "Claude Code" },
      { name: "codex", label: "Codex" },
      { name: "github", label: "GitHub" },
    ],
  },
  {
    label: "Languages & data",
    items: [
      { name: "python", label: "Python" },
      { name: "postgresql", label: "PostgreSQL" },
      { name: "restapi", label: "REST APIs" },
      { name: "webhooks", label: "Webhooks" },
    ],
  },
  {
    label: "AI / LLM integration",
    items: [
      { name: "openai", label: "OpenAI" },
      { name: "claude", label: "Claude" },
      { name: "gemini", label: "Gemini" },
    ],
  },
  {
    label: "Automation platforms",
    items: [
      { name: "n8n", label: "n8n" },
      { name: "zapier", label: "Zapier" },
      { name: "make", label: "Make" },
      { name: "gohighlevel", label: "GoHighLevel" },
    ],
  },
];

export default function TechnicalStack() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <Reveal>
        <p className="font-mono text-sm font-semibold tracking-widest text-accent">
          BEYOND AUTOMATION
        </p>
        <h2 className="mt-4 font-serif text-4xl font-bold text-navy sm:text-5xl">
          An AI engineer, not just an automation specialist.
        </h2>
        <div className="mx-auto mt-5 max-w-md space-y-4 text-left text-lg text-muted">
          <p className="font-semibold text-navy">
            Don&rsquo;t see your exact tools listed below? That&rsquo;s
            never stopped me.
          </p>
          <p>
            A client needed new leads answered the second they came in —
            using HubSpot, a tool I&rsquo;d never touched. By the time I
            finished, they were impressed. They&rsquo;re still using it
            today.
          </p>
          <p className="font-semibold text-navy">
            Whatever you&rsquo;re already running on, I&rsquo;ll figure it
            out.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 space-y-8 text-left">
        {groups.map((group, gi) => (
          <Reveal key={group.label} delay={gi * 80}>
            <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:gap-8">
              <p className="w-full shrink-0 font-mono text-xs font-semibold tracking-widest text-muted sm:w-48">
                {group.label.toUpperCase()}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {group.items.map((item) => (
                  <BrandLogo key={item.label} name={item.name} label={item.label} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
