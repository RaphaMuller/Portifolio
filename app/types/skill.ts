import type { ComponentType } from "react";

export interface BeltItem {
  gadget: string;
  gadgetEmoji: string;
  gadgetDesc: string;
  tech: string;
  Icon: ComponentType<{ size?: number | string; color?: string; className?: string }>;
  iconColor: string;
  level: number;
  category: string;
  tip: string;
}
