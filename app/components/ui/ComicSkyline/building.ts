export type BuildingTheme = 'dark' | 'vintage' | 'default';
export type BuildingPerspective = 'left' | 'right';

export interface BuildingConfig {
  id: string;
  height: number; 
  width: number; 
  perspective: BuildingPerspective;
  floors: number;
  windowsPerFloor: number;
}