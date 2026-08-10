import { art } from "../data/art";
import { PhotoGrid } from "../components/PhotoGrid";

export function ArtSection() {
  const items = art.map((a, i) => ({
    id: `${a.alt}-${i}`,
    title: a.alt,
    image: a.image,
    alt: a.alt,
  }));

  return (
    <section className="art" id="art">
      <PhotoGrid items={items} />
    </section>
  );
}
