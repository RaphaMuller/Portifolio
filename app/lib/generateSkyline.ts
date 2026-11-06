import type {
  BuildingConfig,
  GenerateSkylineOptions,
  SkylineCount,
  WindowType,
} from "@/app/types/building";

const SILHOUETTES: Record<
  SkylineCount,
  ReadonlyArray<{ height: number; width: number; windowType: WindowType }>
> = {
  full: [
    { height: 36, width: 20, windowType: "horizontal" },
    { height: 44, width: 24, windowType: "grid" },
    { height: 52, width: 28, windowType: "tall" },
    { height: 38, width: 20, windowType: "horizontal" },
    { height: 48, width: 32, windowType: "grid" },
    { height: 54, width: 28, windowType: "tall" },
    { height: 40, width: 24, windowType: "horizontal" },
    { height: 46, width: 28, windowType: "grid" },
    { height: 54, width: 32, windowType: "tall" },
    { height: 42, width: 24, windowType: "grid" },
    { height: 50, width: 28, windowType: "tall" },
    { height: 36, width: 20, windowType: "horizontal" },
    { height: 48, width: 28, windowType: "tall" },
    { height: 40, width: 24, windowType: "grid" },
    { height: 54, width: 32, windowType: "tall" },
    { height: 38, width: 20, windowType: "horizontal" },
    { height: 46, width: 26, windowType: "grid" },
    { height: 52, width: 30, windowType: "tall" },
    { height: 42, width: 22, windowType: "horizontal" },
    { height: 48, width: 28, windowType: "grid" },
    { height: 40, width: 24, windowType: "horizontal" },
    { height: 52, width: 30, windowType: "tall" },
    { height: 44, width: 26, windowType: "grid" },
    { height: 38, width: 20, windowType: "horizontal" },
  ],
};

function calculateFloors(height: number, windowType: WindowType): number {
  const availableHeightPx = height * 5 - 30;
  if (windowType === "tall") return Math.max(3, Math.floor(availableHeightPx / 28));
  if (windowType === "grid") return Math.max(3, Math.floor(availableHeightPx / 20));
  return Math.max(3, Math.floor(availableHeightPx / 12));
}

function calculateWindowsPerFloor(width: number, windowType: WindowType): number {
  if (windowType === "horizontal") return 2;
  if (width > 24) return 4;
  if (width <= 20) return 2;
  return 3;
}

function generateLitWindows(
  floors: number,
  windowsPerFloor: number,
  buildingIndex: number,
): Record<string, boolean> {
  const lit: Record<string, boolean> = {};
  for (let floor = 0; floor < floors; floor++) {
    for (let windowIndex = 0; windowIndex < windowsPerFloor; windowIndex++) {
      // Deterministic formula avoids SSR/client hydration mismatch.
      lit[`${floor}-${windowIndex}`] =
        (floor * 13 + windowIndex * 29 + buildingIndex * 17) % 10 > 4;
    }
  }
  return lit;
}

/**
 * @example
 * const buildings = generateSkyline({ count: "full" });
 */
export function generateSkyline(
  options: GenerateSkylineOptions = {},
): BuildingConfig[] {
  const countKey = options.count ?? "full";
  const preset = SILHOUETTES[countKey];

  return preset.map((item, index) => {
    const floors = calculateFloors(item.height, item.windowType);
    const windowsPerFloor = calculateWindowsPerFloor(item.width, item.windowType);
    const litWindows = generateLitWindows(floors, windowsPerFloor, index);

    return {
      id: `building-${countKey}-${index}`,
      height: item.height,
      width: item.width,
      floors,
      windowsPerFloor,
      windowType: item.windowType,
      litWindows,
    };
  });
}
