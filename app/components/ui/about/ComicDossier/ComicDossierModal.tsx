"use client";

import { useId } from "react";
import { X } from "lucide-react";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";
import { ComicDossierPage } from "@/app/components/ui/about/ComicDossier/ComicDossierPage";
import { ComicDossierTabs } from "@/app/components/ui/about/ComicDossier/ComicDossierTabs";
import { aboutData } from "@/app/constants/aboutData";
import { useComicDialog } from "@/app/sections/hooks/useComicDialog";
import type { DossierTab } from "@/app/types/about";

interface ComicDossierModalProps {
  isOpen: boolean;
  tabs: readonly DossierTab[];
  activeTab: DossierTab;
  onSelectTab: (id: DossierTab["id"]) => void;
  onClose: () => void;
}

/**
 * @example
 * <ComicDossierModal isOpen={isOpen} tabs={dossierTabs} activeTab={activeTab} onSelectTab={setTab} onClose={handleClose} />
 */
export function ComicDossierModal({
  isOpen,
  tabs,
  activeTab,
  onSelectTab,
  onClose,
}: ComicDossierModalProps) {
  const dialogRef = useComicDialog(isOpen);
  const titleId = useId();

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
      className="fixed inset-0 m-0 flex flex-col h-dvh max-h-dvh w-full max-w-none border-0 p-0 shadow-none overscroll-contain overflow-y-auto bg-comic-bege text-black backdrop:bg-black/80 backdrop:backdrop-blur-xs md:hidden"
    >
      <header className="sticky top-0 z-40 shrink-0 relative flex flex-col gap-3 border-b-4 border-black bg-comic-masthead p-4 pr-14 text-white sm:p-5 sm:pr-16 select-none">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <ActionBadge
              theme="white"
              noPadding
              className="-rotate-2 border-2 border-black shadow-comic-sm"
            >
              <span className="block px-2 py-0.5 font-bangers text-stat-label text-black uppercase">
                {aboutData.dossierCode}
              </span>
            </ActionBadge>

            <div>
              <h2
                id={titleId}
                className="font-bangers text-h3 text-comic-yellow text-comic-stroke uppercase leading-none"
              >
                {aboutData.subject}
              </h2>
              <p className="mt-0.5 inline-block border-2 border-black bg-white px-1.5 py-0.5 font-bangers text-micro sm:text-stat-label text-black uppercase shadow-comic-sm">
                {aboutData.classification}
              </p>
            </div>
          </div>
        </div>

        <ComicDossierTabs
          tabs={tabs}
          activeTabId={activeTab.id}
          onSelectTab={onSelectTab}
          idPrefix="dossier-modal"
          className="justify-center pt-1"
        />

        <button
          type="button"
          onClick={onClose}
          aria-label={aboutData.modalCloseAriaLabel}
          className="comic-modal-close"
        >
          <X className="size-5" strokeWidth={2.5} aria-hidden="true" />
        </button>
      </header>

      <div className="flex flex-col flex-1 min-h-0 w-full p-0">
        <ComicDossierPage tab={activeTab} idPrefix="dossier-modal" />
      </div>
    </dialog>
  );
}
