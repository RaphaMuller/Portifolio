import { BuildingConfig, WindowType } from './building';

export function generateSkyline(): BuildingConfig[] {
  const count = 18;
  
  const heights = [36, 42, 48, 54];
  const widths = [20, 24, 28, 32];
  const windowTypes: WindowType[] = ['grid', 'horizontal', 'tall'];

  return Array.from({ length: count }, (_, index) => {
    const height = heights[Math.floor(Math.random() * heights.length)];
    const width = widths[Math.floor(Math.random() * widths.length)];
    const windowType = windowTypes[Math.floor(Math.random() * windowTypes.length)];
    
    const availableHeightPx = (height * 5) - 30; 
    
    let floors = 3;
    if (windowType === 'tall') floors = Math.floor(availableHeightPx / 28); 
    else if (windowType === 'grid') floors = Math.floor(availableHeightPx / 20); 
    else if (windowType === 'horizontal') floors = Math.floor(availableHeightPx / 12); 

    floors = Math.max(floors, 3);

    let windowsPerFloor = 3;
    if (windowType === 'horizontal') {
      windowsPerFloor = 2;
    } else {
      windowsPerFloor = width > 24 ? 4 : 3;
      if (width <= 20) windowsPerFloor = 2;
    }

    const litWindows: Record<string, boolean> = {};
    for (let f = 0; f < floors; f++) {
      for (let w = 0; w < windowsPerFloor; w++) {
        litWindows[`${f}-${w}`] = Math.random() > 0.6;
      }
    }

    return {
      id: `building-${index}-${Math.random().toString(36).substr(2, 9)}`,
      height,
      width,
      floors,
      windowsPerFloor,
      windowType,
      litWindows
    };
  });
}