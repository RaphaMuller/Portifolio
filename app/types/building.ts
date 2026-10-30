export type BuildingTheme = "dark" | "default" | "noir";
export type WindowType = "grid" | "horizontal" | "tall";
export type SkylineCount = 3 | 5 | 8 | "full";
export type SkylinePattern = "pyramid" | "wave" | "harmonic" | "random";

export interface BuildingConfig {
  id: string;
  height: number;
  width: number;
  floors: number;
  windowsPerFloor: number;
  windowType: WindowType;
  litWindows: Record<string, boolean>;
}

export interface GenerateSkylineOptions {
  count?: SkylineCount;
  pattern?: SkylinePattern;
  seed?: number;
}
