import { ThemePreset } from "../ActionBadge/actionBadgeTheme";

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  /** ActionBadge theme used for tag pills and accents */
  theme: ThemePreset;
  /** Comic-style onomatopoeia shown on hover over the image */
  action: string;
  githubUrl?: string;
  demoUrl?: string;
}
