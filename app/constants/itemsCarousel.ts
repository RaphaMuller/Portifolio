import type { ComponentType } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiNextdotjs,
  SiKubernetes,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiGit,
  SiDocker,
  SiFastapi,
  SiZod,
} from "react-icons/si";

export interface BeltItem {
  gadget: string;
  gadgetEmoji: string;
  gadgetDesc: string;
  tech: string;
  Icon: ComponentType<{ size?: number | string; color?: string; className?: string }>;
  iconColor: string;
  level: number;
  category: string;
  tip: string;
}

export const beltItems: BeltItem[] = [
  {
    gadget: "BATARANG", gadgetEmoji: "🪃", gadgetDesc: "Retorna sempre ao dono",
    tech: "JavaScript", Icon: SiJavascript, iconColor: "#F7DF1E", level: 5,
    category: "Linguagem", tip: "A linguagem que sempre volta pra te assombrar",
  },
  {
    gadget: "BAT-COMPUTADOR", gadgetEmoji: "🖥️", gadgetDesc: "Análise e tipagem perfeitas",
    tech: "TypeScript", Icon: SiTypescript, iconColor: "#3178C6", level: 5,
    category: "Linguagem", tip: "Tipagem forte como a armadura do Batman",
  },
  {
    gadget: "GANCHO DE AGARRAR", gadgetEmoji: "🪝", gadgetDesc: "Conecta todos os componentes",
    tech: "React", Icon: SiReact, iconColor: "#61DAFB", level: 5,
    category: "Framework", tip: "Hooks e componentes voando por Gotham",
  },
  {
    gadget: "BOMBA DE FUMAÇA", gadgetEmoji: "💨", gadgetDesc: "Roda invisível no servidor",
    tech: "Node.js", Icon: SiNodedotjs, iconColor: "#339933", level: 4,
    category: "Runtime", tip: "Backend nas sombras, como o morcego",
  },
  {
    gadget: "GEL EXPLOSIVO", gadgetEmoji: "🧪", gadgetDesc: "Flexível e devastadoramente útil",
    tech: "Python", Icon: SiPython, iconColor: "#FFD43B", level: 4,
    category: "Linguagem", tip: "Scripts que explodem qualquer problema",
  },
  {
    gadget: "BAT-PROPULSOR", gadgetEmoji: "⚡", gadgetDesc: "Velocidade assíncrona pura",
    tech: "FastAPI", Icon: SiFastapi, iconColor: "#009688", level: 4,
    category: "Backend", tip: "APIs assíncronas mais velozes que o Batmóvel",
  },
  {
    gadget: "ESCUDO DE DADOS", gadgetEmoji: "🛡️", gadgetDesc: "Validação e blindagem de tipos",
    tech: "Zod Schemas", Icon: SiZod, iconColor: "#3E67B1", level: 5,
    category: "Validação", tip: "Esquemas estritos que barram qualquer dado corrompido",
  },
  {
    gadget: "CAPA MANTO", gadgetEmoji: "🦇", gadgetDesc: "Estilo e movimento fluido",
    tech: "Tailwind CSS", Icon: SiTailwindcss, iconColor: "#06B6D4", level: 5,
    category: "Estilização", tip: "Elegância nas sombras de Gotham",
  },
  {
    gadget: "COFRE DO BAT", gadgetEmoji: "🗄️", gadgetDesc: "Guarda todos os dados secretos",
    tech: "PostgreSQL", Icon: SiPostgresql, iconColor: "#336791", level: 4,
    category: "Banco de Dados", tip: "Nenhum dado escapa da Bat-Caverna",
  },
  {
    gadget: "RASTREADOR", gadgetEmoji: "📡", gadgetDesc: "Monitora cada mudança",
    tech: "Git", Icon: SiGit, iconColor: "#F05032", level: 5,
    category: "Controle", tip: "Versiona até os segredos de Bruce Wayne",
  },
  {
    gadget: "CÁPSULA DE CONTENÇÃO", gadgetEmoji: "📦", gadgetDesc: "Isola e protege sistemas",
    tech: "Docker", Icon: SiDocker, iconColor: "#2496ED", level: 4,
    category: "DevOps", tip: "Containers mais seguros que o Asilo Arkham",
  },
  {
    gadget: "BAT-SINAL", gadgetEmoji: "🚨", gadgetDesc: "Ilumina o servidor do bem",
    tech: "Next.js", Icon: SiNextdotjs, iconColor: "#FFFFFF", level: 4,
    category: "Framework", tip: "SSR brilhando sobre Gotham",
  },
  {
    gadget: "BAT-COPTER", gadgetEmoji: "🚁", gadgetDesc: "Orquestra todos os containers",
    tech: "Kubernetes", Icon: SiKubernetes, iconColor: "#326CE5", level: 3,
    category: "DevOps", tip: "Orquestra como Batman coordena a Liga da Justiça",
  },
] as const;
