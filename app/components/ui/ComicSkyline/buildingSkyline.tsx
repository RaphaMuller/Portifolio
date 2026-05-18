"use client";

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ComicBuilding } from './comic-building';
import { generateSkyline } from "./building-generator";

interface SkylineProps {
  position?: "relative" | "absolute";
  theme: "dark" | "vintage" | "default" | "noir";
  className?: string;
}

export default function BuildingSkyline({
  position = "relative",
  theme = "dark",
  className = "",
}: SkylineProps) {
  
  const buildings = useMemo(() => generateSkyline(), []);

  return (
    <div className={`${position} ${className} flex items-end justify-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 w-full p-2 sm:p-4 bottom-0 z-0`}>
      {buildings.map((building, index) => {
        let displayClass = '';
        
        if (index > 13) displayClass = 'hidden xl:block';
        else if (index > 7) displayClass = 'hidden lg:block'; 
        else if (index > 4) displayClass = 'hidden md:block'; 
        else if (index > 2) displayClass = 'hidden sm:block';
        else if (index > 0) displayClass = 'hidden xs:block'; // 1 prédio no mobile

        // Lógica de espaçamento dinâmico baseado no encontro das perspectivas 3D
        let spacingClass = '';
        if (index > 0) {
          const prevBuilding = buildings[index - 1];
          if (prevBuilding.perspective === 'right' && building.perspective === 'left') {
            // As duas paredes laterais se encontram no meio (colisão dupla, precisamos afastar bastante)
            spacingClass = 'ml-4 sm:ml-5 md:ml-6 lg:ml-8';
          } else if (prevBuilding.perspective === building.perspective) {
            // Apenas uma parede entra no meio (colisão simples)
            spacingClass = 'ml-2 sm:ml-3 md:ml-4 lg:ml-4';
          }
          // Se prev == left e atual == right, o meio fica livre, então não precisamos de margem!
        }

        return (
          <motion.div 
            key={building.id} 
            className={`origin-bottom scale-[0.6] sm:scale-[0.75] md:scale-90 lg:scale-100 ${displayClass} ${spacingClass}`}
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.1,
              type: "spring",
              bounce: 0.3
            }}
          >
            <ComicBuilding config={building} theme={theme} />
          </motion.div>
        );
      })}
    </div>
  );
}