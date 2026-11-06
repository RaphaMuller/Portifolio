"use client";

import type { ReactNode } from "react";

type ComicSectionVariant = "night" | "dark" | "yellow" | "about" | "skills" | "contact";

interface ComicSectionContainerProps {
  id?: string;
  children: ReactNode;
  variant?: ComicSectionVariant;
  mode?: "fit";
  borderBottom?: boolean;
  noPaddingX?: boolean;
  noPaddingBottom?: boolean;
  className?: string;
  ariaLabel?: string;
}

const VARIANT_CLASSES: Record<ComicSectionVariant, string> = {
  night: "bg-comic-stars",
  dark: "bg-comic-projects-bg bg-comic-projects-gradient text-white",
  yellow: "bg-comic-yellow bg-comic-dots",
  about: "bg-comic-ice bg-comic-dots",
  skills: "bg-comic-section-gradient",
  contact: "bg-comic-contact-gradient",
};

/**
 * @example
 * <ComicSectionContainer id="about" variant="about" mode="fit">{children}</ComicSectionContainer>
 */
export function ComicSectionContainer({
  id,
  children,
  variant = "yellow",
  borderBottom = true,
  noPaddingX = false,
  noPaddingBottom = false,
  className = "",
  ariaLabel,
}: ComicSectionContainerProps) {
  const pbClass = noPaddingBottom ? "pb-0" : "safe-pb-section lg:pb-6";
  const fitClasses = `min-h-svh h-auto max-h-none overflow-x-clip overflow-y-visible safe-pt-section sm:pt-20 ${pbClass} justify-between md:h-svh md:max-h-svh md:overflow-hidden md:pt-20 lg:h-screen lg:max-h-screen lg:pt-24 lg:scroll-mt-0`;
  const paddingXClass = noPaddingX ? "px-0" : "";
  const borderBottomClass = borderBottom ? "border-b-4 border-black" : "";

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`relative flex w-full flex-col ${fitClasses} ${paddingXClass} ${borderBottomClass} ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
    </section>
  );
}
