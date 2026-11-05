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
  sealedBadgeLabel: "MINT // LACRADO",
  openModalAriaLabelPrefix: "Inspecionar edição lacrada do projeto",
  modalCloseLabel: "FECHAR ✕",
  modalCloseAriaLabel: "Fechar modal do projeto",
  modalFlapAriaLabel: "Orelha da edição com capa e tecnologias",
  modalSynopsisLabel: "SINOPSE DA EDIÇÃO",
  modalStoryHeading: "— A HISTÓRIA DO PROJETO —",
  modalBehindScenesLabel: "— POR TRÁS DOS PANOS —",
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
    subtitle: "Jogo Diário de Dedução Esportiva",
    summary:
      "Inspirado na dinâmica do Wordle, o Footle desafia o usuário a adivinhar o jogador de futebol secreto do dia em até **10 tentativas**, cruzando dicas de **liga, clube, posição, idade e nacionalidade**. Todo o fluxo foi desenhado para que a validação ocorra **exclusivamente no servidor**, impedindo que o atleta do dia vaze na aba de rede do navegador.",
    engineering:
      "Para manter a disputa justa, toda a validação da partida foi blindada no servidor com **HMAC**, sincronizada em **fuso determinístico**, com banco **Supabase PostgreSQL com RLS** e contratos validados por **Zod**.",
    description:
      "Aplicação web inspirada em jogos de dedução esportiva (Wordle/Spotle) com validação anti-cheat via HMAC, fuso determinístico e banco Supabase PostgreSQL com RLS.",
    problem:
      "Jogos diários perdem a graça quando a resposta vaza no código do site.",
    solution: "Descubra o jogador secreto do dia em até 10 chutes.",
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
    subtitle: "Experiência Interativa em Quadrinhos",
    summary:
      "Criado para unir **identidade autoral e engenharia de front-end**, este portfólio transforma a apresentação profissional em uma leitura guiada por capítulos inspirados no universo de Gotham. Cada seção combina **ilustrações procedurais em código**, navegação magnética entre quadros e **alta performance de carregamento**.",
    engineering:
      "Construído como uma landing page de alta performance com **Next.js e React 19**, unindo animações fluidas via **Framer Motion**, tokens semânticos no **Tailwind CSS v4** e envio direto via **Formspree**.",
    description:
      "Landing page de alta performance inspirada na narrativa de quadrinhos da DC/Batman, trazendo animações cômicas com Framer Motion, capítulos temáticos e arquitetura modular.",
    problem:
      "Portfólios comuns parecem currículos e não mostram identidade visual.",
    solution: "Uma HQ interativa em capítulos que apresenta o dev.",
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
  {
    id: 3,
    title: "BAT-TERMINAL",
    subtitle: "CLI Inteligente para Operações Gotham",
    summary:
      "Terminal de comando com inteligência artificial para monitoramento de servidores e alertas em tempo real. Construído com **Node.js, Rust e WebSockets** para resposta com latência ultrabaixa.",
    engineering:
      "Arquitetura event-driven com canais multiplexados, buffers circulares de telemetria e renderização em terminal via biblioteca TUI customizada.",
    description:
      "CLI com AI para orquestração de servidores, pipelines CI/CD e monitoramento em tempo real com estética de terminal retrô dos anos 90.",
    problem:
      "Dashboards web pesados demoram a carregar durante incidentes críticos de produção.",
    solution: "Acesso instantâneo e diagnóstico direto na linha de comando.",
    technicalDecisions: [
      {
        label: "Rust FFI & Streams",
        detail:
          "Parsing de logs em alta velocidade usando módulo nativo em Rust compilado para o Node.js.",
      },
      {
        label: "Multiplexação WebSockets",
        detail:
          "Conexões persistentes bi-direcionais mantendo consumo de memória inferior a 30MB.",
      },
    ],
    challenge:
      "Diagnosticar incidentes e reiniciar pods em menos de 3 segundos direto do shell.",
    challengeSfx: "KRAK!",
    image: "/footle.png",
    tags: ["Rust", "Node.js", "WebSockets", "TypeScript", "CLI"],
    category: "FULLSTACK",
    theme: "blue",
    action: "BOOM!",
    githubUrl: "https://github.com/RaphaMuller",
    demoUrl: "https://github.com/RaphaMuller",
  },
  {
    id: 4,
    title: "ARKHAM RADAR",
    subtitle: "Monitor de Tráfego e Anomalias",
    summary:
      "Plataforma de geolocalização e detecção de padrões anômalos em tempo real com mapas vetoriais interativos e agregação geoespacial via **PostGIS**.",
    engineering:
      "Pipeline distribuído consumindo telemetria GPS com visualização Deck.gl e renderização acelerada por GPU no navegador via WebGL.",
    description:
      "Dashboard analítico geoespacial com heatmaps dinâmicos, filtros temporais e clusters de dados em tempo real.",
    problem:
      "Visualizar mais de 500 mil coordenadas simultâneas congelava navegadores comuns.",
    solution: "Renderização com shaders customizados em WebGL via GPU.",
    technicalDecisions: [
      {
        label: "PostGIS Spatial Index",
        detail:
          "Consultas geográficas com índices R-Tree reduzindo o tempo de agregação de 4s para 18ms.",
      },
      {
        label: "Deck.gl & WebGL",
        detail:
          "Transferência direta de buffers para a GPU evitando gargalos na thread principal do JS.",
      },
    ],
    challenge:
      "Rastrear toda a malha urbana com 60 quadros por segundo sem perda de pacotes.",
    challengeSfx: "ZAP!",
    image: "/portifolio.png",
    tags: ["Next.js", "PostGIS", "WebGL", "TypeScript", "Tailwind CSS"],
    category: "FRONTEND",
    theme: "red",
    action: "POW!",
    githubUrl: "https://github.com/RaphaMuller",
    demoUrl: "https://github.com/RaphaMuller",
  },
  {
    id: 5,
    title: "SHADOW VAULT",
    subtitle: "Cofre Criptográfico Zero-Knowledge",
    summary:
      "Armazenamento descentralizado e encriptado de credenciais baseado em **Zero-Knowledge Proofs (ZK-SNARKs)** e derivação de chaves client-side.",
    engineering:
      "Criptografia ponta a ponta com AES-256-GCM e curva elíptica Ed25519 no navegador, garantindo que o servidor nunca veja as chaves em texto plano.",
    description:
      "Gerenciador de credenciais e segredos com arquitetura de conhecimento zero e auditoria imutável.",
    problem:
      "Vazamentos de banco de dados expõem segredos quando o servidor detém as chaves.",
    solution: "Criptografia ponta a ponta em WebCrypto antes de qualquer envio de rede.",
    technicalDecisions: [
      {
        label: "WebCrypto API Nativa",
        detail:
          "Derivação de chaves PBKDF2 com 600.000 iterações direto na camada segura do browser.",
      },
      {
        label: "Zero-Knowledge Auth",
        detail:
          "Autenticação por desafio criptográfico sem nunca trafegar senha pela rede.",
      },
    ],
    challenge:
      "Garantir segurança militar sem comprometer a experiência de desbloqueio rápido.",
    challengeSfx: "CLICK!",
    image: "/footle.png",
    tags: ["Cryptography", "WebCrypto", "React", "TypeScript", "Tailwind CSS"],
    category: "FULLSTACK",
    theme: "yellow",
    action: "LOCK!",
    githubUrl: "https://github.com/RaphaMuller",
    demoUrl: "https://github.com/RaphaMuller",
  },
  {
    id: 6,
    title: "GOTHAM PULSE",
    subtitle: "Agregador de Notícias em Tempo Real",
    summary:
      "Feed inteligente de ocorrências com classificação de sentimento e síntese de manchetes via modelos de linguagem locais e edge functions.",
    engineering:
      "Edge computing com Cloudflare Workers, streaming SSE (Server-Sent Events) e persistência de cache com invalidação atômica.",
    description:
      "Leitor de notícias e eventos com curadoria automatizada, categorização vetorial e leitura sem distrações.",
    problem:
      "Sobrecarga de feeds repetidos e falta de priorização em acontecimentos urgentes.",
    solution: "Deduplicação semântica e alertas sonoros estilizados como teletipo.",
    technicalDecisions: [
      {
        label: "Server-Sent Events",
        detail:
          "Push unidirecional leve mantendo a conexão aberta com baixíssimo consumo de bateria.",
      },
      {
        label: "Deduplicação Vetorial",
        detail:
          "Comparação de embeddings em cache para agrupar notícias sobre o mesmo fato.",
      },
    ],
    challenge:
      "Processar e entregar notícias com menos de 100ms da publicação original.",
    challengeSfx: "PING!",
    image: "/portifolio.png",
    tags: ["Next.js", "Edge Functions", "SSE", "Tailwind CSS", "TypeScript"],
    category: "FRONTEND",
    theme: "blue",
    action: "NEWS!",
    githubUrl: "https://github.com/RaphaMuller",
    demoUrl: "https://github.com/RaphaMuller",
  },
  {
    id: 7,
    title: "WAYNE LABS API",
    subtitle: "Gateway GraphQL de Alta Concorrência",
    summary:
      "API Gateway unificada com roteamento inteligente, cache distribuído em Redis e proteção contra ataques de sobrecarga com Rate Limiting por token bucket.",
    engineering:
      "Construído em Go e GraphQL Federation, processando mais de 50.000 requisições por segundo com alocação zero em hot-paths.",
    description:
      "Infraestrutura de integração para microserviços com tracing distribuído OpenTelemetry e métricas Prometheus.",
    problem:
      "Múltiplos microserviços com respostas inconsistentes e latência cumulativa.",
    solution: "Ponto único de agregação com resolução concorrente de schemas.",
    technicalDecisions: [
      {
        label: "Go High-Throughput",
        detail:
          "Rotinas concorrentes leves com channels para resolução paralela de queries GraphQL.",
      },
      {
        label: "Rate Limit Token Bucket",
        detail:
          "Controle de vazão baseado em scripts Lua no Redis garantindo proteção atômica.",
      },
    ],
    challenge:
      "Manter o p99 abaixo de 15ms mesmo durante picos de tráfego 10x acima da média.",
    challengeSfx: "WHAM!",
    image: "/footle.png",
    tags: ["Go", "GraphQL", "Redis", "Docker", "OpenTelemetry"],
    category: "FULLSTACK",
    theme: "green",
    action: "FAST!",
    githubUrl: "https://github.com/RaphaMuller",
    demoUrl: "https://github.com/RaphaMuller",
  },
];
