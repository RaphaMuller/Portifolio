import type { ThemePreset } from "@/app/components/ui/global/ActionBadge/actionBadgeTheme";

export interface ProjectDecision {
  label: string;
  detail: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  summary: string;
  engineering: string;
  description: string;
  problem: string;
  solution: string;
  technicalDecisions: readonly ProjectDecision[];
  challenge: string;
  challengeSfx: string;
  image: string;
  secondaryImage?: string;
  tags: readonly string[];
  theme: ThemePreset;
  action: string;
  category?: string;
  githubUrl?: string;
  demoUrl?: string;
}
