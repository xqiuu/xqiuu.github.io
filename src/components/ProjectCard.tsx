
import type { Project } from "../data/projects";

export function ProjectCard({ title, href, image, alt, description }: Project) {
  return (
    <div className="project-container">
        <a href={href} target="_blank" rel="noreferrer">
            <img src={image} alt={alt} />
            <h3>{title}</h3>
        <div className="project-description">
            <p>{description}</p>
        </div>
      </a>
    </div>
  );
}
