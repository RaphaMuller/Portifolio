"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  interactiveClasses,
  Themes,
} from "@/app/components/ui/global/ActionBadge/actionBadgeTheme";
import { projectsCopy } from "@/app/constants/projectsData";

interface MangaPaginationProps {
  currentPageIndex: number;
  totalPages: number;
  onGoToPage: (index: number) => void;
  onPrevPage?: () => void;
  onNextPage?: () => void;
  showNavButtons?: boolean;
}

const formatPageNumber = (value: number) => String(value).padStart(2, "0");

/**
 * @example
 * <MangaPagination currentPageIndex={0} totalPages={3} onGoToPage={go} />
 */
export function MangaPagination({
  currentPageIndex,
  totalPages,
  onGoToPage,
  onPrevPage,
  onNextPage,
}: MangaPaginationProps) {
  const isSinglePage = totalPages <= 1;
  const navBtnClasses = isSinglePage
    ? "cursor-not-allowed opacity-45"
    : `cursor-pointer ${interactiveClasses}`;

  return (
    <nav
      aria-label={projectsCopy.paginationAriaLabel}
      className="flex w-full flex-wrap items-center justify-center gap-2 sm:gap-3 py-1"
    >
      {onPrevPage && (
        <button
          type="button"
          disabled={isSinglePage}
          onClick={onPrevPage}
          aria-label={projectsCopy.prevPage}
          className={`inline-flex lg:hidden items-center gap-1 border-2 border-black px-2 sm:px-2.5 py-1 text-stat-label shadow-comic-sm focus-visible:ring-2 focus-visible:ring-comic-yellow ${Themes.yellow} ${navBtnClasses}`}
        >
          <ChevronLeft className="size-3.5 sm:size-4" aria-hidden="true" />
          <span className="hidden sm:inline">{projectsCopy.prevPage}</span>
        </button>
      )}

      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3">
        <span className="border-2 border-black bg-comic-red px-2.5 sm:px-3 py-0.5 sm:py-1 text-caption sm:text-stat-label text-white shadow-comic-sm">
          {projectsCopy.pageLabel} {formatPageNumber(currentPageIndex + 1)} /{" "}
          {formatPageNumber(totalPages)}
        </span>

        <ul className="flex items-center gap-1 sm:gap-1.5">
          {Array.from({ length: totalPages }).map((_, index) => {
            const isCurrent = index === currentPageIndex;
            const pageLabel = formatPageNumber(index + 1);
            const badgeTheme = isCurrent ? Themes.red : Themes.white;

            return (
              <li key={pageLabel}>
                <button
                  type="button"
                  aria-current={isCurrent ? "page" : undefined}
                  aria-label={`${projectsCopy.pageLabel} ${pageLabel}`}
                  onClick={() => onGoToPage(index)}
                  className={`cursor-pointer px-2 sm:px-2.5 py-0.5 sm:py-1 text-caption sm:text-stat-label focus-visible:ring-2 focus-visible:ring-comic-yellow ${badgeTheme} ${interactiveClasses}`}
                >
                  {pageLabel}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {onNextPage && (
        <button
          type="button"
          disabled={isSinglePage}
          onClick={onNextPage}
          aria-label={projectsCopy.nextPage}
          className={`inline-flex lg:hidden items-center gap-1 border-2 border-black px-2 sm:px-2.5 py-1 text-stat-label shadow-comic-sm focus-visible:ring-2 focus-visible:ring-comic-yellow ${Themes.yellow} ${navBtnClasses}`}
        >
          <span className="hidden sm:inline">{projectsCopy.nextPage}</span>
          <ChevronRight className="size-3.5 sm:size-4" aria-hidden="true" />
        </button>
      )}
    </nav>
  );
}
