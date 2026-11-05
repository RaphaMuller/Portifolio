export const heroStats = [
  { value: "2+", label: "Anos de XP" },
  { value: "2+", label: "Projetos" },
] as const;

export interface DossierPillar {
  label: string;
  detail: string;
}

export interface DossierTab {
  id: "origin" | "philosophy" | "operations";
  label: string;
  code: string;
  title: string;
  subtitle: string;
  summary: string;
  paragraphs: string[];
  pillars: readonly DossierPillar[];
  tags?: string[];
  highlight: string;
}

export const dossierTabs: DossierTab[] = [
  {
    id: "origin",
    label: "01. ORIGEM",
    code: "EDIÇÃO #01",
    title: "O DESPERTAR DO HERÓI",
    subtitle: "De um garoto do interior a arquiteto de software",
    summary:
      "Aos 15 anos, montou o primeiro computador peça por peça. Na faculdade de **Gestão da TI**, descobriu que **lógica e arquitetura de software** eram seu verdadeiro superpoder: o hardware foi o prólogo, o código virou a saga.",
    paragraphs: [
      "Aos 15 anos, um garoto do interior montou o primeiro computador do zero: cada peça pesquisada, cada especificação conferida. Quando a máquina ligou, nasceu a missão.",
    ],
    pillars: [
      {
        label: "Base em Hardware",
        detail:
          "Visão física de como sistemas, memória, processamento e redes operam por baixo do código.",
      },
      {
        label: "Gestão da TI",
        detail:
          "Alinhamento direto entre decisões técnicas, arquitetura limpa e impacto real no produto.",
      },
      {
        label: "Mentalidade LEGO",
        detail:
          "Decomposição de problemas complexos em blocos independentes, testáveis e fáceis de evoluir.",
      },
      {
        label: "Evolução Contínua",
        detail:
          "Trajetória sólida conectando infraestrutura, engenharia Front-End e sistemas Full-Stack.",
      },
    ],
    highlight: "Tudo é LEGO: bloco por bloco, até o sistema inteiro ganhar vida.",
  },
  {
    id: "philosophy",
    label: "02. FILOSOFIA",
    code: "DIRETRIZES",
    title: "PRIMEIRO O BATMAN. DEPOIS O STARK.",
    subtitle: "Investigação tática antes da engenharia de ponta",
    summary:
      "Antes de escrever uma linha, investiga como o **Batman**: vasculha a regra de negócio e isola o gargalo. Depois constrói como o **Tony Stark**: arquitetura modular, **tipagem estrita** e validação automatizada antes de ir para produção.",
    paragraphs: [
      "Antes de escrever uma linha, investigo como o Batman: vasculho a regra de negócio, sigo as pistas e só então aponto o culpado.",
    ],
    pillars: [
      {
        label: "Investigação Tática",
        detail:
          "Diagnóstico da causa-raiz e mapeamento do fluxo real antes de propor qualquer alteração.",
      },
      {
        label: "Contratos Ponta a Ponta",
        detail:
          "TypeScript em modo estrito aliado a validação de schemas com Zod para eliminar falhas em runtime.",
      },
      {
        label: "Código Modular",
        detail:
          "Componentes desacoplados com responsabilidade única, facilitando leitura e manutenção em equipe.",
      },
      {
        label: "Qualidade Blindada",
        detail:
          "Verificação contínua com testes automatizados, lint rigoroso e foco em acessibilidade.",
      },
    ],
    highlight:
      "Investigação sem construção é só teoria. Construção sem investigação é gambiarra com estilo.",
  },
  {
    id: "operations",
    label: "03. MODUS OPERANDI",
    code: "MISSÕES ACEITAS",
    title: "FULL-STACK & IA APLICADA",
    subtitle: "Disponível para contratos: CLT, PJ e Freelance",
    summary:
      "Desenvolvimento **Full-Stack e Front-End** com foco em interfaces de alta performance em **React e Next.js**, APIs rápidas em **Python e FastAPI**, bancos relacionais em **PostgreSQL** e fluxos integrados com **Inteligência Artificial**.",
    paragraphs: [
      "Desenvolvimento Full-Stack e Front-End com React/Next.js, TypeScript, Python/FastAPI e integração com inteligência artificial.",
    ],
    pillars: [
      {
        label: "Front-End Moderno",
        detail:
          "Next.js App Router, React 19, Tailwind CSS v4 e animações fluidas com Framer Motion.",
      },
      {
        label: "Back-End & Dados",
        detail:
          "Construção de APIs com Python/FastAPI, Node.js, Supabase, PostgreSQL e containers Docker.",
      },
      {
        label: "IA Aplicada",
        detail:
          "Integração de LLMs, automação de fluxos de desenvolvimento e engenharia de contexto.",
      },
      {
        label: "Modalidades",
        detail:
          "Pronto para atuar em projetos e equipes nos formatos CLT, PJ ou Freelance.",
      },
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
  dossierCode: "DOC #01",
  classification: "FULL-STACK DEVELOPER",
  subject: "RAPHAEL MULLER",
  status: "ATIVO // DISPONÍVEL",
  hqBadge: "BASE DE OPERAÇÕES ⚡",
  pillarsHeading: "— PILARES DE OPERAÇÃO —",
  statsHeading: "— ESTATÍSTICAS CONFIRMADAS —",
  openDossierLabel: "ABRIR DOSSIÊ COMPLETO ➔",
  openDossierAriaLabel: "Abrir dossiê confidencial completo no modal",
  modalCloseLabel: "FECHAR ✕",
  modalCloseAriaLabel: "Fechar modal do dossiê",
  bioSummary:
    "Engenheiro de software focado em arquitetura modular, tipagem estrita e interfaces web de alta performance.",
  coreStack: ["TypeScript", "Next.js", "React 19", "Tailwind CSS"],
  quote:
    "Com grandes poderes vêm grandes responsabilidades... e muito café!",
  author: "Raphael Muller",
} as const;
