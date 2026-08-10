"use client";

import { useEffect, useState } from "react";
import BookCallButton from "./BookCallButton";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#proof", label: "Proof" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/85 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "nav-scrolled" : ""
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-[padding] duration-300 ${
          scrolled ? "py-2.5" : "py-4"
        }`}
      >
        <a href="#top" className="font-serif text-lg font-semibold text-navy">
          Covenant Ademola
        </a>
        <ul className="hidden gap-8 font-mono text-sm text-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link transition-colors hover:text-accent">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <BookCallButton className="btn-glow rounded-full bg-navy px-4 py-2 font-mono text-xs font-medium text-white">
          Book a call
        </BookCallButton>
      </nav>
    </header>
  );
}
