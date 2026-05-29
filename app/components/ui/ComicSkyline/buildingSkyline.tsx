"use client";

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ComicBuilding } from './comic-building';
import { generateSkyline } from "./building-generator";

interface SkylineProps {
  position?: "relative" | "absolute";
  theme: "dark" | "default" | "noir";
  className?: string;
  // size: "default" | "sm" | "md" | "lg"
}

export default function BuildingSkyline({
  position = "relative",
  theme = "dark",
  className = "",
}: SkylineProps) {
  
  const buildings = useMemo(() => generateSkyline(), []);

  return (
    <div className={`${position} ${className} hidden md:flex items-end justify-center gap-1 lg:gap-3 w-full px-2 sm:px-4 bottom-0 z-0`}>
      
      {buildings.map((building, index) => {
        return (
          <motion.div 
            key={building.id} 
            className="origin-bottom scale-[0.6] sm:scale-[0.75] md:scale-90 lg:scale-100"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }} 
            viewport={{ once: true }}     
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1, 
              type: "spring",
              bounce: 0.2
            }}
          >
            <ComicBuilding config={building} theme={theme} />
          </motion.div>
        );
      })}
    </div>
  );
}