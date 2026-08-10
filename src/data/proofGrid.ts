export type ProofItem = {
  id: string;
  title: string;
  outcome: string;
  summary: string;
  tags: string[];
  loomId?: string;
  images?: { src: string; caption: string }[];
};

export const proofGrid: ProofItem[] = [
  {
    id: "vistahand",
    title: "Vistahand — Ireland",
    outcome: "Built from zero.",
    summary: "Every workflow, every pipeline. Still running, still mine to manage.",
    tags: ["CRM", "Operations"],
  },
  {
    id: "ai-with-ann",
    title: "AI with Ann — UK",
    outcome: "Site, leads, store — automated.",
    summary: "Built the site. Automated the leads. Automated the store.",
    tags: ["Web build", "E-commerce"],
    loomId: "6d20f218258e48e7ac994730098ac7bc",
  },
  {
    id: "rocksmith-legal",
    title: "Rocksmith Legal — Canada",
    outcome: "Paperwork, solved.",
    summary: "Every file sorted, named, and stored — automatically.",
    tags: ["Legal", "Automation"],
  },
  {
    id: "sales-rep",
    title: "Sales Rep Dashboard",
    outcome: "Visibility, even when you're not there.",
    summary: "PIN-protected, real-time, built in n8n.",
    tags: ["n8n", "Dashboards"],
    loomId: "ed99355e712945119fdfb733d0a2b8d8",
  },
  {
    id: "image-pipeline",
    title: "AI Image Pipeline",
    outcome: "One call in, one image out.",
    summary: "Webhook-triggered, AI-powered, shipped and running.",
    tags: ["n8n", "OpenAI"],
  },
];
