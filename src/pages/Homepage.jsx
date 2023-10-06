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
      // Set the height of the particles container here
      height: "400px", // Change this value to your desired height
    },
  };

  return (
    <div>
      {/* Particle Effect */}

      {/* Navigation */}
      <div className="particlesContainer h-screen overflow-hidden">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={options}
          className="fixed top-0 left-0 w-screen h-screen overflow-hidden z-[-1]"
        />
        <Animation />
        <AutoType />
        <SkillsBar />
      </div>

      {/* Content */}
      <div className="bg-black h-screen">
        {/* Wrap the content you want to scroll in a div with specific height */}
        
          <ContactMe />
        
      </div>
    </div>
  );
}

export default Homepage;
