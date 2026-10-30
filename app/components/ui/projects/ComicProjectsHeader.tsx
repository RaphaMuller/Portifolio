"use client";

import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";
import {
  interactiveClasses,
  Themes,
} from "@/app/components/ui/global/ActionBadge/actionBadgeTheme";
import { motionPresets } from "@/app/constants/motionPresets";
import {
  projectCategories,
  projectsCopy,
  type ProjectCategory,
} from "@/app/constants/projectsData";

interface ComicProjectsHeaderProps {
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
}

/**
 * @example
 * <ComicProjectsHeader activeCategory="TODAS AS MISSÕES" onSelectCategory={setCategory} />
 */
export function ComicProjectsHeader({
  activeCategory,
  onSelectCategory,
}: ComicProjectsHeaderProps) {
  return (
    <header className="mb-2 sm:mb-4 md:mb-6 flex w-full flex-col items-center gap-3 sm:gap-4 md:flex-row md:items-end md:justify-between">
      <ActionBadge
        theme="blue"
        {...motionPresets.slideInRight}
        className="self-center py-2 text-center text-h2 sm:px-6 md:self-start lg:text-h1"
      >
        <h2>{projectsCopy.chapterTitle}</h2>
      </ActionBadge>

      <nav aria-label={projectsCopy.filtersAriaLabel}>
        <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:justify-end">
          {projectCategories.map((category) => {
            const isActive = activeCategory === category;
            const themeClass = isActive ? Themes.yellow : Themes.white;
            const stateClass = isActive
              ? "scale-105"
              : "opacity-85 hover:opacity-100";

            return (
              <li key={category}>
                <button
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => onSelectCategory(category)}
                  className={`cursor-pointer px-3 py-1.5 text-stat-label focus-visible:ring-2 focus-visible:ring-comic-yellow ${themeClass} ${interactiveClasses} ${stateClass}`}
                >
                  {category}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
