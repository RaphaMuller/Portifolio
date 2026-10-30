"use client";

import { useMemo, useState } from "react";
import {
  ALL_PROJECTS_CATEGORY,
  projects,
  type ProjectCategory,
} from "@/app/constants/projectsData";
import type { Project } from "@/app/types/project";

export function useMangaProjects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(
    ALL_PROJECTS_CATEGORY,
  );
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1);

  const filteredProjects: readonly Project[] = useMemo(() => {
    if (activeCategory === ALL_PROJECTS_CATEGORY) return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const totalPages = filteredProjects.length;
  const safePageIndex = currentPageIndex < totalPages ? currentPageIndex : 0;
  const currentProject = filteredProjects[safePageIndex] ?? null;

  const handleSelectCategory = (category: ProjectCategory) => {
    setActiveCategory(category);
    setCurrentPageIndex(0);
    setSlideDirection(1);
  };

  const handlePrevPage = () => {
    if (totalPages <= 1) return;
    setSlideDirection(-1);
    setCurrentPageIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNextPage = () => {
    if (totalPages <= 1) return;
    setSlideDirection(1);
    setCurrentPageIndex((prev) => (prev + 1) % totalPages);
  };

  const handleGoToPage = (targetIndex: number) => {
    if (targetIndex < 0 || targetIndex >= totalPages) return;
    setSlideDirection(targetIndex >= safePageIndex ? 1 : -1);
    setCurrentPageIndex(targetIndex);
  };

  return {
    activeCategory,
    currentPageIndex: safePageIndex,
    totalPages,
    currentProject,
    slideDirection,
    handleSelectCategory,
    handlePrevPage,
    handleNextPage,
    handleGoToPage,
  };
}
