// eslint-disable-next-line no-unused-vars
import React, { useCallback, useEffect } from "react";
import Navigation from "../components/Navigation";
import ContactMe from "../components/ContactMe";

function Contactpage() {
  return (
    <div className="relative h-full overflow-hidden">
      <div className="relative z-10">
        <Navigation />

        {/* ContactMe */}
        <ContactMe />
      </div>
    </div>
  );
}

export default Contactpage;
