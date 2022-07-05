import { BoxBufferGeometry, Mesh, MeshStandardMaterial, MathUtils } from "../../../node_modules/three/build/three.module.js";

function createCube(x = 0, y = 0, z = 0) {
  const spec = { color: "orchid" };
  const geometry = new BoxBufferGeometry(2, 2, 2);

  const material = new MeshStandardMaterial(spec);

  const cube = new Mesh(geometry, material);

  cube.position.set(x, y, z);
  cube.rotation.set(0, 0, 0);
  const radiansPerSecond = MathUtils.degToRad(3);
  //this method will be called once per frame
  cube.tick = (delta) => {
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };
  return cube;
}

export { createCube };
