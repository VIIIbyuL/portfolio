// eslint-disable-next-line no-unused-vars
import React, { useCallback, useEffect } from "react";
import Navigation from "../components/Navigation";
import ContactMe from "../components/ContactMe";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

function Contactpage() {
  const particlesInit = useCallback(async (tsParticles) => {
    // Load the slim version of tsParticles using loadSlim
    await loadSlim(tsParticles);
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log(container);
  }, []);

  useEffect(() => {
    // The useEffect hook is used to initialize the particle effect
    const initializeParticles = async () => {
      await particlesInit(window.tsParticles);
    };
    initializeParticles();
  }, [particlesInit]);



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
