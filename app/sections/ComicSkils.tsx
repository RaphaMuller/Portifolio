import { ActionBadge } from "../components/ui/ActionBadge/ActionBadge";

export default function ComicSkills() {
  return (
    <section className="section-hero bg-comic-shadow">
      <div className="mx-auto max-w-6xl px-4">
        <ActionBadge
          noPadding={false}
          theme="yellow"
          behavior="static"
          className="mb-12 text-center text-3xl md:text-5xl"
        >
          <span>CINTO DE UTILIDADES</span>
        </ActionBadge>
      </div>
    </section>
  );
}
