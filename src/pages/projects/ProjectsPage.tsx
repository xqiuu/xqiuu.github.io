import "../../index.css";
import "../../styles/home.css";

import { NavBar } from "../../components/NavBar";
import { ProjectsSection } from "../../sections/ProjectsSection";
import { ContactSection } from "../../sections/ContactSection";

export default function ProjectsPage() {
  return (
    <div className="Page">
      <NavBar />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
