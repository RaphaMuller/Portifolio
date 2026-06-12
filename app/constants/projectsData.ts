import { Project } from "@/app/components/ui/ComicProjects/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "SUPER SHOP",
    subtitle: "E-commerce Heroico",
    description:
      "Plataforma de e-commerce completa com carrinho de compras, pagamento integrado e painel administrativo. Uma verdadeira missão cumprida!",
    image:
      "/Plataformae-commerce.png",
    tags: ["React", "Node.js", "PostgreSQL"],
    theme: "red",
    action: "KA-CHING!",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 2,
    title: "APP MOBILE HERO",
    subtitle: "App de Produtividade",
    description:
      "Aplicativo mobile para gestão de tarefas com notificações em tempo real, sincronização na nuvem e UI intuitiva que combate a procrastinação!",
    image:
      "/AppdeProdutividade.png",
    tags: ["React Native", "Firebase", "TypeScript"],
    theme: "blue",
    action: "SWOOSH!",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 3,
    title: "DASHBOARD FORCE",
    subtitle: "Painel Analítico",
    description:
      "Dashboard em tempo real com gráficos interativos, relatórios automatizados e insights poderosos para tomada de decisões estratégicas.",
    image:
      "/DashBoardForce.png",
    tags: ["Vue.js", "Python", "Chart.js"],
    theme: "yellow",
    action: "BOOM!",
    githubUrl: "#",
    demoUrl: "#",
  },
] as const;
