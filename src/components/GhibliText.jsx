/* eslint-disable react/no-unescaped-entities */

/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";

function GhibliText({ onComponentDone }) {
    const simulateAsyncOperation = async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a 2-second delay
        onComponentDone(); 
    };

  const [showGif, setShowGif] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setShowGif(false);
      setShowText(true);
      simulateAsyncOperation();
    }, 2100); // Delay of 5000 milliseconds (5 seconds)

    return () => {
      clearTimeout(timer); // Cleanup: Clear the timeout if the component unmounts before the GIF ends
    };
  }, []);

  return (
    <div className="flex w-screen  items-center">
      {showGif ? (
        <img className="mt-5" src="src/images/haku-blowing.gif" alt="Animated GIF" />
      ) : (
        // <img src = "src/images/haku-last-frame.png"></img>
        <></>
      
      )}

      {showText ? (
        <div className="ghibli-animation self-center title w-screen flex justify-center items-center text-center mt-5">
          Reveling in Studio Ghibli's Symphony of Details
        </div>
      ) : (
        <div></div>
      )}

    </div>
  );
}

export default GhibliText;
