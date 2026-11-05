"use client";

import React, { useEffect, useId, useRef } from "react";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";
import { X } from "lucide-react";
import { ComicDossierTabs } from "@/app/components/ui/about/ComicDossier/ComicDossierTabs";
import { ComicDossierPage } from "@/app/components/ui/about/ComicDossier/ComicDossierPage";
import { aboutData, type DossierTab } from "@/app/constants/aboutData";

interface ComicDossierModalProps {
  isOpen: boolean;
  tabs: DossierTab[];
  activeTab: DossierTab;
  onSelectTab: (id: DossierTab["id"]) => void;
  onClose: () => void;
}

/**
 * @example
 * <ComicDossierModal isOpen={isOpen} tabs={tabs} activeTab={activeTab} onSelectTab={setTab} onClose={handleClose} />
 */
export function ComicDossierModal({
  isOpen,
  tabs,
  activeTab,
  onSelectTab,
  onClose,
}: ComicDossierModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) dialog.showModal();
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    } else if (dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
      className="fixed inset-0 m-0 h-[100dvh] min-h-[100dvh] max-h-[100dvh] w-screen min-w-full max-w-none overscroll-contain overflow-y-auto border-0 bg-comic-bege p-0 text-black shadow-none backdrop:bg-black/80 backdrop:backdrop-blur-xs md:hidden"
    >
      {/* Topo Masthead do Dossiê no Modal */}
      <header className="relative flex flex-col gap-3 border-b-4 border-black bg-zinc-800 p-4 pr-14 text-white sm:p-5 sm:pr-16 select-none">
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
              <p className="mt-0.5 inline-block border-2 border-black bg-white px-1.5 py-0.5 font-bangers text-[10px] sm:text-stat-label text-black uppercase shadow-comic-sm">
                {aboutData.classification}
              </p>
            </div>
          </div>
        </div>

        {/* Abas Integradas no Topo */}
        <ComicDossierTabs
          tabs={tabs}
          activeTabId={activeTab.id}
          onSelectTab={onSelectTab}
          className="justify-center pt-1"
        />
              {/* Botão X Circular de gibi no canto superior direito */}
        <button
          type="button"
          onClick={onClose}
          aria-label={aboutData.modalCloseAriaLabel}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 flex size-9 sm:size-10 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 sm:border-3 border-black bg-comic-yellow text-black shadow-comic-sm transition-transform hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <X className="size-5 stroke-[2.5]" aria-hidden="true" />
        </button>
      </header>

      {/* Conteúdo Detalhado da Aba Selecionada */}
      <div className="p-0">
        <ComicDossierPage tab={activeTab} />
      </div>
    </dialog>
  );
}
