import { OrbitControls } from "../../../node_modules/three/examples/jsm/controls/OrbitControls.js";

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);
  controls.tick = () => controls.update;
  return controls;
}

export { createControls };
