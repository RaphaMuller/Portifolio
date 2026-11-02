"use client";

import { motion } from "framer-motion";
import { heroCopy } from "@/app/constants/heroCopy";

interface ComicHeroIdentityProps {
  name?: string;
  role?: string;
}

/**
 * Comic-cover title: big name + issue line.
 * @example
 * <ComicHeroIdentity name="RAPHAEL MULLER" role="FULL-STACK DEVELOPER" />
 */
export function ComicHeroIdentity({
  name = "RAPHAEL MULLER",
  role = "FULL-STACK DEVELOPER",
}: ComicHeroIdentityProps) {
  return (
    <div className="flex flex-col items-center gap-2 select-none">
      <motion.h1
        initial={{ opacity: 0, scale: 1.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.1, type: "spring", stiffness: 170, damping: 12, mass: 0.8 }}
        className="text-h1 text-comic-stroke text-center text-white"
      >
        {name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.3, duration: 0.3 }}
        className="flex items-center gap-2 text-stat-label text-white before:h-0.5 before:w-8 before:bg-white after:h-0.5 after:w-8 after:bg-white"
      >
        {heroCopy.issue} · {role}
      </motion.p>
    </div>
  );
}
