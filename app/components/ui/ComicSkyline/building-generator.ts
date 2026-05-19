import { BuildingConfig, BuildingPerspective, WindowType } from './building';

export function generateSkyline(): BuildingConfig[] {
  const count = 16;
  
  const heights = [36, 42, 48, 54];
  const widths = [20, 24, 28, 32];
  const perspectives: BuildingPerspective[] = ['left', 'right'];
  const windowTypes: WindowType[] = ['grid', 'horizontal', 'tall'];

  return Array.from({ length: count }, (_, index) => {
    const height = heights[Math.floor(Math.random() * heights.length)];
    const width = widths[Math.floor(Math.random() * widths.length)];
    const perspective = perspectives[Math.floor(Math.random() * perspectives.length)];
    const windowType = windowTypes[Math.floor(Math.random() * windowTypes.length)];
    
    // Altura útil em pixels (Descontando as bordas de 4px e garantindo um padding top/bottom seguro de 24px no total)
    // Isso impede matematicamente que as janelas ultrapassem a borda do prédio
    const availableHeightPx = (height * 5) - 32; 
    
    let floors = 3;
    if (windowType === 'tall') floors = Math.floor(availableHeightPx / 28); // 24px window (h-6) + 4px gap
    else if (windowType === 'grid') floors = Math.floor(availableHeightPx / 20); // 16px window (h-4) + 4px gap
    else if (windowType === 'horizontal') floors = Math.floor(availableHeightPx / 12); // 8px window (h-2) + 4px gap

    // Trava de segurança para pelo menos 2 andares
    floors = Math.max(floors, 2);

    let windowsPerFloor = 3;
    if (windowType === 'horizontal') {
      windowsPerFloor = 1;
    } else {
      windowsPerFloor = width > 24 ? 4 : 3;
      if (width <= 20) windowsPerFloor = 2;
    }

    return {
      id: `building-${index}-${Math.random().toString(36).substr(2, 9)}`,
      height,
      width,
      perspective,
      floors,
      windowsPerFloor,
      windowType
    };
  });
}