const BodyType = {
    SPHERE: "sphere",
    CUBE: "cube",
    CAPSULE: "capsule",
};

// function Stars(scene, center = new THREE.Vector3(0, 0, 0), rotation = new THREE.Vector3(0, 0, 0), radius = 1250, numStars = 10000, bodyType = BodyType.CUBE, hueSpectrum = [0, 0], satSpecturm = [0, 0], lightnessSpectrum = [0.13, 0.79], sizeRange = [3, 12], capsuleHeightFactor = 4) {
function Stars(scene, options = {}) {
    var center = options.center ?? new THREE.Vector3(0, 0, 0);
    var rotation = options.rotation ?? new THREE.Vector3(0, 0, 0);
    var radius = options.radius ?? 1250;
    var numStars = options.numStars ?? 10000;
    var bodyType = options.bodyType ?? BodyType.CUBE;
    var hueSpectrum = options.hueSpectrum ?? [0, 0];
    var satSpecturm = options.satSpecturm ?? [0, 0];
    var lightnessSpectrum = options.lightnessSpectrum ?? [0.13, 0.79];
    var sizeRange = options.sizeRange ?? [3, 12];
    var capsuleHeightFactor = options.capsuleHeightFactor ?? 4;


    var vertices = [];
    var sizes = [];
    var colors = [];

    var numPoints = numStars;
    for (var i = 0; i < numPoints; i++) {
        if (bodyType == bodyType.SPHERE) {
            var phi = THREE.MathUtils.randFloat(0, 2 * Math.PI);
            var theta = THREE.MathUtils.randFloat(0, Math.PI);
            var r = THREE.MathUtils.randFloat(0, radius);

            var x = r * Math.sin(theta) * Math.cos(phi);
            var y = r * Math.sin(theta) * Math.sin(phi);
            var z = r * Math.cos(theta);
        }
        else if (bodyType == BodyType.CAPSULE) {
            var height = radius * (capsuleHeightFactor);
            var phi = THREE.MathUtils.randFloat(0, 2 * Math.PI);
            var r = THREE.MathUtils.randFloat(0, radius);
            var h = THREE.MathUtils.randFloat(-height / 2, height / 2);

            var x = r * Math.cos(phi);
            var y = r * Math.sin(phi);
            var z = h;

            // Add points within the hemispheres at the ends of the cylinder
            if (Math.abs(h) > height / 2 - radius) {
                var theta = THREE.MathUtils.randFloat(0, Math.PI / 2);
                z = h > 0 ? h - r * Math.cos(theta) : h + r * Math.cos(theta);
                r = r * Math.sin(theta);
                x = r * Math.cos(phi);
                y = r * Math.sin(phi);
            }
        }
        else {

            var x = THREE.MathUtils.randFloatSpread(radius * 2);
            var y = THREE.MathUtils.randFloatSpread(radius * 2);
            var z = THREE.MathUtils.randFloatSpread(radius * 2);
        }
        var v = new THREE.Vector3(x, y, z);

        // rotate v by rotation euler angles and add center-offset
        // Create a quaternion from the Euler angles
        var quaternion = new THREE.Quaternion();
        quaternion.setFromEuler(new THREE.Euler(rotation.x, rotation.y, rotation.z, 'XYZ'));

        // Apply the quaternion to v
        v.applyQuaternion(quaternion);

        // Add the center offset to v
        v.add(center);


        vertices.push(v.x, v.y, v.z);

        sizes.push(THREE.MathUtils.randFloat(sizeRange[0], sizeRange[1]));

        var color = new THREE.Color();
        // var rnd = Math.random() < 0.5 ? THREE.MathUtils.randFloat(0.75, 0.8) : THREE.MathUtils.randFloat(0.06, 0.1583);
        // var hslclr = rnd > 1 ? rnd - 1 : rnd;
        // color.setHSL(hslclr, 1.0, 0.8);

        var hue = THREE.MathUtils.randFloat(hueSpectrum[0], hueSpectrum[1]);
        var sat = THREE.MathUtils.randFloat(satSpecturm[0], satSpecturm[1]);
        var lightness = THREE.MathUtils.randFloat(lightnessSpectrum[0], lightnessSpectrum[1]);
        color.setHSL(hue, sat, lightness);

        colors.push(color.r, color.g, color.b);
    }

    var geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));


    var material = new THREE.ShaderMaterial({
        vertexShader: `
            attribute float size;
            attribute vec3 color;
            varying vec3 vColor;
            void main() {
                vColor = color;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = size * (300.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            varying vec3 vColor;
            void main() {
                gl_FragColor = vec4(vColor, 1.0);
            }
        `,
        depthTest: true,
        depthWrite: false,
        transparent: true,
    });


    var points = new THREE.Points(geometry, material);
    scene.add(points);

    this.update = function () {
        // do something
    }
}