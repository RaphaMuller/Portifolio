import React from 'react';
import { BuildingConfig, BuildingTheme } from "./building";

interface ComicBuildingProps {
  config: BuildingConfig;
  theme: BuildingTheme;
}

export function ComicBuilding({ config, theme }: ComicBuildingProps) {
  const { perspective, height, width, floors, windowsPerFloor } = config;
  const themeClasses = {
    dark: { bg: 'bg-slate-900', shadow: 'bg-slate-800', roof: 'bg-slate-950', window: 'bg-yellow-200' },
    vintage: { bg: 'bg-amber-800', shadow: 'bg-amber-900', roof: 'bg-amber-950', window: 'bg-orange-100' },
    default: { bg: 'bg-comic-shadow', shadow: 'bg-slate-700', roof: 'bg-slate-600', window: 'bg-white' }
  }[theme];

  return (
    <div className="relative" style={{ width: `${width * 4}px` }}>
      {/* Teto */}
      {perspective === 'left' ? (
        <div className={`absolute -top-3 right-2 h-4 skew-x-[45deg] border-4 border-black ${themeClasses.roof}`} style={{ width: `${width * 4}px` }} />
      ) : (
        <div className={`absolute -top-3 left-2 h-4 -skew-x-[45deg] border-4 border-black ${themeClasses.roof}`} style={{ width: `${width * 4}px` }} />
      )}

      {/* Lateral */}
      {perspective === 'left' ? (
        <div className={`absolute -top-2 -left-4 w-4 skew-y-[45deg] rounded-t-md border-4 border-black ${themeClasses.shadow}`} style={{ height: `${height * 4}px` }} />
      ) : (
        <div className={`absolute -top-2 -right-4 rotate-y-180 w-4 skew-y-[45deg] rounded-t-md border-4 border-black ${themeClasses.shadow}`} style={{ height: `${height * 4}px` }} />
      )}

      {/* Face Frontal */}
      <div 
        className={`flex flex-col justify-around rounded-t-md border-4 border-black ${themeClasses.bg}`}
        style={{ height: `${height * 4}px`, width: `${width * 4}px` }}
      >
        {Array.from({ length: floors }).map((_, floorIdx) => (
          <div key={floorIdx} className="relative flex w-full justify-around">
            {Array.from({ length: windowsPerFloor }).map((_, winIdx) => (
              <div key={winIdx} className={`h-5 w-3 border-2 border-black ${themeClasses.window}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}