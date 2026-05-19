"use client";

import React, { useState, useEffect } from 'react';
import { BuildingConfig, BuildingTheme } from "./building";

interface ComicBuildingProps {
  config: BuildingConfig;
  theme: BuildingTheme;
}

export function ComicBuilding({ config, theme }: ComicBuildingProps) {
  const { id, perspective, height, width, floors, windowsPerFloor, windowType } = config;

  const [litWindows, setLitWindows] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const newLitWindows: Record<string, boolean> = {};
    for (let f = 0; f < floors; f++) {
      for (let w = 0; w < windowsPerFloor; w++) {
        newLitWindows[`${f}-${w}`] = Math.random() > 0.6;
      }
    }
    setLitWindows(newLitWindows);
  }, [floors, windowsPerFloor]);

  const themeClasses = {
    dark: {
      bg: 'bg-slate-900',
      shadow: 'bg-slate-800',
      roof: 'bg-slate-950',
      windowOn: 'bg-yellow-200 shadow-[0_0_8px_2px_rgba(253,224,71,0.6)]',
      windowOff: 'bg-slate-800'
    },
    vintage: {
      bg: 'bg-amber-800',
      shadow: 'bg-amber-900',
      roof: 'bg-amber-950',
      windowOn: 'bg-orange-200 shadow-[0_0_8px_2px_rgba(254,215,170,0.6)]',
      windowOff: 'bg-amber-950'
    },
    default: {
      bg: 'bg-comic-shadow',
      shadow: 'bg-slate-700',
      roof: 'bg-slate-600',
      windowOn: 'bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.7)]',
      windowOff: 'bg-slate-800'
    },
    noir: {
      bg: 'bg-black',
      shadow: 'bg-zinc-900',
      roof: 'bg-zinc-950',
      windowOn: 'bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.8)]',
      windowOff: 'bg-zinc-900'
    }
  }[theme];

  const getWindowClasses = () => {
    if (windowType === 'horizontal') return 'h-2 w-full border-2 border-black';
    if (windowType === 'grid') return 'h-4 w-4 border-2 border-black';
    return 'h-6 w-3 border-2 border-black'; // tall
  };

  const getContainerClasses = () => {
    if (windowType === 'horizontal') return 'flex flex-col gap-1 py-3 px-2 w-full h-full justify-center items-center';
    return 'flex flex-col gap-1 py-3 px-1 w-full h-full justify-center items-center';
  };

  return (
    <div className="relative group transition-transform duration-300" style={{ width: `${width * 4}px` }}>

      {/* Teto Principal */}
      {perspective === 'left' ? (
        <div className={`absolute -top-3 right-2 h-4 skew-x-[45deg] border-4 border-black ${themeClasses.roof}`} style={{ width: `${width * 4}px` }} />
      ) : (
        <div className={`absolute -top-3 left-2 h-4 -skew-x-[45deg] border-4 border-black ${themeClasses.roof} ${perspective === 'right' ? 'shadow-[-6px_0px_0px_rgba(0,0,0,1)]' : ''}`} style={{ width: `${width * 4}px` }} />
      )}

      {/* Lateral Principal */}
      {perspective === 'left' ? (
        <div className={`absolute -top-2 -left-4 w-4 skew-y-[45deg] rounded-t-md border-4 border-black ${themeClasses.shadow}`} style={{ height: `${height * 5}px` }} />
      ) : (
        <div className={`absolute -top-2 -right-4 rotate-y-180 w-4 skew-y-[45deg] rounded-t-md border-4 border-black ${themeClasses.shadow}`} style={{ height: `${height * 5}px` }} />
      )}

      {/* Face Frontal Principal */}
      <div
        className={`flex flex-col rounded-t-md border-4 border-black relative z-10 ${themeClasses.bg} ${perspective === 'right' ? 'shadow-[-6px_0px_0px_rgba(0,0,0,1)]' : ''}`}
        style={{ height: `${height * 5}px`, width: `${width * 4}px` }}
      >
        <div className={getContainerClasses()}>
          {Array.from({ length: floors }).map((_, floorIdx) => (
            <div key={floorIdx} className="relative flex w-full justify-center gap-0.5 sm:gap-1 px-1">
              {Array.from({ length: windowsPerFloor }).map((_, winIdx) => {
                const isLit = litWindows[`${floorIdx}-${winIdx}`];
                return (
                  <div
                    key={`window-${id}-${floorIdx}-${winIdx}`}
                    id={`window-${id}-${floorIdx}-${winIdx}`}
                    className={`transition-colors duration-500 relative z-20 ${getWindowClasses()} ${isLit ? themeClasses.windowOn : themeClasses.windowOff}`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}