import React, { useMemo } from 'react';
import { ComicBuilding } from './comic-building';
import { generateSkyline } from "./building-generator";

interface SkylineProps {
  skylines: 1 | 3 | 5 | "w-full";
  position?: "relative" | "absolute";
  theme: "dark" | "vintage" | "default";
}

export default function BuildingSkyline({
  skylines = "w-full",
  position = "relative",
  theme = "dark",
}: SkylineProps) {
  
  const buildings = useMemo(() => generateSkyline(skylines), [skylines]);

  return (
    <div className={`${position} flex items-end justify-center gap-12 w-full p-6 bottom-0`}>
      {buildings.map((building) => (
        <ComicBuilding key={building.id} config={building} theme={theme} />
      ))}
    </div>
  );
}