// eslint-disable-next-line no-unused-vars
import React from "react";
import Navigation from "../components/Navigation";
import Animation from "../components/Animation";
import SkillsBar from "../components/SkillsBar";
import AutoType from "../components/AutoType";

function Homepage() {
  return (
    <div className="h-full overflow-hidden">
      <Navigation />
      {/* <div>HOME PAGE COMPONENTS HERE</div> */}
      <Animation />

      {/* AutoType */}
      <AutoType />

      {/* <SkillsBar */}

      <SkillsBar />
    </div>
  );
}

export default Homepage;
