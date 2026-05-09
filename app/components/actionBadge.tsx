import { motion } from "framer-motion";

interface ActionBadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "red" | "yellow";
  rotation: number;
  delay?: number;
  positionType?: "absolute" | "static";
}

const variantStyles = {
  red: "bg-comic-red text-white",
  yellow: "bg-comic-yellow text-black",
};

export const ActionBadge = ({
  children,
  className,
  variant = "red",
  rotation,
  delay = 0.3,
  positionType = "absolute",
}: ActionBadgeProps) => {
  const isAbsolute = positionType === "absolute";
  const finalRotation = positionType === "static" ? 0 : rotation;

  return (
    <motion.div
      initial={{ rotate: finalRotation, scale: 0 }}
      animate={{ rotate: finalRotation, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, delay }}
      className={`${isAbsolute ? "absolute z-10" : "relative"} ${className}`}
    >
      <div
        className={`${variantStyles[variant]} font-comic border-4 border-black px-4 py-2 text-3xl tracking-tighter uppercase shadow-[5px_5px_0_0_#000] md:text-5xl`}
      >
        {children}
      </div>
    </motion.div>
  );
};
