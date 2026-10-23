import Reveal from "./Reveal";

const faqs: { question: string; answer: string }[] = [
  {
    question: "How much does an AI automation system cost?",
    answer:
      "It depends on scope. A single workflow, such as an instant-reply and follow-up sequence, is a small fixed-price build. A full system, such as a lead generation engine or a CRM with AI agents, is a larger project quoted after a 30-minute call. You get a fixed price before any work starts, and no retainer is required to keep a system running.",
  },
  {
    question: "How long does it take to build?",
    answer:
      "A single automation usually ships within a week. A full system such as the Tempho Luxe build or the agency lead generation engine takes a few weeks, and you see it running on real data before it goes live.",
  },
  {
    question: "Which tools do you work with?",
    answer:
      "n8n, Make, Zapier and GoHighLevel for automation and CRM, with Claude and OpenAI for the AI agents. I also build full websites and dashboards with AI-assisted development. If you already run on a tool that is not listed, I will figure it out: a client needed HubSpot, which I had never touched, and they are still using what I built.",
  },
  {
    question: "Which industries do you work with?",
    answer:
      "Real estate, web design agencies, legal, e-commerce and coaching businesses, with clients in Canada, the United States, the United Kingdom and Ireland. The same lead generation, follow-up and CRM patterns work for any business that lives on inbound leads.",
  },
  {
    question: "How does a project start?",
    answer:
      "Book a 30-minute call and tell me what is eating your time. I map the system, send a fixed-price proposal, and build it. You get recordings of the real system running as it comes together, and every system I have shipped is still running today.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Reveal className="text-center">
        <p className="font-mono text-sm font-semibold tracking-widest text-accent">
          FAQ
        </p>
        <h2 className="mt-4 font-serif text-4xl font-bold text-navy sm:text-5xl">
          Before you book.
        </h2>
      </Reveal>

      <Reveal delay={100} className="mt-10 divide-y divide-border border-y border-border">
        {faqs.map((faq) => (
          <details key={faq.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl text-navy sm:text-2xl">
              {faq.question}
              <span
                aria-hidden
                className="shrink-0 font-mono text-accent transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 max-w-2xl text-muted">{faq.answer}</p>
          </details>
        ))}
      </Reveal>
    </section>
  );
}
