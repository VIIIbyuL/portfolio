import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

function ThreeModelViewer() {
  const containerRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();
  const sceneRef = useRef(); // Add a reference for the scene

  useEffect(() => {
    // Create a scene, camera, and renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene; // Store the scene reference
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.set(0, -1, 8);
    cameraRef.current = camera; // Store the camera reference

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer; // Store the renderer reference

    // Append the renderer's DOM element to the component's container
    containerRef.current.appendChild(renderer.domElement);

    // Load the 3D model using the GLTFLoader
    const loader = new GLTFLoader();
    loader.load("./lost_programmer.glb", (gltf) => {
      const model = gltf.scene;

      // Add the loaded model to the scene
      scene.add(model);

      // Animate the scene
      const animate = () => {
        // Rotate the model around the y-axis
        model.rotation.y += 0.01;

        // Render the scene
        renderer.render(scene, cameraRef.current);

        requestAnimationFrame(animate); // Continue the animation loop
      };

      animate();
    });

    // Cleanup function: Remove the scene and stop the animation when the component unmounts
    return () => {
      sceneRef.current.remove(sceneRef.current);
      rendererRef.current.dispose();
    };
  }, []);

  return <div ref={containerRef}></div>;
}

export default ThreeModelViewer;
