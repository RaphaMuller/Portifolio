"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ComicSectionContainer } from "@/app/components/ui/global/ComicSection/ComicSectionContainer";
import { ComicSectionBody } from "@/app/components/ui/global/ComicSection/ComicSectionBody";
import { ComicSectionHeader } from "@/app/components/ui/global/ComicSection/ComicSectionHeader";
import { ComicDossierTabs } from "@/app/components/ui/about/ComicDossier/ComicDossierTabs";
import { ComicDossierPage } from "@/app/components/ui/about/ComicDossier/ComicDossierPage";
import { ComicDossierSidebar } from "@/app/components/ui/about/ComicDossier/ComicDossierSidebar";
import { HeroPowerMeter } from "@/app/components/ui/about/HeroPowerMeter";
import { dossierTabs, type DossierTab } from "@/app/constants/aboutData";

export default function ComicAbout() {
  const [activeTabId, setActiveTabId] = useState<DossierTab["id"]>("origin");
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
        <main className="mx-auto flex flex-1 min-h-0 w-full max-w-6xl flex-col items-center justify-center">
          {/* Pasta do Dossiê Confidencial */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ amount: 0.25 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex h-full max-h-[820px] w-full flex-col border-4 border-black bg-comic-bege p-2.5 sm:p-4 shadow-comic-lg"
          >
            {/* Topo da Pasta com Identificador Tático e Carimbo Confidencial */}
            <div className="mb-2 flex items-center justify-between border-b-3 border-black pb-1.5 select-none">
              <div className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-xs border border-black bg-comic-red"
                  aria-hidden="true"
                />
                <span className="font-bangers text-xs sm:text-sm tracking-widest text-zinc-700 uppercase">
                  ARQUIVO DE INTELIGÊNCIA // DOSSIÊ DE OPERAÇÕES
                </span>
              </div>

              {/* Carimbo Top Secret com Rotação Tática */}
              <motion.div
                initial={{ scale: 2, rotate: -25, opacity: 0 }}
                whileInView={{ scale: 1, rotate: -8, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 15 }}
                className="border-2 sm:border-3 border-comic-red px-2 py-0.5 font-bangers text-xs sm:text-sm tracking-widest text-comic-red shadow-[2px_2px_0_0_rgba(255,100,100,0.4)] uppercase"
              >
                CONFIDENCIAL
              </motion.div>
            </div>

            {/* Grid do Dossiê: Sidebar (Desktop) + Folha Avulsa com Abas (Direita) */}
            <div className="flex flex-1 min-h-0 flex-col gap-3 lg:grid lg:grid-cols-12 lg:gap-5">
              {/* Coluna 1: Polaroid com Foto + Identidade, Stats Compactos e Citação */}
              <ComicDossierSidebar className="hidden lg:col-span-5 lg:flex h-full" />

              {/* Coluna 2: Folha Sobreposta com Abas e Moldura de Documento */}
              <div className="flex flex-1 min-h-0 flex-col lg:col-span-7">
                {/* Abas Estilo Divisória Projetada */}
                <ComicDossierTabs
                  tabs={dossierTabs}
                  activeTabId={activeTabId}
                  onSelectTab={setActiveTabId}
                />

                {/* Folha de Papel Avulsa com Moldura e Conteúdo Deslizante */}
                <ComicDossierPage tab={activeTab} />

                {/* Bloco Encapsulador de Estatísticas apenas no Mobile */}
                <div className="mt-2 block lg:hidden border-2 border-black bg-white p-1.5 shadow-comic-sm">
                  <p className="mb-1 text-center font-bangers text-[10px] text-zinc-800 tracking-bangers-wide">
                    ESTATÍSTICAS CONFIRMADAS:
                  </p>
                  <HeroPowerMeter compact />
                </div>
              </div>
            </div>
          </motion.div>
        </main>
      </ComicSectionBody>
    </ComicSectionContainer>
  );
}
