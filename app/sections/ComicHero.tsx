"use client";

import { ComicSectionContainer } from "@/app/components/ui/global/ComicSection/ComicSectionContainer";
import { ComicAvatar } from "@/app/components/ui/hero/ComicAvatar/ComicAvatar";
import { ComicHeroIdentity } from "@/app/components/ui/hero/ComicHeroIntro/ComicHeroIdentity";
import { ComicHeroSpeech } from "@/app/components/ui/hero/ComicHeroIntro/ComicHeroSpeech";
import { ComicHeroCaption } from "@/app/components/ui/hero/ComicHeroIntro/ComicHeroCaption";
import { heroCopy } from "@/app/constants/heroCopy";
import BuildingSkyline from "@/app/components/ui/hero/ComicSkyline/BuildingSkyline";
import { ComicRoad } from "@/app/components/ui/hero/ComicRoad/ComicRoad";
import { ComicPalmTree } from "@/app/components/ui/hero/ComicFoliage/ComicPalmTree";

export default function ComicHero() {
  return (
    <ComicSectionContainer
      id="hero"
      variant="night"
      mode="fit"
      noPaddingX
      noPaddingBottom
      ariaLabel="Apresentação Principal"
    >
      {/* Camada Superior: página narrada (recordatórios + capa + avatar com fala) */}
      <div className="relative z-30 mx-auto my-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center gap-3 px-4 pt-2 pb-28 sm:gap-6 sm:pb-36 md:pb-28 lg:pb-40 xl:pb-44">
        <ComicHeroCaption text={heroCopy.captionOpen} startDelay={1.3} align="start" />

        <ComicHeroIdentity name="RAPHAEL MULLER" role="FULL-STACK DEVELOPER" />

        <div className="flex flex-col items-center gap-4 select-none md:flex-row md:gap-8 lg:gap-10">
          <ComicAvatar
            realImageSrc="/Profile.jpeg"
            cartoonImageSrc="/Profile-cartoon.jpg"
            autoSwitchDelay={2600}
          />
          <ComicHeroSpeech />
        </div>

        <ComicHeroCaption text={heroCopy.captionClose} startDelay={2.9} align="end" />
      </div>

      {/* Camada da Base: Prédios Contíguos 100%, Vegetação Comic e Estrada */}
      <div className="relative z-10 w-full select-none">
        {/* 3. Prédios ancorados cobrindo 100% da tela como silhueta contida */}
        <div className="absolute bottom-12 left-0 right-0 z-10 flex w-full justify-center">
          <BuildingSkyline
            count="full"
            align="center"
            theme="default"
            className="shrink-0 origin-bottom"
          />
        </div>

        {/* 4. Camada Cênica: Coqueiros brotando da calçada (t = 0.85s) sob o meio-fio */}
        <div className="pointer-events-none absolute bottom-12 left-0 z-[15] h-0 w-full overflow-visible">
          {/* 1. Coqueiro Oeste (visível em todos os tamanhos) */}
          <div className="absolute bottom-0 left-[4%] sm:left-[5%]">
            <ComicPalmTree height={65} swayDelay={0} entranceDelay={0.85} />
          </div>

          {/* 2. Coqueiro Oeste médio (oculto em mobile pequeno) */}
          <div className="absolute bottom-0 left-[18%] sm:left-[20%] hidden md:block">
            <ComicPalmTree height={85} flipped swayDelay={1.2} entranceDelay={0.92} />
          </div>

          {/* 3. Coqueiro Centro-Oeste (oculto em mobile pequeno) */}
          <div className="absolute bottom-0 left-[33%] sm:left-[35%] hidden sm:block">
            <ComicPalmTree height={75} swayDelay={2.1} entranceDelay={0.98} />
          </div>

          {/* 4. Coqueiro Central (visível em todos os tamanhos) */}
          <div className="absolute bottom-0 left-[48%] sm:left-[50%]">
            <ComicPalmTree height={85} flipped swayDelay={0.7} entranceDelay={1.04} />
          </div>

          {/* 5. Coqueiro Centro-Leste (oculto em mobile pequeno) */}
          <div className="absolute bottom-0 left-[64%] sm:left-[66%] hidden sm:block">
            <ComicPalmTree height={75} swayDelay={1.8} entranceDelay={1.1} />
          </div>

          {/* 6. Coqueiro Leste médio (oculto em mobile pequeno) */}
          <div className="absolute bottom-0 left-[80%] sm:left-[82%] hidden md:block">
            <ComicPalmTree height={90} flipped swayDelay={2.5} entranceDelay={1.16} />
          </div>

          {/* 7. Coqueiro Leste extremo (visível em todos os tamanhos) */}
          <div className="absolute right-3 bottom-0 sm:right-6">
            <ComicPalmTree height={65} swayDelay={0.4} entranceDelay={1.22} />
          </div>
        </div>

        {/* 2. Estrada Comic desenrolando (t = 0.30s) com meio-fio e micro-carros (t = 1.10s) */}
        <ComicRoad className="relative z-20 w-full" showCurb stripeColor="yellow" height="h-12" />
      </div>
    </ComicSectionContainer>
  );
}
