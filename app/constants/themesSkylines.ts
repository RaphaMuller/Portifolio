import type { BuildingTheme } from "@/app/types/building";

export const themeClasses: Record<
  BuildingTheme,
  {
    bg: string;
    shadow: string;
    roof: string;
    windowOn: string;
    windowOff: string;
  }
> = {
  dark: {
    bg: "bg-skyline-dark",
    shadow: "bg-black",
    roof: "bg-skyline-roof",
    windowOn: "bg-skyline-window-warm shadow-window-warm",
    windowOff: "bg-skyline-window-off",
  },
  default: {
    bg: "bg-skyline-facade",
    shadow: "bg-black",
    roof: "bg-skyline-dark",
    windowOn: "bg-comic-yellow shadow-window-bright",
    windowOff: "bg-skyline-window-off",
  },
};
