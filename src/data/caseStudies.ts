import type { LightboxShot } from "@/components/Lightbox";

export type CaseStudyVideo = { id: string; title: string; caption: string };

export type CaseStudyGallery = {
  label: string;
  intro: string;
  shots: LightboxShot[];
  /** "grid" shows every shot at once; "marquee" is the auto-scrolling row. */
  layout: "grid" | "marquee";
};

export type CaseStudy = {
  slug: string;
  /** Eyebrow, e.g. "CASE STUDY — REAL ESTATE, CANADA". */
  eyebrow: string;
  /** Plain, descriptive page title (also the <title>). */
  title: string;
  /** The tagline used on the main page, kept as the headline. */
  tagline: string;
  description: string;
  stats?: { value: string; label: string }[];
  problem: string[];
  built: string[];
  result: string[];
  tools: { name: string; label: string }[];
  videos: CaseStudyVideo[];
  galleries: CaseStudyGallery[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "tempho-luxe",
    eyebrow: "CASE STUDY — REAL ESTATE, CANADA",
    title: "AI voice agent, CRM and website for a Canadian real estate company",
    tagline: "I was their entire tech team.",
    description:
      "How I built the website, a 24/7 AI voice and chat agent, a GoHighLevel CRM and a daily landlord-sourcing pipeline for Tempho Luxe, a Canadian real estate company. 1,820+ opportunities managed, 3,360 landlords reached, 53 listings converted.",
    stats: [
      { value: "1,820+", label: "opportunities managed" },
      { value: "3,360", label: "landlords reached" },
      { value: "53", label: "listings converted" },
      { value: "24/7", label: "AI coverage" },
    ],
    problem: [
      "Tempho Luxe needed a website, a way to answer landlords and renters around the clock, and a CRM to keep up with every conversation. They had no in-house tech team to build or run any of it.",
      "Finding new landlords meant manual searching, manual outreach and manual follow-up, and leads slipped through whenever nobody was online.",
    ],
    built: [
      "The website, with a landlord portal where properties are listed and go live, and an AI chat assistant that helps renters search properties instantly.",
      "A 24/7 AI voice agent that answers real phone calls, and a chat agent that replies to Instagram and Facebook messages.",
      "A GoHighLevel CRM with five automations that run landlord outreach end to end: first contact, three follow-ups, reply handling, moving unresponsive leads to cold, and texting each landlord their claim link.",
      "A daily pipeline, built with Apify and Make, that finds new landlords, cleans the data and routes it straight into the CRM.",
    ],
    result: [
      "1,820+ opportunities managed in one system, 3,360 landlords reached and 53 listings converted, with AI covering calls and messages 24/7.",
      "One real run of the sourcing pipeline completed 646 steps in 17 seconds. A later run completed 1,552 steps in 41 seconds. The same system is still running today.",
    ],
    tools: [
      { name: "apify", label: "Apify" },
      { name: "make", label: "Make" },
      { name: "gohighlevel", label: "GoHighLevel" },
      { name: "n8n", label: "n8n" },
      { name: "voiceai", label: "Voice AI" },
    ],
    videos: [
      {
        id: "ce52a6780423414688dbced4ea629ee0",
        title: "CRM walkthrough",
        caption: "A walkthrough of the CRM managing landlord and tenant leads",
      },
      {
        id: "36a54869700548d4821b2206725e1b78",
        title: "Voice AI agent live call",
        caption: "The voice agent answering a real phone call, unscripted",
      },
      {
        id: "87b3418f5d9a4f48a43c379dd44ef473",
        title: "Social media AI agent",
        caption: "The chat agent replying to a real Instagram/Facebook message",
      },
      {
        id: "787dbf49e2ad4694bc031224eeb50568",
        title: "Landlord automation workflows tour",
        caption: "A tour of the 5 automations that run landlord outreach end to end",
      },
    ],
    galleries: [
      {
        label: "THE PRODUCT",
        intro: "What landlords and tenants actually use, live today. Click a shot to look closer.",
        layout: "grid",
        shots: [
          { src: "/images/tempho-landlord-portal.png", caption: "Landlord portal — 53 properties listed and live" },
          { src: "/images/tempho-ai-chat.png", caption: "AI chat — helps renters search properties instantly" },
          { src: "/images/tempho-crm.png", caption: "The CRM behind it — 1,820+ opportunities tracked" },
        ],
      },
      {
        label: "THE RECEIPTS",
        intro: "Every number below is from an actual execution log, not a projection. Click a shot to look closer.",
        layout: "grid",
        shots: [
          { src: "/images/tempho-scraping-pipeline.png", caption: "The pipeline that finds new landlords daily, start to finish" },
          { src: "/images/tempho-execution-log-1.png", caption: "One real run: 646 steps completed automatically in 17 seconds" },
          { src: "/images/tempho-execution-log-2.png", caption: "A later run: 1,552 steps completed in 41 seconds — same system, still running" },
        ],
      },
      {
        label: "THE GOHIGHLEVEL WORKFLOWS",
        intro: "The automations running behind Tempho Luxe, screenshot by screenshot. Click any shot to look closer.",
        layout: "marquee",
        shots: [
          { src: "/images/workflows/ghl/01-workflows-overview.png", caption: "Every automation running behind Tempho Luxe, in one view" },
          { src: "/images/workflows/ghl/02-workflows-for-landlords.png", caption: "All landlord-specific automations together" },
          { src: "/images/workflows/ghl/03-workflows-acquisition.png", caption: "The workflows that acquire new landlords" },
          { src: "/images/workflows/ghl/04-landlord-outreach.png", caption: "The first message a new landlord gets from the system" },
          { src: "/images/workflows/ghl/05-follow-up-1.png", caption: "Follow-up sequence — step 1" },
          { src: "/images/workflows/ghl/06-follow-up-2.png", caption: "Follow-up sequence — step 2" },
          { src: "/images/workflows/ghl/07-follow-up-3.png", caption: "Follow-up sequence — step 3" },
          { src: "/images/workflows/ghl/08-reply-handler-1.png", caption: "Reading a landlord's reply and deciding what happens next" },
          { src: "/images/workflows/ghl/09-reply-handler-2.png", caption: "A second reply handler, catching edge cases" },
          { src: "/images/workflows/ghl/10-move-to-cold-stage.png", caption: "Unresponsive leads get moved to \"cold\" automatically" },
          { src: "/images/workflows/ghl/11-send-claim-link.png", caption: "A landlord's claim link, texted the moment it's ready" },
          { src: "/images/workflows/ghl/12-website-connects-to-ghl.png", caption: "How the website and the CRM talk to each other" },
        ],
      },
    ],
  },
  {
    slug: "ai-lead-generation-agency",
    eyebrow: "CASE STUDY — WEB DESIGN AGENCY, UNITED STATES",
    title: "AI lead generation and website audit system for a US web design agency",
    tagline: "Qualified leads, delivered daily. Nobody lifts a finger.",
    description:
      "How I built a Make and Claude system for a US web design agency that finds local businesses, audits their websites, finds the owner, scores each lead and delivers it to GoHighLevel with the pitch already written. Seven Make scenarios, no human in the loop.",
    problem: [
      "The agency's sales team was doing the research by hand: finding businesses, checking each website, hunting for the owner's contact and working out what to pitch, before a single call could happen.",
      "Paid tools for scraping, screenshots and contact lookup ran out of credit without warning, and runs failed quietly when they did.",
    ],
    built: [
      "A Make system with seven scenarios. Every day it sources businesses from Google Maps by city and trade, drops the wrong ones, screenshots and speed-tests each website, and has Claude judge the site and identify the owner.",
      "An enrichment step that looks up a verified email for the owner and scores the lead out of 95, so the best prospects rise to the top.",
      "Delivery into GoHighLevel: a contact, an audit note with the pitch, and a pipeline deal, never created twice.",
      "The scenarios that keep it healthy: weekly housekeeping with retries for failed audits, a daily health check that logs sourced, delivered and parked counts into the CRM, and a watchdog that pauses any tool that runs out of credit, emails the client and resumes when it is paid.",
    ],
    result: [
      "Scored, ready-to-call leads land in the CRM every day before anyone logs in, with the website audit and the pitch already written.",
      "The sales team opens every call knowing who they are calling, what is wrong with that website and what to offer. No manual research, and no wasted credits when a tool runs dry.",
    ],
    tools: [
      { name: "make", label: "Make" },
      { name: "claude", label: "Claude API" },
      { name: "outscraper", label: "Outscraper" },
      { name: "screenshotone", label: "ScreenshotOne" },
      { name: "pagespeed", label: "Google PageSpeed" },
      { name: "bettercontact", label: "BetterContact" },
      { name: "gohighlevel", label: "GoHighLevel" },
      { name: "gmail", label: "Gmail" },
    ],
    videos: [
      {
        id: "7d48cb2a90da490ab7cd3a58f1743720",
        title: "AI lead generation and website audit system walkthrough",
        caption: "One real lead, start to finish, with no one touching it",
      },
    ],
    galleries: [
      {
        label: "THE WORKFLOWS",
        intro: "The seven Make scenarios behind it, including the ones that keep it healthy. Click any shot to look closer.",
        layout: "marquee",
        shots: [
          { src: "/images/agency-audit/01-source-and-filter.png", caption: "01 Source & filter — Google Maps by city and trade, wrong businesses dropped" },
          { src: "/images/agency-audit/02-audit.png", caption: "02 Audit — screenshots, speed test, then Claude judges the site and finds the owner" },
          { src: "/images/agency-audit/03-enrich-and-score.png", caption: "03 Enrich & score — verified email lookup, then a score out of 95" },
          { src: "/images/agency-audit/04-deliver-to-ghl.png", caption: "04 Deliver — contact, audit note and pipeline deal in GoHighLevel, never twice" },
          { src: "/images/agency-audit/05-housekeeping.png", caption: "05 Housekeeping — weekly cleanup and retries for failed audits" },
          { src: "/images/agency-audit/06-daily-health-check.png", caption: "06 Daily health check — sourced, delivered and parked counts logged in the CRM" },
          { src: "/images/agency-audit/07-watchdog.png", caption: "07 Watchdog — pauses any tool that runs out of credit, emails the client, resumes when paid" },
        ],
      },
    ],
  },
  {
    slug: "uk-real-estate-ai-agent",
    eyebrow: "CASE STUDY — REAL ESTATE, UNITED KINGDOM",
    title: "AI agent that qualifies and follows up every landlord lead for a UK real estate firm",
    tagline: "Replaced seven people.",
    description:
      "How one AI agent replaced the manual work of seven people at a UK real estate firm: every landlord reply handled, every lead sorted into hot, warm or cold in under 60 seconds, and a day-by-day follow-up sequence that runs on its own.",
    problem: [
      "Replying to landlords, qualifying each lead and chasing the ones who went quiet was the full-time work of seven people, and leads still waited for a reply whenever the team was busy or offline.",
    ],
    built: [
      "An AI agent that reads every landlord reply and responds on its own, with no human in the loop.",
      "A lead qualification step that sorts each new lead into hot, warm or cold within 60 seconds of it arriving.",
      "An automatic day-by-day nurture sequence that follows up with the leads that have not replied yet, until they do.",
    ],
    result: [
      "The work of seven people now runs as one AI agent. Every landlord reply is handled, every lead is qualified in under a minute, and the follow-up never stops.",
      "The system is still running today.",
    ],
    tools: [
      { name: "ai-agent", label: "AI agent" },
      { name: "crm-automation", label: "CRM automation" },
      { name: "lead-qualification", label: "Lead qualification" },
      { name: "follow-up", label: "Follow-up sequences" },
    ],
    videos: [
      {
        id: "6c5d35d920fe4d8f9422a9aa17d70796",
        title: "Lead qualification system",
        caption: "Step 1 — sorted into hot, warm, or cold in under 60 seconds",
      },
      {
        id: "9a49064c7e2a4da8895a62540ffad69a",
        title: "Lead nurture sequence explained",
        caption: "Step 2 — the automatic day-by-day follow-up sequence, explained",
      },
    ],
    galleries: [],
  },
];

export function getCaseStudy(slug: string): CaseStudy {
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) throw new Error(`Unknown case study: ${slug}`);
  return study;
}
