"use client";

import { AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  interactiveClasses,
  Themes,
} from "@/app/components/ui/global/ActionBadge/actionBadgeTheme";
import { ComicProjectsHeader } from "@/app/components/ui/projects/ComicProjectsHeader";
import { MangaPagination } from "@/app/components/ui/projects/MangaPagination";
import { MangaProjectCard } from "@/app/components/ui/projects/MangaProjectCard";
import { ComicSectionContainer } from "@/app/components/ui/global/ComicSection/ComicSectionContainer";
import { projectsCopy } from "@/app/constants/projectsData";
import { useMangaProjects } from "@/app/sections/hooks/useMangaProjects";

export default function ComicProjects() {
  const {
    activeCategory,
    currentPageIndex,
    totalPages,
    currentProject,
    slideDirection,
    handleSelectCategory,
    handlePrevPage,
    handleNextPage,
    handleGoToPage,
  } = useMangaProjects();

  const isSinglePage = totalPages <= 1;
  const navBtnClasses = isSinglePage
    ? "cursor-not-allowed opacity-45"
    : `cursor-pointer ${interactiveClasses}`;

  return (
    <ComicSectionContainer
      id="projects"
      variant="dark"
      ariaLabel={projectsCopy.sectionAriaLabel}
      className="items-center justify-center min-h-[calc(100dvh-4rem)] lg:h-[calc(100dvh-4rem)] py-3 sm:py-5 overflow-y-auto lg:overflow-hidden"
    >
      <div className="relative z-10 flex h-full w-full max-w-6xl flex-1 min-h-0 flex-col justify-between gap-2 sm:gap-4">
        {/* Topo: Header com título à esquerda e filtros à direita */}
        <ComicProjectsHeader
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* Centro: Botão Anterior (Desktop) + Folha de Mangá + Botão Próxima (Desktop) */}
        {currentProject && (
          <div className="flex flex-1 min-h-0 w-full items-center justify-center gap-2 sm:gap-4 md:gap-6">
            {/* Botão Anterior na lateral esquerda (apenas telas grandes) */}
            <button
              type="button"
              disabled={isSinglePage}
              onClick={handlePrevPage}
              aria-label={projectsCopy.prevPage}
              className={`hidden lg:inline-flex shrink-0 items-center justify-center gap-1 border-2 sm:border-3 border-black px-2.5 py-2 sm:px-3.5 sm:py-2.5 text-stat-label shadow-comic focus-visible:ring-2 focus-visible:ring-comic-yellow transition-transform hover:scale-105 ${Themes.yellow} ${navBtnClasses}`}
            >
              <ChevronLeft className="size-4 sm:size-5" aria-hidden="true" />
              <span>{projectsCopy.prevPage}</span>
            </button>

            <AnimatePresence mode="wait" initial={false}>
              <MangaProjectCard
                key={currentProject.id}
                project={currentProject}
                pageNumber={currentPageIndex + 1}
                slideDirection={slideDirection}
              />
            </AnimatePresence>

            {/* Botão Próxima na lateral direita (apenas telas grandes) */}
            <button
              type="button"
              disabled={isSinglePage}
              onClick={handleNextPage}
              aria-label={projectsCopy.nextPage}
              className={`hidden lg:inline-flex shrink-0 items-center justify-center gap-1 border-2 sm:border-3 border-black px-2.5 py-2 sm:px-3.5 sm:py-2.5 text-stat-label shadow-comic focus-visible:ring-2 focus-visible:ring-comic-yellow transition-transform hover:scale-105 ${Themes.yellow} ${navBtnClasses}`}
            >
              <span>{projectsCopy.nextPage}</span>
              <ChevronRight className="size-4 sm:size-5" aria-hidden="true" />
            </button>
          </div>
        )}

        {/* Base: Paginação temática */}
        <MangaPagination
          currentPageIndex={currentPageIndex}
          totalPages={totalPages}
          onGoToPage={handleGoToPage}
          onPrevPage={handlePrevPage}
          onNextPage={handleNextPage}
        />
      </div>
    </ComicSectionContainer>
  );
}
