"use client";

import { AnimatePresence, motion } from "framer-motion";
import { aboutData } from "@/app/constants/aboutData";
import { renderBoldText } from "@/app/lib/renderBoldText";
import type { DossierTab } from "@/app/types/about";

interface ComicDossierPageProps {
  tab: DossierTab;
  idPrefix?: string;
}

/**
 * @example
 * <ComicDossierPage tab={activeTab} />
 */
export function ComicDossierPage({
  tab,
  idPrefix = "dossier",
}: ComicDossierPageProps) {
  return (
    <div
      id={`${idPrefix}-panel-${tab.id}`}
      role="tabpanel"
      aria-labelledby={`${idPrefix}-tab-${tab.id}`}
      className="relative flex min-h-0 flex-1 h-full flex-col overflow-hidden comic-paper-damp p-4 text-center sm:p-5"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={tab.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex h-full min-h-0 flex-col justify-between gap-3.5 overflow-y-auto overscroll-contain pr-1 sm:pr-2"
        >
          {/* Panel 1: Centered comic narrator box */}
          <blockquote className="relative mt-3.5 border-3 border-black bg-comic-yellow px-4 py-3 shadow-comic-sm sm:mt-4">
            <span className="absolute -top-2 left-4 border-2 border-black bg-white px-2 py-0.5 font-bangers text-stat-label text-black uppercase sm:-top-2.5">
              {tab.code}
            </span>
            <span
              aria-hidden="true"
              className="comic-stamp-pill absolute -top-2 right-4 -rotate-3 bg-white text-black sm:-top-2.5"
            >
              {tab.label}
            </span>
            <p className="mt-1 font-bangers text-h4 text-black uppercase">
              &ldquo;{tab.highlight}&rdquo;
            </p>
          </blockquote>

          {/* Panel 2: Centered narrative summary */}
          <div className="flex flex-col items-center justify-center border-y-2 border-dashed border-black/25 py-3">
            <h4 className="font-bangers text-h3 text-black uppercase">
              — {tab.title} —
            </h4>
            <p className="mt-1.5 max-w-xl text-center font-comic text-body text-comic-ink">
              {renderBoldText(tab.summary)}
            </p>
          </div>

          {/* Panel 3: 2x2 operation pillars grid */}
          <div>
            <span className="mb-2 block text-center font-bangers text-stat-label text-comic-muted uppercase">
              {aboutData.pillarsHeading}
            </span>
            <ul
              aria-label={aboutData.pillarsHeading}
              className="grid grid-cols-1 divide-y-3 divide-black border-3 border-black bg-white shadow-comic-sm sm:grid-cols-2 sm:divide-y-0"
            >
              {tab.pillars.map((pillar, idx) => (
                <li
                  key={pillar.label}
                  className={`flex flex-col items-center justify-start gap-1 p-3 text-center ${
                    idx % 2 === 0 ? "sm:border-r-3 sm:border-black" : ""
                  } ${idx < 2 ? "sm:border-b-3 sm:border-black" : ""}`}
                >
                  <span className="comic-stamp-pill bg-comic-yellow text-black">
                    {pillar.label}
                  </span>
                  <p className="text-pillar-detail text-comic-ink-soft">
                    {pillar.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
