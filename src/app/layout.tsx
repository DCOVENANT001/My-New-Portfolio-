import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import CalEmbed from "@/components/CalEmbed";
import {
  CLIENT_COUNTRIES,
  EMAIL,
  INDUSTRIES,
  SERVICES,
  SITE_URL,
  SOCIAL_LINKS,
  TOOLS,
} from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Covenant Ademola — AI Engineer & Automation Specialist",
  description:
    "I build the systems that run your business — AI agents, CRMs, and websites that keep working while you sleep. Every system I've shipped is still running today.",
  openGraph: {
    title: "Covenant Ademola — AI Engineer & Automation Specialist",
    description:
      "I build the systems that run your business — AI agents, CRMs, and websites that keep working while you sleep.",
    url: SITE_URL,
    siteName: "Covenant Ademola",
    type: "website",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Covenant Ademola",
  alternateName: "Ademola Covenant",
  jobTitle: "AI Engineer & Automation Specialist",
  email: `mailto:${EMAIL}`,
  url: SITE_URL,
  sameAs: SOCIAL_LINKS,
  knowsAbout: [
    "AI automation",
    "AI lead generation",
    "n8n",
    "Zapier",
    "Make",
    "GoHighLevel",
    "Claude",
    "OpenAI",
    "Workflow automation",
    "AI agents",
    "Prompt engineering",
    "Webhooks and APIs",
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#service`,
  name: "Covenant Ademola — AI Automation & Lead Generation Systems",
  description: `AI automation engineer building ${SERVICES.slice(0, 3)
    .join(", ")
    .toLowerCase()} for ${INDUSTRIES.join(", ").toLowerCase()} businesses, using ${TOOLS.join(", ")}.`,
  url: SITE_URL,
  email: `mailto:${EMAIL}`,
  founder: { "@id": `${SITE_URL}/#person` },
  provider: { "@id": `${SITE_URL}/#person` },
  sameAs: SOCIAL_LINKS,
  areaServed: CLIENT_COUNTRIES.map((name) => ({ "@type": "Country", name })),
  serviceType: SERVICES,
  knowsAbout: [...TOOLS, ...INDUSTRIES],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI automation services",
    itemListElement: SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service },
    })),
  },
};

const jsonLd = (data: object) => JSON.stringify(data).replace(/</g, "\\u003c");

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(serviceJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <CalEmbed />
        {children}
      </body>
    </html>
  );
}
