"use client";

import React from "react";
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
      {/* 9. Balãozinho com Expansão a partir da Foto (t = 1.95s, Escala Amigável para 1024px) */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, type: "spring", stiffness: 130, damping: 14 }}
        className="relative w-full max-w-[290px] sm:max-w-sm md:max-w-md lg:max-w-[360px] xl:max-w-[440px] origin-top md:origin-left border-2 sm:border-3 border-black bg-amber-50 p-3 sm:p-3.5 lg:p-3.5 xl:p-4.5 shadow-[4px_4px_0_#000] sm:shadow-[5px_5px_0_#000]"
      >
        {/* Rabicho do Balão (Desktop: Aponta para a Esquerda) */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 h-0 w-0 border-t-[10px] border-r-[14px] border-b-[10px] border-t-transparent border-r-black border-b-transparent"
        />
        <div
          aria-hidden="true"
          className="hidden md:block absolute -left-2.5 top-1/2 -translate-y-1/2 h-0 w-0 border-t-[7px] border-r-[11px] border-b-[7px] border-t-transparent border-r-amber-50 border-b-transparent"
        />

        {/* Rabicho do Balão (Mobile: Aponta para Cima) */}
        <div
          aria-hidden="true"
          className="block md:hidden absolute -top-3.5 left-1/2 -translate-x-1/2 h-0 w-0 border-r-[10px] border-b-[14px] border-l-[10px] border-r-transparent border-b-black border-l-transparent"
        />
        <div
          aria-hidden="true"
          className="block md:hidden absolute -top-2 left-1/2 -translate-x-1/2 h-0 w-0 border-r-[8px] border-b-[11px] border-l-[8px] border-r-transparent border-b-amber-50 border-l-transparent"
        />

        <p className="font-mouse text-base sm:text-lg lg:text-lg xl:text-2xl leading-snug sm:leading-relaxed tracking-wide text-zinc-900 font-normal">
          &ldquo;{bio}&rdquo;
        </p>
      </motion.div>

      {/* 10. Ações Comic (CTAs com Click Squeeze e Fonte Proporcional em 1024px) */}
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 3.4, type: "spring", stiffness: 150, damping: 13 }}
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 md:justify-start"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-1.5 border-2 sm:border-3 border-black bg-comic-red px-3 py-1.5 sm:px-3.5 sm:py-1.5 lg:px-3.5 lg:py-2 xl:px-5 xl:py-2.5 font-bangers text-xs sm:text-sm lg:text-sm xl:text-base tracking-bangers-wide text-white shadow-[3px_3px_0_#000] sm:shadow-[4px_4px_0_#000] transition-transform hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
        >
          VER PROJETOS
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 border-2 sm:border-3 border-black bg-white px-3 py-1.5 sm:px-3.5 sm:py-1.5 lg:px-3.5 lg:py-2 xl:px-5 xl:py-2.5 font-bangers text-xs sm:text-sm lg:text-sm xl:text-base tracking-bangers-wide text-black shadow-[3px_3px_0_#000] sm:shadow-[4px_4px_0_#000] transition-transform hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
        >
          <MessageSquare className="h-3.5 w-3.5 text-black" />
          FALAR COMIGO
        </a>
      </motion.div>
    </div>
  );
}
