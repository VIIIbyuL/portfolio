/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { ReactComponent as RightArrow } from '../icons/right-arrow.svg';
import RenderText from "./RenderText";

function GhibliTier({ componentDone }) {
  const storySections = [
    "In the serene suburbs of New York, amidst lush greenery and tranquility, I embarked on a coding journey inspired by Studio Ghibli.",
    "Like the enchanting tales crafted by Hayao Miyazaki and his team, coding captivated my imagination with its limitless possibilities.",
    "The meticulous attention to detail and artistry displayed in Studio Ghibli's animations inspired me to strive for excellence in my coding endeavors.",
    "Just as Studio Ghibli effortlessly transported me to magical realms, coding allowed me to create digital wonders and explore profound concepts.", 
    "Motivated by their mastery of craftsmanship and the power of storytelling, I continue on my coding journey, bringing ideas to life and infusing joy into the digital realm."
  ]

  const [storyIndex, setStoryIndex] = useState(0);

  const handleClick = () => {
    setStoryIndex((prevIndex) => (prevIndex + 1) % storySections.length);
    console.log(`${storyIndex}`);
  }

  return (
    <div className="flex justify-center mt-5">
      {componentDone && (
        <div className="p-8 bg-gray-500 rounded-lg w-1/2">
          
          <RenderText index = {storyIndex} text = {storySections[storyIndex]} />

          <button onClick={ handleClick }>
            <RightArrow className = 'h-24 w-24' />
          </button>
        </div>
      )}
    </div>
  );
}

export default GhibliTier;
