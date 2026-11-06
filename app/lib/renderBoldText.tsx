import type { ReactNode } from "react";

/**
 * @example
 * renderBoldText("Stack **React 19** e **Next.js**")
 */
export function renderBoldText(text: string): ReactNode[] {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const content = part.slice(2, -2);
      return (
        <strong key={`${content}-${index}`} className="font-bold text-black">
          {content}
        </strong>
      );
    }
    return part;
  });
}
