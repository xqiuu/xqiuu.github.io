import "../../index.css";
import "../../styles/home.css";

import { NavBar } from "../../components/NavBar";
import { ArtSection } from "../../sections/ArtSection";
import { ContactSection } from "../../sections/ContactSection";

export default function ArtPage() {
  return (
    <div className="Page">
      <NavBar />
      <ArtSection />
      <ContactSection />
    </div>
  );
}
