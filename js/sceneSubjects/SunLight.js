import * as THREE from './../libs/three.module.min.js';

export function SunLight (scene, sun_options) {
	const color = sun_options["color"]//0xFFFFFF;
	const intensity = sun_options["intensity"]//11110.91;
	const sunLight = new THREE.PointLight(color, intensity);
	sunLight.position.set(0, 0, 0);

	scene.add(sunLight)

	this.update = function () {
		// do something
	}

	//gui.addColor(new ColorGUIHelper(light, 'color'), 'value').name('color');
	//gui.add(light, 'intensity', 0.1, 2, 0.01);
}