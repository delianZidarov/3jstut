import { Clock } from "../../../node_modules/three/build/three.module.js";

const clock = new Clock();

class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
  }
  start() {
    this.renderer.setAnimationLoop(() => {
      //tell every animated object to  tick forward one frame
      this.tick();

      //render a frame
      this.renderer.render(this.scene, this.camera);
    });
  }
  stop() {
    this.renderer.setAnimationLoop(null);
  }
  tick() {
    const delta = clock.getDelta();
    this.updatables.forEach((item) => item.tick(delta));
  }
}

export { Loop };
