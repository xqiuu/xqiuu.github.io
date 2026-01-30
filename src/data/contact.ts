import github from "../assets/logos/github-mark.svg";
import instagram from "../assets/logos/instagram_logo.png";
import linkedin from "../assets/logos/linkedin.png";

export type Contact = {
  href: string;
  image: string;
  alt: string;
};

export const contacts: Contact[] = [
    {
        href: "https://github.com/xqiuu",
        image: github,
        alt: "github",
    },

    {
        href: "https://www.instagram.com/huskiecat25/",
        image: instagram,
        alt: "instagram",
    },

    {
        href: "https://www.linkedin.com/in/catherine-zhao-2b25112a0/",
        image: linkedin,
        alt: "linkedin",
    },
];