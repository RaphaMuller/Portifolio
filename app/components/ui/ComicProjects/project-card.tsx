"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { ActionBadge } from "../ActionBadge/ActionBadge";
import { Themes } from "../ActionBadge/actionBadgeTheme";
import { Project } from "./project";
import { motionPresets } from "@/app/constants/motionPresets";

interface ProjectCardProps {
  project: Project;
  index: number;
  isSelected: boolean;
  onToggle: () => void;
}

export function ProjectCard({
  project,
  index,
  isSelected,
  onToggle,
}: ProjectCardProps) {
  return (
    <motion.div
      {...motionPresets.projectCard}
      className={`mb-6 flex h-fit break-inside-avoid flex-col self-start overflow-hidden ${Themes.projectCard}`}
    >
      {/* ImagePanel */}
      <div className="relative h-[180px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        <div className="absolute inset-0 bg-comic-project-overlay mix-blend-multiply" />

        <motion.div
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="absolute top-3 right-3"
        >
          <ActionBadge theme={project.theme} noPadding className="px-2 text-lg">
            {project.action}
          </ActionBadge>
        </motion.div>

        <ActionBadge
          theme="green"
          noPadding
          className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center text-lg"
        >
          {index + 1}
        </ActionBadge>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col border-t-4 border-black p-4">
        <h3 className="mb-1 font-bangers text-xl tracking-bangers-wide text-black">
          {project.title}
        </h3>
        <p className="mb-2 font-sans text-xs font-medium text-gray-500">
          {project.subtitle}
        </p>

        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <ActionBadge
              key={tag}
              theme={project.theme}
              noPadding
              className="px-2 py-1 text-xs"
            >
              {tag}
            </ActionBadge>
          ))}
        </div>

        <AnimatePresence>
          {isSelected && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="mb-3 pt-2 font-sans text-xs leading-relaxed font-medium text-gray-700">
                {project.description}
              </p>
              <div className="flex gap-2">
                <ActionBadge
                  theme="yellow"
                  className="flex cursor-pointer items-center gap-1 px-2 py-0.5 text-xs transition-all hover:-translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] active:translate-y-0 active:shadow-none"
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    if (project.githubUrl)
                      window.open(project.githubUrl, "_blank");
                  }}
                  noPadding
                >
                  <FaGithub size={14} /> Código
                </ActionBadge>
                <ActionBadge
                  theme="yellow"
                  className="flex cursor-pointer items-center gap-1 px-2 py-0.5 text-xs transition-all hover:-translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] active:translate-y-0 active:shadow-none"
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    if (project.demoUrl) window.open(project.demoUrl, "_blank");
                  }}
                  noPadding
                >
                  <FaExternalLinkAlt size={14} /> Demo
                </ActionBadge>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-4 flex justify-start">
          <ActionBadge
            theme="white"
            interactive
            className="inline-flex cursor-pointer items-center px-2 py-0.5 text-xs"
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              onToggle();
            }}
            noPadding
          >
            {isSelected ? "▲ FECHAR" : "▼ VER DETALHES"}
          </ActionBadge>
        </div>
      </div>
    </motion.div>
  );
}
