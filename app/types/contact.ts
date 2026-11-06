import type { ElementType } from "react";
import type { ThemePreset } from "@/app/types/theme";

export interface ContactLink {
  icon: ElementType;
  label: string;
  href: string;
  theme: ThemePreset;
}
