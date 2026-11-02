import type { ReactNode } from "react";

/** Straight (non-slanted) side of the panel. */
export type NavPanelEdge = "start" | "end";

interface NavPanelBase {
  edge?: NavPanelEdge;
  className?: string;
}

export interface NavPanelBlank extends NavPanelBase {
  kind: "blank";
}

export interface NavPanelLink extends NavPanelBase {
  kind: "link";
  href: string;
  seed: number;
  ariaLabel?: string;
  onNavigate: (href: string) => void;
  children: ReactNode;
}

export interface NavPanelToggle extends NavPanelBase {
  kind: "toggle";
  isOpen: boolean;
  seed: number;
  controls: string;
  onToggle: () => void;
}

export type ComicNavPanelProps = NavPanelBlank | NavPanelLink | NavPanelToggle;
