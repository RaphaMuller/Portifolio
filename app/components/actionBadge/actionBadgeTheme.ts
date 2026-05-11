type BadgeTheme = {
  bg: string;
  text: string;
  border: string;
  shadow: string;
};

const Themes: Record<string, BadgeTheme> = {
  red: {
    bg: "bg-comic-red",
    text: "text-white",
    border: "border-black",
    shadow: "shadow-black", 
  },
  yellow: {
    bg: "bg-comic-yellow",
    text: "text-black",
    border: "border-black",
    shadow: "shadow-black",
  },
  white: {
    bg: "bg-white",
    text: "text-black",
    border: "border-black",
    shadow: "shadow-black",
  }
};

export type ThemePreset = keyof typeof Themes;