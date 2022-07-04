class Resizer {
  constructor(container, camera, renderer) {
    //set cameras aspect ratio
    camera.aspect = container.clientWidth / container.clientHeight;

    //update the cameras frustum
    camera.updateProjectionMatrix();

    //update the size of the renderer and the canvas
    renderer.setSize(container.clientWidth, container.clientHeight);

    //set the pixel ratio for mobile devices
    renderer.setPixelRatio(window.PixelRatio);
  }
}
export { Resizer };
