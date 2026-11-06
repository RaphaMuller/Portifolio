export const navLinks: ReadonlyArray<{ label: string; href: string }> = [
  { label: "INÍCIO", href: "#hero" },
  { label: "SOBRE", href: "#about" },
  { label: "HABILIDADES", href: "#skills" },
  { label: "PROJETOS", href: "#projects" },
  { label: "CONTATO", href: "#contact" },
];

export const navbarCopy = {
  homeAriaLabel: "Voltar ao início",
  logoAlt: "Logo Raphael Muller",
  desktopNavAriaLabel: "Navegação principal",
  mobileNavAriaLabel: "Navegação principal (mobile)",
  openMenuAriaLabel: "Abrir menu",
  closeMenuAriaLabel: "Fechar menu",
  openMenuGlyph: "☰",
  closeMenuGlyph: "✖",
} as const;
