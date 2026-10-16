import Reveal from "./Reveal";
import BrandLogo from "./BrandLogo";
import LoomEmbed from "./LoomEmbed";
import ShotMarquee from "./ShotMarquee";


const steps = [
  "Finds businesses",
  "Checks the website",
  "Finds the owner",
  "Scores the lead",
  "Lands in the CRM",
  "Watches itself",
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
            Qualified leads, delivered daily. Nobody lifts a finger.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
            A lead generation system I built for a US web design agency.
            It finds the businesses, audits their websites, finds the owner
            and hands the sales team scored leads with the pitch already
            written. Every day, before anyone logs in.
          </p>
        </Reveal>


        <Reveal delay={100} className="mt-10 sm:mt-12">
          <p className="text-center font-mono text-sm font-semibold tracking-widest text-accent">
            HOW IT WORKS, EVERY DAY
          </p>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted">
            Six stages, no human in the loop.
          </p>
          <ol className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-3 sm:gap-x-3">
            {steps.map((step, i) => (
              <li key={step} className="flex items-center gap-2 sm:gap-3">
                <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-2 shadow-sm">
                  <span className="font-mono text-xs font-semibold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-navy">{step}</span>
                </span>
                {i < steps.length - 1 && (
                  <span aria-hidden className="hidden text-border sm:inline">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={200} className="mt-12 sm:mt-16">
          <p className="text-center font-mono text-sm font-semibold tracking-widest text-accent">
            WATCH IT WORK
          </p>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted">
            The system running for real: a business found on Google Maps,
            its website audited, the owner identified, and a ready-to-call
            lead landing in the CRM.
          </p>
          <div className="mx-auto mt-8 max-w-3xl">
            <LoomEmbed
              id="7d48cb2a90da490ab7cd3a58f1743720"
              title="AI lead generation and website audit system walkthrough"
            />
            <p className="mt-2 text-center text-sm text-muted">
              One real lead, start to finish, with no one touching it
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
