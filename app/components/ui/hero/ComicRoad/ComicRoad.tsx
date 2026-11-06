"use client";

import { motion } from "framer-motion";
import { ComicTraffic } from "@/app/components/ui/hero/ComicRoad/ComicTraffic";

interface ComicRoadProps {
  className?: string;
  showCurb?: boolean;
  height?: string;
}

/**
 * @example
 * <ComicRoad className="relative z-20 w-full" showCurb height="h-12" />
 */
export function ComicRoad({
  className = "",
  showCurb = true,
  height = "h-12",
}: ComicRoadProps) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.45, ease: "easeInOut" }}
      className={`relative flex w-full flex-col select-none origin-left ${className}`}
    >
      {showCurb && (
        <div
          aria-hidden="true"
          className="shadow-curb-inset h-2.5 w-full border-t-2 border-b-2 border-black bg-comic-curb"
        />
      )}

      <div
        className={`relative flex w-full items-center overflow-hidden bg-comic-surface-dark ${height}`}
      >
        <div
          aria-hidden="true"
          className="w-full border-b-3 border-dashed border-comic-yellow opacity-90"
        />

        <ComicTraffic />
      </div>
    </motion.div>
  );
}
