import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import CalEmbed from "@/components/CalEmbed";
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

const SITE_URL = "https://covenantademola.com";

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
  name: "Covenant Ademola",
  alternateName: "Ademola Covenant",
  jobTitle: "AI Engineer & Automation Specialist",
  email: "mailto:covenantademola17@gmail.com",
  url: SITE_URL,
  sameAs: [
    "https://www.linkedin.com/in/covenant-ademola-2359a42a5/",
    "https://x.com/covenant__ai",
    "https://instagram.com/covenant__ai",
  ],
  knowsAbout: [
    "AI automation",
    "n8n",
    "Zapier",
    "Make",
    "GoHighLevel",
    "Workflow automation",
    "AI agents",
    "Prompt engineering",
    "Webhooks and APIs",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <CalEmbed />
        {children}
      </body>
    </html>
  );
}
