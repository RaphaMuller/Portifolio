"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { aboutData, type DossierTab } from "@/app/constants/aboutData";

interface ComicDossierPageProps {
  tab: DossierTab;
}

function renderBoldText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-bold text-black">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

/**
 * @example
 * <ComicDossierPage tab={activeTab} />
 */
export function ComicDossierPage({ tab }: ComicDossierPageProps) {
  return (
    <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden comic-paper-damp p-4 text-center sm:p-5">
      <AnimatePresence mode="wait">
        <motion.div
          key={tab.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex h-full min-h-0 flex-col justify-between gap-3.5 overflow-y-auto pr-1"
        >
          {/* Quadro 1: Recordatório Clássico de HQ Centralizado */}
          <blockquote className="relative mt-3.5 border-3 border-black bg-comic-yellow px-4 py-3 shadow-comic-sm sm:mt-4">
            <span className="absolute -top-2 left-4 border-2 border-black bg-white px-2 py-0.5 font-bangers text-stat-label text-black uppercase sm:-top-2.5">
              {tab.code}
            </span>
            <span
              aria-hidden="true"
              className="absolute -top-2 right-4 -rotate-3 border-2 border-black bg-white px-2 py-0.5 font-bangers text-stat-label text-black uppercase shadow-comic-sm sm:-top-2.5"
            >
              {tab.label}
            </span>
            <p className="mt-1 font-bangers text-h4 text-black uppercase">
              &ldquo;{tab.highlight}&rdquo;
            </p>
          </blockquote>

          {/* Quadro 2: História Centralizada com Negrito Puro */}
          <div className="flex flex-col items-center justify-center border-y-2 border-dashed border-black/25 py-3">
            <h3 className="font-bangers text-h3 text-black uppercase">
              — {tab.title} —
            </h3>
            <p className="mt-1.5 max-w-xl text-center font-comic text-body text-zinc-900">
              {renderBoldText(tab.summary)}
            </p>
          </div>

          {/* Quadro 3: Grade 2x2 de Pilares de Operação */}
          <div>
            <span className="mb-2 block text-center font-bangers text-stat-label text-zinc-700 uppercase">
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
                  <span className="border-2 border-black bg-comic-yellow px-2 py-0.5 font-bangers text-stat-label text-black uppercase shadow-comic-sm">
                    {pillar.label}
                  </span>
                  <p className="font-comic text-caption text-zinc-800 not-italic">
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
