import type { Project } from "@/app/types/project";

export const ALL_PROJECTS_CATEGORY = "TODAS AS MISSÕES";

export const projectCategories = [
  ALL_PROJECTS_CATEGORY,
  "FULLSTACK",
  "FRONTEND",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const projectsCopy = {
  chapterTitle: "CAPÍTULO 3: AS MISSÕES",
  sectionAriaLabel: "Capítulo 3: As Missões",
  filtersAriaLabel: "Filtrar missões por categoria",
  paginationAriaLabel: "Paginação de páginas de projetos",
  prevPage: "ANTERIOR",
  nextPage: "PRÓXIMA",
  pageLabel: "PÁGINA",
  dossierHeading: "DOSSIÊ DA MISSÃO",
  arsenalHeading: "TECNOLOGIAS UTILIZADAS",
  executionHeading: "EXECUÇÃO",
  codeLabel: "CÓDIGO",
  demoLabel: "DEMO",
} as const;

export const projects: readonly Project[] = [
  {
    id: 1,
    title: "FOOTLE",
    subtitle: "Dedução Esportiva Diária",
    description:
      "Aplicação web inspirada em jogos de dedução esportiva (Wordle/Spotle) com validação anti-cheat via HMAC, fuso determinístico e banco Supabase PostgreSQL com RLS.",
    image: "/footle.png",
    tags: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Zod",
    ],
    category: "FULLSTACK",
    theme: "green",
    action: "GOLAÇO!",
    githubUrl: "https://github.com/RaphaMuller/footle",
    demoUrl: "https://footle-delta.vercel.app",
  },
  {
    id: 2,
    title: "PORTFÓLIO BATMAN",
    subtitle: "Landing Page Temática Comic",
    description:
      "Landing page de alta performance inspirada na narrativa de quadrinhos da DC/Batman, trazendo animações cômicas com Framer Motion, capítulos temáticos e arquitetura modular.",
    image: "/portifolio.png",
    tags: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Formspree",
    ],
    category: "FRONTEND",
    theme: "yellow",
    action: "POW!",
    githubUrl: "https://github.com/RaphaMuller/Portifolio",
    demoUrl: "https://portifolio-sable-tau.vercel.app",
  },
];
