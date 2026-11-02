"use client";

import React from "react";

interface ComicSectionBodyProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Nível 2: Faixa Panorâmica (max-w-7xl).
 * Fornece a moldura larga de 1280px para criar o efeito cascata com o header.
 * @example
 * <ComicSectionBody>
 *   <ComicSectionHeader title="MEUS PROJETOS" />
 *   <main className="max-w-6xl mx-auto flex-1 min-h-0">{children}</main>
 * </ComicSectionBody>
 */
export function ComicSectionBody({
  children,
  className = "",
}: ComicSectionBodyProps) {
  return (
    <div
      className={`relative z-10 mx-auto flex h-full w-full max-w-7xl flex-1 min-h-0 flex-col px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
