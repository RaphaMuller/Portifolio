import { HTMLMotionProps } from "framer-motion";

export const motionPresets: Record<string, HTMLMotionProps<"div">> = {
  cardEntry: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: "tween", stiffness: 260, damping: 20 } as const,
  },
  flipFace: {
    transition: { duration: 0.5, ease: "easeInOut" as const },
  },
  hoverLift: {
    whileHover: { y: -6 },
    transition: { type: "spring", stiffness: 300 } as const,
  },
  slideInRight: {
    initial: { x: 20, y: 30, opacity: 0 },
    whileInView: { x: 0, y: 0, opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
  
  slideInLeft: {
    initial: { x: -20, y: 30, opacity: 0 },
    whileInView: { x: 0, y: 0, opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.7, ease: "easeOut" as const },
  },

  stamp: {
    initial: { scale: 0.9, y: 30, opacity: 0 },
    whileInView: { scale: 1, y: 0, opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" as const },
  },

  projectCard: {
    rest: { y: 0 },
    hover: { y: -6 },
  },

  projectActionBadge: {
    rest: { scale: 0, opacity: 0 },
    hover: { scale: 1, opacity: 1 },
  },
} satisfies Record<string, HTMLMotionProps<"div"> | any>;


// import { HTMLMotionProps } from "framer-motion";

// export const entryPresets: Record<string, HTMLMotionProps<"div">> = {
//   // 1 - Entrada da direita para a esquerda de forma suave
//   smoothSlideInRight: {
//     initial: { x: 40, opacity: 0 },
//     whileInView: { x: 0, opacity: 1 },
//     viewport: { once: true, margin: "-100px" },
//     transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }, // Custom easeOut (Cubic) para maior suavidade
//   },

//   // 2 - Entrada da esquerda para a direita suave
//   smoothSlideInLeft: {
//     initial: { x: -40, opacity: 0 },
//     whileInView: { x: 0, opacity: 1 },
//     viewport: { once: true, margin: "-100px" },
//     transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
//   },

//   // 3 - Apenas subindo com o hover (efeito de elevação ao passar o mouse)
//   hoverLiftUp: {
//     initial: { y: 20, opacity: 0 },
//     whileInView: { y: 0, opacity: 1 },
//     viewport: { once: true, margin: "-100px" },
//     whileHover: { y: -8 },
//     transition: { 
//       type: "spring", 
//       stiffness: 260, 
//       damping: 25 
//     },
//   },
// };