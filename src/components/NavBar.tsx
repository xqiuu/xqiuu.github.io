import { Link } from "react-router-dom";
import "../styles/navbar.css";

export function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">about</Link>
      <Link to="/projects">projects</Link>
      <Link to="/art">art</Link>
      <Link to="/design">design</Link>
      <Link to="/resume">resume</Link>
    </nav>
  );
}
