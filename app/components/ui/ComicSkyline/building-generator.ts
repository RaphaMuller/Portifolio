import { BuildingConfig, BuildingPerspective } from './building';

export function generateSkyline(quantity: 1 | 3 | 5 | 'w-full'): BuildingConfig[] {
    
  const count = quantity === 'w-full' ? 10 : quantity;
  
  const heights = [56, 64, 72, 80];
  const widths = [32, 36, 40];
  const perspectives: BuildingPerspective[] = ['left', 'right'];

  return Array.from({ length: count }, (_, index) => {
    // Lógica simples para alternar ou randomizar propriedades de design
    const height = heights[index % heights.length];
    const width = widths[index % widths.length];
    const perspective = perspectives[index % perspectives.length];
    
    // Calcula andares baseado na altura proporcional
    const floors = Math.floor(height / 16); 

    return {
      id: `building-${index}-${Math.random().toString(36).substr(2, 9)}`,
      height,
      width,
      perspective,
      floors,
      windowsPerFloor: 4
    };
  });
}