import "../../index.css";
import "../../styles/home.css";

import { NavBar } from "../../components/NavBar";
import { ResumeSection } from "../../sections/ResumeSection";
import { ContactSection } from "../../sections/ContactSection";

export default function ResumePage() {
  return (
    <div className="Page">
      <NavBar />
      <ResumeSection />
      <ContactSection />
    </div>
  );
}
