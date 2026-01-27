import "../index.css";
import "../styles/home.css";

import { NavBar } from "../components/NavBar";
import { AboutSection } from "../sections/AboutSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { ArtSection } from "../sections/ArtSection";
import { ContactSection } from "../sections/ContactSection";

export default function Home() {
  return (
    <div className="Home">
      <NavBar />
      <AboutSection />
      <ProjectsSection />
      <ArtSection />
      <ContactSection />
    </div>
  );
}