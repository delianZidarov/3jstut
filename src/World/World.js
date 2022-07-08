import { createCamera } from "./components/camera.js";
import { createMeshGroup } from "./components/meshGroup.js";
import { createScene } from "./components/scene.js";
import { createTree } from "./components/tree.js";
import { createLights } from "./components/lights.js";
import { Train } from "./components/Train/Train.js";

import { createControls } from "./systems/controls.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";

let camera;
let scene;
let renderer;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const controls = createControls(camera, renderer.domElement);

    const group = createMeshGroup();

    const tree = createTree(-2, -2.5, 0);

    const train = new Train();

    const { mainLight, ambientLight } = createLights();

    loop.updatables.push(train, controls);

    scene.add(train, mainLight, ambientLight);

    // controls.target.copy(tree.position);
    controls.enableDamping = true;

    const resizer = new Resizer(container, camera, renderer);
    // resizer.onResize = () => {
    //   this.render();
    // };
  }

  render() {
    renderer.render(scene, camera);
  }
  start() {
    loop.start();
  }
  stop() {
    loop.stop();
  }
}

export { World };
