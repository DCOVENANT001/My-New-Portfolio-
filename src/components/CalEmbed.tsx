"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Cal?: {
      (...args: unknown[]): void;
      ns: Record<string, (...args: unknown[]) => void>;
      loaded?: boolean;
      q?: unknown[];
    };
  }
}

export default function CalEmbed() {
  useEffect(() => {
    (function (C: Window, A: string, L: string) {
      const p = function (a: { q: unknown[] }, ar: unknown) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        (function (...args: unknown[]) {
          const cal = C.Cal!;
          const ar = args;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).setAttribute("src", A);
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function (...apiArgs: unknown[]) {
              p(api as unknown as { q: unknown[] }, apiArgs);
            } as { q: unknown[] } & ((...a: unknown[]) => void);
            api.q = [];
            const namespace = ar[1] as string;
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || (api as unknown as (...a: unknown[]) => void);
              p(cal.ns[namespace] as unknown as { q: unknown[] }, ar);
              p(cal as unknown as { q: unknown[] }, ["initNamespace", namespace]);
            } else {
              p(cal as unknown as { q: unknown[] }, ar);
            }
            return;
          }
          p(cal as unknown as { q: unknown[] }, ar);
        } as unknown as Window["Cal"]);
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal!("init", "30min", { origin: "https://app.cal.com" });
    window.Cal!.ns["30min"]("ui", {
      theme: "light",
      hideEventTypeDetails: false,
      layout: "month_view",
      styles: { branding: { brandColor: "#C8321F" } },
    });
  }, []);

  return null;
}
