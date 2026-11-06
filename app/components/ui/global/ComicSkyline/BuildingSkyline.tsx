"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { ComicBuilding } from "@/app/components/ui/global/ComicSkyline/ComicBuilding";
import { generateSkyline } from "@/app/lib/generateSkyline";
import type { BuildingTheme, SkylineCount } from "@/app/types/building";

interface SkylineProps {
  position?: "relative" | "absolute";
  theme?: BuildingTheme;
  count?: SkylineCount;
  className?: string;
  staggerDelay?: number;
  align?: "left" | "center" | "right";
}

const ALIGNMENT_MAP = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
} as const;

/**
 * @example
 * <BuildingSkyline count="full" align="center" theme="default" />
 */
export function BuildingSkyline({
  position = "relative",
  theme = "dark",
  count = "full",
  className = "",
  staggerDelay = 0.025,
  align = "center",
}: SkylineProps) {
  // Deterministic generation guarantees zero hydration mismatch between SSR and client.
  const buildings = useMemo(() => generateSkyline({ count }), [count]);

  return (
    <div
      className={`${position} ${ALIGNMENT_MAP[align]} ${className} bottom-0 z-0 flex items-end gap-4`}
    >
      {buildings.map((building, index) => (
        <motion.div
          key={building.id}
          className="origin-bottom shrink-0"
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 14,
            mass: 0.8,
            delay: 0.55 + index * staggerDelay,
          }}
        >
          <ComicBuilding config={building} theme={theme} />
        </motion.div>
      ))}
    </div>
  );
}
