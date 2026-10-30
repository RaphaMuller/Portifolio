"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ComicPanelProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  caption?: string;
  captionTheme?: "yellow" | "red" | "blue" | "dark";
  className?: string;
}

const CAPTION_THEMES = {
  yellow: "bg-comic-yellow text-black",
  red: "bg-comic-red text-white",
  blue: "bg-comic-blue text-white",
  dark: "bg-black text-comic-yellow",
};

/**
 * @example
 * <ComicPanel caption="ENQUANTO ISSO NO QG..." captionTheme="yellow">
 *   <p>Conteúdo do painel</p>
 * </ComicPanel>
 */
export function ComicPanel({
  children,
  caption,
  captionTheme = "yellow",
  className = "",
  ...motionProps
}: ComicPanelProps) {
  return (
    <motion.div
      {...motionProps}
      className={`relative flex flex-col border-4 border-black bg-white p-4 shadow-comic transition-shadow duration-200 hover:shadow-comic-lg sm:p-5 ${className}`}
    >
      {caption && (
        <div className="mb-3 self-start">
          <span
            className={`inline-block border-2 border-black px-3 py-1 text-stat-label uppercase shadow-comic-sm ${CAPTION_THEMES[captionTheme]}`}
          >
            {caption}
          </span>
        </div>
      )}
      {children}
    </motion.div>
  );
}
