
import scribbleHeroImage from "../assets/projects/ScribbleHero.png";
import memoryAlbumImage from "../assets/projects/Seashells.jpg";
import lowVision from "../assets/projects/lowVision.png";
import hackMITImage from "../assets/projects/banner.jpg";

export type Project = {
  title: string;
  href: string;
  image: string;
  alt: string;
  description: string;
};

export const projects: Project[] = [
  {
    title: "Scribble Hero (MIT Reality Hack 2026)",
    href: "https://devpost.com/software/scribblehero",
    image: scribbleHeroImage,
    alt: "scribble hero",
    description: "AR-based 3D drawing game built for Snap Spectacles; Honorable Mention in Game Prototyping Track",
  },
  {
    title: "the memory album",
    href: "https://xqiuu.github.io/the-memory-album/",
    image: memoryAlbumImage,
    alt: "the memory album",
    description: "digital interactive narrative project",
  },
  {
    title: "3d model visualizer for low vision users",
    href: "https://github.com/xqiuu/Tech-for-Low-Vision",
    image: lowVision,
    alt: "3d model visualization",
    description: "assistive technology project for visually impaired users",
  },
  {
    title: "Task Bars (HackMIT 2025)",
    href: "https://task-bars.vercel.app/",
    image: hackMITImage,
    alt: "hackmit",
    description: "task tracker app for productivity management",
  },
];
