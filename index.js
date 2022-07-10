import { World } from "./src/World/World.js";
console.log("made it past import");

async function main() {
  const container = document.querySelector("#scene-container");

  const world = new World(container);

  await world.init();

  world.start();
}
const renderBtn = document.querySelector("#render");
renderBtn.addEventListener("click", () => {
  main();
});
main().catch((err) => console.error(err));
