"use client";

import React from "react";
import { motion } from "framer-motion";

interface ComicPalmTreeProps {
  className?: string;
  height?: number;
  flipped?: boolean;
  swayDelay?: number;
  entranceDelay?: number;
}

/**
 * @example
 * <ComicPalmTree height={90} />
 * <ComicPalmTree height={110} flipped swayDelay={1.2} entranceDelay={0.7} />
 */
export function ComicPalmTree({
  className = "",
  height = 90,
  flipped = false,
  swayDelay = 0,
  entranceDelay = 0.5,
}: ComicPalmTreeProps) {
  // Proporção 100 x 120 do viewBox
  const width = Math.round((height / 120) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 120, scaleX: flipped ? -1 : 1 }}
      animate={{ opacity: 1, y: 0, scaleX: flipped ? -1 : 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 14,
        mass: 0.8,
        delay: entranceDelay,
      }}
      className={`relative inline-block origin-bottom select-none ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 120"
        className="h-full w-full overflow-visible drop-shadow-[2px_2px_0_#000]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Tronco Comic Texturizado */}
        <g stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Base e Corpo do Tronco */}
          <path
            d="M 43 120 C 44 85, 49 55, 53 35 L 58 35 C 54 55, 49 85, 49 120 Z"
            fill="#854d0e"
          />
          {/* Segmentos e Anéis do Tronco */}
          <path d="M 44 105 Q 46 102 48 105" />
          <path d="M 45 90 Q 48 87 50 90" />
          <path d="M 47 75 Q 50 72 52 75" />
          <path d="M 49 60 Q 52 57 54 60" />
          <path d="M 51 46 Q 54 43 56 46" />
        </g>

        {/* Copa com Folhas Animadas ao Vento */}
        <motion.g
          animate={{ rotate: [-2, 2.5, -2] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: swayDelay,
          }}
          style={{ originX: "55px", originY: "35px" }}
          stroke="#000"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Folha 1: Extrema Esquerda (caída) */}
          <path
            d="M 54 35 C 32 24, 16 34, 8 50 C 22 36, 38 32, 54 35 Z"
            fill="#16a34a"
          />

          {/* Folha 2: Superior Esquerda */}
          <path
            d="M 54 35 C 34 8, 22 14, 18 25 C 32 18, 44 24, 54 35 Z"
            fill="#22c55e"
          />

          {/* Folha 3: Topo Central */}
          <path
            d="M 54 35 C 50 2, 56 0, 60 4 C 62 16, 58 26, 54 35 Z"
            fill="#4ade80"
          />

          {/* Folha 4: Superior Direita */}
          <path
            d="M 54 35 C 66 10, 80 8, 88 22 C 76 18, 64 24, 54 35 Z"
            fill="#22c55e"
          />

          {/* Folha 5: Extrema Direita (caída) */}
          <path
            d="M 54 35 C 70 26, 86 32, 95 48 C 82 34, 68 32, 54 35 Z"
            fill="#16a34a"
          />

          {/* Folha 6: Frontal Menor */}
          <path
            d="M 54 35 C 50 48, 44 54, 38 60 C 44 48, 48 42, 54 35 Z"
            fill="#15803d"
          />

          {/* Cocos Comic no Centro da Copa */}
          <circle cx="51" cy="37" r="3.5" fill="#713f12" />
          <circle cx="56.5" cy="36" r="3" fill="#854d0e" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
