"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { heroCopy } from "@/app/constants/heroCopy";

interface ComicHeroSpeechProps {
  bio?: string;
  className?: string;
}

/**
 * @example
 * <ComicHeroSpeech />
 */
export function ComicHeroSpeech({
  bio = heroCopy.bio,
  className = "",
}: ComicHeroSpeechProps) {
  return (
    <div className={`flex flex-col items-center gap-3 sm:gap-3.5 md:items-start ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, type: "spring", stiffness: 130, damping: 14 }}
        className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl origin-top md:origin-left border-2 sm:border-3 border-black bg-comic-speech-warm p-3 sm:p-4 lg:p-5 xl:p-6 shadow-comic-sm sm:shadow-comic"
      >
        {/* Desktop speech tail pointing left */}
        <div
          aria-hidden="true"
          className="hero-tail-left-border hidden md:block absolute -left-4 top-1/2 -translate-y-1/2"
        />
        <div
          aria-hidden="true"
          className="hero-tail-left-fill hidden md:block absolute -left-2.5 top-1/2 -translate-y-1/2"
        />

        {/* Mobile speech tail pointing up */}
        <div
          aria-hidden="true"
          className="hero-tail-top-border block md:hidden absolute -top-3.5 left-1/2 -translate-x-1/2"
        />
        <div
          aria-hidden="true"
          className="hero-tail-top-fill block md:hidden absolute -top-2 left-1/2 -translate-x-1/2"
        />

        <p className="font-mouse text-base sm:text-lg lg:text-xl xl:text-2xl leading-snug sm:leading-relaxed tracking-wide text-comic-ink font-normal">
          &ldquo;{bio}&rdquo;
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 3.4, type: "spring", stiffness: 150, damping: 13 }}
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 md:justify-start"
      >
        <a href="#projects" className="comic-hero-cta bg-comic-red text-white">
          {heroCopy.ctaProjects}
        </a>
        <a href="#contact" className="comic-hero-cta bg-white text-black">
          <MessageSquare className="size-3.5 text-black" aria-hidden="true" />
          {heroCopy.ctaContact}
        </a>
      </motion.div>
    </div>
  );
}
