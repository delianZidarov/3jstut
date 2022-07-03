import * as THREE from "./node_modules/three/build/three.module.js";
// import { OrbitControls } from "/node_modules/three/examples/jsm/controls/OrbitControls.js";
// import { GLTFLoader } from "./node_modules/three/examples/jsm/loaders/GLTFLoader.js";
console.log("im working");
const container = document.querySelector("#scene-container");
//camera
const fov = 35;
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; //near clipping plane anything closer is invisible
const far = 100; //far clipping plane anything further is invisible

//mesh
const length = 2;
const width = 2;
const depth = 2;

const geometry = new THREE.BoxBufferGeometry(length, width, depth);
const material = new THREE.MeshBasicMaterial();

const cube = new THREE.Mesh(geometry, material);

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 0, 10); //x,y,z

const renderer = new THREE.WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const scene = new THREE.Scene();

scene.add(cube);
scene.background = new THREE.Color("skyblue");

renderer.render(scene, camera);
container.append(renderer.domElement);

// import { BoxBufferGeometry, Color, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from "three";

// // Get a reference to the container element that will hold our scene
// const container = document.querySelector("#scene-container");

// // create a Scene
// const scene = new Scene();

// // Set the background color
// scene.background = new Color("skyblue");

// // Create a camera
// const fov = 35; // AKA Field of View
// const aspect = container.clientWidth / container.clientHeight;
// const near = 0.1; // the near clipping plane
// const far = 100; // the far clipping plane

// const camera = new PerspectiveCamera(fov, aspect, near, far);

// // every object is initially created at ( 0, 0, 0 )
// // move the camera back so we can view the scene
// camera.position.set(0, 0, 10);

// // create a geometry
// const geometry = new BoxBufferGeometry(2, 2, 2);

// // create a default (white) Basic material
// const material = new MeshBasicMaterial();

// // create a Mesh containing the geometry and material
// const cube = new Mesh(geometry, material);

// // add the mesh to the scene
// scene.add(cube);

// // create the renderer
// const renderer = new WebGLRenderer();

// // next, set the renderer to the same size as our container element
// renderer.setSize(container.clientWidth, container.clientHeight);

// // finally, set the pixel ratio so that our scene will look good on HiDPI displays
// renderer.setPixelRatio(window.devicePixelRatio);

// // add the automatically created <canvas> element to the page
// container.append(renderer.domElement);

// // render, or 'create a still image', of the scene
// renderer.render(scene, camera);
