import { motion } from "framer-motion";

interface SpeechBubbleProps {
  children: React.ReactNode;
  delay?: number;
}

export const SpeechBubble = ({ children, delay = 0.3 }: SpeechBubbleProps) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", stiffness: 200, delay }}
    className="relative mb-4 border-4 border-black bg-white p-6 shadow-[6px_6px_0_0_#000]"
  >
    <div className="absolute -bottom-5 left-10 h-0 w-0 border-t-[20px] border-r-[12px] border-l-[12px] border-t-black border-r-transparent border-l-transparent" />
    <div className="absolute -bottom-3 left-11 h-0 w-0 border-t-[16px] border-r-[10px] border-l-[10px] border-t-white border-r-transparent border-l-transparent" />

    <div className="leading-tight font-medium text-black">{children}</div>
  </motion.div>
);
