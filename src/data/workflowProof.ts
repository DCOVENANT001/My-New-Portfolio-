export type WorkflowShot = { src: string; caption: string };

export const workflowsByPlatform: { platform: string; shots: WorkflowShot[] }[] = [
  {
    platform: "GHL",
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
  {
    platform: "Make",
    shots: [
      { src: "/images/workflows/make/01-scraping-pipeline.png", caption: "The daily pipeline that finds new landlords" },
      { src: "/images/workflows/make/02-execution-log-1.png", caption: "A real run: 646 steps completed in 17 seconds" },
      { src: "/images/workflows/make/03-execution-log-2.png", caption: "A later run: 1,552 steps completed in 41 seconds" },
    ],
  },
  {
    platform: "Zapier",
    shots: [
      { src: "/images/workflows/zapier/01-ai-receptionist.png", caption: "An AI receptionist workflow, built for the academy" },
      { src: "/images/workflows/zapier/02-lead-nurture-1.png", caption: "A lead nurture automation, step by step" },
      { src: "/images/workflows/zapier/03-lead-nurture-2.png", caption: "The same sequence, continued" },
    ],
  },
  {
    platform: "n8n",
    shots: [
      { src: "/images/workflows/n8n/01-intake-instant-reply.png", caption: "A new lead comes in, gets checked for duplicates, and gets an instant reply" },
      { src: "/images/workflows/n8n/02-day1-followup.png", caption: "No response yet? A Day 1 follow-up goes out on its own" },
      { src: "/images/workflows/n8n/03-day3-followup.png", caption: "Still nothing? Day 3 follow-up fires automatically" },
      { src: "/images/workflows/n8n/04-all-stages-published.png", caption: "All four stages published and live — including the Day 7 final email" },
      { src: "/images/workflows/n8n/05-image-generation-pipeline.png", caption: "A webhook-triggered image generation pipeline — real run, 59 seconds" },
    ],
  },
];
