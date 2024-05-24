function Stars(scene) {
    var vertices = [];
    var sizes = [];
    var colors = [];

    var numPoints = 4000;
    for (var i = 0; i < numPoints; i++) {
        var x = THREE.MathUtils.randFloatSpread(2500);
        var y = THREE.MathUtils.randFloatSpread(2500);
        var z = THREE.MathUtils.randFloatSpread(2500);

        vertices.push(x, y, z);
        sizes.push(THREE.MathUtils.randFloat(5, 12));

        var color = new THREE.Color();
        // var rnd = Math.random() < 0.5 ? THREE.MathUtils.randFloat(0.75, 0.8) : THREE.MathUtils.randFloat(0.06, 0.1583);
        // var hslclr = rnd > 1 ? rnd - 1 : rnd;
        // color.setHSL(hslclr, 1.0, 0.8);

        var rnd =  THREE.MathUtils.randFloat(0.13, 0.79) 
        color.setHSL(0, 0, rnd);

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