import CaseStudyPage, { caseStudyMetadata } from "@/components/CaseStudyPage";

const slug = "tempho-luxe";

export const metadata = caseStudyMetadata(slug);

export default function Page() {
  return <CaseStudyPage slug={slug} />;
}
