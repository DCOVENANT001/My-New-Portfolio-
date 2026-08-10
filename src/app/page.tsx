import ScrollProgress from "@/components/ScrollProgress";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBadge from "@/components/TrustBadge";
import CredibilityStrip from "@/components/CredibilityStrip";
import About from "@/components/About";
import Skills from "@/components/Skills";
import TechnicalStack from "@/components/TechnicalStack";
import BragLine from "@/components/BragLine";
import FlagshipTempho from "@/components/FlagshipTempho";
import FlagshipSeven from "@/components/FlagshipSeven";
import WorkflowShowcase from "@/components/WorkflowShowcase";
import ProofGrid from "@/components/ProofGrid";
import AcademyShowcase from "@/components/AcademyShowcase";
import Testimonials from "@/components/Testimonials";
import ClosingCta from "@/components/ClosingCta";
import Contact from "@/components/Contact";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <TrustBadge />
        <CredibilityStrip />
        <About />
        <Skills />
        <TechnicalStack />
        <BragLine />
        <FlagshipTempho />
        <FlagshipSeven />
        <WorkflowShowcase />
        <ProofGrid />
        <AcademyShowcase />
        <Testimonials />
        <ClosingCta />
        <Contact />
      </main>
      <WhatsAppFloat />
    </>
  );
}
