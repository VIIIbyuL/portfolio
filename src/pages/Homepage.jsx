// eslint-disable-next-line no-unused-vars
import React, { useCallback, useEffect } from "react";
import Particles from "react-particles";
import Animation from "../components/Animation";
import SkillsBar from "../components/SkillsBar";
import AutoType from "../components/AutoType";
import { loadSlim } from "tsparticles-slim"; // Import the loadSlim function
import ContactMe from "../components/ContactMe";

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

  const options = {
    background: {
      color: {
        value: "#343434",
      },
      fullScreen: {
        enable: false,
        zIndex: -1,
      },
      style: {
        position: "absolute",
        height: "100%",
        top: "0",
        left: "0",
      },
    },
    fpsLimit: 120,
    interactivity: {
      detectsOn: "window",
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
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
        value: 150,
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
    particlesContainer: {
      // Set the height of the particles container here to match your desired section's height
      height: "100vh", // Change this value to your desired height
    },
  };

  return (
    <div className="snap-proximity snap-y">
      {/* Particle Effect */}

      {/* Navigation */}
      <div className="h-screen snap-center ">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={options}
          className=" z-[-1] h-screen w-screen"
        />
        <Animation />
        <AutoType />
        <SkillsBar />
      </div>

      <div className=" h-screen snap-center">yep</div>
      {/* Content */}
      <div className="bg-black h-screen snap-center">
        {/* Wrap the content you want to scroll in a div with specific height */}
        <ContactMe />
      </div>
    </div>
  );
}

export default Homepage;
