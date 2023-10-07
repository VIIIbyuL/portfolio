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
    camera.position.set(0, 10, 10);
    cameraRef.current = camera;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;
    containerRef.current.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load("./space_boi.glb", (gltf) => {
      const model = gltf.scene;
      scene.add(model);

      const animate = () => {
        model.rotation.y += 0.01;
        renderer.render(scene, cameraRef.current);
        animationFrameId = requestAnimationFrame(animate);
      };

      animate();
    });

    // Cleanup function: Remove the scene and stop the animation when the component unmounts
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId); // Stop the animation loop
      }
      sceneRef.current.remove(sceneRef.current);
      rendererRef.current.dispose();
    };
  }, []);

  return <div ref={containerRef}></div>;
}

export default ThreeModelViewer;
