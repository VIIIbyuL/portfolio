import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

import model from "../images/lost_programmer/scene.gltf";

function ThreeModelViewer() {
  const containerRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();
  const sceneRef = useRef();

  useEffect(() => {
    const textBlockContent = [
      "Portfolio",
      "QRvoyant",
      "notsosocial",
      "photoshare",
    ];

    const captionContent = [
      "Designed using Reactjs, Tailwind, and Threejs",
      "QR code generator and scanner with Typescript, React-native, SQLite offline, firebase online and userauth",
      "Pseudo-social media site with tRPC, Nextjs, Prisma, Tailwind, NextAuth.js, Typescript",
      "Photo sharing site built with MySQL DB, Flask, and HTML",
    ];

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.set(0, 0, 8);
    cameraRef.current = camera;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;
    containerRef.current.appendChild(renderer.domElement);

    // Create a header div
    const header = document.createElement("div");
    header.textContent = "Projects";
    header.style.position = "absolute";
    header.style.color = "white";
    header.style.fontSize = "24px";
    header.style.zIndex = "1";
    header.style.top = "100px"; // Center vertically
    header.style.left = "50%"; // Center horizontally
    header.style.transform = "translate(-50%, -50%)"; // Center the header
    containerRef.current.appendChild(header);

    // Create a new HTML div element for each text block and its caption
    const textBlocks = [];

    // Define the positions for the text blocks
    const positions = [
      { top: "150px", left: "150px" },
      { top: "150px", right: "150px" },
      { bottom: "150px", left: "150px" },
      { bottom: "150px", right: "150px" },
    ];

    for (let i = 0; i < 4; i++) {
      const textBlock = document.createElement("div");
      textBlock.textContent = textBlockContent[i];
      textBlock.style.position = "absolute";
      textBlock.style.color = "white";
      textBlock.style.fontSize = "24px";
      textBlock.style.zIndex = "1";
      textBlock.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      textBlock.style.padding = "10px";

      // Set the position based on the positions array
      textBlock.style.top = positions[i].top || "";
      textBlock.style.bottom = positions[i].bottom || "";
      textBlock.style.left = positions[i].left || "";
      textBlock.style.right = positions[i].right || "";

      textBlocks.push(textBlock);
      containerRef.current.appendChild(textBlock);

      const caption = document.createElement("div");
      caption.textContent = captionContent[i];
      caption.style.position = "absolute";
      caption.style.color = "white";
      caption.style.fontSize = "18px";
      caption.style.zIndex = "2"; // Keep the same z-index for captions
      caption.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      caption.style.padding = "5px";
      caption.style.top = positions[i].top
        ? parseInt(positions[i].top) + 40 + "px"
        : "";
      caption.style.bottom = positions[i].bottom
        ? parseInt(positions[i].bottom) - 50 + "px"
        : "";
      caption.style.left = positions[i].left
        ? parseInt(positions[i].left) + "px"
        : "";
      caption.style.right = positions[i].right
        ? parseInt(positions[i].right) + "px"
        : "";

      // Limit the maximum width of captions
      caption.style.maxWidth = "400px"; // Adjust the maximum width as needed

      textBlocks.push(caption);
      containerRef.current.appendChild(caption);
    }

    const loader = new GLTFLoader();
    loader.load(
      model,
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);

        const animate = () => {
          model.rotation.y += 0.01;
          renderer.render(scene, cameraRef.current);
          requestAnimationFrame(animate);
        };

        animate();
      },

      (progress) => {
        console.log("Loading model...", progress.loaded / progress.total);
      },

      (error) => {
        console.error("Error loading the model:", error);
        // Handle the error, e.g., display an error message to the user
      },
    );
  }, []);

  return <div ref={containerRef}></div>;
}

export default ThreeModelViewer;
