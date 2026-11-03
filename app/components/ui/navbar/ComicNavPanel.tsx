import type { ComicNavPanelProps } from "@/app/components/ui/navbar/ComicNavPanel.contracts";
import { ComicNavRays } from "@/app/components/ui/navbar/ComicNavRays";
import {
  navPanelBaseClasses,
  navPanelInteractiveClasses,
} from "@/app/components/ui/navbar/comicNavPanelTheme";

const labelClasses = "font-bangers uppercase text-xs sm:text-sm md:text-xs lg:text-sm xl:text-h4 px-1 sm:px-2 md:px-1 lg:px-2 xl:px-3 text-center text-black -rotate-3 leading-none tracking-tight lg:tracking-normal motion-safe:transition-transform group-hover:scale-110 group-hover:text-white group-hover:text-comic-stroke group-focus-visible:scale-110 group-focus-visible:text-white group-focus-visible:text-comic-stroke";

/**
 * @example
 * <ComicNavPanel kind="link" href="#about" seed={2} onNavigate={go}>SOBRE</ComicNavPanel>
 */
export function ComicNavPanel(props: ComicNavPanelProps) {
  const layout = props.className ?? "";

  if (props.kind === "blank") {
    return (
      <div
        aria-hidden="true"
        data-edge={props.edge}
        className={`${navPanelBaseClasses} pointer-events-none select-none ${layout}`}
      />
    );
  }

  if (props.kind === "toggle") {
    return (
      <button
        type="button"
        onClick={props.onToggle}
        aria-expanded={props.isOpen}
        aria-controls={props.controls}
        aria-label={props.isOpen ? "Fechar menu" : "Abrir menu"}
        data-edge={props.edge}
        className={`${navPanelBaseClasses} ${navPanelInteractiveClasses} relative z-10 cursor-pointer touch-manipulation ${layout}`}
      >
        <ComicNavRays seed={props.seed} />
        <span aria-hidden="true" className={`${labelClasses} pointer-events-none select-none`}>
          {props.isOpen ? "✖" : "☰"}
        </span>
      </button>
    );
  }

  return (
    <a
      href={props.href}
      aria-label={props.ariaLabel}
      onClick={(event) => {
        event.preventDefault();
        props.onNavigate(props.href);
      }}
      data-edge={props.edge}
      className={`${navPanelBaseClasses} ${navPanelInteractiveClasses} relative z-10 cursor-pointer touch-manipulation ${layout}`}
    >
      <ComicNavRays seed={props.seed} />
      {typeof props.children === "string" ? (
        <span className={`${labelClasses} pointer-events-none select-none`}>{props.children}</span>
      ) : (
        <span className="flex items-center justify-center pointer-events-none select-none">{props.children}</span>
      )}
    </a>
  );
}
