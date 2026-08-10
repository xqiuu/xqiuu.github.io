import { projects } from "../data/projects";
import { ExpandableGallery } from "../components/ExpandableGallery";

export function ProjectsSection() {
  const items = projects.map((p) => ({
    id: p.href,
    title: p.title,
    image: p.image,
    alt: p.alt,
    description: p.description,
    href: p.href,
  }));

  return (
    <section className="projects" id="projects">
      <ExpandableGallery items={items} />
    </section>
  );
}
