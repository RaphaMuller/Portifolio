import { motion } from "framer-motion";

interface SpeechBubbleProps {
  children: React.ReactNode;
  delay?: number;
  tailPosition?: "top" | "bottom";
  animateOnScroll?: boolean;
}

export const SpeechBubble = ({ 
  children, 
  delay = 0.3,
  tailPosition = "bottom",
  animateOnScroll = false,
}: SpeechBubbleProps) => {

  const animationProps = animateOnScroll 
    ? { initial: { scale: 0.8, opacity: 0 }, whileInView: { scale: 1, opacity: 1 }, viewport: { once: true } }
    : { initial: { scale: 0, opacity: 0 }, animate: { scale: 1, opacity: 1 } };

  return (
    <motion.div
      {...animationProps}
      transition={{ type: "spring", stiffness: 200, delay }}
      className="relative mb-2 border-4 border-black bg-white p-6 shadow-[6px_6px_0_0_#000]"
    >
      {tailPosition === "bottom" && (
        <>
          <div className="absolute -bottom-5 left-10 h-0 w-0 border-t-[20px] border-r-[12px] border-l-[12px] border-t-black border-r-transparent border-l-transparent" />
          <div className="absolute -bottom-3 left-11 h-0 w-0 border-t-[16px] border-r-[10px] border-l-[10px] border-t-white border-r-transparent border-l-transparent" />
        </>
      )}

      {tailPosition === "top" && (
        <>
          <div className="absolute -top-4 left-5 h-0 w-0 border-b-[16px] border-l-[10px] border-r-[10px] border-b-black border-l-transparent border-r-transparent" />
          <div className="absolute -top-2 left-6 h-0 w-0 border-b-[12px] border-l-[8px] border-r-[8px] border-b-white border-l-transparent border-r-transparent" />
        </>
      )}

      <div className="leading-tight font-medium text-black">{children}</div>
    </motion.div>
  );
};

