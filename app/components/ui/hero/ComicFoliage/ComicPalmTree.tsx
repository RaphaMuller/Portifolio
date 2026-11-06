"use client";

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
 * <ComicPalmTree height={85} flipped swayDelay={1.2} entranceDelay={0.92} />
 */
export function ComicPalmTree({
  className = "",
  height = 90,
  flipped = false,
  swayDelay = 0,
  entranceDelay = 0.5,
}: ComicPalmTreeProps) {
  // Matches the 100 x 120 SVG viewBox aspect ratio.
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
      style={{ width: `${width}px`, height: `${height}px` }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 120"
        className="drop-shadow-comic-sm h-full w-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          stroke="var(--color-black)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M 43 120 C 44 85, 49 55, 53 35 L 58 35 C 54 55, 49 85, 49 120 Z"
            fill="var(--color-palm-trunk)"
          />
          <path d="M 44 105 Q 46 102 48 105" />
          <path d="M 45 90 Q 48 87 50 90" />
          <path d="M 47 75 Q 50 72 52 75" />
          <path d="M 49 60 Q 52 57 54 60" />
          <path d="M 51 46 Q 54 43 56 46" />
        </g>

        <motion.g
          animate={{ rotate: [-2, 2.5, -2] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: swayDelay,
          }}
          style={{ originX: "55px", originY: "35px" }}
          stroke="var(--color-black)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M 54 35 C 32 24, 16 34, 8 50 C 22 36, 38 32, 54 35 Z"
            fill="var(--color-palm-leaf-mid)"
          />
          <path
            d="M 54 35 C 34 8, 22 14, 18 25 C 32 18, 44 24, 54 35 Z"
            fill="var(--color-palm-leaf-base)"
          />
          <path
            d="M 54 35 C 50 2, 56 0, 60 4 C 62 16, 58 26, 54 35 Z"
            fill="var(--color-palm-leaf-light)"
          />
          <path
            d="M 54 35 C 66 10, 80 8, 88 22 C 76 18, 64 24, 54 35 Z"
            fill="var(--color-palm-leaf-base)"
          />
          <path
            d="M 54 35 C 70 26, 86 32, 95 48 C 82 34, 68 32, 54 35 Z"
            fill="var(--color-palm-leaf-mid)"
          />
          <path
            d="M 54 35 C 50 48, 44 54, 38 60 C 44 48, 48 42, 54 35 Z"
            fill="var(--color-palm-leaf-dark)"
          />
          <circle cx="51" cy="37" r="3.5" fill="var(--color-palm-coconut-dark)" />
          <circle cx="56.5" cy="36" r="3" fill="var(--color-palm-trunk)" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
