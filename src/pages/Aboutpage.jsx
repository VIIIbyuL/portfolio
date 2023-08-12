// eslint-disable-next-line no-unused-vars
import React from "react";
import Navigation from "../components/Navigation";
import GhibliText from "../components/GhibliText";
import GhibliTier from "../components/GhibliTier";
import PreLoad from "../components/PreLoad";
import { useState } from "react";

// lets make the about page about my interests
function Aboutpage() {
  const [componentDone, setComponentDone] = useState(false);

  const handleComponentDone = () => {
    setComponentDone(true);
  };
  const style = {
    // backgroundImage: 'url("src/images/spirit.png")',
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  };

  // Conditional style to be applied if componentDone is true
  const completedStyle = {
    backgroundImage: 'url("src/images/spirit.png")',
  };

  const mergedStyle = componentDone ? { ...style, ...completedStyle } : style;

  return (
    <><Navigation />
    <div id="aboutpage" style={mergedStyle} className="h-screen">
      
      <PreLoad />

      {/* Ghibli */}
      <GhibliText
        className="ease-animation"
        onComponentDone={handleComponentDone} />
      <GhibliTier className="ease-animation" componentDone={componentDone} />
    </div></>
  );
}

export default Aboutpage;
