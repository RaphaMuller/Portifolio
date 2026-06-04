"use client";

import { useState } from "react";
import { ProjectCard } from "./project-card";
import { projects } from "@/app/constants/projectsData";

export function ComicProjectsGrid() {
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (id: number) => setSelected((prev) => (prev === id ? null : id));

  return (
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:balance] space-y-6">
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
  );
}
