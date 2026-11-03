"use client";

import { useMemo, useState } from "react";
import {
  ALL_PROJECTS_CATEGORY,
  projects,
} from "@/app/constants/projectsData";
import type { ProjectCategory } from "@/app/constants/projectsData";

const ISSUE_PAD_LENGTH = 2;

function formatIssueNumber(value: number): string {
  return `#${String(value).padStart(ISSUE_PAD_LENGTH, "0")}`;
}

export function useComicProjects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(
    ALL_PROJECTS_CATEGORY,
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProjects = useMemo(() => {
    if (activeCategory === ALL_PROJECTS_CATEGORY) return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const totalIssues = filteredProjects.length;
  const safeIndex = totalIssues > 0 ? currentIndex % totalIssues : 0;
  const currentProject = filteredProjects[safeIndex] ?? null;
  const hasMultipleIssues = totalIssues > 1;

  const handleSelectCategory = (category: ProjectCategory) => {
    setActiveCategory(category);
    setCurrentIndex(0);
  };

  const handlePrevIssue = () => {
    if (!hasMultipleIssues) return;
    setCurrentIndex((prev) => (prev - 1 + totalIssues) % totalIssues);
  };

  const handleNextIssue = () => {
    if (!hasMultipleIssues) return;
    setCurrentIndex((prev) => (prev + 1) % totalIssues);
  };

  return {
    activeCategory,
    currentProject,
    issueNumberLabel: formatIssueNumber(safeIndex + 1),
    totalIssuesLabel: formatIssueNumber(totalIssues),
    hasMultipleIssues,
    handleSelectCategory,
    handlePrevIssue,
    handleNextIssue,
  };
}
