"use client";

import type { MouseEvent, ReactNode } from "react";

export const BOOKING_URL = "https://cal.com/covenant-ademola/30min";

export default function BookCallButton({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Cal.com's embed script listens for clicks on [data-cal-link] at the
    // document level and opens its popup. Once that script has registered its
    // modal element, keep the visitor on the page. If it hasn't loaded yet (slow
    // network, in-app browser, blocker), let the link fall through to cal.com.
    const calReady =
      typeof customElements !== "undefined" &&
      Boolean(customElements.get("cal-modal-box"));
    if (calReady) e.preventDefault();
  };

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      data-cal-namespace="30min"
      data-cal-link="covenant-ademola/30min"
      data-cal-config='{"layout":"month_view","theme":"light"}'
      className={className}
    >
      {children}
    </a>
  );
}
