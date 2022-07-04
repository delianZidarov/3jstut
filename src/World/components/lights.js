import { DirectionalLight, PointLight, SpotLight, RectAreaLight } from "../../../node_modules/three/build/three.module.js";

function createLights() {
  const light = new DirectionalLight(0xffffff, 8);
  //move the light right, up, and towards us
  light.position.set(10, 10, 10);

  return light;
}

export { createLights };
