import { SiGit } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import type { ThemePreset } from "@/app/components/ui/ActionBadge/actionBadgeTheme";

export interface ContactLink {
  icon: React.ElementType;
  label: string;
  href: string;
  theme: ThemePreset;
  isMailto: boolean;
}

export const contactLinks = [
  {
    icon: Mail,
    label: "raphaelmuller61@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=raphaelmuller61@gmail.com",
    theme: "white",
    isMailto: true,
  },
  {
    icon: SiGit,
    label: "github.com/RaphaelMuller",
    href: "https://github.com/RaphaMuller",
    theme: "white",
    isMailto: false,
  },
  {
    icon: FaLinkedin,
    label: "linkedin.com/in/RaphaelMuller",
    href: "https://www.linkedin.com/in/raphael-muller-9b5477227/",
    theme: "lightBlue",
    isMailto: false,
  },
] as const;
