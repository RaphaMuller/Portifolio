interface MangaPanelDossierProps {
  description: string;
}

/**
 * @example
 * <MangaPanelDossier description="Plataforma de e-commerce completa..." />
 */
export function MangaPanelDossier({ description }: MangaPanelDossierProps) {
  return (
    <div className="manga-panel-dossier flex items-center justify-center px-2 py-1 sm:px-4 sm:py-2">
      {/* Balão com tail apontando para o painel superior (Hero) */}
      <div className="relative flex max-w-xl flex-col items-center justify-center border sm:border-2 md:border-3 border-black bg-white px-2.5 py-1.5 sm:px-5 sm:py-2.5 shadow-comic-sm text-center">
        {/* TailTop (Seta virada para cima) */}
        <div className="absolute -top-3 left-8 sm:left-14 h-0 w-0 border-r-[8px] border-b-[12px] border-l-[8px] border-r-transparent border-b-black border-l-transparent" />
        <div className="absolute -top-1.5 left-[33px] sm:left-[57px] h-0 w-0 border-r-[6px] border-b-[8px] border-l-[6px] border-r-transparent border-b-white border-l-transparent" />

        <p className="font-mouse text-[11px] sm:text-sm md:text-base lg:text-lg font-normal leading-tight sm:leading-snug tracking-wide text-zinc-950 line-clamp-3 sm:line-clamp-none">
          {description}
        </p>
      </div>
    </div>
  );
}
