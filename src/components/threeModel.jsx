import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

function ThreeModelViewer() {
  const containerRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();
  const sceneRef = useRef();

  useEffect(() => {
    let animationFrameId; // Declare a variable to store the animation frame ID

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
    header.textContent = "Some of my Projects";
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
      { top: "200px", left: "200px" },
      { top: "200px", right: "200px" },
      { bottom: "200px", left: "200px" },
      { bottom: "200px", right: "200px" },
    ];

    for (let i = 0; i < 4; i++) {
      const textBlock = document.createElement("div");
      textBlock.textContent = "Text Block " + (i + 1);
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

      // Create a caption for each text block
      const caption = document.createElement("div");
      caption.textContent = "Caption " + (i + 1);
      caption.style.position = "absolute";
      caption.style.color = "white";
      caption.style.fontSize = "18px";
      caption.style.zIndex = "1";
      caption.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      caption.style.padding = "5px";
      caption.style.top = positions[i].top
        ? parseInt(positions[i].top) + 40 + "px"
        : "";
      caption.style.bottom = positions[i].bottom
        ? parseInt(positions[i].bottom) - 30 + "px"
        : "";
      caption.style.left = positions[i].left
        ? parseInt(positions[i].left) + "px"
        : "";
      caption.style.right = positions[i].right
        ? parseInt(positions[i].right) + "px"
        : "";

      textBlocks.push(caption);
      containerRef.current.appendChild(caption);
    }

    const loader = new GLTFLoader();
    loader.load("./lost_programmer.glb", (gltf) => {
      const model = gltf.scene;
      scene.add(model);

      const animate = () => {
        model.rotation.y += 0.01;
        renderer.render(scene, cameraRef.current);
        animationFrameId = requestAnimationFrame(animate);
      };

      animate();
    });
  }, []);

  return <div ref={containerRef}></div>;
}

export default ThreeModelViewer;
