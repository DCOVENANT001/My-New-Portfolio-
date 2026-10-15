"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { LoomThumbnails } from "@/lib/loom";

const LoomThumbnailsContext = createContext<LoomThumbnails>({});

export function LoomThumbnailsProvider({
  thumbnails,
  children,
}: {
  thumbnails: LoomThumbnails;
  children: ReactNode;
}) {
  return (
    <LoomThumbnailsContext.Provider value={thumbnails}>
      {children}
    </LoomThumbnailsContext.Provider>
  );
}

export function useLoomThumbnail(id: string): string | undefined {
  return useContext(LoomThumbnailsContext)[id];
}
