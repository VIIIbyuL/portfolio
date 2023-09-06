/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

import { ReactComponent as RightArrow } from "../icons/right-arrow.svg";

import arrietyImage from "../images/arriety-min.jpg";
import totoroImage from "../images/totoro-min.jpg";
import howlBedImage from "../images/howl-bed-min.jpg";
import windRisesImage from "../images/wind-rises-min.jpg";
import spiritImage from "../images/spirit-min.jpg";

function GhibliTier({ componentDone }) {
  const storySections = [
    "In the serene suburbs of New York, amidst lush greenery and tranquility, I embarked on a coding journey inspired by Studio Ghibli...",
    "Like the enchanting tales crafted by Hayao Miyazaki and his team, coding captivated my imagination with its limitless possibilities...",
    "The attention to detail and artistry in Studio Ghibli's animations inspired me to strive for excellence in my coding endeavors...",
    "Just as Studio Ghibli effortlessly transported me to magical realms, coding allowed me to create digital wonders and explore profound concepts...",
    "Motivated by their mastery of craftsmanship, I continued on my coding journey, bringing ideas to life in the digital realm. ",
  ];

  const storyBackgrounds = [
    arrietyImage,
    totoroImage,
    howlBedImage,
    windRisesImage,
    spiritImage,
  ];

  const [isChange, setIsChange] = useState(false);

  const [storyIndex, setStoryIndex] = useState(0);
  const about = document.getElementById("aboutpage");

  const handleClick = () => {
    setIsChange(true);

    // Set opacity to 0 with a transition
    about.style.transition = "opacity 0.5s"; // Apply a transition for opacity change
    about.style.opacity = 0;

    // Delay to allow the opacity transition to take effect
    setTimeout(() => {
      // Update the background image
      about.style.backgroundImage = `url(${storyBackgrounds[storyIndex]})`;

      // Reset the transition property and set opacity back to 1
      about.style.transition = ""; // Reset transition property
      about.style.opacity = 1; // Set opacity back to 1

      // Update story index and loading state
      setStoryIndex((prevIndex) => (prevIndex + 1) % storySections.length);
      setIsChange(false);
    }, 500);
  };

  useEffect(() => {
    if (componentDone) {
      const about = document.getElementById("aboutpage");
      about.style.backgroundImage = `url(${spiritImage})`;
    }
  }, [componentDone]);

  return (
    <div className="flex justify-center mt-5">
      {componentDone &&
        (isChange ? (
          <div className="loader"></div>
        ) : (
          <div className="bg-[#1A1A1A] grid grid-cols-4 max-w-2xl rounded-full shadow-lg shadow-black">
            <div className="col-span-3 p-8 rounded-lg w-full h-full text-xs md:text-xl flex-wrap shadow-black">
              {storySections[storyIndex]}
            </div>
            <button
              className="col-span-1 flex items-center justify-center"
              onClick={handleClick}
            >
              <RightArrow className="w-12 h-12 nav-bar-ani nav-bar-click" />
            </button>
          </div>
        ))}
    </div>
  );
}

export default GhibliTier;
