import type { Metadata } from "next";
import Nav from "./Nav";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";
import CaseStudy from "./CaseStudy";
import { LoomThumbnailsProvider } from "./LoomThumbnails";
import { getLoomThumbnails } from "@/lib/loom";
import { getCaseStudy } from "@/data/caseStudies";
import { SITE_URL } from "@/lib/site";

/** Metadata shared by every /work/<slug> page. */
export function caseStudyMetadata(slug: string): Metadata {
  const study = getCaseStudy(slug);
  const title = `${study.title} — Covenant Ademola`;
  const url = `${SITE_URL}/work/${slug}`;
  return {
    title,
    description: study.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: study.description,
      url,
      siteName: "Covenant Ademola",
      type: "article",
    },
  };
}

/** The full page for one case study: nav, article, footer. */
export default async function CaseStudyPage({ slug }: { slug: string }) {
  const study = getCaseStudy(slug);
  const loomThumbnails = await getLoomThumbnails();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.description,
    url: `${SITE_URL}/work/${slug}`,
    author: { "@id": `${SITE_URL}/#person` },
    publisher: { "@id": `${SITE_URL}/#person` },
    about: study.tools.map((tool) => tool.label),
  };

  return (
    <LoomThumbnailsProvider thumbnails={loomThumbnails}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Nav />
      <main>
        <CaseStudy study={study} />
      </main>
      <Footer />
      <WhatsAppFloat />
    </LoomThumbnailsProvider>
  );
}
