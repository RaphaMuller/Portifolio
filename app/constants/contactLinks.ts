import { SiGit } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import type { ContactLink } from "@/app/types/contact";

export const contactCopy = {
  sectionAriaLabel: "Capítulo 4: Missão Contato",
  chapter: "CAPÍTULO 4",
  title: "MISSÃO CONTATO",
  linksListAriaLabel: "Canais diretos de contato",
  bubbleHeading: "PRECISA DE UM HERÓI?",
  bubbleBody:
    "Estou disponível para projetos freelance, colaborações e novas oportunidades. Vamos criar algo incrível juntos!",
  formHeading: "📨 ENVIAR MENSAGEM",
  successSfx: "POW! ✉️",
  successTitle: "MENSAGEM ENVIADA COM SUCESSO!",
  successBody: "Responderei em breve, herói!",
  nameLabel: "SEU NOME",
  namePlaceholder: "Peter Parker...",
  emailLabel: "SEU EMAIL",
  emailPlaceholder: "heroi@marvel.com",
  messageLabel: "SUA MISSÃO",
  messagePlaceholder: "Preciso de um herói para...",
  submitIdle: "LANÇAR MENSAGEM!",
  submitLoading: "ENVIANDO...",
  errorMessage: "💥 Ocorreu um erro! Verifique a URL do Formspree.",
  footerEndLabel: "FIM // CAPÍTULO 4",
  footerCopyright: "© 2026 Raphael Muller · ☕ + Código",
  footerTagline: "Nenhum bug foi prejudicado.",
} as const;

export const contactLinks: readonly ContactLink[] = [
  {
    icon: Mail,
    label: "raphaelmuller61@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=raphaelmuller61@gmail.com",
    theme: "white",
  },
  {
    icon: SiGit,
    label: "github.com/RaphaelMuller",
    href: "https://github.com/RaphaMuller",
    theme: "white",
  },
  {
    icon: FaLinkedin,
    label: "linkedin.com/in/RaphaelMuller",
    href: "https://www.linkedin.com/in/raphael-muller-9b5477227/",
    theme: "lightBlue",
  },
];
