import { ActionBadge } from "../components/ui/ActionBadge/ActionBadge";
import BeltPouch from "../components/ui/ComicCarrousel/BeltPouch";
import { NextArrow } from "../components/ui/ComicCarrousel/NextArrow";
import { PrevArrow } from "../components/ui/ComicCarrousel/PrevArrow";
import { beltItems } from "../constants/itemsCarrosel";

export default function ComicSkills() {
  return (
    <section className="section-hero bg-comic-shadow">
      <div className="mx-auto max-w-6xl px-4">

        <BeltPouch item={beltItems[0]} />

      </div>
    </section>
  );
}
