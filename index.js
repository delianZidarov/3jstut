import * as THREE from "/node_modules/three/build/three.module.js";
console.log("im working");
const scene = new THREE.Scene();

const vehicleColors = [0xa52523, 0xbdb638, 0x78b14b];
const playerCar = Car();
scene.add(playerCar);

//LIGHTS
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
dirLight.position.set(100, -300, 400); //x,y,z
scene.add(dirLight);

//CAMERA
const aspectRatio = window.innerWidth / window.innerHeight;
const cameraWidth = 960;
const cameraHeight = cameraWidth / aspectRatio;

const camera = new THREE.OrthographicCamera(
  cameraWidth / -2, //left
  cameraWidth / 2, //right
  cameraHeight / 2, //top
  cameraHeight / -2, //bottom
  0, // near plane
  1000 //far plane
);
camera.position.set(0, 0, 300);
// camera.up.set(0, 0, 1);
camera.lookAt(0, 0, 0);

// renderMap(cameraWidth, cameraHeight * 2);

//Set up renederer

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);

function Car() {
  const car = new THREE.Group();

  const backWheel = Wheel();
  backWheel.position.x = -18;
  car.add(backWheel);

  const frontWheel = Wheel();
  frontWheel.position.x = 18;
  car.add(frontWheel);

  const main = new THREE.Mesh(new THREE.BoxBufferGeometry(60, 30, 15), new THREE.MeshLambertMaterial({ color: pickRandom(vehicleColors) }));
  main.position.z = 12;
  car.add(main);

  //cabin texture
  const carFrontTexture = getCarFrontTexture();
  carFrontTexture.center = new THREE.Vector2(0.5, 0.5);
  carFrontTexture.rotation = Math.PI / 2;

  const carBackTexture = getCarFrontTexture();
  carBackTexture.center = new THREE.Vector2(0.5, 0.5);
  carBackTexture.rotation = -Math.PI / 2;

  const carRightSideTexture = getCarSideTexture();
  const carLeftSideTexture = getCarSideTexture();
  carLeftSideTexture.flipY = false;

  //cabin
  const cabin = new THREE.Mesh(new THREE.BoxBufferGeometry(33, 24, 12), [
    new THREE.MeshLambertMaterial({ map: carFrontTexture }),
    new THREE.MeshLambertMaterial({ map: carBackTexture }),
    new THREE.MeshLambertMaterial({ map: carLeftSideTexture }),
    new THREE.MeshLambertMaterial({ map: carRightSideTexture }),
    new THREE.MeshLambertMaterial({ color: 0xffffff }), //top
    new THREE.MeshLambertMaterial({ color: 0xffffff }), //bottom
  ]);
  cabin.position.x = -6;
  cabin.position.z = 25.5;
  car.add(cabin);
  return car;
}
function Wheel() {
  const wheel = new THREE.Mesh(new THREE.BoxBufferGeometry(12, 33, 12), new THREE.MeshLambertMaterial({ color: 0x333333 }));
  wheel.position.z = 6;
  return wheel;
}

function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Textures made from canvas elements
function getCarFrontTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 32;
  const context = canvas.getContext("2d");

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, 64, 32);

  context.fillStyle = "#666666";
  context.fillRect(8, 8, 48, 24); //

  return new THREE.CanvasTexture(canvas);
}

function getCarSideTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 32;
  const context = canvas.getContext("2d");

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, 128, 32);

  context.fillStyle = "#666666";
  context.fillRect(10, 8, 38, 24);
  context.fillRect(58, 8, 60, 24);

  return new THREE.CanvasTexture(canvas);
}

//Track Stuff

const trackRadius = 255;
const trackWidth = 45;
const innerTrackRadius = trackRadius - trackWidth;
const outerTrackRadius = trackRadius + trackWidth;

const arcAngle1 = (1 / 3) * Math.PI; // 60 degrees

const deltaY = Math.sin(arcAngle1) + innerTrackRadius;
const arcAngle2 = Math.asin(deltaY / outerTrackRadius);

const arcCenterX = Math.cos(arcAngle1) * innerTrackRadius + Math.cos(arcAngle2) * outerTrackRadius;

const arcAngle3 = Math.acos(arcCenterX / innerTrackRadius);

const arcAngle4 = Math.acos(arcCenterX / outerTrackRadius);

function renderMap(mapWidth, mapHeight) {
  //Plane with line markings
  const lineMarkingTexture = getLineMarkings(mapWidth, mapHeight);

  const planeGeometry = new THREE.PlaneBufferGeometry(mapWidth, mapHeight);
  const planeMaterial = new THREE.MeshLambertMaterial({ color: 0x546e90, map: lineMarkingTexture });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  scene.add(plane);

  //Extrude geo
  const islandLeft = getLeftIsland();
  const islandRight = getRightIsland();
  const islandMiddle = getMiddleIsland();
  const outerField = getOuterField(mapWidth, mapHeight);

  const fieldGeometry = new THREE.ExtrudeBufferGeometry([islandLeft, islandMiddle, islandRight, outerField], { depth: 6, bevelEnabled: false });

  const fieldMesh = new THREE.Mesh(fieldGeometry, [
    new THREE.MeshLambertMaterial({ color: 0x67c240 }),
    new THREE.MeshLambertMaterial({ color: 0x23311c }),
  ]);
  scene.add(fieldMesh);
}
