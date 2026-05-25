"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { ActionBadge } from "../ActionBadge/ActionBadge";
import { Project } from "./project";
import { motionPresets } from "@/app/constants/motionPresets";

interface ProjectCardProps {
  project: Project;
  index: number;
  isSelected: boolean;
  onToggle: () => void;
}

export function ProjectCard({ project, index, isSelected, onToggle }: ProjectCardProps) {
  return (
    <motion.div
      variants={motionPresets.projectCard}
      initial={{ ...motionPresets.projectCard.rest, opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover="hover"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="border-4 border-black bg-white shadow-[6px_6px_0_0_theme('colors.comic-blue')] overflow-hidden self-start h-fit flex flex-col"
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


        <div className="absolute inset-0 bg-comic-project-overlay mix-blend-multiply" />

        <motion.div
          variants={motionPresets.projectActionBadge}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="absolute top-3 right-3"
        >
          <ActionBadge
            theme={project.theme}
            noPadding 
            className="text-lg px-2"
          >
            {project.action}
          </ActionBadge>
        </motion.div>

        <ActionBadge
          theme="green"
          noPadding
          className="absolute top-3 left-3 w-8 h-8 flex items-center justify-center text-lg"
        >
          {index + 1}
        </ActionBadge>
      </div>

      <div className="p-4 border-t-4 border-black flex flex-col flex-1">
        <h3 className="text-xl text-black mb-1 font-bangers tracking-bangers-wide">{project.title}</h3>
        <p className="text-xs text-gray-500 mb-2 font-sans font-medium">{project.subtitle}</p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => (
            <ActionBadge
              key={tag}
              theme={project.theme}
              noPadding
              className="text-xs px-2 py-1"
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
              <p className="text-xs text-gray-700 mb-3 leading-relaxed font-sans font-medium pt-2">
                {project.description}
              </p>
              <div className="flex gap-2">
                <ActionBadge
                  theme="yellow"
                  className="flex items-center gap-1 text-xs px-2 py-0.5 cursor-pointer"
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    if (project.githubUrl) window.open(project.githubUrl, "_blank");
                  }}
                  noPadding
                >
                  <FaGithub size={14} /> Código
                </ActionBadge>
                <ActionBadge
                  theme="yellow"
                  className="flex items-center gap-1 text-xs px-2 py-0.5 cursor-pointer"
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
            className="text-xs cursor-pointer px-2 py-0.5 inline-flex items-center"
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

