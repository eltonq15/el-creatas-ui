// @ts-ignore next-line
import background from "../../assets/background.jpg";
import { Card, CardContent } from "../../components/shadcn/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/shadcn/components/ui/carousel";

import ImageGallery from "react-image-gallery";
import "./styles.scss";

const images = [
  {
    original: "/formatted/aura.jpeg",
    thumbnail: "/formatted/aura.jpeg",
  },
  {
    original: "/formatted/blossom.jpeg",
    thumbnail: "/formatted/blossom.jpeg",
  },
  {
    original: "/formatted/ellegance.jpeg",
    thumbnail: "/formatted/ellegance.jpeg",
  },
  {
    original: "/formatted/essence.jpeg",
    thumbnail: "/formatted/essence.jpeg",
  },
  {
    original: "/formatted/harmonia.jpeg",
    thumbnail: "/formatted/harmonia.jpeg",
  },
  {
    original: "/formatted/refine.jpeg",
    thumbnail: "/formatted/refine.jpeg",
  },
];

export const Home = () => {
  return (
    // center everything horizontally
    <div
      style={{
        height: "500px",
        aspectRatio: "4/3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px",
        margin: "24px auto",
      }}
    >
      <ImageGallery
        items={images}
        showThumbnails={false}
        showPlayButton={false}
        showFullscreenButton={false}
        showIndex={false}
        showBullets={true}
        autoPlay={true}
        infinite={true}
        showNav={false}
        slideDuration={500}
      />
    </div>
  );
};
