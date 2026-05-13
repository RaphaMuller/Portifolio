import { motion } from "framer-motion";

interface ComicCarrouselProps {
  // Define any props you want to pass to the ComicCarrousel component
  items: string[]; // Example prop: an array of items to display in the carrousel
}

export default function ComicCarrousel({ items }: ComicCarrouselProps) {
  return (
    <div className="px-2 py-4">
      <motion.div
        className="overflow-hidden border-4 border-black"
        style={{
          backfaceVisibility: "hidden",
          background:
            "linear-gradient(160deg, #1c1c1c 0%, #2e2e2e 50%, #1a1a1a 100%)",
          boxShadow: "4px 4px 0 0 #000, inset 0 0 0 1px rgba(255,215,0,0.15)",
        }}>

        

      </motion.div>
    </div>
  );
}
