"use client";

import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ComicBuilding } from "./comic-building";
import { generateSkyline } from "./building-generator";

interface SkylineProps {
  position?: "relative" | "absolute";
  theme: "dark" | "default" | "noir";
  className?: string;
}

export default function BuildingSkyline({
  position = "relative",
  theme = "dark",
  className = "",
}: SkylineProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const rAF = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(rAF);
  }, []);

  const buildings = useMemo(() => {
    if (!mounted) return [];
    return generateSkyline();
  }, [mounted]);

  // Skyline
  return (
    <div
      className={`${position} ${className} bottom-0 z-0 hidden w-full items-end justify-center gap-1 px-2 sm:px-4 md:flex lg:gap-3`}
    >
      {/* Renderiza o skyline apenas após montagem para evitar erros de hidratação */}
      {mounted &&
        buildings.map((building, index) => {
          return (
            <motion.div
              key={building.id}
              className="origin-bottom scale-[0.6] sm:scale-[0.75] md:scale-90 lg:scale-100"
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                bounce: 0.2,
              }}
            >
              <ComicBuilding config={building} theme={theme} />
            </motion.div>
          );
        })}
    </div>
  );
}
