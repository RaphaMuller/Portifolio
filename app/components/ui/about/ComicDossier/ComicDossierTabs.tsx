"use client";

import React from "react";
import type { DossierTab } from "@/app/constants/aboutData";

interface ComicDossierTabsProps {
  tabs: DossierTab[];
  activeTabId: string;
  onSelectTab: (id: DossierTab["id"]) => void;
  className?: string;
}

/**
 * @example
 * <ComicDossierTabs tabs={dossierTabs} activeTabId="origin" onSelectTab={setTab} />
 */
export function ComicDossierTabs({
  tabs,
  activeTabId,
  onSelectTab,
  className = "",
}: ComicDossierTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Divisórias do Arquivo"
      className={`flex items-end gap-1 sm:gap-2 -mb-[3px] z-10 px-2 sm:px-4 ${className}`}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTabId;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectTab(tab.id)}
            className={`group relative flex items-center gap-1.5 border-t-3 border-x-3 border-black px-2.5 py-1.5 sm:px-4 sm:py-2 font-bangers text-xs sm:text-sm tracking-bangers-wide transition-all ${
              isActive
                ? "bg-white text-comic-red border-b-3 border-b-white -translate-y-0.5 shadow-[0_-3px_0_0_#000]"
                : "bg-zinc-200 text-zinc-700 hover:bg-comic-yellow hover:text-black border-b-3 border-b-black"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-xs border border-black ${
                isActive ? "bg-comic-red" : "bg-zinc-400 group-hover:bg-black"
              }`}
              aria-hidden="true"
            />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
