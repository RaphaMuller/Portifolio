"use client";

import React, { useEffect, useId, useRef } from "react";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";
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
      className="fixed inset-0 m-0 h-[100dvh] max-h-[100dvh] w-full max-w-none overflow-y-auto border-0 bg-comic-bege p-0 text-black shadow-none backdrop:bg-black/80 backdrop:backdrop-blur-xs sm:m-auto sm:h-auto sm:max-h-[90dvh] sm:w-11/12 sm:max-w-2xl sm:border-4 sm:border-black sm:shadow-comic-lg md:hidden"
    >
      {/* Topo Masthead do Dossiê no Modal */}
      <header className="flex flex-col gap-3 border-b-4 border-black bg-zinc-800 p-4 text-white sm:p-5 select-none">
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

          <button
            type="button"
            onClick={onClose}
            aria-label={aboutData.modalCloseAriaLabel}
            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border-3 border-black bg-comic-yellow font-bangers text-xl text-black shadow-comic-sm transition-transform hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            ✕
          </button>
        </div>

        {/* Abas Integradas no Topo */}
        <ComicDossierTabs
          tabs={tabs}
          activeTabId={activeTab.id}
          onSelectTab={onSelectTab}
          className="justify-center pt-1"
        />
      </header>

      {/* Conteúdo Detalhado da Aba Selecionada */}
      <div className="p-1 sm:p-2">
        <ComicDossierPage tab={activeTab} />
      </div>
    </dialog>
  );
}
