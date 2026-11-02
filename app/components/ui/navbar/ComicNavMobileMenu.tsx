import { AnimatePresence, motion } from "framer-motion";
import { ComicNavPanel } from "@/app/components/ui/navbar/ComicNavPanel";
import { navLinks } from "@/app/constants/navLinks";

interface ComicNavMobileMenuProps {
  id: string;
  isOpen: boolean;
  onNavigate: (href: string) => void;
}

// Pairs links into rows of two; an odd last link becomes a full-width row.
const rows = Array.from({ length: Math.ceil(navLinks.length / 2) }, (_, index) =>
  navLinks.slice(index * 2, index * 2 + 2),
);

/**
 * @example
 * <ComicNavMobileMenu id="mobile-menu" isOpen={isOpen} onNavigate={handleNav} />
 */
export function ComicNavMobileMenu({ id, isOpen, onNavigate }: ComicNavMobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          id={id}
          aria-label="Navegação principal (mobile)"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.12 }}
          className="overflow-hidden border-t-4 border-black bg-black md:hidden"
        >
          <ul className="flex flex-col gap-1.5">
            {rows.map((row, rowIndex) => (
              <li key={row[0].href} className="flex h-14 items-stretch">
                {row.map((link, index) => (
                  <ComicNavPanel
                    key={link.href}
                    kind="link"
                    href={link.href}
                    seed={rowIndex * 2 + index}
                    onNavigate={onNavigate}
                    edge={index === 0 ? "start" : "end"}
                    className="flex-1"
                  >
                    {link.label}
                  </ComicNavPanel>
                ))}
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
