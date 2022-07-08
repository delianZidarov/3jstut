import { SphereBufferGeometry, Mesh, MeshStandardMaterial, MathUtils, TextureLoader, Group } from "../../../node_modules/three/build/three.module.js";

function createMeshGroup() {
  const group = new Group();
  const geometry = new SphereBufferGeometry(0.25, 20, 20);
  const material = new MeshStandardMaterial({ color: "indigo", flatShading: true });
  const protoSphere = new Mesh(geometry, material);
  const radiansPerSecond = MathUtils.degToRad(30);
  group.add(protoSphere);

  for (let i = 0; i < 1; i += 0.001) {
    const sphere = protoSphere.clone();
    sphere.position.x = Math.cos(2 * Math.PI * i);
    sphere.position.y = Math.sin(2 * Math.PI * i);
    sphere.position.z = 2 + -i * 5;
    sphere.scale.multiplyScalar(0.01 + i);
    group.add(sphere);
  }

  group.scale.multiplyScalar(2);

  group.tick = (delta) => {
    group.rotation.z -= delta * radiansPerSecond;
  };

  return group;
}

export { createMeshGroup };
