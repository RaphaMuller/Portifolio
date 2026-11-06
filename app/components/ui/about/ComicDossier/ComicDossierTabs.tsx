"use client";

import { aboutData } from "@/app/constants/aboutData";
import type { DossierTab } from "@/app/types/about";

interface ComicDossierTabsProps {
  tabs: readonly DossierTab[];
  activeTabId: DossierTab["id"];
  onSelectTab: (id: DossierTab["id"]) => void;
  idPrefix?: string;
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
  idPrefix = "dossier",
  className = "",
}: ComicDossierTabsProps) {
  return (
    <div
      role="tablist"
      aria-label={aboutData.tabsAriaLabel}
      className={`flex flex-wrap items-center gap-1.5 sm:gap-2 ${className}`}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTabId;
        return (
          <button
            key={tab.id}
            id={`${idPrefix}-tab-${tab.id}`}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`${idPrefix}-panel-${tab.id}`}
            onClick={() => onSelectTab(tab.id)}
            className={`cursor-pointer border-2 border-black px-2.5 py-1 sm:px-3.5 sm:py-1.5 font-bangers text-stat-label uppercase transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-comic-yellow ${
              isActive
                ? "bg-comic-yellow text-black -translate-y-0.5 shadow-comic-sm"
                : "bg-white text-black hover:bg-comic-yellow/80 shadow-comic-sm"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
