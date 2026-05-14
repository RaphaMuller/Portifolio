import { ActionBadge } from "../components/ui/ActionBadge/ActionBadge";
import ComicCarrousel from "../components/ui/ComicCarrousel/ComicCarrousel";

export default function ComicSkills() {
  return (
    <section
      className="section-hero flex justify-center"
      id="skills"
      style={{
        background:
          "linear-gradient(180deg, #0d0d1a 0%, #1a1a2e 40%, #0d0d1a 100%)",
      }}
    >
      {/* <ActionBadge>
            CAPÍTULO 2: O ARSENAL TECNOLÓGICO
      </ActionBadge> */}

      <ComicCarrousel />
    </section>
  );
}
