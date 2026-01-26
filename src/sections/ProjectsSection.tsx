
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

export function ProjectsSection() {
  return (
    <section className="projects" id="projects">
      <div><h1>projects</h1></div>
      <div className="gallery">
        {projects.map((p) => (
            <ProjectCard key={p.href} {...p} />
        ))}
      </div>
    </section>
  );
}
