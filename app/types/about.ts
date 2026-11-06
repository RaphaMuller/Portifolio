export interface DossierPillar {
  label: string;
  detail: string;
}

export interface DossierTab {
  id: "origin" | "philosophy" | "operations";
  label: string;
  code: string;
  title: string;
  summary: string;
  pillars: readonly DossierPillar[];
  highlight: string;
}
