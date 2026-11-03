"use client";

import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";
import { ComicSectionBody } from "@/app/components/ui/global/ComicSection/ComicSectionBody";
import { ComicSectionContainer } from "@/app/components/ui/global/ComicSection/ComicSectionContainer";
import { ComicSectionHeader } from "@/app/components/ui/global/ComicSection/ComicSectionHeader";
import { ComicIssueSheet } from "@/app/components/ui/projects/ComicIssue/ComicIssueSheet";
import {
  projectCategories,
  projectsCopy,
} from "@/app/constants/projectsData";
import { useComicProjects } from "@/app/sections/hooks/useComicProjects";

export default function ComicProjects() {
  const {
    activeCategory,
    currentProject,
    issueNumberLabel,
    hasMultipleIssues,
    handleSelectCategory,
    handlePrevIssue,
    handleNextIssue,
  } = useComicProjects();

  return (
    <ComicSectionContainer
      id="projects"
      variant="dark"
      mode="fit"
      ariaLabel={projectsCopy.sectionAriaLabel}
    >
      <ComicSectionBody>
        <ComicSectionHeader
          chapter={projectsCopy.chapter}
          title={projectsCopy.title}
          theme="projects"
          rightSlot={
            <nav
              aria-label={projectsCopy.filtersAriaLabel}
              className="hidden items-center gap-2 md:flex"
            >
              {projectCategories.map((category) => {
                const isSelected = activeCategory === category;
                const pillClasses = isSelected
                  ? "bg-comic-yellow text-black -translate-y-0.5 shadow-comic-sm"
                  : "bg-zinc-900 text-white hover:bg-zinc-800";

                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => handleSelectCategory(category)}
                    className={`cursor-pointer border-2 border-black px-2.5 py-1 font-bangers text-stat-label uppercase transition-all focus-visible:ring-2 focus-visible:ring-comic-yellow ${pillClasses}`}
                  >
                    {category}
                  </button>
                );
              })}
            </nav>
          }
        />

        <div className="relative mx-auto flex h-full min-h-0 w-full max-w-6xl flex-1 items-stretch justify-center">
          {hasMultipleIssues && (
            <>
              <ActionBadge
                theme="yellow"
                noPadding
                onClick={handlePrevIssue}
                aria-label={projectsCopy.prevIssue}
                className="absolute top-1/2 -left-3 sm:-left-5 lg:-left-6 z-30 flex h-11 w-11 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center font-bangers text-xl sm:text-2xl cursor-pointer select-none transition-all duration-200 ease-out hover:scale-110 hover:shadow-[6px_6px_0_0_#000] active:scale-95"
              >
                ◀
              </ActionBadge>

              <ActionBadge
                theme="yellow"
                noPadding
                onClick={handleNextIssue}
                aria-label={projectsCopy.nextIssue}
                className="absolute top-1/2 -right-3 sm:-right-5 lg:-right-6 z-30 flex h-11 w-11 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center font-bangers text-xl sm:text-2xl cursor-pointer select-none transition-all duration-200 ease-out hover:scale-110 hover:shadow-[6px_6px_0_0_#000] active:scale-95"
              >
                ▶
              </ActionBadge>
            </>
          )}

          {currentProject && (
            <ComicIssueSheet
              key={currentProject.id}
              project={currentProject}
              issueNumberLabel={issueNumberLabel}
            />
          )}
        </div>
      </ComicSectionBody>
    </ComicSectionContainer>
  );
}
