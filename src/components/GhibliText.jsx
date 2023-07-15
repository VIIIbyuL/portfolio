// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";

function GhibliText() {
  const [showGif, setShowGif] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGif(false);
      setShowText(true);
    }, 2100); // Delay of 5000 milliseconds (5 seconds)

    return () => {
      clearTimeout(timer); // Cleanup: Clear the timeout if the component unmounts before the GIF ends
    };
  }, []);

  return (
    <div className="grid grid-cols-2 w-1/2">
      {showGif ? (
        <img src="src/images/haku-blowing.gif" alt="Animated GIF" />
      ) : (
        <div></div>
      )}

      {showText ? <div>my love for ghibli</div> : <div></div>}
    </div>
  );
}

export default GhibliText;
