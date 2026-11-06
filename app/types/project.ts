export type ProjectCategory = "TODAS AS MISSÕES" | "FULLSTACK" | "FRONTEND";

export interface ProjectDecision {
  label: string;
  detail: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  summary: string;
  technicalDecisions: readonly ProjectDecision[];
  challenge: string;
  challengeSfx: string;
  image: string;
  tags: readonly string[];
  action: string;
  category: Exclude<ProjectCategory, "TODAS AS MISSÕES">;
  githubUrl?: string;
  demoUrl?: string;
}
