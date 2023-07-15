// eslint-disable-next-line no-unused-vars
import React from "react";
import Navigation from "../components/Navigation";
import Ghibli from "../components/Ghibli";

// lets make the about page about my interests
function Aboutpage() {
  return (
    <div>
      <Navigation />

      {/* Ghibli */}
      <Ghibli />
    </div>
  );
}

export default Aboutpage;
