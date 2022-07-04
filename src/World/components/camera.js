import { PerspectiveCamera } from "../../../node_modules/three/build/three.module.js";

function createCamera() {
  const camera = new PerspectiveCamera(
    35, // fov
    1, //aspect ration (dummy value)
    0.1, // near clipping plane
    100 // far clipping plane
  );

  camera.position.set(0, 0, 10);

  return camera;
}

export { createCamera };
