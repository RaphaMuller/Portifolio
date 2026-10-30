"use client";

import React from "react";

interface ComicSectionContainerProps {
  id?: string;
  children: React.ReactNode;
  variant?: "dots" | "plain" | "lightblue" | "bege" | "dark" | "yellow" | "skills";
  borderBottom?: boolean;
  noPaddingX?: boolean;
  className?: string;
  ariaLabel?: string;
}

/**
 * @example
 * <ComicSectionContainer id="hero" variant="dots" noPaddingX>
 *   {children}
 * </ComicSectionContainer>
 */
export function ComicSectionContainer({
  id,
  children,
  variant = "dots",
  borderBottom = true,
  noPaddingX = false,
  className = "",
  ariaLabel,
}: ComicSectionContainerProps) {
  const variantClasses = {
    dots: "bg-comic-lightblue bg-comic-dots",
    plain: "bg-white",
    lightblue: "bg-comic-lightblue",
    bege: "bg-comic-bege bg-comic-dots",
    dark: "bg-comic-projects-bg bg-comic-dots text-white",
    yellow: "bg-comic-yellow bg-comic-dots",
    skills: "bg-comic-section-gradient",
  }[variant];

  const paddingXClass = noPaddingX ? "px-0" : "px-4 md:px-8";

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`relative flex min-h-screen w-full flex-col justify-center overflow-hidden py-24 scroll-mt-16 ${paddingXClass} ${borderBottom ? "border-b-8 border-black" : ""} ${variantClasses} ${className}`}
    >
      {children}
    </section>
  );
}
