"use client";

import { useState } from "react";
import { ActionBadge } from "../ActionBadge/ActionBadge";
import { ProjectCard } from "./project-card";
import { projects } from "@/app/constants/projectsData";
import { motionPresets } from "@/app/constants/motionPresets";

export function ComicProjectsGrid() {
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (id: number) => setSelected((prev) => (prev === id ? null : id));

  return (
    <div className="max-w-7xl mx-auto w-full relative z-10 px-4">
      {/* Section title */}
      <ActionBadge
        theme="blue"
        {...motionPresets.slideInRight}
        className="inline-block px-4 sm:px-6 py-2 text-2xl sm:text-3xl md:text-5xl mb-8 md:mb-12"
      >
        CAPÍTULO 3: AS MISSÕES
      </ActionBadge>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            isSelected={selected === project.id}
            onToggle={() => toggle(project.id)}
          />
        ))}
      </div>
    </div>
  );
}
