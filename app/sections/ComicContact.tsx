"use client";

import { motion } from "framer-motion";
import { ComicContactForm } from "@/app/components/ui/contact/ComicContactForm/ComicContactForm";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";
import { ComicSectionBody } from "@/app/components/ui/global/ComicSection/ComicSectionBody";
import { ComicSectionContainer } from "@/app/components/ui/global/ComicSection/ComicSectionContainer";
import { ComicSectionHeader } from "@/app/components/ui/global/ComicSection/ComicSectionHeader";
import { BuildingSkyline } from "@/app/components/ui/global/ComicSkyline/BuildingSkyline";
import { SpeechBubble } from "@/app/components/ui/global/SpeechBubble/SpeechBubble";
import { contactCopy, contactLinks } from "@/app/constants/contactLinks";
import { motionPresets } from "@/app/constants/motionPresets";

/**
 * @example
 * <ComicContact />
 */
export function ComicContact() {
  return (
    <ComicSectionContainer
      id="contact"
      variant="contact"
      mode="fit"
      ariaLabel={contactCopy.sectionAriaLabel}
    >
      <ComicSectionBody>
        <ComicSectionHeader
          chapter={contactCopy.chapter}
          title={contactCopy.title}
          theme="contact"
        />

        <motion.div
          {...motionPresets.blockAssemble}
          className="no-scrollbar mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col justify-between overflow-y-auto md:overflow-visible"
        >
          <div className="grid min-h-0 w-full flex-1 grid-cols-1 items-center gap-2.5 sm:gap-4 md:grid-cols-2 md:gap-6">
            {/* Left column: callout bubble and direct contact channels */}
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              <SpeechBubble tailPosition="bottom" animateOnScroll delay={0.1}>
                <h3 className="mb-0.5 font-bangers text-sm tracking-wide text-comic-red sm:mb-1 sm:text-base md:text-h4">
                  {contactCopy.bubbleHeading}
                </h3>
                <p className="font-comic text-micro-md leading-tight sm:text-xs sm:leading-relaxed md:text-sm">
                  {contactCopy.bubbleBody}
                </p>
              </SpeechBubble>

              <motion.ul
                aria-label={contactCopy.linksListAriaLabel}
                className="flex flex-col gap-2 sm:gap-2.5"
                {...motionPresets.slideInLeft}
              >
                {contactLinks.map((item) => (
                  <li key={item.label}>
                    <ActionBadge
                      theme={item.theme}
                      interactive
                      noPadding
                      className="w-full"
                    >
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-full w-full items-center gap-2.5 p-1.5 font-comic font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black sm:gap-3 sm:p-2 md:p-2.5"
                      >
                        <item.icon
                          className="size-4 shrink-0 sm:size-4.5"
                          aria-hidden="true"
                        />
                        <span className="truncate text-stat-label">
                          {item.label}
                        </span>
                      </a>
                    </ActionBadge>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Right column: modular contact form */}
            <ComicContactForm />
          </div>

          {/* Integrated high-contrast comic credits footer */}
          <footer className="relative z-20 mt-3 w-full pt-1 pb-0.5 select-none sm:mt-5 sm:pt-1.5 sm:pb-1 md:mt-6">
            <div className="mx-auto flex items-center justify-between gap-2 border-2 border-black bg-comic-surface-dark/90 px-2.5 py-1 shadow-comic-sm backdrop-blur-xs sm:px-3.5 sm:py-1.5 sm:shadow-comic-3">
              <span className="shrink-0 font-bangers text-xs tracking-wide text-comic-yellow sm:text-sm md:text-base">
                {contactCopy.footerEndLabel}
              </span>
              <span className="truncate font-mono text-micro text-white sm:text-xs">
                {contactCopy.footerCopyright}
              </span>
              <span className="hidden shrink-0 font-mono text-micro-md text-comic-divider italic md:inline">
                &ldquo;{contactCopy.footerTagline}&rdquo;
              </span>
            </div>
          </footer>
        </motion.div>
      </ComicSectionBody>

      <BuildingSkyline
        position="absolute"
        theme="dark"
        className="pointer-events-none z-0"
      />
    </ComicSectionContainer>
  );
}
