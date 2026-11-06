"use client";

import { useEffect, useRef } from "react";

/**
 * @example
 * const dialogRef = useComicDialog(Boolean(selectedProject));
 */
export function useComicDialog(isOpen: boolean) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) dialog.showModal();
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }

    if (dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  return dialogRef;
}
