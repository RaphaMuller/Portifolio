"use client";
import { ChevronLeft } from "lucide-react";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";

export default function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <ActionBadge
      className="absolute top-1/2 left-0 z-20 hidden size-12 -translate-x-5 -translate-y-1/2 cursor-pointer items-center justify-center transition-all duration-200 ease-out hover:scale-110 hover:rotate-6 active:scale-95 lg:flex"
      theme="yellow"
      onClick={onClick}
      aria-label="Slide anterior"
    >
      <ChevronLeft className="size-6 stroke-[3] text-black" aria-hidden="true" />
    </ActionBadge>
  );
}
