// eslint-disable-next-line no-unused-vars
import React from "react";
import Navigation from "../components/Navigation";
import GhibliText from "../components/GhibliText";
import GhibliTier from "../components/GhibliTier";
import ThreeModelViewer from "../components/threeModel";

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

  return (
    <>
      <Navigation />
      <div id="aboutpage" style={style} className="h-screen">
        <ThreeModelViewer />
      </div>
    </>
  );
}

export default Aboutpage;
