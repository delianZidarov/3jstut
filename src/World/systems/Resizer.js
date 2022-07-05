const setSize = (container, camera, renderer) => {
  camera.aspect = container.clientWidth / container.clientHeight;
  //   camera.aspect = 64 / 256;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
  //   renderer.setSize(64, 256);
  renderer.setPixelRatio(window.devicePixelRatio);
  //   renderer.setPixelRatio(7);
};

class Resizer {
  constructor(container, camera, renderer) {
    //set inital size on load
    setSize(container, camera, renderer);
    window.addEventListener("resize", () => {
      setSize(container, camera, renderer);
      this.onResize();
    });
  }
  onResize() {}
}
export { Resizer };
