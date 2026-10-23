import CaseStudyPage, { caseStudyMetadata } from "@/components/CaseStudyPage";

const slug = "uk-real-estate-ai-agent";

export const metadata = caseStudyMetadata(slug);

export default function Page() {
  return <CaseStudyPage slug={slug} />;
}
