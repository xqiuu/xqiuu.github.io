import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ProjectsPage from "./pages/projects/ProjectsPage";
import ArtPage from "./pages/art/ArtPage";
import DesignPage from "./pages/design/DesignPage";
import ResumePage from "./pages/resume/ResumePage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/art" element={<ArtPage />} />
        <Route path="/design" element={<DesignPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </HashRouter>
  );
}
