"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { DossierTab } from "@/app/constants/aboutData";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";

interface ComicDossierPageProps {
  tab: DossierTab;
}

/**
 * @example
 * <ComicDossierPage tab={activeTab} />
 */
export function ComicDossierPage({ tab }: ComicDossierPageProps) {
  return (
    <div className="relative flex flex-1 min-h-0 flex-col overflow-hidden border-3 sm:border-4 border-black bg-white p-3.5 sm:p-5 shadow-[6px_6px_0_0_#000]">
      {/* Cabeçalho de Memorando do Documento */}
      <div className="mb-2.5 flex items-center justify-between border-b-2 border-dashed border-zinc-300 pb-2 select-none">
        <div className="flex items-center gap-2">
          <span className="inline-block border border-black bg-comic-yellow px-1.5 py-0.5 font-bangers text-[10px] sm:text-xs tracking-bangers-wide text-black">
            {tab.code}
          </span>
          <span className="font-mono text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest">
            REF: DOC-RM // ANEXO
          </span>
        </div>
        <span className="hidden sm:inline-block font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
          CLASSIFICAÇÃO: NÍVEL 1
        </span>
      </div>

      {/* Conteúdo Deslizante da Página */}
      <div className="relative flex-1 min-h-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="flex h-full flex-col justify-between overflow-y-auto pr-1.5 sm:pr-2"
          >
            <div className="space-y-2.5 sm:space-y-3">
              {/* Título de Relatório */}
              <div>
                <h2 className="font-bangers text-xl sm:text-2xl text-comic-red lg:text-3xl leading-none">
                  {tab.title}
                </h2>
                <p className="mt-0.5 font-comic text-xs sm:text-sm font-bold text-zinc-600 uppercase tracking-wide">
                  {tab.subtitle}
                </p>
              </div>

              {/* Parágrafos do Documento */}
              <div className="space-y-2 font-comic text-xs sm:text-sm md:text-base leading-relaxed text-zinc-800">
                {tab.paragraphs.map((p, idx) => (
                  <p key={idx} className="border-l-2 border-zinc-200 pl-2">
                    {p}
                  </p>
                ))}
              </div>

              {/* Tags de Tecnologias */}
              {tab.tags && tab.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {tab.tags.map((tag) => (
                    <ActionBadge key={tag} theme="yellow" noPadding>
                      <span className="px-2 py-0.5 text-xs font-bangers tracking-bangers-wide">
                        {tag}
                      </span>
                    </ActionBadge>
                  ))}
                </div>
              )}
            </div>

            {/* Regra de Ouro / Highlight do Memorando */}
            {tab.highlight && (
              <div className="mt-3 border-l-4 border-comic-red bg-amber-50/80 p-2 sm:p-2.5 shadow-comic-sm">
                <span className="font-bangers text-[10px] sm:text-xs text-comic-red tracking-wide uppercase">
                  DIRETRIZ DE CAMPO:
                </span>
                <p className="font-mouse text-sm sm:text-base text-zinc-900 leading-tight">
                  &ldquo;{tab.highlight}&rdquo;
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
