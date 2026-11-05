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
    | "contact"
    | "projects";
  mode?: "fit" | "scroll";
  borderBottom?: boolean;
  noPaddingX?: boolean;
  noPaddingBottom?: boolean;
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
  noPaddingBottom = false,
  className = "",
  ariaLabel,
}: ComicSectionContainerProps) {
  const variantClasses = {
    dots: "bg-comic-lightblue bg-comic-dots",
    night: "bg-comic-stars",
    plain: "bg-white",
    lightblue: "bg-comic-lightblue",
    bege: "bg-comic-bege bg-comic-dots",
    dark: "bg-comic-projects-bg bg-comic-projects-gradient text-white",
    yellow: "bg-comic-yellow bg-comic-dots",
    skills: "bg-comic-section-gradient",
    contact: "bg-comic-contact-gradient",
    projects: "bg-comic-projects-bg bg-comic-projects-gradient text-white",
  }[variant];

  // Modo Fit: Trava 100dvh exato, snap magnético e desconta safe-zone da navbar.
  // Modo Scroll: Expansão vertical livre com respiro py-24.
  const pbClass = noPaddingBottom
    ? "pb-0"
    : "pb-[max(1.5rem,env(safe-area-inset-bottom))] lg:pb-6";

  const modeClasses =
    mode === "fit"
      ? `min-h-[100svh] h-auto max-h-none overflow-x-clip overflow-y-visible pt-[calc(4.5rem+env(safe-area-inset-top))] sm:pt-20 ${pbClass} justify-between md:h-[100svh] md:max-h-[100svh] md:overflow-hidden md:pt-20 lg:h-screen lg:max-h-screen lg:pt-24 lg:scroll-mt-0`
      : "min-h-screen py-24 justify-center scroll-mt-16";

  const paddingXClass = noPaddingX ? "px-0" : "";
  const borderBottomClass = borderBottom ? "border-b-4 border-black" : "";

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`relative flex w-full flex-col ${modeClasses} ${paddingXClass} ${borderBottomClass} ${variantClasses} ${className}`}
    >
      {children}
    </section>
  );
}
