import '../index.css'
import '../styles/home.css'
import aboutImage from "../assets/about.png";
import memoryAlbumImage from "../assets/projects/Seashells.jpg";
import hackMITImage from "../assets/projects/banner.jpg";
import github from "../assets/logos/github-mark.svg"
import instagram from "../assets/logos/instagram_logo.png"

export default function Home() {
  return (
    <div className="Home">
    <div className="about">
      <h1>welcome!</h1>
      <p>
        hii, i'm catherine :&gt;
        <br />
        i'm a first year undergraduate at MIT
        <br />
        studying 6-3 (computer science & engineering)
        <br />
        i also enjoy writing silly stories and drawing digital art 
        <br />
        (including the illustrations on this website! ^^)
      </p>
    </div>

    <div className="projects">
      <div className="project-container">
        <img src={memoryAlbumImage} alt="the memory album" />
        <a href="https://xqiuu.github.io/the-memory-album/" target="blank">the memory album</a> <br/>
        <div className="project-description"><i>digital interactive narrative project</i></div>
      </div>
      <div className="project-container">
        <img src={hackMITImage} alt="the memory album" />
        <a href="https://task-bars.vercel.app/" target="blank">HackMIT 2025</a> <br/>
        <div className="project-description"><i>task tracker (first full-stack web app)</i></div>
      </div>
      <h1>projects</h1>
    </div>

    <div className="art">
      <h1>
        <a href="https://www.instagram.com/huskiecat25/" target="blank" style={{color: "white"}}>digital art &gt;</a>
      </h1>
    </div>

    <div className="contact">
      <img src={aboutImage} alt="about" style={{width: '30%', float: "left", paddingLeft: "10vw", paddingRight: "10vw", verticalAlign: "middle", zIndex: "99"}} />
      <h1>
        find me on:
      </h1>
      <br />
      <div className="socials">
        <a href="https://github.com/xqiuu">
          <img src={github} alt="github" />
        </a>
        <a href="https://www.instagram.com/huskiecat25/">
          <img src={instagram} alt="instagram" />
        </a>
      </div>
    </div>
    </div>
  );
}
