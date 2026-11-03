"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ComicMissionDossier } from "./ComicMissionDossier";
import { ComicPanelOpening } from "./ComicPanelOpening";
import type { Project } from "@/app/types/project";

type MobileProjectView = "cover" | "dossier";

interface ComicIssueSheetProps {
  project: Project;
  issueNumberLabel: string;
}

/**
 * @example
 * <ComicIssueSheet project={project} issueNumberLabel="#01" />
 */
export function ComicIssueSheet({
  project,
  issueNumberLabel,
}: ComicIssueSheetProps) {
  const [mobileView, setMobileView] = useState<MobileProjectView>("cover");

  const opening = (
    <ComicPanelOpening
      issueNumberLabel={issueNumberLabel}
      title={project.title}
      subtitle={project.subtitle}
      action={project.action}
      image={project.image}
      githubUrl={project.githubUrl}
      demoUrl={project.demoUrl}
    />
  );

  const dossier = <ComicMissionDossier project={project} />;

  return (
    <motion.article
      aria-label={project.title}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="flex min-h-0 w-full flex-1 flex-col justify-between gap-2 border-4 border-black bg-white p-2 sm:p-3.5 lg:p-2.5 xl:p-3.5 shadow-comic-lg"
    >
      {/* Desktop: Capa Hero com Ações (col-6) + Dossiê Narrativo da Missão (col-6) */}
      <div className="hidden min-h-0 flex-1 lg:grid lg:grid-cols-12 lg:gap-4 xl:gap-6">
        <div className="flex h-full min-h-0 flex-1 flex-col lg:col-span-6">
          {opening}
        </div>

        <div className="flex h-full min-h-0 flex-1 flex-col lg:col-span-6">
          {dossier}
        </div>
      </div>

      {/* Mobile (< lg): Seletor de Abas Cômicas + Visualização em Tela Cheia */}
      <div className="flex min-h-0 flex-1 flex-col lg:hidden">
        {/* Abas Cômicas Mobile */}
        <nav
          aria-label="Alternar visualização do projeto"
          className="mb-2 flex items-center gap-1.5 border-b-2 border-dashed border-zinc-300 pb-1.5 select-none"
        >
          <button
            type="button"
            aria-pressed={mobileView === "cover"}
            onClick={() => setMobileView("cover")}
            className={`cursor-pointer border-2 border-black px-2.5 py-1 font-bangers text-stat-label uppercase transition-all focus-visible:ring-2 focus-visible:ring-comic-yellow ${
              mobileView === "cover"
                ? "bg-comic-yellow text-black -translate-y-0.5 shadow-comic-sm"
                : "bg-zinc-200 text-zinc-700 hover:bg-zinc-100"
            }`}
          >
            CAPA DA HQ
          </button>

          <button
            type="button"
            aria-pressed={mobileView === "dossier"}
            onClick={() => setMobileView("dossier")}
            className={`cursor-pointer border-2 border-black px-2.5 py-1 font-bangers text-stat-label uppercase transition-all focus-visible:ring-2 focus-visible:ring-comic-yellow ${
              mobileView === "dossier"
                ? "bg-comic-yellow text-black -translate-y-0.5 shadow-comic-sm"
                : "bg-zinc-200 text-zinc-700 hover:bg-zinc-100"
            }`}
          >
            DOSSIÊ TÉCNICO
          </button>
        </nav>

        {/* Conteúdo Mobile com Transição Suave */}
        <div className="relative min-h-0 flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={mobileView}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="flex h-full w-full min-h-0 flex-col"
            >
              {mobileView === "cover" ? opening : dossier}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  );
}
