export const heroStats = [
  { value: "2+", label: "Anos de XP" },
  { value: "10+", label: "Projetos" },
] as const;

export interface DossierTab {
  id: "origin" | "philosophy" | "operations";
  label: string;
  code: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  tags?: string[];
  highlight?: string;
}

export const dossierTabs: DossierTab[] = [
  {
    id: "origin",
    label: "01. ORIGEM",
    code: "EDIÇÃO #1",
    title: "O DESPERTAR DO HERÓI",
    subtitle: "De um garoto do interior a arquiteto de software.",
    paragraphs: [
      "Aos 15 anos, um garoto do interior montou o primeiro computador do zero: cada peça pesquisada, cada especificação conferida. Quando a máquina ligou, nasceu a missão.",
      "Mas faltava a peça mais poderosa. Na faculdade de Gestão da TI, descobriu que lógica e estrutura eram seu verdadeiro superpoder. O hardware foi o prólogo, o software virou a saga.",
      "Desde então, tudo é LEGO: bloco por bloco, até o sistema inteiro ganhar vida.",
    ],
    highlight: "Tudo é LEGO: bloco por bloco, até o sistema ganhar vida.",
  },
  {
    id: "philosophy",
    label: "02. FILOSOFIA",
    code: "DIRETRIZES",
    title: "PRIMEIRO O BATMAN. DEPOIS O STARK.",
    subtitle: "Investigação tática antes da engenharia de ponta.",
    paragraphs: [
      "Antes de escrever uma linha, investigo como o Batman: vasculho a regra de negócio, sigo as pistas e só então aponto o culpado (o gargalo, o bug, o requisito escondido).",
      "Depois construo como o Tony Stark: arquitetura modular, tipagem ponta a ponta com TypeScript, tRPC e Zod, e agents de teste que antecipam falhas antes de qualquer voo de produção.",
    ],
    highlight:
      "Investigação sem construção é só teoria. Construção sem investigação é gambiarra com estilo.",
  },
  {
    id: "operations",
    label: "03. MODUS OPERANDI",
    code: "MISSÕES ACEITAS",
    title: "FULL-STACK & IA APLICADA",
    subtitle: "Disponível para contratos: CLT, PJ e Freelance.",
    paragraphs: [
      "Desenvolvimento Full-Stack e Front-End com React/Next.js, TypeScript, Python/FastAPI e integração com inteligência artificial.",
      "Sempre aberto a novos aprendizados e tecnologias. A stack muda, o instinto de investigar e construir fica.",
    ],
    tags: [
      "TypeScript",
      "React / Next.js",
      "Python / FastAPI",
      "PostgreSQL",
      "Docker",
    ],
    highlight: "A stack muda, o instinto de investigar e construir fica.",
  },
];

export const aboutData = {
  caption: "CAPÍTULO 1: ORIGEM",
  dossierCode: "DOC-RM-001 // CLASSIFICADO",
  classification: "NÍVEL 1 // CONFIDENCIAL",
  subject: "RAPHAEL MULLER",
  status: "ATIVO // DISPONÍVEL",
  hqBadge: "BASE DE OPERAÇÕES ⚡",
  quote:
    "Com grandes poderes vêm grandes responsabilidades... e muito café!",
  author: "Raphael Muller",
} as const;
