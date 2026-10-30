"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";

interface ComicHeroIdentityProps {
  name?: string;
  role?: string;
  className?: string;
}

/**
 * @example
 * <ComicHeroIdentity name="RAPHAEL MULLER" role="FULL-STACK DEVELOPER" />
 */
export function ComicHeroIdentity({
  name = "RAPHAEL MULLER",
  role = "FULL-STACK DEVELOPER",
  className = "",
}: ComicHeroIdentityProps) {
  return (
    <div className={`flex flex-col items-center gap-1.5 sm:gap-2.5 ${className}`}>
      {/* 7. Nome Triunfante com Efeito SLAM (Responsivo e Equilibrado para 1024px) */}
      <ActionBadge
        theme="yellow"
        initial={{ opacity: 0, scale: 1.4, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.45, type: "spring", stiffness: 170, damping: 12, mass: 0.8 }}
        className="px-3 py-1 sm:px-3.5 sm:py-1 lg:px-4 lg:py-1 xl:px-5 xl:py-1.5 text-center shadow-[3px_3px_0_#000] sm:shadow-[4px_4px_0_#000] lg:shadow-[4px_4px_0_#000] xl:shadow-[5px_5px_0_#000]"
      >
        <h1 className="font-bangers text-2xl leading-none tracking-bangers-wide text-black sm:text-3xl lg:text-3xl xl:text-5xl">
          {name}
        </h1>
      </ActionBadge>

      {/* 8. Cargo Onomatopeico com Efeito STAMP de Carimbada (Responsivo) */}
      <motion.div
        initial={{ opacity: 0, scale: 2.2, rotate: -14 }}
        animate={{ opacity: 1, scale: 1, rotate: -1.5 }}
        transition={{ delay: 1.7, type: "spring", stiffness: 220, damping: 13 }}
        className="inline-flex items-center gap-1.5 border-2 sm:border-3 border-black bg-comic-red px-2.5 py-0.5 sm:px-3 sm:py-0.5 lg:px-3 lg:py-0.5 xl:px-3.5 xl:py-1 text-white shadow-[2px_2px_0_#000] sm:shadow-[3px_3px_0_#000] hover:rotate-0 transition-transform"
      >
        <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-comic-yellow text-comic-yellow animate-pulse" />
        <span className="font-bangers text-xs tracking-bangers-wide sm:text-xs lg:text-xs xl:text-base">
          {role}
        </span>
        <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-comic-yellow text-comic-yellow animate-pulse" />
      </motion.div>
    </div>
  );
}
