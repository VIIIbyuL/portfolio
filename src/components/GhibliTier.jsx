/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import { ReactComponent as RightArrow } from "../icons/right-arrow.svg";

function GhibliTier({ componentDone }) {
  const storySections = [
    "In the serene suburbs of New York, amidst lush greenery and tranquility, I embarked on a coding journey inspired by Studio Ghibli.",
    "Like the enchanting tales crafted by Hayao Miyazaki and his team, coding captivated my imagination with its limitless possibilities.",
    "The attention to detail and artistry in Studio Ghibli's animations inspired me to strive for excellence in my coding endeavors.",
    "Just as Studio Ghibli effortlessly transported me to magical realms, coding allowed me to create digital wonders and explore profound concepts.",
    "Motivated by their mastery of craftsmanship, I continued on my coding journey, bringing ideas to life in the digital realm. ",
  ];

  const storyBackgrounds = [
    "src/images/arriety.png",
    "src/images/totoro.png",
    "src/images/howl-bed.png",
    "src/images/totoro2.png",
    "src/images/spirit.png",
  ];

  const [storyIndex, setStoryIndex] = useState(0);
  const about = document.getElementById("aboutpage");

  const handleClick = () => {
    setStoryIndex((prevIndex) => (prevIndex + 1) % storySections.length);
    console.log(`${storyIndex}`);
    about.style.backgroundImage = `url(${storyBackgrounds[storyIndex]})`;
  };

  return (
    <div className="flex justify-center mt-5">
      {componentDone && (
        <div className="bg-[#1A1A1A] grid grid-cols-4 max-w-2xl rounded-full shadow-2xl">
          <div className="col-span-3 p-8 rounded-lg w-full h-full text-xl flex-wrap shadow-black">
            {storySections[storyIndex]}
          </div>
          <button
            className="col-span-1 flex items-center justify-center"
            onClick={handleClick}
          >
            <RightArrow className="w-12 h-12 nav-bar-ani nav-bar-click" />
          </button>
        </div>
      )}
    </div>
  );
}

export default GhibliTier;
