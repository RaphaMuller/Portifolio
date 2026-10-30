"use client";

import React from "react";

interface ComicSectionBodyProps {
  children: React.ReactNode;
  layout?: "grid" | "flex" | "stack";
  className?: string;
}

/**
 * @example
 * <ComicSectionBody layout="grid">
 *   <div>Coluna 1</div>
 *   <div>Coluna 2</div>
 * </ComicSectionBody>
 */
export function ComicSectionBody({
  children,
  layout = "grid",
  className = "",
}: ComicSectionBodyProps) {
  const layoutClasses = {
    grid: "grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12",
    flex: "flex flex-col items-center justify-between gap-8 md:flex-row",
    stack: "flex flex-col items-center gap-6",
  }[layout];

  return (
    <div className={`relative z-10 mx-auto w-full max-w-6xl ${layoutClasses} ${className}`}>
      {children}
    </div>
  );
}
