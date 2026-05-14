"use client";
import { ActionBadge } from "../ActionBadge/ActionBadge";

export default function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <ActionBadge
    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-20 flex items-center justify-center w-12 h-12 text-2xl"
    theme="yellow"
    >
      <button onClick={onClick}>
        ▶
      </button>
    </ActionBadge>
  );
}