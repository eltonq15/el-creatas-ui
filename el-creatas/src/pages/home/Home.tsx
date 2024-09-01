import ImageGallery from "react-image-gallery";
import { images } from "./configs";

import "./styles.scss";

export const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "50vh",
        backgroundColor: "#ede8de",
        position: "relative",
      }}
    >
      <div
        style={{
          width: 600,
          maxWidth: "100%",
        }}
      >
        <ImageGallery
          items={images}
          showThumbnails={false}
          showPlayButton={false}
          showFullscreenButton={false}
          showIndex={false}
          showBullets={false}
          autoPlay
          infinite
          showNav={false}
          slideDuration={800}
          slideInterval={3000}
        />
      </div>
    </div>
  );
};
