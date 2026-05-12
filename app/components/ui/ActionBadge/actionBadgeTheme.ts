export const interactiveClasses = "hover:shadow-[6px_6px_0_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all active:shadow-none active:translate-x-0 active:translate-y-0";

const baseClasses = "border-4 border-black shadow-[5px_5px_0_0_#000]";

export const Themes = {
  red: `bg-comic-red text-white ${baseClasses}`,
  yellow: `bg-comic-yellow text-black ${baseClasses}`,
  white: `bg-white text-black ${baseClasses}`,
  dark: `bg-black text-comic-yellow border-4 border-black shadow-[5px_5px_0_0_#ff4444]`,
};

export type ThemePreset = keyof typeof Themes;
