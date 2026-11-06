import type { ThemePreset } from "@/app/types/theme";

export const interactiveClasses =
  "hover:shadow-comic hover:-translate-x-1 hover:-translate-y-1 transition-all active:shadow-none active:translate-x-0 active:translate-y-0";

const baseClasses = "border-4 border-black shadow-comic-badge";

export const Themes: Record<ThemePreset, string> = {
  red: `bg-comic-red text-white ${baseClasses}`,
  yellow: `bg-comic-yellow text-black ${baseClasses}`,
  white: `bg-white text-black ${baseClasses}`,
  dark: "bg-black text-comic-yellow border-4 border-black shadow-comic-red-badge",
  blue: `bg-comic-blue text-white ${baseClasses}`,
  green: `bg-comic-green text-white ${baseClasses}`,
  batmanArmor:
    "bg-batman-armor text-bat-gold border-4 border-batman-border shadow-comic-bat-badge",
  lightBlue: `bg-comic-badge-sky-bg text-comic-badge-sky-text ${baseClasses}`,
};
