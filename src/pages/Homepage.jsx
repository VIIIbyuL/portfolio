// eslint-disable-next-line no-unused-vars
import React from "react";
import Navigation from "../components/Navigation";
import Animation from "../components/Animation";
import SkillsBar from "../components/SkillsBar";

function Homepage() {
  return (
    <div>
      <Navigation />
      {/* <div>HOME PAGE COMPONENTS HERE</div> */}
      <Animation />
      {/* <SkillsBar */}
      <SkillsBar />
    </div>
  );
}

export default Homepage;
