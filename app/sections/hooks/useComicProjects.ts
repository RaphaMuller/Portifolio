"use client";

import { useMemo, useState } from "react";
import {
  ALL_PROJECTS_CATEGORY,
  projects,
} from "@/app/constants/projectsData";
import type { Project, ProjectCategory } from "@/app/types/project";

/**
 * @example
 * const { filteredProjects, selectedProject, handleOpenProject } = useComicProjects();
 */
export function useComicProjects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(
    ALL_PROJECTS_CATEGORY,
  );
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === ALL_PROJECTS_CATEGORY) return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const hasMultipleProjects = filteredProjects.length > 1;

  const handleSelectCategory = (category: ProjectCategory) => {
    setActiveCategory(category);
  };

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  const handlePrevProject = () => {
    if (!selectedProject || !hasMultipleProjects) return;
    const currentIndex = filteredProjects.findIndex(
      (item) => item.id === selectedProject.id,
    );
    const prevIndex =
      (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[prevIndex] ?? null);
  };

  const handleNextProject = () => {
    if (!selectedProject || !hasMultipleProjects) return;
    const currentIndex = filteredProjects.findIndex(
      (item) => item.id === selectedProject.id,
    );
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex] ?? null);
  };

  return {
    activeCategory,
    filteredProjects,
    selectedProject,
    hasMultipleProjects,
    handleSelectCategory,
    handleOpenProject,
    handleCloseProject,
    handlePrevProject,
    handleNextProject,
  };
}
