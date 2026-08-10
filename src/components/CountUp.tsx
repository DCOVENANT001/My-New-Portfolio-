"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUp({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const match = value.match(/^(\D*)([\d,]+)(\D*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(match ? match[1] + "0" + match[3] : value);
  const animating = useRef(false);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (!match) return;
    const el = ref.current;
    if (!el) return;

    const [, prefix, numStr, suffix] = match;
    const grouped = numStr.includes(",");
    const target = parseInt(numStr.replace(/,/g, ""), 10);

    const format = (n: number) => prefix + (grouped ? n.toLocaleString() : String(n)) + suffix;

    const runCount = () => {
      if (animating.current) return;
      animating.current = true;
      const duration = 1200;
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(format(Math.round(target * eased)));
        if (progress < 1) {
          frame.current = requestAnimationFrame(tick);
        } else {
          animating.current = false;
        }
      };
      frame.current = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runCount();
        } else {
          if (frame.current) cancelAnimationFrame(frame.current);
          animating.current = false;
          setDisplay(format(0));
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (frame.current) cancelAnimationFrame(frame.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
