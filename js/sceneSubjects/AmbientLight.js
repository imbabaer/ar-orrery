import * as THREE from './../libs/three.module.min.js';

export function AmbientLight(scene) {
    const color = 0xFFFFFF;
    const intensity = 0.018;

    const ambientLight = new THREE.AmbientLight(color, intensity);
    scene.add(ambientLight);

    const targetIntensity = 0.5; // The target intensity value
    const lerpSpeed = 0.015; // The speed at which the intensity changes

    this.update = function () {
        return;
        // do something
        // add lerping of the intensity of the light


        // Calculate the new intensity value using lerp
        const currentIntensity = ambientLight.intensity;
        const newIntensity = THREE.MathUtils.lerp(currentIntensity, targetIntensity, lerpSpeed);

        // Update the intensity of the light
        ambientLight.intensity = newIntensity;

        if (newIntensity == targetIntensity) {
            if (targetIntensity == 0.5)
                targetIntensity = 0.08;
            else
                targetIntensity = 0.5;
        }
    }

    //gui.addColor(new ColorGUIHelper(light, 'color'), 'value').name('color');
    //gui.add(light, 'intensity', 0.1, 2, 0.01);
}