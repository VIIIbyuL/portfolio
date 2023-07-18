// eslint-disable-next-line no-unused-vars
import React from "react";
import Navigation from "../components/Navigation";
import GhibliText from "../components/GhibliText";
import GhibliTier from "../components/GhibliTier";
import { useState } from "react";

// lets make the about page about my interests
function Aboutpage() {
  const [componentDone, setComponentDone] = useState(false);

  const handleComponentDone = () => {
    setComponentDone(true);
  }

  return (
    <div className="">
      <Navigation />

      {/* Ghibli */}
      <GhibliText onComponentDone = {handleComponentDone} />
      <GhibliTier componentDone = { componentDone }/>
    </div>
  );
}

export default Aboutpage;
