// eslint-disable-next-line no-unused-vars
import React, { useCallback, useEffect } from "react";
import Particles from "react-particles";
import Navigation from "../components/Navigation";
import Animation from "../components/Animation";
import SkillsBar from "../components/SkillsBar";
import AutoType from "../components/AutoType";
import { loadSlim } from "tsparticles-slim"; // Import the loadSlim function

function Homepage() {
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
      {/* Particle Effect */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#343434",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 50,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      />

      {/* Other components */}
      <div className="relative z-10">
        <Navigation />
        {/* <div>HOME PAGE COMPONENTS HERE</div> */}
        <Animation />

        {/* AutoType */}
        <AutoType />

        {/* <SkillsBar */}
        <SkillsBar />
      </div>
    </div>
  );
}

export default Homepage;
