import Reveal from "./Reveal";
import BrandLogo from "./BrandLogo";
import LoomEmbed from "./LoomEmbed";
import ShotMarquee from "./ShotMarquee";
import CountUp from "./CountUp";

const stats = [
  { value: "18", label: "real sites the AI learned from" },
  { value: "95", label: "point scoring scale, strong leads only" },
  { value: "7", label: "Make scenarios running as one system" },
  { value: "0", label: "hours of manual research" },
];

const steps = [
  {
    title: "Finds businesses",
    detail:
      "Searches Google Maps by city and trade, then drops anything closed, too big, or in the wrong line of work.",
  },
  {
    title: "Checks the website",
    detail:
      "Desktop and mobile screenshots, a mobile speed test, and an AI verdict on premium vs outdated — trained on the agency's own calls on 18 real sites, so it judges the way they do.",
  },
  {
    title: "Finds the owner",
    detail: "Identifies the owner by name and finds a verified email address.",
  },
  {
    title: "Scores the lead",
    detail: "Every lead is scored out of 95. Only the strong ones go through.",
  },
  {
    title: "Lands in the CRM",
    detail:
      "Arrives in GoHighLevel with a written note on exactly what's wrong with the site, tagged with the right offer, in the matching pipeline.",
  },
  {
    title: "Watches itself",
    detail:
      "If a paid tool runs out of credit, that step pauses, the client gets an email saying what to top up, and it switches back on by itself once paid.",
  },
];

const shots: { src: string; caption: string }[] = [
  { src: "/images/agency-audit/01-source-and-filter.png", caption: "01 Source & filter — Google Maps by city and trade, wrong businesses dropped" },
  { src: "/images/agency-audit/02-audit.png", caption: "02 Audit — screenshots, speed test, then Claude judges the site and finds the owner" },
  { src: "/images/agency-audit/03-enrich-and-score.png", caption: "03 Enrich & score — verified email lookup, then a score out of 95" },
  { src: "/images/agency-audit/04-deliver-to-ghl.png", caption: "04 Deliver — contact, audit note and pipeline deal in GoHighLevel, never twice" },
  { src: "/images/agency-audit/05-housekeeping.png", caption: "05 Housekeeping — weekly cleanup and retries for failed audits" },
  { src: "/images/agency-audit/06-daily-health-check.png", caption: "06 Daily health check — sourced, delivered and parked counts logged in the CRM" },
  { src: "/images/agency-audit/07-watchdog.png", caption: "07 Watchdog — pauses any tool that runs out of credit, emails the client, resumes when paid" },
];

const tools = [
  { name: "make", label: "Make" },
  { name: "claude", label: "Claude API" },
  { name: "outscraper", label: "Outscraper" },
  { name: "screenshotone", label: "ScreenshotOne" },
  { name: "pagespeed", label: "Google PageSpeed" },
  { name: "bettercontact", label: "BetterContact" },
  { name: "gohighlevel", label: "GoHighLevel" },
  { name: "gmail", label: "Gmail" },
];

export default function FlagshipAgency() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <Reveal className="text-center">
          <p className="font-mono text-sm font-semibold tracking-widest text-accent">
            FLAGSHIP — US WEB DESIGN AGENCY, 2026
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold text-navy sm:text-6xl">
            Every sales call starts with the answer.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
            The agency sells website redesigns to interior designers and
            landscapers. Finding the right prospects took hours of manual
            work every day. Now a system does it before the team logs in.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="card-hover rounded-xl border border-border bg-surface p-5 text-center"
            >
              <p className="flex items-center justify-center gap-2 font-serif text-3xl font-bold text-navy">
                <span className="live-dot h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
                <CountUp value={stat.value} />
              </p>
              <p className="mt-1 font-mono text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={150} className="mt-12 sm:mt-16">
          <p className="text-center font-mono text-sm font-semibold tracking-widest text-accent">
            HOW IT WORKS, EVERY DAY
          </p>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted">
            Six stages, no human in the loop. Each one hands a cleaner lead
            to the next.
          </p>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="card-hover flex gap-4 rounded-xl border border-border bg-surface p-5"
              >
                <span className="font-mono text-sm font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={200} className="mt-12 sm:mt-16">
          <p className="text-center font-mono text-sm font-semibold tracking-widest text-accent">
            WATCH IT WORK
          </p>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted">
            A walkthrough of the live system, start to finish.
          </p>
          <div className="mx-auto mt-8 max-w-3xl">
            <LoomEmbed
              id="7d48cb2a90da490ab7cd3a58f1743720"
              title="AI lead generation and website audit system walkthrough"
            />
            <p className="mt-2 text-center text-sm text-muted">
              From Google Maps search to a scored, annotated lead in the CRM
            </p>
          </div>
        </Reveal>

        <Reveal delay={250} className="mt-12 sm:mt-16">
          <p className="text-center font-mono text-sm font-semibold tracking-widest text-accent">
            THE WORKFLOWS
          </p>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted">
            The seven Make scenarios behind it, including the ones that keep
            it healthy. Click any shot to look closer.
          </p>
          <div className="mt-8">
            <ShotMarquee shots={shots} />
          </div>
        </Reveal>

        <Reveal delay={300} className="mt-12 text-center sm:mt-14">
          <p className="mx-auto max-w-xl text-muted">
            The sales team opens every call knowing who they&rsquo;re calling,
            what&rsquo;s wrong with that website, and what to pitch. No manual
            research. No wasted credits when a tool runs dry.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <BrandLogo key={tool.name} name={tool.name} label={tool.label} />
            ))}
          </div>
        </Reveal>
      </div>

    </section>
  );
}
