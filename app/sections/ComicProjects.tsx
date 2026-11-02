"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  interactiveClasses,
  Themes,
} from "@/app/components/ui/global/ActionBadge/actionBadgeTheme";
import { ComicSectionContainer } from "@/app/components/ui/global/ComicSection/ComicSectionContainer";
import { ComicSectionBody } from "@/app/components/ui/global/ComicSection/ComicSectionBody";
import { ComicSectionHeader } from "@/app/components/ui/global/ComicSection/ComicSectionHeader";
import { MangaPagination } from "@/app/components/ui/projects/MangaPagination";
import { MangaProjectCard } from "@/app/components/ui/projects/MangaProjectCard";
import { ProjectFilterTabs } from "@/app/components/ui/projects/ProjectFilterTabs";
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
      mode="fit"
      ariaLabel={projectsCopy.sectionAriaLabel}
    >
      <ComicSectionBody>
        <ComicSectionHeader
          chapter="CAPÍTULO 3"
          title="AS MISSÕES"
          theme="projects"
          rightSlot={
            <ProjectFilterTabs
              activeCategory={activeCategory}
              onSelectCategory={handleSelectCategory}
            />
          }
        />

        <motion.main
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex flex-1 min-h-0 w-full max-w-6xl flex-col justify-between items-center gap-2 sm:gap-3"
        >
          {currentProject && (
            <div className="flex flex-1 min-h-0 w-full items-center justify-center gap-2 sm:gap-4 md:gap-6">
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

          <MangaPagination
            currentPageIndex={currentPageIndex}
            totalPages={totalPages}
            onGoToPage={handleGoToPage}
            onPrevPage={handlePrevPage}
            onNextPage={handleNextPage}
          />
        </motion.main>
      </ComicSectionBody>
    </ComicSectionContainer>
  );
}
