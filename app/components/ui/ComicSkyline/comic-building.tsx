"use client";

import { BuildingConfig, BuildingTheme } from "./building";
import { themeClasses } from "../../../constants/themesSkylines";

interface ComicBuildingProps {
  config: BuildingConfig;
  theme: BuildingTheme;
}

export function ComicBuilding({ config, theme }: ComicBuildingProps) {
  const { id, height, width, floors, windowsPerFloor, windowType, litWindows } = config;

  const currentTheme = themeClasses[theme];

  const getWindowClasses = () => {
    if (windowType === 'horizontal') return 'h-2 w-full border-2 border-black';
    if (windowType === 'grid') return 'h-4 w-4 border-2 border-black';
    return 'h-6 w-3 border-2 border-black'; 
  };

  const getContainerClasses = () => {
    const basePadding = windowType === 'horizontal' ? 'px-2' : 'px-1';
    return `flex flex-col gap-1 py-3 ${basePadding} w-full h-full justify-center items-center`;
  };

  return (
    <div className="relative group transition-transform duration-300" style={{ width: `${width * 4}px` }}>
      {/* Telhado 3D */}
      <div className={`absolute -top-3 right-2 h-4 skew-x-[45deg] border-4 border-black ${currentTheme.roof}`} style={{ width: `${width * 4}px` }} />
      
      {/* Sombra Lateral 3D */}
      <div className={`absolute -top-2 -left-4 w-4 skew-y-[45deg] rounded-t-md border-4 border-black ${currentTheme.shadow}`} style={{ height: `${height * 5}px` }} />
  
      {/* Face Frontal Principal */}
      <div
        className={`flex flex-col rounded-t-md border-4 border-black relative z-10 ${currentTheme.bg}`}
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
                    className={`transition-colors duration-500 relative z-20 ${getWindowClasses()} ${isLit ? currentTheme.windowOn : currentTheme.windowOff}`}
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