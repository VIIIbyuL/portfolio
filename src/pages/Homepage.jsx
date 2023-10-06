// eslint-disable-next-line no-unused-vars
import React, { useCallback, useEffect } from "react";
import Particles from "react-particles";
import Animation from "../components/Animation";
import SkillsBar from "../components/SkillsBar";
import AutoType from "../components/AutoType";
import { loadSlim } from "tsparticles-slim"; // Import the loadSlim function
import ContactMe from "../components/ContactMe";
import ThreeModelViewer from "../components/threeModelViewer";

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
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 631.3280775270874,
        },
      },
      color: {
        value: "#fff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 500,
        color: "#ffffff",
        opacity: 0.4,
        width: 2,
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "bottom",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "bubble",
        },
        onclick: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 0.5,
          },
        },
        bubble: {
          distance: 400,
          size: 4,
          duration: 0.3,
          opacity: 1,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <div className="scroll-container">
      {/* Navigation */}
      <div className="scroll-area relative flex items-center justify-center flex-col">
        {/* Particle Effect */}
        <div className="absolute top-0 left-0 w-full h-full z-[-1] pointer-events-none">
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={options}
          />
        </div>

        <Animation />
        <AutoType />
        <SkillsBar />
      </div>

      <div className="scroll-area">
        <ThreeModelViewer />
      </div>

      {/* Content */}
      <div className="scroll-area bg-gray-400">
        {/* Add more content here to enable scrolling */}
        <ContactMe />
      </div>
    </div>
  );
}

export default Homepage;
