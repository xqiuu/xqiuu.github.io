import { Link } from "react-router-dom";

export function AboutSection() {
  return (
    <section className="about" id="about">
      <div><h1>catherine zhao</h1></div>
      <p>
        hi! I'm Catherine ^^ I'm interested in graphics,{" "}
        <Link to="/projects">swe</Link>, <Link to="/art">art</Link>,{" "}
        <Link to="/design">design</Link>, and{" "}
        <a href="https://youtu.be/EOonnErOjLg?si=OJWWhgw-ejMid3y4">dancing</a>.
        take a look at my <Link to="/resume">resume</Link> too!
      </p>
    </section>
  );
}
