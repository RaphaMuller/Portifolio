import type { Project } from "@/app/types/project";

export const ALL_PROJECTS_CATEGORY = "TODAS AS MISSÕES";

export const projectCategories = [
  ALL_PROJECTS_CATEGORY,
  "FULLSTACK",
  "FRONTEND",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const mobileIssueTabIds = ["problem", "arsenal", "challenge"] as const;

export type MobileIssueTabId = (typeof mobileIssueTabIds)[number];

export const projectsCopy = {
  chapter: "CAPÍTULO 3",
  title: "AS MISSÕES",
  sectionAriaLabel: "Capítulo 3: As Missões",
  filtersAriaLabel: "Filtrar missões por categoria",
  issueNavAriaLabel: "Navegação entre edições de projetos",
  mobileTabsAriaLabel: "Quadros narrativos do projeto",
  techListAriaLabel: "Tecnologias utilizadas no projeto",
  decisionsListAriaLabel: "Decisões técnicas do projeto",
  issuePrefix: "GIBI",
  issueOf: "DE",
  prevIssue: "EDIÇÃO ANTERIOR",
  prevIssueShort: "ANT.",
  nextIssue: "PRÓXIMA EDIÇÃO",
  nextIssueShort: "PRÓX.",
  problemHeading: "O PROBLEMA",
  solutionHeading: "A SOLUÇÃO",
  challengeHeading: "O DESAFIO",
  arsenalHeading: "TECNOLOGIAS",
  codeLabel: "CÓDIGO",
  demoLabel: "DEMO",
  mobileTabs: {
    problem: "PROBLEMA",
    arsenal: "ARSENAL",
    challenge: "DESAFIO",
  },
} as const;

export const projects: readonly Project[] = [
  {
    id: 1,
    title: "FOOTLE",
    subtitle: "Dedução Esportiva Diária",
    summary:
      "Aplicação web inspirada em jogos diários de adivinhação onde o jogador tem até 10 chutes para descobrir o atleta secreto através de pistas dinâmicas de liga, clube, posição e nacionalidade.",
    engineering:
      "Para impedir trapaças e vazamentos, toda a validação é blindada via **HMAC no servidor**, sincronizada em **fuso determinístico**, com banco **Supabase PostgreSQL com RLS** e dados estritamente validados por **Zod**.",
    description:
      "Aplicação web inspirada em jogos de dedução esportiva (Wordle/Spotle) com validação anti-cheat via HMAC, fuso determinístico e banco Supabase PostgreSQL com RLS.",
    problem:
      "Jogos diários perdem a graça quando a resposta vaza no código do site.",
    solution: "Descubra o jogador secreto do dia em até 10 chutes.",
    technicalDecisions: [
      { label: "Anti-cheat", detail: "HMAC no servidor" },
      { label: "Dia único", detail: "fuso determinístico" },
      { label: "RLS", detail: "acesso no banco" },
      { label: "Zod", detail: "dados validados" },
    ],
    challenge:
      "Fazer o \"dia\" valer igual para todo mundo, em qualquer fuso, sem expor a resposta.",
    challengeSfx: "TIC-TAC!",
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
    title: "COMIC PORTIFÓLIO",
    subtitle: "Landing Page Temática Comic",
    summary:
      "Experiência interativa em capítulos de quadrinhos que apresenta trajetória, habilidades e projetos através de uma narrativa visual densa inspirada no universo DC/Marvel.",
    engineering:
      "Desenvolvido com **Next.js e React 19**, trazendo animações fluidas via **Framer Motion**, arquitetura modular **SRP (até 150 linhas)** e viewport **100dvh adaptável** com suporte total a **safe-area**.",
    description:
      "Landing page de alta performance inspirada na narrativa de quadrinhos da DC/Batman, trazendo animações cômicas com Framer Motion, capítulos temáticos e arquitetura modular.",
    problem:
      "Portfólios comuns parecem currículos e não mostram identidade visual.",
    solution: "Uma HQ interativa em capítulos que apresenta o dev.",
    technicalDecisions: [
      { label: "Viewport", detail: "100dvh com safe-area" },
      { label: "Tokens", detail: "Tailwind v4 semântico" },
      { label: "SRP", detail: "até 150 linhas" },
      { label: "PRNG", detail: "SSR sem mismatch" },
    ],
    challenge:
      "Equilibrar a estética densa de HQ com performance e leitura em telas pequenas.",
    challengeSfx: "BAM!",
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
