import { ThemePreset } from "../ActionBadge/actionBadgeTheme";

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  theme: ThemePreset;
  action: string;
  githubUrl?: string;
  demoUrl?: string;
}
