import { motion } from "framer-motion";

interface ActionBadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "red" | "yellow" | "white";
  rotation?: number;
  delay?: number;
  positionType?: "absolute" | "static"; // Nova prop para controlar o tipo de posicionamento
  interactive?: boolean; // Nova prop para controlar se o badge tem efeitos de hover/click
  noPadding?: boolean; // Nova prop para controlar o padding em usos de imagens ou outros conteúdos que não sejam texto
  // preset?: TransitionPreset; //Nova prop para escolher entre presets de transição predefinidos
}

const variantStyles = {
  red: "bg-comic-red text-white",
  yellow: "bg-comic-yellow text-black",
  white: "bg-white text-black",
};

export const ActionBadge = ({
  children,
  className,
  variant = "red",
  rotation = 0,
  delay = 0.3,
  positionType = "absolute",
  interactive = false,
  noPadding = false,
}: ActionBadgeProps) => {
  const isAbsolute = positionType === "absolute";
  const finalRotation = positionType === "static" ? 0 : rotation;
  

  return (
    <motion.div
      initial={{ rotate: finalRotation, scale: 0 }}
      animate={{ rotate: finalRotation, scale: 1 }}
      transition={{ type: "spring", stiffness: 500, delay }}
      className={`${isAbsolute ? "absolute z-10" : "relative"} ${className}`}
    >
      <div
        className={`${variantStyles[variant]} border-4 border-black tracking-tighter uppercase shadow-[5px_5px_0_0_#000] ${noPadding ? "p-0" : "px-4 py-2"}
         ${interactive ? "hover:shadow-[6px_6px_0_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all active:shadow-none active:translate-x-0 active:translate-y-0" : ""}
         `}
      >
        {children}
      </div>
    </motion.div>
  );
};
