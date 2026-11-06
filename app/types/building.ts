export type BuildingTheme = "dark" | "default";
export type WindowType = "grid" | "horizontal" | "tall";
export type SkylineCount = "full";

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
}
