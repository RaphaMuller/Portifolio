"use client";

import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";
import { ComicDossierTabs } from "@/app/components/ui/about/ComicDossier/ComicDossierTabs";
import { aboutData } from "@/app/constants/aboutData";
import { motionPresets } from "@/app/constants/motionPresets";
import type { DossierTab } from "@/app/types/about";

interface ComicDossierMastheadDesktopProps {
  variant: "desktop";
  tabs: readonly DossierTab[];
  activeTabId: DossierTab["id"];
  onSelectTab: (id: DossierTab["id"]) => void;
}

interface ComicDossierMastheadMobileProps {
  variant: "mobile";
}

type ComicDossierMastheadProps =
  | ComicDossierMastheadDesktopProps
  | ComicDossierMastheadMobileProps;

/**
 * @example
 * <ComicDossierMasthead variant="mobile" />
 */
export function ComicDossierMasthead(props: ComicDossierMastheadProps) {
  if (props.variant === "mobile") {
    return (
      <header className="shrink-0 flex items-center justify-between gap-2 border-b-4 border-black bg-comic-masthead px-3.5 py-2.5 text-white select-none">
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

          <h3 className="font-bangers text-h3 text-comic-yellow text-comic-stroke uppercase leading-none">
            {aboutData.subject}
          </h3>
        </div>

        <span className="border-2 border-black bg-white px-1.5 py-0.5 font-bangers text-micro text-black uppercase shadow-comic-sm">
          {aboutData.classification}
        </span>
      </header>
    );
  }

  return (
    <header className="flex flex-wrap items-center justify-between gap-3 border-b-4 border-black bg-comic-masthead px-4 py-3 text-white sm:px-6 sm:py-3.5 select-none">
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
          <h3 className="font-bangers text-h2 text-comic-yellow text-comic-stroke uppercase">
            {aboutData.subject}
          </h3>
          <p className="comic-stamp-pill mt-0.5 inline-block bg-white text-black">
            {aboutData.classification}
          </p>
        </div>
      </div>

      <ComicDossierTabs
        tabs={props.tabs}
        activeTabId={props.activeTabId}
        onSelectTab={props.onSelectTab}
      />
    </header>
  );
}
