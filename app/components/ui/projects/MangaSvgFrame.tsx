interface MangaSvgFrameProps {
  projectImage: string;
  projectTitle: string;
}

/**
 * @example
 * <MangaSvgFrame projectImage="/Plataformae-commerce.png" projectTitle="Super Shop" />
 */
export function MangaSvgFrame({ projectImage, projectTitle }: MangaSvgFrameProps) {
  return (
    <svg
      viewBox="0 0 900 952"
      className="absolute inset-0 pointer-events-none h-full w-full select-none"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="manga-panel-hero-clip">
          <polygon points="30,34 870,34 870,318 30,394" />
        </clipPath>

        <pattern
          id="manga-comic-dots"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <rect width="20" height="20" fill="var(--color-comic-lightblue, rgba(155, 165, 255, 1))" />
          <circle cx="5" cy="5" r="2" fill="var(--comic-dot-color, rgba(1, 1, 1, 0.3))" />
          <circle cx="15" cy="15" r="2" fill="var(--comic-dot-color, rgba(1, 1, 1, 0.3))" />
        </pattern>
      </defs>

      {/* Preenchimento dos painéis inferiores com azul e dots da seção hero */}
      <polygon points="30,413 870,337 870,617 30,617" fill="url(#manga-comic-dots)" />
      <polygon points="30,634 300,634 462,912 30,912" fill="url(#manga-comic-dots)" />
      <polygon points="321,634 870,634 870,912 484,912" fill="url(#manga-comic-dots)" />

      {/* Speed lines do template manga multiplicadas sobre os dots */}
      <image
        href="/manga-template.png"
        width="900"
        height="952"
        preserveAspectRatio="none"
        style={{ mixBlendMode: "multiply" }}
      />

      {/* Painel 1: Imagem Hero */}
      <g clipPath="url(#manga-panel-hero-clip)">
        <image
          href={projectImage}
          x="30"
          y="34"
          width="840"
          height="362"
          preserveAspectRatio="xMidYMid slice"
          aria-label={projectTitle}
        />
      </g>

      {/* Bordas vetoriais pretas sobrepostas */}
      <polygon points="30,34 870,34 870,318 30,394" fill="none" stroke="black" strokeWidth="5" />
      <polygon points="30,413 870,337 870,617 30,617" fill="none" stroke="black" strokeWidth="5" />
      <polygon points="30,634 300,634 462,912 30,912" fill="none" stroke="black" strokeWidth="5" />
      <polygon points="321,634 870,634 870,912 484,912" fill="none" stroke="black" strokeWidth="5" />
      <rect x="30" y="34" width="840" height="878" fill="none" stroke="black" strokeWidth="5" />
      <rect x="2.5" y="2.5" width="895" height="947" fill="none" stroke="black" strokeWidth="5" />
    </svg>
  );
}
