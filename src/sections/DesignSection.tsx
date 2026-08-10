import { design } from "../data/design";
import { PhotoGrid } from "../components/PhotoGrid";

export function DesignSection() {
  const items = design.map((d, i) => ({
    id: d.href ?? `${d.title}-${i}`,
    title: d.title,
    image: d.image,
    alt: d.alt,
    description: d.description,
    href: d.href,
  }));

  return (
    <section className="design" id="design">
      <PhotoGrid items={items} />
    </section>
  );
}
