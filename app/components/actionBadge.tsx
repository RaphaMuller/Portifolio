// components/ActionBadge.tsx
import { motion } from "framer-motion";

interface ActionBadgeProps {
  text: string;
  className?: string;
  variant?: "red" | "yellow";
  rotation: number;
  delay: number;
}

export const ActionBadge = ({
  text,
  className,
  variant = "red",
  rotation,
  delay,
}: ActionBadgeProps) => {
  const bg = variant === "red" ? "bg-[#FF4444]" : "bg-[#FFE44D]";
  const textColor = variant === "red" ? "text-white" : "text-black";

  return (
    <motion.div
      initial={{ rotate: rotation, scale: 0 }}
      animate={{ rotate: rotation, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, delay }}
      className={`absolute z-10 ${className}`}
    >
      <div
        className={`${bg} ${textColor} border-4 border-black px-4 py-2 shadow-[5px_5px_0_0_#000] text-3xl md:text-5xl font-comic tracking-tighter uppercase`}
      >
        {text}
      </div>
    </motion.div>
  );
};

export const SpeechBubble = ({
  children,
  delay = 0.3,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", stiffness: 200, delay }}
    className="relative bg-white border-4 border-black p-6 shadow-[6px_6px_0_0_#000] mb-4"
  >
    <div className="absolute -bottom-5 left-10 w-0 h-0 border-l-[12px] border-l-transparent border-t-[20px] border-t-black border-r-[12px] border-r-transparent" />
    <div className="absolute -bottom-3 left-11 w-0 h-0 border-l-[10px] border-l-transparent border-t-[16px] border-t-white border-r-[10px] border-r-transparent" />

    <div
      className="text-black font-medium leading-tight"
    >
      {children}
    </div>
  </motion.div>
);
