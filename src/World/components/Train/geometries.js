import { BoxBufferGeometry, CylinderBufferGeometry } from "../../../../node_modules/three/build/three.module.js";

function createGeometries() {
  const cabin = new BoxBufferGeometry(2, 2.5, 1.5);

  const nose = new CylinderBufferGeometry(0.75, 0.75, 3, 12);

  const wheel = new CylinderBufferGeometry(0.4, 0.4, 1.75, 16);

  const chimney = new CylinderBufferGeometry(0.3, 0.1, 0.5);

  return { cabin, nose, wheel, chimney };
}
export { createGeometries };
