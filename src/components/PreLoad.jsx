// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect } from "react";

function PreLoad() {
  useEffect(() => {
    const imgPath = [
      "../images/arriety.png",
      "../images/totoro.png",
      "../images/howl-bed.png",
      "../images/wind-rises.png",
      "../images/spirit.png",
    ];

    const preloadImages = () => {
      return imgPath.map((Path) => {
        const img = new Image();
        img.src = Path;
        return img;
      });
    };
    const preloadedImages = preloadImages();

    return () => {
      preloadedImages.forEach((img) => {
        img.src = "";
      });
    };
  }, []);

  return null;
}

export default PreLoad;
