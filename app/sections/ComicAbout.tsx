"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ComicDossierMasthead } from "@/app/components/ui/about/ComicDossier/ComicDossierMasthead";
import { ComicDossierMobileCard } from "@/app/components/ui/about/ComicDossier/ComicDossierMobileCard";
import { ComicDossierModal } from "@/app/components/ui/about/ComicDossier/ComicDossierModal";
import { ComicDossierPage } from "@/app/components/ui/about/ComicDossier/ComicDossierPage";
import { ComicDossierSidebar } from "@/app/components/ui/about/ComicDossier/ComicDossierSidebar";
import { ComicSectionBody } from "@/app/components/ui/global/ComicSection/ComicSectionBody";
import { ComicSectionContainer } from "@/app/components/ui/global/ComicSection/ComicSectionContainer";
import { ComicSectionHeader } from "@/app/components/ui/global/ComicSection/ComicSectionHeader";
import { aboutData, dossierTabs } from "@/app/constants/aboutData";
import { motionPresets } from "@/app/constants/motionPresets";
import type { DossierTab } from "@/app/types/about";

/**
 * @example
 * <ComicAbout />
 */
export function ComicAbout() {
  const [activeTabId, setActiveTabId] = useState<DossierTab["id"]>("origin");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const activeTab =
    dossierTabs.find((tab) => tab.id === activeTabId) ?? dossierTabs[0];

  return (
    <ComicSectionContainer
      id="about"
      variant="about"
      mode="fit"
      ariaLabel={aboutData.sectionAriaLabel}
    >
      <ComicSectionBody>
        <ComicSectionHeader
          chapter={aboutData.chapter}
          title={aboutData.title}
          theme="about"
        />

        <div className="mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col items-center justify-center">
          {/* Tablet & Desktop full dossier board */}
          <motion.div
            {...motionPresets.blockSlideUp}
            className="hidden h-full min-h-0 w-full flex-col overflow-hidden border-4 border-black bg-comic-bege shadow-comic-lg md:flex"
          >
            <ComicDossierMasthead
              variant="desktop"
              tabs={dossierTabs}
              activeTabId={activeTabId}
              onSelectTab={setActiveTabId}
            />

            <div className="grid min-h-0 flex-1 grid-cols-12">
              <ComicDossierSidebar className="col-span-5 lg:col-span-4 h-full" />

              <div className="col-span-7 lg:col-span-8 flex min-h-0 flex-1 flex-col overflow-hidden">
                <ComicDossierPage tab={activeTab} />
              </div>
            </div>
          </motion.div>

          {/* Mobile compact identity card */}
          <motion.div
            {...motionPresets.blockSlideUp}
            className="flex h-full min-h-0 flex-1 w-full max-w-md flex-col justify-between overflow-hidden border-4 border-black bg-comic-bege shadow-comic-lg md:hidden"
          >
            <ComicDossierMasthead variant="mobile" />
            <ComicDossierMobileCard onOpenDossier={() => setIsModalOpen(true)} />
          </motion.div>

          <ComicDossierModal
            isOpen={isModalOpen}
            tabs={dossierTabs}
            activeTab={activeTab}
            onSelectTab={setActiveTabId}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </ComicSectionBody>
    </ComicSectionContainer>
  );
}
