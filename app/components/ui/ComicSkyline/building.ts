export type BuildingTheme = 'dark' | 'default' | 'noir';
export type WindowType = 'grid' | 'horizontal' | 'tall';

export interface BuildingConfig {
  id: string;
  height: number;
  width: number;
  floors: number;
  windowsPerFloor: number;
  windowType: WindowType;
  litWindows: Record<string, boolean>; 
}