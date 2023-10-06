import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

function ThreeModelViewer() {
  const containerRef = useRef();
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Create a scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, // Adjust the field of view (fov) to fit your needs
      window.innerWidth / window.innerHeight, // Keep aspect ratio based on window size
      0.1,
      1000,
    );

    camera.position.set(0, 2, 10); // Adjusted camera position
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(windowSize.width, windowSize.height);

    // Append the renderer's DOM element to the component's container
    containerRef.current.appendChild(renderer.domElement);

    // Load the 3D model using the GLTFLoader
    const loader = new GLTFLoader();
    loader.load("./lost_programmer.glb", (gltf) => {
      const model = gltf.scene;

      // Add the loaded model to the scene
      scene.add(model);

      // Set camera position and animate the scene as needed

      const animate = () => {
        requestAnimationFrame(animate);

        // Rotate the model around the y-axis
        const model = scene.children[0];
        model.rotation.y += 0.01;

        renderer.render(scene, camera);
      };

      animate();
    });

    // Add OrbitControls to the scene

    // Handle window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      camera.aspect = windowSize.width / windowSize.height;
      camera.updateProjectionMatrix();

      renderer.setSize(windowSize.width, windowSize.height);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);

  return (
    <div ref={containerRef} style={{ width: "100vw", height: "100vh" }}></div>
  );
}

export default ThreeModelViewer;
