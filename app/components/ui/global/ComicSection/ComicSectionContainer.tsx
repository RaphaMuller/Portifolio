"use client";

import React from "react";

interface ComicSectionContainerProps {
  id?: string;
  children: React.ReactNode;
  variant?:
    | "dots"
    | "night"
    | "plain"
    | "lightblue"
    | "bege"
    | "dark"
    | "yellow"
    | "skills"
    | "contact";
  mode?: "fit" | "scroll";
  borderBottom?: boolean;
  noPaddingX?: boolean;
  className?: string;
  ariaLabel?: string;
}

/**
 * Nível 1: Container de Seção (Viewport Lock, Safe-Zone da Navbar e Fundo Temático).
 * @example
 * <ComicSectionContainer id="about" variant="yellow" mode="fit">
 *   {children}
 * </ComicSectionContainer>
 */
export function ComicSectionContainer({
  id,
  children,
  variant = "dots",
  mode = "fit",
  borderBottom = true,
  noPaddingX = false,
  className = "",
  ariaLabel,
}: ComicSectionContainerProps) {
  const variantClasses = {
    dots: "bg-comic-lightblue bg-comic-dots",
    night: "bg-comic-stars",
    plain: "bg-white",
    lightblue: "bg-comic-lightblue",
    bege: "bg-comic-bege bg-comic-dots",
    dark: "bg-comic-projects-bg bg-comic-dots text-white",
    yellow: "bg-comic-yellow bg-comic-dots",
    skills: "bg-comic-section-gradient",
    contact: "bg-comic-contact-gradient",
  }[variant];

  // Modo Fit: Trava 100dvh exato, snap magnético e desconta safe-zone da navbar.
  // Modo Scroll: Expansão vertical livre com respiro py-24.
  const modeClasses =
    mode === "fit"
      ? "h-[100dvh] max-h-[100dvh] overflow-hidden scroll-mt-0 pt-20 sm:pt-22 pb-3 sm:pb-4 justify-between"
      : "min-h-screen py-24 justify-center scroll-mt-16";

  const paddingXClass = noPaddingX ? "px-0" : "";

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`relative flex w-full flex-col ${modeClasses} ${paddingXClass} ${
        borderBottom ? "border-b-8 border-black" : ""
      } ${variantClasses} ${className}`}
    >
      {children}
    </section>
  );
}
