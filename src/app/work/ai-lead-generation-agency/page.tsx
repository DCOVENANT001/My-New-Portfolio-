import CaseStudyPage, { caseStudyMetadata } from "@/components/CaseStudyPage";

const slug = "ai-lead-generation-agency";

export const metadata = caseStudyMetadata(slug);

export default function Page() {
  return <CaseStudyPage slug={slug} />;
}
