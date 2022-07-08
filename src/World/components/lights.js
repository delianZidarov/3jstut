import {
  DirectionalLight,
  PointLight,
  SpotLight,
  RectAreaLight,
  AmbientLight,
  HemisphereLight,
} from "../../../node_modules/three/build/three.module.js";

function createLights() {
  const mainLight = new DirectionalLight(0xffffff, 5);
  //move the light right, up, and towards us
  mainLight.position.set(10, 10, 10);

  const ambientLight = new HemisphereLight(
    "white", // sky color
    "darkslategrey", //ground color
    3
  );

  return { mainLight, ambientLight };
}

export { createLights };
