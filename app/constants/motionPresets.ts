import { HTMLMotionProps } from "framer-motion";

export const motionPresets: Record<string, HTMLMotionProps<"div">> = {
  slideInRight: {
    initial: { x: 20, y: 30, opacity: 0 },
    whileInView: { x: 0, y: 0, opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.7, ease: "easeOut" },
  }as const,
  
  slideInLeft: {
    initial: { x: -20, y: 30, opacity: 0 },
    whileInView: { x: 0, y: 0, opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.7, ease: "easeOut" },
  }as const,

  stamp: {
    initial: { scale: 0.9, y: 30, opacity: 0 },
    whileInView: { scale: 1, y: 0, opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" },
  }as const,

  projectCard: {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  } as const,

} satisfies Record<string, HTMLMotionProps<"div">>;


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