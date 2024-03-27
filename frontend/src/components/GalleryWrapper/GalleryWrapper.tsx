"use client";

import { Gallery, Image } from "react-grid-gallery";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface IProps {
  images: {
    src: string;
    width: number;
    height: number;
    alt: string;
  }[];
}

export const GalleryWrapper: React.FC<IProps> = ({ images }) => {
  const [index, setIndex] = useState(-1);

  const handleClick = (index: number, item: Image) => setIndex(index);

  const slides = images.map(({ src, width, height }) => ({
    src,
    width,
    height,
  }));

  return (
    <div className="container prose">
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
  return (
    <div className="container prose px-10 dark:prose-invert sm:px-5 md:px-0">
      <Gallery images={images} />
    </div>
  );
};
