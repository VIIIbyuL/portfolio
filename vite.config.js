import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

import gltfPlugin from 'vite-plugin-gltf';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), gltfPlugin()],
  assetsInclude: ['**/*.glb'],
});
