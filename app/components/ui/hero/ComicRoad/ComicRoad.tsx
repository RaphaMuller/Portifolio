"use client";

import React from "react";
import { motion } from "framer-motion";
import { ComicTraffic } from "./ComicTraffic";

interface ComicRoadProps {
  className?: string;
  showCurb?: boolean;
  stripeColor?: "yellow" | "white";
  height?: string;
  enableTraffic?: boolean;
}

/**
 * @example
 * <ComicRoad className="w-full" enableTraffic />
 * <ComicRoad showCurb={false} stripeColor="white" />
 */
export function ComicRoad({
  className = "",
  showCurb = true,
  stripeColor = "yellow",
  height = "h-12",
  enableTraffic = true,
}: ComicRoadProps) {
  const stripeColorClass =
    stripeColor === "yellow" ? "border-comic-yellow" : "border-white";

  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.45, ease: "easeInOut" }}
      className={`relative flex w-full flex-col select-none origin-left ${className}`}
    >
      {/* Meio-fio / Calçada de Concreto Comic */}
      {showCurb && (
        <div
          aria-hidden="true"
          className="h-2.5 w-full border-t-2 border-b-2 border-black bg-zinc-300 shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]"
        />
      )}

      {/* Pista de Asfalto com Faixa Central Tracejada e Tráfego */}
      <div
        className={`relative flex w-full items-center overflow-hidden border-b-4 border-black bg-zinc-950 ${height}`}
      >
        {/* Linha Central Tracejada de Rodovia */}
        <div
          aria-hidden="true"
          className={`w-full border-b-[3px] border-dashed ${stripeColorClass} opacity-90`}
        />

        {/* Tráfego de Micro-Carros em Faixas Opostas */}
        {enableTraffic && <ComicTraffic />}
      </div>
    </motion.div>
  );
}
