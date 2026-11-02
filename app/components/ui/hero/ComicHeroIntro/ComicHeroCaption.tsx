"use client";

import { motion } from "framer-motion";
import { useTypewriter } from "@/app/sections/hooks/useTypewriter";

interface ComicHeroCaptionProps {
  text: string;
  startDelay: number;
  align: "start" | "end";
}

const ALIGN_CLASSES = {
  start: "self-center lg:self-start",
  end: "self-center lg:self-end",
} as const;

/**
 * Comic narrator box (recordatório) with typewriter reveal.
 * @example
 * <ComicHeroCaption text={heroCopy.captionOpen} startDelay={1.3} align="start" />
 */
export function ComicHeroCaption({ text, startDelay, align }: ComicHeroCaptionProps) {
  const { visibleText, isDone } = useTypewriter(text, startDelay);

  return (
    <motion.p
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: startDelay - 0.2, duration: 0.2 }}
      className={`relative max-w-md border-4 border-black bg-white px-3 py-2 text-narrator text-black shadow-comic ${ALIGN_CLASSES[align]}`}
    >
      <span className="sr-only">{text}</span>
      {/* Invisible full text reserves the final size, avoiding layout shift */}
      <span aria-hidden="true" className="invisible">
        {text}
      </span>
      <span aria-hidden="true" className="absolute inset-0 px-3 py-2">
        {visibleText}
        {!isDone && <span className="motion-safe:animate-pulse">▌</span>}
      </span>
    </motion.p>
  );
}
