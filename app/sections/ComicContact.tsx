"use client";

import { motion } from "framer-motion";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";
import { SpeechBubble } from "@/app/components/ui/global/SpeechBubble/SpeechBubble";
import { BuildingSkyline } from "@/app/components/ui/hero/ComicSkyline/BuildingSkyline";
import { motionPresets } from "@/app/constants/motionPresets";
import { contactLinks } from "@/app/constants/contactLinks";
import { ComicContactForm } from "@/app/components/ui/contact/ComicContactForm";
import { ComicSectionContainer } from "@/app/components/ui/global/ComicSection/ComicSectionContainer";
import { ComicSectionBody } from "@/app/components/ui/global/ComicSection/ComicSectionBody";
import { ComicSectionHeader } from "@/app/components/ui/global/ComicSection/ComicSectionHeader";

export function ComicContact() {
  return (
    <ComicSectionContainer
      id="contact"
      variant="contact"
      mode="fit"
      ariaLabel="Capítulo 4: Missão Contato"
    >
      <ComicSectionBody>
        <ComicSectionHeader
          chapter="CAPÍTULO 4"
          title="MISSÃO CONTATO"
          theme="contact"
        />

        <motion.main
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex flex-1 min-h-0 w-full max-w-6xl flex-col justify-between overflow-y-auto md:overflow-visible no-scrollbar"
        >
          <div className="grid w-full flex-1 min-h-0 grid-cols-1 items-center gap-2.5 sm:gap-4 md:grid-cols-2 md:gap-6">
            {/* Coluna esquerda: info + links */}
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              <SpeechBubble tailPosition="bottom" animateOnScroll delay={0.1}>
                <h3 className="mb-0.5 sm:mb-1 text-sm sm:text-base md:text-h4 font-bangers tracking-wide text-comic-red">
                  PRECISA DE UM HERÓI?
                </h3>
                <p className="font-comic text-[11px] sm:text-xs md:text-sm leading-tight sm:leading-relaxed">
                  Estou disponível para projetos freelance, colaborações e novas
                  oportunidades. Vamos criar algo incrível juntos!
                </p>
              </SpeechBubble>

              <motion.div
                className="flex flex-col gap-2 sm:gap-2.5"
                {...motionPresets.slideInLeft}
              >
                {contactLinks.map((item) => (
                  <ActionBadge
                    key={item.label}
                    theme={item.theme}
                    interactive
                    noPadding
                    className="w-full"
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-full w-full items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 md:p-3 font-comic font-bold"
                    >
                      <item.icon className="size-4 sm:size-[18px] shrink-0" />
                      <span className="text-stat-label truncate">{item.label}</span>
                    </a>
                  </ActionBadge>
                ))}
              </motion.div>
            </div>

            {/* Coluna direita: formulário modular */}
            <ComicContactForm />
          </div>

          {/* Recordatório Final (Créditos / Footer Integrado com Alto Contraste Comic) */}
          <footer className="relative z-20 mt-auto w-full select-none pt-1 sm:pt-2 pb-0.5 sm:pb-1">
            <div className="mx-auto flex items-center justify-between gap-2 border-2 border-black bg-zinc-950/90 px-2.5 py-1 sm:px-3.5 sm:py-1.5 shadow-[2px_2px_0_#000] sm:shadow-[3px_3px_0_#000] backdrop-blur-xs">
              <span className="font-bangers text-xs sm:text-sm md:text-base text-comic-yellow tracking-wide shrink-0">
                FIM // CAPÍTULO 4
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-white truncate">
                © 2026 Raphael Muller · ☕ + Código
              </span>
              <span className="hidden font-mono text-[11px] italic text-zinc-300 md:inline shrink-0">
                &ldquo;Nenhum bug foi prejudicado.&rdquo;
              </span>
            </div>
          </footer>
        </motion.main>
      </ComicSectionBody>

      <BuildingSkyline position="absolute" theme="dark" className="pointer-events-none z-0" />
    </ComicSectionContainer>
  );
}
