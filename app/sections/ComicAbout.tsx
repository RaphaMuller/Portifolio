"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";
import { ComicSectionContainer } from "@/app/components/ui/global/ComicSection/ComicSectionContainer";
import { ComicSectionBody } from "@/app/components/ui/global/ComicSection/ComicSectionBody";
import { ComicSectionHeader } from "@/app/components/ui/global/ComicSection/ComicSectionHeader";
import { ComicDossierTabs } from "@/app/components/ui/about/ComicDossier/ComicDossierTabs";
import { ComicDossierPage } from "@/app/components/ui/about/ComicDossier/ComicDossierPage";
import { ComicDossierSidebar } from "@/app/components/ui/about/ComicDossier/ComicDossierSidebar";
import { ComicDossierMobileCard } from "@/app/components/ui/about/ComicDossier/ComicDossierMobileCard";
import { ComicDossierModal } from "@/app/components/ui/about/ComicDossier/ComicDossierModal";
import { motionPresets } from "@/app/constants/motionPresets";
import { aboutData, dossierTabs, type DossierTab } from "@/app/constants/aboutData";

export default function ComicAbout() {
  const [activeTabId, setActiveTabId] = useState<DossierTab["id"]>("origin");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const activeTab = dossierTabs.find((t) => t.id === activeTabId) ?? dossierTabs[0];

  return (
    <ComicSectionContainer
      id="about"
      variant="yellow"
      mode="fit"
      ariaLabel="Capítulo 1: Origem"
    >
      {/* Nível 2: Faixa Panorâmica (max-w-7xl) com Header Alinhado à Esquerda */}
      <ComicSectionBody>
        <ComicSectionHeader
          chapter="CAPÍTULO 1"
          title="ORIGEM"
          theme="about"
        />

        {/* Nível 3: Palco Centralizado (max-w-6xl) */}
        <main className="mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col items-center justify-center">
          {/* Visualização Tablet & Desktop: Prancha Editorial Completa (hidden no celular) */}
          <motion.div
            {...motionPresets.blockSlideUp}
            className="hidden h-full min-h-0 w-full flex-col overflow-hidden border-4 border-black bg-comic-bege shadow-comic-lg md:flex"
          >
            {/* Topo Masthead de HQ com Identidade do Herói e Abas Integradas */}
            <header className="flex flex-wrap items-center justify-between gap-3 border-b-4 border-black bg-zinc-800 px-4 py-3 text-white sm:px-6 sm:py-3.5 select-none">
              <div className="flex items-center gap-3 sm:gap-4">
                <ActionBadge
                  theme="white"
                  noPadding
                  {...motionPresets.stampBadge}
                  className="-rotate-2 border-2 border-black shadow-comic-sm"
                >
                  <span className="block px-2.5 py-1 font-bangers text-h4 text-black uppercase">
                    {aboutData.dossierCode}
                  </span>
                </ActionBadge>

                <div>
                  <h2 className="font-bangers text-h2 text-comic-yellow text-comic-stroke uppercase">
                    {aboutData.subject}
                  </h2>
                  <p className="mt-0.5 inline-block border-2 border-black bg-white px-2 py-0.5 font-bangers text-stat-label text-black uppercase shadow-comic-sm">
                    {aboutData.classification}
                  </p>
                </div>
              </div>

              <ComicDossierTabs
                tabs={dossierTabs}
                activeTabId={activeTabId}
                onSelectTab={setActiveTabId}
              />
            </header>

            {/* Grid Editorial Interiço: Orelha Esquerda + Página Centralizada */}
            <div className="grid min-h-0 flex-1 grid-cols-12">
              <ComicDossierSidebar className="col-span-5 lg:col-span-4 h-full" />

              <div className="col-span-7 lg:col-span-8 flex min-h-0 flex-1 flex-col">
                <ComicDossierPage tab={activeTab} />
              </div>
            </div>
          </motion.div>

          {/* Visualização Celular: Card de Identidade no Palco + Modal Completo */}
          <motion.div
            {...motionPresets.blockSlideUp}
            className="flex h-full min-h-0 w-full max-w-md flex-col justify-between overflow-hidden border-4 border-black bg-comic-bege shadow-comic-lg md:hidden"
          >
            {/* Header Compacto de Identidade Mobile */}
            <header className="flex items-center justify-between gap-2 border-b-4 border-black bg-zinc-800 px-3.5 py-2.5 text-white select-none">
              <div className="flex items-center gap-2">
                <ActionBadge
                  theme="white"
                  noPadding
                  {...motionPresets.stampBadge}
                  className="-rotate-2 border-2 border-black shadow-comic-sm"
                >
                  <span className="block px-2 py-0.5 font-bangers text-stat-label text-black uppercase">
                    {aboutData.dossierCode}
                  </span>
                </ActionBadge>

                <h2 className="font-bangers text-h3 text-comic-yellow text-comic-stroke uppercase leading-none">
                  {aboutData.subject}
                </h2>
              </div>

              <span className="border-2 border-black bg-white px-1.5 py-0.5 font-bangers text-[10px] text-black uppercase shadow-comic-sm">
                {aboutData.classification}
              </span>
            </header>

            {/* Conteúdo do Card Mobile com Setup, Stats e Botão de Abrir */}
            <ComicDossierMobileCard onOpenDossier={() => setIsModalOpen(true)} />
          </motion.div>

          {/* Modal do Dossiê Completo no Mobile */}
          <ComicDossierModal
            isOpen={isModalOpen}
            tabs={dossierTabs}
            activeTab={activeTab}
            onSelectTab={setActiveTabId}
            onClose={() => setIsModalOpen(false)}
          />
        </main>
      </ComicSectionBody>
    </ComicSectionContainer>
  );
}
