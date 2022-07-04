import { BoxBufferGeometry, Mesh, MeshStandardMaterial } from "../../../node_modules/three/build/three.module.js";

function createCube(x = 0, y = 0, z = 0) {
  const spec = { color: "orchid" };
  const geometry = new BoxBufferGeometry(2, 2, 2);

  const material = new MeshStandardMaterial(spec);

  const cube = new Mesh(geometry, material);

  cube.position.set(x, y, z);
  cube.rotation.set(-0.5, -0.1, 0.8);
  return cube;
}

export { createCube };
