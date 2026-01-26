import forget from "../assets/art/Forget Resized Signed-min.jpg";
import thousandYears from "../assets/art/A Thousand Years From Now Signed-min.jpg";
import wishingTree from "../assets/art/Wishing Tree 3-min.jpg";
import inHiding from "../assets/art/In Hiding 1-min.jpg";
import vengeance from "../assets/art/Vengeance-min.jpg"

export type Artwork = {
    image: string;
    alt: string;
};

export const art: Artwork[] = [
    {
        image: forget,
        alt: "forget",
    },
    {
        image: thousandYears,
        alt: "a thousand years from now",
    },
    {
        image: wishingTree,
        alt: "wishing tree",
    },
    {
        image: inHiding,
        alt: "in hiding",
    },
    {
        image: vengeance,
        alt: "vengeance",
    },
];