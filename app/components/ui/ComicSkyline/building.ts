export type BuildingTheme = 'dark' | 'vintage' | 'default' | 'noir';
export type BuildingPerspective = 'left' | 'right';
export type WindowType = 'grid' | 'horizontal' | 'tall';

export interface BuildingConfig {
  id: string;
  height: number; 
  width: number; 
  perspective: BuildingPerspective;
  floors: number;
  windowsPerFloor: number;
  windowType: WindowType;
}