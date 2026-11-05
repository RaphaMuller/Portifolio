"use client";

import { ChevronLeft } from "lucide-react";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";

interface PrevArrowProps {
  onClick?: () => void;
}

/**
 * Seta de navegação anterior do carrossel de habilidades com estilo Comic.
 * @example
 * <PrevArrow onClick={handlePrev} />
 */
export default function PrevArrow({ onClick }: PrevArrowProps) {
  return (
    <ActionBadge
      className="absolute top-1/2 left-0 z-20 hidden h-11 w-11 -translate-x-5 -translate-y-1/2 cursor-pointer items-center justify-center p-0 transition-all duration-200 ease-out hover:scale-110 hover:rotate-6 active:scale-95 lg:flex"
      theme="yellow"
      noPadding
      onClick={onClick}
      aria-label="Item anterior"
    >
      <ChevronLeft className="h-7 w-7 stroke-[3] text-black" />
    </ActionBadge>
  );
}
