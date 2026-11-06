"use client";

import type { ReactNode } from "react";

interface ComicSectionBodyProps {
  children: ReactNode;
  className?: string;
}

/**
 * @example
 * <ComicSectionBody>{children}</ComicSectionBody>
 */
export function ComicSectionBody({
  children,
  className = "",
}: ComicSectionBodyProps) {
  return (
    <div
      className={`relative z-10 mx-auto flex h-full w-full max-w-7xl flex-1 min-h-0 flex-col px-6 sm:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
