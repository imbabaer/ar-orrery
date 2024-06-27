/*
The SceneManager is responsible for handling the Three.js side of the app, 
which is completely hidden from the main. It knows nothing about the DOM.


SceneManager is the component responsible for managing the scene. 
It works at high level, it shouldn’t know any detail about the content of the scene.
His responsibilities are:
	* create Scene, Renderer and Camera.
	* initialize a bunch of SceneSubjects.
	* update everything at every frame.


A SceneSubject represents one entity in the scene. 
The SceneManager usually contains multiple SceneSubjects.
*/

import * as THREE from './libs/three.module.min.js';
import { SolarSystem } from './sceneSubjects/SolarSystem.js';
import { AmbientLight } from './sceneSubjects/AmbientLight.js';
import { SunLight } from './sceneSubjects/SunLight.js';
import { Stars, BodyType } from './sceneSubjects/astronomicalBodies/Stars.js';
import { MyCameraControls } from './cameraControls/MyCameraControls.js';
import { ARButton } from './libs/ARButton.js';
import { systems } from './sceneSubjects/systems.js'
export function SceneManager (canvas) {
	// get url parameter 'system_name' 
	const urlParams = new URLSearchParams(window.location.search);
	const system_name = urlParams.get('system_name');
	console.log("this is systemname:", system_name);
	document.getElementById("title").innerHTML = system_name + " System";
	const current_solar_system = systems[system_name];
	// scene setup
	const screenDimensions = {
		width: canvas.width,
		height: canvas.height
	}
	const scene = buildScene();
	const renderer = buildRender(canvas, screenDimensions);
	const camera = buildCamera(screenDimensions);

	const cameraControls = new MyCameraControls(camera, canvas);
	scene.background = new THREE.Color('black');

	// ar stuff?
	document.body.appendChild(ARButton.createButton(renderer, { requiredFeatures: ['hit-test'] }));
	const geometry = new THREE.CylinderGeometry(0, 0.05, 0.2, 32).rotateX(Math.PI / 2);
	// function onSelect() {

	//     const material = new THREE.MeshPhongMaterial({ color: 0xffffff * Math.random() });
	//     const mesh = new THREE.Mesh(geometry, material);
	//     mesh.position.set(0, 0, - 0.3).applyMatrix4(controller.matrixWorld);
	//     mesh.quaternion.setFromRotationMatrix(controller.matrixWorld);
	//     scene.add(mesh);

	// }

	let controller = renderer.xr.getController(0);
	// controller.addEventListener('select', onSelect);
	scene.add(controller);
	// ar stuff end

	const sceneSubjects = createSceneSubjects(scene, controller);

	
	animate();
	function animate () {
		renderer.setAnimationLoop(render);
	}

	function render () {
		renderer.render(scene, camera);
	}

	//Picker
	const pickPosition = { x: 0, y: 0 };
	// const pickHelper = new PickHelper();
	clearPickPosition();

	function buildScene () {
		const scene = new THREE.Scene();
		scene.background = new THREE.Color("#000");
		return scene;
	}

	function buildRender (canvas, { width, height }) {
		const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
		const DPR = (window.devicePixelRatio) ? window.devicePixelRatio : 1;
		renderer.setPixelRatio(DPR);
		renderer.setSize(width, height);
		renderer.xr.enabled = true;

		renderer.gammaInput = true;
		renderer.gammaOutput = true;

		return renderer;
	}

	function buildCamera ({ width, height }) {
		const aspectRatio = width / height;
		const fieldOfView = 60;
		const nearPlane = 1;
		const farPlane = 10000;
		const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

		camera.position.set(0, 300, 750);
		camera.lookAt(new THREE.Vector3(0, 0, 0));

		return camera;
	}

	function createSceneSubjects (scene, controller) {


		const sceneSubjects = [
			new SolarSystem(scene, controller, current_solar_system["planets"], current_solar_system["sun"]),
			new AmbientLight(scene, current_solar_system["ambient"]),
			new SunLight(scene, current_solar_system["sun"]),
			// new Stars(scene),
		];
		current_solar_system["stars"].forEach(options => {
			sceneSubjects.push(new Stars(scene, options));
		})

		return sceneSubjects;
	}

	// It is called by the main at every frame.
	this.update = function (time) {
		for (let i = 0; i < sceneSubjects.length; i++)
			sceneSubjects[i].update(time);


		let x = sceneSubjects[0];
		// pickHelper.pick(pickPosition, x.getAstrionomicalBodies(), camera, time, scene);
		cameraControls.update();
		renderer.render(scene, camera);
	}

	// Updates the aspect ratio of the camera and the size of the Renderer. 
	// It is called by the main each time the window is resized.
	this.onWindowResize = function () {
		const { width, height } = canvas;

		screenDimensions.width = width;
		screenDimensions.height = height;

		camera.aspect = width / height;
		camera.updateProjectionMatrix();

		renderer.setSize(width, height);
	}


	// Picker
	function getCanvasRelativePosition (event) {
		const rect = canvas.getBoundingClientRect();
		return {
			x: (event.clientX - rect.left) * canvas.width / rect.width,
			y: (event.clientY - rect.top) * canvas.height / rect.height,
		};
	}

	function setPickPosition (event) {
		const pos = getCanvasRelativePosition(event);
		pickPosition.x = (pos.x / canvas.width) * 2 - 1;
		pickPosition.y = (pos.y / canvas.height) * -2 + 1;  // note we flip Y
	}

	function clearPickPosition () {
		// unlike the mouse which always has a position
		// if the user stops touching the screen we want
		// to stop picking. For now we just pick a value
		// unlikely to pick something
		pickPosition.x = undefined;
		pickPosition.y = undefined;
	}

	// window.addEventListener('dblclick', setPickPosition);
	// window.addEventListener('mouseout', clearPickPosition);
	// window.addEventListener('mouseleave', clearPickPosition);

	// // Mobile support
	// window.addEventListener('touchstart', (event) => {
	// 	// prevent the window from scrolling
	// 	event.preventDefault();
	// 	setPickPosition(event.touches[0]);
	// }, { passive: false });

	// window.addEventListener('touchmove', (event) => {
	// 	setPickPosition(event.touches[0]);
	// });

	// window.addEventListener('touchend', clearPickPosition);



	{
		// Modal
		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];
		var modal = document.getElementById("myModal");

		// When the user clicks on <span> (x), close the modal
		span.onclick = function () {
			modal.style.display = "none";
		}

		span.addEventListener('touchend', (event) => {
			modal.style.display = "none";
		});


		// // When the user clicks anywhere outside of the modal, close it (mobile)
		// window.addEventListener('touchend', (event) => {
		// 	if (event.target == modal) {
		// 		modal.style.display = "none";
		// 	}
		// });


		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function (event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}
	}
}