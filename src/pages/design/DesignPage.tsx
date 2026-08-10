import "../../index.css";
import "../../styles/home.css";

import { NavBar } from "../../components/NavBar";
import { DesignSection } from "../../sections/DesignSection";
import { ContactSection } from "../../sections/ContactSection";

export default function DesignPage() {
  return (
    <div className="Page">
      <NavBar />
      <DesignSection />
      <ContactSection />
    </div>
  );
}
