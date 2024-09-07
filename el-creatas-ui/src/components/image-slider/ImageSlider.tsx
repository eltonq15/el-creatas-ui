import ReactImageGallery from "react-image-gallery";

import "./styles.scss";

type Image = {
  original: string;
  thumbnail: string;
};

type ImageSliderProps = {
  images: Image[];
  configs?: any;
};

export const ImageSlider = ({ images, configs = {} }: ImageSliderProps) => {
  return (
    <div className="image-slider-container">
      <div className="image-slider">
        <ReactImageGallery
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
          {...configs}
        />
      </div>
    </div>
  );
};
