"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { ActionBadge } from "../ActionBadge/ActionBadge";
import { Project } from "./project";

const cardVariants = {
  rest: { y: 0 },
  hover: { y: -6 },
};

const actionBadgeVariants = {
  rest: { scale: 0, opacity: 0 },
  hover: { scale: 1, opacity: 1 },
};

interface ProjectCardProps {
  project: Project;
  index: number;
  isSelected: boolean;
  onToggle: () => void;
}

export function ProjectCard({ project, index, isSelected, onToggle }: ProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial={{ ...cardVariants.rest, opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover="hover"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="border-4 border-black bg-white shadow-[6px_6px_0_0_theme('colors.comic-yellow')] overflow-hidden cursor-pointer"
      onClick={onToggle}
    >
      {/* ── Image panel ── */}
      <div className="relative overflow-hidden" style={{ height: "180px" }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Theme colour overlay */}
        <div className="absolute inset-0 comic-project-overlay" />

        {/* Action badge — appears on card hover via variants propagation */}
        <motion.div
          variants={actionBadgeVariants}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="absolute top-3 right-3"
        >
          <ActionBadge
            theme={project.theme}
            className="text-base border-2 shadow-[2px_2px_0_0_#000]"
            noPadding
            style={{ padding: "2px 8px" }}
          >
            {project.action}
          </ActionBadge>
        </motion.div>

        {/* Panel number */}
        <ActionBadge
          theme="dark"
          noPadding
          className="absolute top-3 left-3 w-8 h-8 flex items-center justify-center text-lg border-2 shadow-[2px_2px_0_0_#ff4444]"
        >
          {index + 1}
        </ActionBadge>
      </div>

      {/* ── Content panel ── */}
      <div className="p-4 border-t-4 border-black comic-project-content">
        <h3 className="text-xl text-black mb-1 font-bangers-wide">{project.title}</h3>
        <p className="text-xs text-gray-500 mb-2 font-comic">{project.subtitle}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.tags.map((tag) => (
            <ActionBadge
              key={tag}
              theme={project.theme}
              noPadding
              className="text-xs border-2 shadow-[2px_2px_0_0_#000]"
              style={{ padding: "2px 8px" }}
            >
              {tag}
            </ActionBadge>
          ))}
        </div>

        {/* Expandable description */}
        <AnimatePresence>
          {isSelected && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-xs text-gray-700 mb-3 leading-relaxed font-comic">
                {project.description}
              </p>
              <div className="flex gap-2">
                <button
                  className="flex items-center gap-1 border-2 border-black px-3 py-1 text-sm bg-black text-white hover:bg-comic-red transition-colors font-comic"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (project.githubUrl) window.open(project.githubUrl, "_blank");
                  }}
                >
                  <FaGithub size={14} /> Código
                </button>
                <button
                  className="flex items-center gap-1 border-2 border-black px-3 py-1 text-sm bg-comic-yellow text-black hover:bg-comic-red hover:text-white transition-colors font-comic"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (project.demoUrl) window.open(project.demoUrl, "_blank");
                  }}
                >
                  <FaExternalLinkAlt size={14} /> Demo
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-xs text-gray-400 mt-2 font-comic">
          {isSelected ? "▲ Fechar" : "▼ Ver detalhes"}
        </p>
      </div>
    </motion.div>
  );
}
