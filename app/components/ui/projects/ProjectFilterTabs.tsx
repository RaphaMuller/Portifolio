"use client";

import {
  interactiveClasses,
  Themes,
} from "@/app/components/ui/global/ActionBadge/actionBadgeTheme";
import {
  projectCategories,
  projectsCopy,
  type ProjectCategory,
} from "@/app/constants/projectsData";

interface ProjectFilterTabsProps {
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
}

/**
 * Filtros de categoria do Capítulo 3: Projetos.
 * @example
 * <ProjectFilterTabs activeCategory={cat} onSelectCategory={setCat} />
 */
export function ProjectFilterTabs({
  activeCategory,
  onSelectCategory,
}: ProjectFilterTabsProps) {
  return (
    <nav aria-label={projectsCopy.filtersAriaLabel}>
      <ul className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
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
                className={`cursor-pointer px-2 sm:px-3 py-1 text-stat-label focus-visible:ring-2 focus-visible:ring-comic-yellow ${themeClass} ${interactiveClasses} ${stateClass}`}
              >
                {category}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
