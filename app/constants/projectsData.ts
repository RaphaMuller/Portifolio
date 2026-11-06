import type { Project, ProjectCategory } from "@/app/types/project";

export const ALL_PROJECTS_CATEGORY: ProjectCategory = "TODAS AS MISSÕES";

export const projectCategories: readonly ProjectCategory[] = [
  ALL_PROJECTS_CATEGORY,
  "FULLSTACK",
  "FRONTEND",
];

export const projectsCopy = {
  chapter: "CAPÍTULO 3",
  title: "AS MISSÕES",
  sectionAriaLabel: "Capítulo 3: As Missões",
  filtersAriaLabel: "Filtrar missões por categoria",
  issueNavAriaLabel: "Navegação entre edições de projetos",
  techListAriaLabel: "Tecnologias utilizadas no projeto",
  decisionsListAriaLabel: "Decisões técnicas do projeto",
  issuePrefix: "GIBI",
  prevIssue: "EDIÇÃO ANTERIOR",
  prevIssueShort: "ANT.",
  nextIssue: "PRÓXIMA EDIÇÃO",
  nextIssueShort: "PRÓX.",
  arsenalHeading: "— TECNOLOGIAS —",
  codeLabel: "CÓDIGO",
  demoLabel: "DEMO",
  sealedBadgeLabel: "MINT // LACRADO",
  openModalAriaLabelPrefix: "Inspecionar edição lacrada do projeto",
  modalCloseAriaLabel: "Fechar modal do projeto",
  modalFlapAriaLabel: "Orelha da edição com capa e tecnologias",
  modalSynopsisLabel: "SINOPSE DA EDIÇÃO",
  modalStoryHeading: "— A HISTÓRIA DO PROJETO —",
  modalBehindScenesLabel: "— POR TRÁS DOS PANOS —",
} as const;

export const projects: readonly Project[] = [
  {
    id: 1,
    title: "FOOTLE",
    subtitle: "Jogo Diário de Dedução Esportiva",
    summary:
      "Inspirado na dinâmica do Wordle, o Footle desafia o usuário a adivinhar o jogador de futebol secreto do dia em até **10 tentativas**, cruzando dicas de **liga, clube, posição, idade e nacionalidade**. Todo o fluxo foi desenhado para que a validação ocorra **exclusivamente no servidor**, impedindo que o atleta do dia vaze na aba de rede do navegador.",
    technicalDecisions: [
      {
        label: "Motor de Palpites no Servidor",
        detail:
          "O cliente envia apenas o chute; o servidor compara os atributos do atleta e devolve somente as cores das dicas, sem nunca expor o ID da resposta.",
      },
      {
        label: "Rotação Diária e Sessão HMAC",
        detail:
          "Assinatura criptográfica e fuso determinístico garantem que todos os jogadores enfrentem exatamente o mesmo desafio diário sem adulteração de estado.",
      },
      {
        label: "Supabase PostgreSQL & RLS",
        detail:
          "Catálogo de atletas e estatísticas protegidos por políticas de Row Level Security, bloqueando leituras diretas não autorizadas à tabela de respostas.",
      },
      {
        label: "Contratos Restritos com Zod",
        detail:
          "Todas as entradas de busca de jogadores e respostas da API passam por validação de schema em runtime, evitando payloads inválidos.",
      },
    ],
    challenge:
      "Dez chutes. Um jogador misterioso. E nenhuma chance de descobrir a resposta inspecionando a página.",
    challengeSfx: "TIC-TAC!",
    image: "/footle.jpg",
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
    action: "GOLAÇO!",
    githubUrl: "https://github.com/RaphaMuller/footle",
    demoUrl: "https://footle-delta.vercel.app",
  },
  {
    id: 2,
    title: "COMIC PORTIFÓLIO",
    subtitle: "Experiência Interativa em Quadrinhos",
    summary:
      "Criado para unir **identidade autoral e engenharia de front-end**, este portfólio transforma a apresentação profissional em uma leitura guiada por capítulos inspirados no universo de Gotham. Cada seção combina **ilustrações procedurais em código**, navegação magnética entre quadros e **alta performance de carregamento**.",
    technicalDecisions: [
      {
        label: "Skyline e Tráfego Determinístico",
        detail:
          "Os prédios, janelas acesas e carros da abertura são gerados via algoritmo determinístico em código, garantindo renderização SSR sem erro de hidratação.",
      },
      {
        label: "Leitor de Capítulos Magnético",
        detail:
          "Sistema próprio de rolagem por capítulos com travamento em tela cheia (100dvh), controle de teclado/wheel e carrosséis adaptativos com física via Embla.",
      },
      {
        label: "Tokens e Traço Vetorial",
        detail:
          "Estilização construída no Tailwind CSS v4 com tokens semânticos de quadrinhos, recortes geométricos, retículas halftone e efeito de plástico selado em CSS.",
      },
      {
        label: "Coreografia e Canal Direto",
        detail:
          "Transições orquestradas com Framer Motion (troca de avatar real/cartoon, abertura de dossiês) e formulário validado integrado ao Formspree.",
      },
    ],
    challenge:
      "E se um portfólio deixasse de parecer um documento frio e virasse uma edição de colecionador?",
    challengeSfx: "BAM!",
    image: "/portifolio.jpg",
    tags: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Formspree",
    ],
    category: "FRONTEND",
    action: "POW!",
    githubUrl: "https://github.com/RaphaMuller/Portifolio",
    demoUrl: "https://portifolio-sable-tau.vercel.app",
  },
];
