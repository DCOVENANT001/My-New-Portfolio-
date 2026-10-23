// The public address of the site. Set NEXT_PUBLIC_SITE_URL once a custom
// domain exists; until then Vercel supplies its production domain
// (the shortest custom domain, or the vercel.app one if none is attached).
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const SITE_NAME = "Covenant Ademola";
export const EMAIL = "covenantademola17@gmail.com";

export const SOCIAL_LINKS = [
  "https://www.linkedin.com/in/covenant-ademola-2359a42a5/",
  "https://x.com/covenant__ai",
  "https://instagram.com/covenant__ai",
];

/** Plain-language facts reused by the hero, the "what I do" block and the schema. */
export const SERVICES = [
  "AI lead generation systems",
  "AI voice and chat agents",
  "CRM automation",
  "Workflow automation",
  "AI-built websites and dashboards",
  "AI automation coaching",
];

export const INDUSTRIES = [
  "Real estate",
  "Web design agencies",
  "Legal",
  "E-commerce",
  "Coaching and education",
];

export const TOOLS = ["n8n", "Make", "Zapier", "GoHighLevel", "Claude", "OpenAI"];

export const CLIENT_COUNTRIES = ["Canada", "United States", "United Kingdom", "Ireland"];
