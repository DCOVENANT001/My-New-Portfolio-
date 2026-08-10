"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import BrandLogo from "./BrandLogo";
import BookCallButton from "./BookCallButton";

const elsewhere = [
  {
    icon: "x",
    label: "X",
    value: "@covenant__ai",
    href: "https://x.com/covenant__ai",
  },
  {
    icon: "instagram",
    label: "Instagram",
    value: "@covenant__ai",
    href: "https://instagram.com/covenant__ai",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: "Covenant Ademola",
    href: "https://www.linkedin.com/in/covenant-ademola-2359a42a5/",
  },
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: "Message me",
    href: "https://wa.me/2347087876974",
  },
  {
    icon: "calendar",
    label: "Book a call",
    value: "Schedule 30 minutes",
    href: "#",
  },
];

const EMAIL = "covenantademola17@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24">
      <Reveal>
        <p className="font-mono text-xs tracking-widest text-muted">
          DIRECT
        </p>
        <div className="mt-3 flex flex-wrap items-baseline gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="font-serif text-3xl text-navy underline decoration-navy/30 underline-offset-4 hover:decoration-accent sm:text-4xl"
          >
            {EMAIL}
          </a>
          <button
            onClick={handleCopy}
            className="font-mono text-xs tracking-wide text-accent hover:opacity-70"
          >
            {copied ? "COPIED" : "COPY"}
          </button>
        </div>
      </Reveal>

      <Reveal delay={100} className="mt-14">
        <p className="font-mono text-xs tracking-widest text-muted">
          ELSEWHERE
        </p>
        <div className="mt-3 divide-y divide-border border-t border-border">
          {elsewhere.map((item) => {
            const rowContent = (
              <>
                <span className="flex items-center gap-3">
                  <BrandLogo name={item.icon} label={item.label} />
                  <span className="font-mono text-xs tracking-wide text-muted">
                    {item.label.toUpperCase()}
                  </span>
                </span>
                <span className="flex items-center gap-2 text-navy underline decoration-navy/20 underline-offset-4 group-hover:decoration-accent group-hover:text-accent">
                  {item.value}
                  <span aria-hidden>↗</span>
                </span>
              </>
            );

            if (item.label === "Book a call") {
              return (
                <BookCallButton
                  key={item.label}
                  className="group flex w-full items-center justify-between py-4 text-left transition-transform duration-300 ease-out hover:translate-x-1"
                >
                  {rowContent}
                </BookCallButton>
              );
            }

            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 transition-transform duration-300 ease-out hover:translate-x-1"
              >
                {rowContent}
              </a>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
