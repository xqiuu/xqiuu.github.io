import chkchkboomvertical1 from "../assets/design/chkchkboomvertical1.jpeg";
import chkchkboomvertical2 from "../assets/design/chkchkboomvertical2.jpeg";
import chkchkboomtrailer from "../assets/design/chkchkboomtrailer.jpeg";
import strait2taiwan from "../assets/design/strait2taiwan2026.jpeg";
import assistivetechposter from "../assets/design/assistivetechposter.jpeg";
import assistivetechflyer from "../assets/design/assistivetechflyer.jpeg"

export type DesignWork = {
  title: string;
  image: string;
  alt: string;
  description?: string;
  href?: string;
};

export const design: DesignWork[] = [
    {
        title: "Chk Chk Boom Promo Poster 1",
        image: chkchkboomvertical1,
        alt: "chk chk boom promo poster 1",
    },
    {
        title: "Chk Chk Boom Promo Poster 2",
        image: chkchkboomvertical2,
        alt: "chk chk boom promo poster 2",
    },
    {
        title: "Chk Chk Boom Promo Trailer Thumbnail",
        image: chkchkboomtrailer,
        alt: "chk chk boom trailer thumbnail",
    },
    {
        title: "Strait to Taiwan 2026 Menu",
        image: strait2taiwan,
        alt: "strait to taiwan menu design",
    },
    {
        title: "Assistive Tech Poster",
        image: assistivetechposter,
        alt: "assistive tech poster",
    },
    {
        title: "Assistive Tech Flyer",
        image: assistivetechflyer,
        alt: "assistive tech flyer",
    }
];
