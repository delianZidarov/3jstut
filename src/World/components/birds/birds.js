import { GLTFLoader } from "/../../node_modules/three/examples/jsm/loaders/GLTFLoader.js";

import { setupModel } from "./setupModels.js";

async function loadBirds() {
  const loader = new GLTFLoader();

  const [parrotData, storkData] = await Promise.all([loader.loadAsync("./assets/models/Parrot.glb"), loader.loadAsync("./assets/models/Stork.glb")]);

  console.log("Squaaawk", parrotData);

  const parrot = setupModel(parrotData);
  const stork = setupModel(storkData);

  return { parrot, stork };
}

export { loadBirds };
