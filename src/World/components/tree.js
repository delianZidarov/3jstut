import { CylinderBufferGeometry, ConeBufferGeometry, Mesh, MeshStandardMaterial, Group } from "../../../node_modules/three/build/three.module.js";

function createTree(x = 0, y = 0, z = 0) {
  const rt = 0.1;
  const rb = 0.1;
  const h = 0.3;
  const radialSegments = 20;
  const cylinderGeo = new CylinderBufferGeometry(rt, rb, h, radialSegments);
  const cylinderColor = new MeshStandardMaterial({ color: "brown" });
  const cylinder = new Mesh(cylinderGeo, cylinderColor);

  const radius = 0.3;
  const height = 0.8;
  const segements = 12;
  const coneGeo = new ConeBufferGeometry(radius, height, segements);
  const coneColor = new MeshStandardMaterial({ color: "green" });
  const cone = new Mesh(coneGeo, coneColor);
  cone.position.set(0, 0.4, 0);

  const tree = new Group();
  tree.add(cylinder);
  tree.add(cone);

  tree.position.set(x, y, z);
  return tree;
}
export { createTree };
