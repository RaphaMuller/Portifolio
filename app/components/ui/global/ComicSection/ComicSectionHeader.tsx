"use client";

import React from "react";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";
import { motionPresets } from "@/app/constants/motionPresets";

export type ComicHeaderTheme = "about" | "skills" | "projects" | "contact";

interface ComicSectionHeaderProps {
  chapter?: string;
  title: string;
  theme?: ComicHeaderTheme;
  rightSlot?: React.ReactNode;
  className?: string;
}

const THEME_STYLES: Record<
  ComicHeaderTheme,
  {
    badgeTheme: "dark" | "yellow" | "blue" | "red";
    shadowClass: string;
    textClass: string;
  }
> = {
  // About (Origem): Preto, Amarelo e Vermelho (contraste alto sobre fundo amarelo)
  about: {
    badgeTheme: "dark",
    shadowClass: "shadow-[4px_4px_0_0_var(--color-comic-red)]",
    textClass: "text-comic-yellow",
  },
  // Skills (O Arsenal): Amarelo e Preto Batman (contraste vibrante sobre fundo escuro de armadura)
  skills: {
    badgeTheme: "yellow",
    shadowClass: "shadow-[4px_4px_0_0_#000]",
    textClass: "text-black",
  },
  // Projects (As Missões): Azul Mangá e Amarelo (contraste sci-fi sobre fundo dark #1a1a2e)
  projects: {
    badgeTheme: "blue",
    shadowClass: "shadow-[4px_4px_0_0_var(--color-comic-yellow)]",
    textClass: "text-white",
  },
  // Contact (Missão Contato): Vermelho e Branco Alerta (contraste sobre topo azul claro acinzentado)
  contact: {
    badgeTheme: "red",
    shadowClass: "shadow-[4px_4px_0_0_#000]",
    textClass: "text-white",
  },
};

/**
 * Nível 3: Header Canônico de Seção.
 * @example
 * <ComicSectionHeader chapter="CAPÍTULO 1" title="ORIGEM" theme="about" />
 */
export function ComicSectionHeader({
  chapter,
  title,
  theme = "about",
  rightSlot,
  className = "",
}: ComicSectionHeaderProps) {
  const fullTitle = chapter ? `${chapter}: ${title}` : title;
  const currentTheme = THEME_STYLES[theme];

  return (
    <header
      className={`mb-2 sm:mb-4 flex w-full flex-col items-center gap-2 sm:gap-3 md:flex-row md:items-center md:justify-between self-center md:self-start select-none ${className}`}
    >
      <div className="flex items-center gap-2 sm:gap-3">
        <ActionBadge
          theme={currentTheme.badgeTheme}
          {...motionPresets.headerSlide}
          className={`py-1 px-3 sm:px-5 ${currentTheme.shadowClass}`}
        >
          <h1
            className={`font-bangers text-lg sm:text-2xl lg:text-h2 leading-none tracking-bangers-wide ${currentTheme.textClass}`}
          >
            {fullTitle}
          </h1>
        </ActionBadge>
      </div>

      {rightSlot && <div className="flex items-center">{rightSlot}</div>}
    </header>
  );
}
