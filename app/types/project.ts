import type { ThemePreset } from "@/app/components/ui/global/ActionBadge/actionBadgeTheme";

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: readonly string[];
  theme: ThemePreset;
  action: string;
  category?: string;
  githubUrl?: string;
  demoUrl?: string;
}
