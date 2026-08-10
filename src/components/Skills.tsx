import Reveal from "./Reveal";
import {
  IconAutomation,
  IconAgent,
  IconApi,
  IconBuild,
  IconCoach,
} from "./icons";

const items = [
  {
    icon: IconAutomation,
    name: "Workflow automation",
    detail: "n8n, Zapier, Make, GoHighLevel — connected and running.",
  },
  {
    icon: IconAgent,
    name: "AI agents",
    detail: "Voice and chat agents that sound right, because I prompt-engineer them to.",
  },
  {
    icon: IconApi,
    name: "APIs & webhooks",
    detail: "The plumbing between your apps — built so nothing breaks.",
  },
  {
    icon: IconBuild,
    name: "AI-native builds",
    detail: "Sites, dashboards, CRMs — architected by me, built with AI.",
  },
  {
    icon: IconCoach,
    name: "Coaching",
    detail: "300+ professionals, taught hands-on, not in theory.",
  },
];

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="text-center">
        <p className="font-mono text-sm font-semibold tracking-widest text-accent">
          WHAT I BUILD
        </p>
        <h2 className="mt-4 font-serif text-4xl font-bold text-navy sm:text-5xl">
          The whole system.
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.name} delay={i * 60}>
            <div className="card-hover h-full rounded-xl border border-border bg-surface p-6">
              <item.icon className="h-7 w-7 text-accent" />
              <h3 className="mt-4 font-serif text-xl font-semibold text-navy">
                {item.name}
              </h3>
              <p className="mt-2 text-sm text-muted">{item.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
