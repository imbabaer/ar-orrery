var temPlanets = [
    {
        name: "p1",
        size: 8,
        distanceX: 260,
        texture: "assets/textures/fantasy1/p3.jpg",
        rotationSpeed: 0.08,
        revolutionSpeed: 0.01,
        revolutionSpeedOffset: 0.5,
        revolutionTiltAngle: 20,
        selfTilt: 0,
        moons: [
            {
                name: "m1",
                size: 3,
                distanceX: 18,
                texture: "assets/textures/fantasy1/p1.jpg",
                rotationSpeed: 0.08,
                revolutionSpeed: 0.1,
                revolutionSpeedOffset: 0,
                revolutionTiltAngle: 20,
                selfTilt: 0,
            },
            {
                name: "m2",
                size: 2,
                distanceX: 32,
                texture: "assets/textures/fantasy1/p4.webp",
                rotationSpeed: 0.08,
                revolutionSpeed: -0.11,
                revolutionSpeedOffset: 0,
                revolutionTiltAngle: 80,
                selfTilt: 0,
            }
        ]
    }
]

var planets = [
    {
        name: "Valt",
        size: 8,
        distanceX: 100,
        texture: "assets/textures/fantasy1/p3.jpg",
        rotationSpeed: 0.08,
        revolutionSpeed: 0.01,
        revolutionSpeedOffset: -0.5,
        revolutionTiltAngle: -40,
        selfTilt: 0,
        moons: []
    },
    {
        name: "Fyreen",
        size: 16,
        distanceX: 200,
        texture: "assets/textures/fantasy1/p7.jpg",
        rotationSpeed: 0.08,
        revolutionSpeed: 0.01,
        revolutionSpeedOffset: -1,
        revolutionTiltAngle: -40,
        selfTilt: 0,
        moons: [
            {
                name: "Crios",
                size: 3,
                distanceX: 32,
                texture: "assets/textures/fantasy1/p4.webp",
                rotationSpeed: 0.08,
                revolutionSpeed: 0.1,
                revolutionSpeedOffset: 0,
                revolutionTiltAngle: 40,
                selfTilt: 0,
            },

        ]
    },
    {
        name: "Malas",
        size: 20,
        distanceX: 400,
        texture: "assets/textures/fantasy1/water1.jpg",
        rotationSpeed: 0.08,
        revolutionSpeed: 0.01,
        revolutionSpeedOffset: -3,
        revolutionTiltAngle: -40,
        selfTilt: 0,
        moons: [
            {
                name: "Shard",
                size: 3,
                distanceX: 32,
                texture: "assets/textures/fantasy1/p1.jpg",
                rotationSpeed: 0.08,
                revolutionSpeed: 0.1,
                revolutionSpeedOffset: 0,
                revolutionTiltAngle: 40,
                selfTilt: 0,
            },

        ]
    },
    {
        name: "En",
        size: 0.0001,
        distanceX: 600,
        texture: "assets/textures/fantasy1/p3.jpg",
        rotationSpeed: 0.08,
        revolutionSpeed: 0.01,
        revolutionSpeedOffset: 0.5415,
        revolutionTiltAngle: -40,
        selfTilt: 0,
        moons: [
            {
                name: "Aruun",
                size: 3,
                distanceX: 12,
                texture: "assets/textures/fantasy1/p4.webp",
                rotationSpeed: 0.08,
                revolutionSpeed: 0.1,
                revolutionSpeedOffset: 0,
                revolutionTiltAngle: 50,
                selfTilt: 0,
            },
            {
                name: "G'vek",
                size: 2,
                distanceX: 32,
                texture: "assets/textures/fantasy1/moon1.jpeg",
                rotationSpeed: 0.08,
                revolutionSpeed: 0.1,
                revolutionSpeedOffset: 1,
                revolutionTiltAngle: 222,
                selfTilt: 0,
            },
            {
                name: "Inivar",
                size: 1.8,
                distanceX: 45,
                texture: "assets/textures/fantasy1/p5.webp",
                rotationSpeed: 0.08,
                revolutionSpeed: 0.1,
                revolutionSpeedOffset: -2,
                revolutionTiltAngle: 83,
                selfTilt: 0,
            },
            {
                name: "Lesk",
                size: 2.2,
                distanceX: 62,
                texture: "assets/textures/fantasy1/moon5.avif",
                rotationSpeed: 0.08,
                revolutionSpeed: 0.1,
                revolutionSpeedOffset: 0.5,
                revolutionTiltAngle: 90,
                selfTilt: 0,
            },
            {
                name: "Shalar",
                size: 1.5,
                distanceX: 87,
                texture: "assets/textures/fantasy1/moon2.jpeg",
                rotationSpeed: 0.08,
                revolutionSpeed: 0.1,
                revolutionSpeedOffset: 1,
                revolutionTiltAngle: 0,
                selfTilt: 0,
            },
            {
                name: "Thrydd",
                size: 2.8,
                distanceX: 111,
                texture: "assets/textures/fantasy1/moon3.avif",
                rotationSpeed: 0.08,
                revolutionSpeed: 0.1,
                revolutionSpeedOffset: 0,
                revolutionTiltAngle: 40,
                selfTilt: 0,
            },
            {
                name: "Vocath",
                size: 2.9,
                distanceX: 130,
                texture: "assets/textures/fantasy1/moon4.jpeg",
                rotationSpeed: 0.08,
                revolutionSpeed: 0.1,
                revolutionSpeedOffset: -0.5,
                revolutionTiltAngle: 140,
                selfTilt: 0,
            },
            {
                name: "Yisheen",
                size: 2.3,
                distanceX: 145,
                texture: "assets/textures/fantasy1/moon7.png",
                rotationSpeed: 0.08,
                revolutionSpeed: 0.1,
                revolutionSpeedOffset: 2,
                revolutionTiltAngle: 63,
                selfTilt: 0,
            },
            {
                name: "Yort",
                size: 1.3,
                distanceX: 160,
                texture: "assets/textures/fantasy1/moon6.webp",
                rotationSpeed: 0.08,
                revolutionSpeed: 0.1,
                revolutionSpeedOffset: 0,
                revolutionTiltAngle: 80,
                selfTilt: 0,
            },
        ]
    }
]

import * as THREE from './../libs/three.module.min.js';

export function SolarSystem(scene, time) {
    const loader = new THREE.TextureLoader();

    var astrionomicalBodies = [];

    const solarSystem = new THREE.Group();
    scene.add(solarSystem);
    var sunMesh = createSun("sun", 20, scene, solarSystem, astrionomicalBodies, loader, "assets/textures/fantasy1/black.png", true);

    planets.forEach(planet => {

        var planetOrbit = createOrbit(solarSystem);
        var planetMesh = createPlanet(planet.name, planet.size, planet.distanceX, scene, planetOrbit, astrionomicalBodies, loader, planet.selfTilt, planet.texture);
        // planetMesh.rotation.set(planet.selfTilt, 0, 0);

        createOrbitLine(planet.distanceX, scene, astrionomicalBodies, planet.revolutionTiltAngle);
        planet.orbit = planetOrbit;
        planet.mesh = planetMesh;

        planet.moons.forEach(moon => {
            var moonOrbit = createMoonOrbit(planet.distanceX, planetOrbit);
            var moonMesh = createPlanet(moon.name, moon.size, moon.distanceX, scene, moonOrbit, astrionomicalBodies, loader, moon.selfTilt, moon.texture, moon.type);
            createOrbitLine(moon.distanceX, moonOrbit, astrionomicalBodies, planet.revolutionTiltAngle, 0.2);
            moon.orbit = moonOrbit;
            moon.mesh = moonMesh;
        });
    });

    //#region Solar System
    // //                              name,   size, distanceX, scene, orbit, astrionomicalBodies, loader
    // var mercuryOrbit = createOrbit(solarSystem);
    // var mercuryMesh = createPlanet("mercury", 3, 60, scene, mercuryOrbit, astrionomicalBodies, loader);
    // createOrbitLine(60, scene, astrionomicalBodies);

    // var venusOrbit = createOrbit(solarSystem);
    // var venusMesh = createPlanet("venus", 8, 80, scene, venusOrbit, astrionomicalBodies, loader);
    // createOrbitLine(80, scene, astrionomicalBodies);

    // var earthOrbit = createOrbit(solarSystem);
    // var earthMesh = createPlanet("earth", 10, 110, scene, earthOrbit, astrionomicalBodies, loader, 23.4);
    // createOrbitLine(110, scene, astrionomicalBodies);

    // var moonOrbit = createMoonOrbit(110, earthOrbit);
    // var moonMesh = createPlanet("moon", 2, 18, scene, moonOrbit, astrionomicalBodies, loader);
    // createOrbitLine(18, moonOrbit, astrionomicalBodies, 0, 0.2);

    // var marsOrbit = createOrbit(solarSystem);
    // var marsMesh = createPlanet("mars", 5, 150, scene, marsOrbit, astrionomicalBodies, loader);
    // createOrbitLine(150, scene, astrionomicalBodies);

    // var jupiterOrbit = createOrbit(solarSystem);
    // var jupiterMesh = createPlanet("jupiter", 25, 220, scene, jupiterOrbit, astrionomicalBodies, loader);
    // createOrbitLine(220, scene, astrionomicalBodies);

    // var saturnOrbit = createOrbit(solarSystem);
    // var saturnMesh = createPlanet("saturn", 17, 320, scene, saturnOrbit, astrionomicalBodies, loader);
    // createOrbitLine(320, scene, astrionomicalBodies);

    // // Saturns ring
    // const innerRadius = 26;
    // const outerRadius = 32;
    // const thetaSegments = 60;
    // const saturnBelt = new THREE.RingBufferGeometry(
    //     innerRadius, outerRadius, thetaSegments);
    // const material = new THREE.MeshPhongMaterial({
    //     side: THREE.DoubleSide,
    // });
    // const mesh = new THREE.Mesh(saturnBelt, material);
    // mesh.rotation.set(5, 0, 0);

    // mesh.position.set(320, 0, 0);
    // saturnOrbit.add(mesh);


    // var uranusOrbit = createOrbit(solarSystem);
    // var uranusMesh = createPlanet("uranus", 13, 420, scene, uranusOrbit, astrionomicalBodies, loader);
    // createOrbitLine(420, scene, astrionomicalBodies);

    // var neptuneOrbit = createOrbit(solarSystem);
    // var neptuneMesh = createPlanet("neptune", 12, 500, scene, neptuneOrbit, astrionomicalBodies, loader);
    // createOrbitLine(500, scene, astrionomicalBodies);
    //#endregion

    this.update = function (time) {

        planets.forEach(planet => {
            // Calculate the tilt angle in radians
            const revolutionTiltAngle = THREE.MathUtils.degToRad(planet.revolutionTiltAngle || 0);

            // Apply the tilt angle to the orbit's rotation
            planet.orbit.rotation.y = time * planet.revolutionSpeed + planet.revolutionSpeedOffset;
            planet.orbit.rotation.x = revolutionTiltAngle;

            // Update the planet's rotation
            planet.mesh.rotation.y = time * planet.rotationSpeed;

            // Update the planet's position
            // planet.mesh.position.x = planet.orbit.radius * Math.cos(planet.orbit.rotation.y);
            // planet.mesh.position.y = planet.orbit.radius * Math.sin(planet.orbit.rotation.x) * Math.sin(planet.orbit.rotation.y);
            // planet.mesh.position.z = planet.orbit.radius * Math.sin(planet.orbit.rotation.y);

            planet.moons.forEach(moon => {
                const moonRevolutionTiltAngle = THREE.MathUtils.degToRad(moon.revolutionTiltAngle || 0);

                moon.orbit.rotation.y = time * moon.revolutionSpeed + moon.revolutionSpeedOffset;
                moon.orbit.rotation.x = moonRevolutionTiltAngle;

                moon.mesh.rotation.y = time * moon.rotationSpeed;
            });
        });


        // rotate the planets
        sunMesh.rotation.y = time * 0.1;

        //#region Solar System

        // mercuryOrbit.rotation.y = time * 0.08 + 3.5; // rotate around the sun
        // mercuryMesh.rotation.y = time * 0.1; // rotate the planet

        // venusOrbit.rotation.y = time * 0.07 + 1;
        // venusMesh.rotation.y = time * 0.1;

        // earthOrbit.rotation.y = time * 0.06 - 0.5;
        // earthMesh.rotation.y = time * 0.1;

        // moonOrbit.rotation.y = time * 0.06;
        // moonMesh.rotation.y = time * 0.1;

        // marsOrbit.rotation.y = time * 0.05 - 0.1;
        // marsMesh.rotation.y = time * 0.1;

        // jupiterOrbit.rotation.y = time * 0.045 - 1.5;
        // jupiterMesh.rotation.y = time * 0.1;

        // saturnOrbit.rotation.y = time * 0.04 - 1.3;
        // saturnMesh.rotation.y = time * 0.1;

        // uranusOrbit.rotation.y = time * 0.03 + 0.5;
        // uranusMesh.rotation.y = time * 0.1;

        // neptuneOrbit.rotation.y = time * 0.02 - 0.5;
        // neptuneMesh.rotation.y = time * 0.1;
        //#endregion
    }

    this.getAstrionomicalBodies = function () {
        return astrionomicalBodies;
    }
}

function createOrbit() {
    const orbit = new THREE.Group();

    for (let i = 0, j = arguments.length; i < j; i++) {
        arguments[i].add(orbit);
    }

    return orbit;
}

function createMoonOrbit(distanceX) {
    const orbit = new THREE.Group();
    orbit.position.x = distanceX;

    for (let i = 0, j = arguments.length; i < j; i++) {
        if (i == 0) continue;
        arguments[i].add(orbit);
    }

    return orbit;
}

function createPlanet(name, size, distanceX, scene, orbit, astrionomicalBodies, loader, selfTilt = 90, texturePath = null) {
    var geometry = new THREE.SphereGeometry(size, 32, 16);

    //without callback
    var texture = loader.load(texturePath ?? "assets/textures/" + name + ".jpg");

    var material = new THREE.MeshPhongMaterial({ map: texture });
    var planetMesh = new THREE.Mesh(geometry, material);

    planetMesh.position.set(distanceX, 0, 0);
    planetMesh.rotation.set(THREE.MathUtils.degToRad(selfTilt), 0, 0);
    planetMesh.name = name;

    orbit.add(planetMesh);
    astrionomicalBodies.push(planetMesh);

    return planetMesh;
}

function createSun(name, size, scene, orbit, astrionomicalBodies, loader, texturePath = null, illuminated = true) {
    var geometry = new THREE.SphereGeometry(size, 32, 16);

    //without callback
    var texture = loader.load(texturePath ?? "assets/textures/" + name + ".jpg");
    var material = illuminated ? new THREE.MeshBasicMaterial({ map: texture }) : new THREE.MeshPhongMaterial({ map: texture });
    var sunMesh = new THREE.Mesh(geometry, material);
    sunMesh.name = name;

    orbit.add(sunMesh);
    astrionomicalBodies.push(sunMesh);

    return sunMesh;
}

function createOrbitLine(distanceX, scene, astrionomicalBodies, tilt = 0, orbitLineHalfWidth = 1) {
    const innerRadius = distanceX - orbitLineHalfWidth;
    const outerRadius = distanceX + orbitLineHalfWidth;
    const thetaSegments = 80;
    const geometry = new THREE.RingGeometry(innerRadius, outerRadius, thetaSegments);
    const material = new THREE.MeshBasicMaterial({
        color: 0xf5e96c,
        opacity: 0.2,
        transparent: true,
        side: THREE.DoubleSide
    });
    var mesh = new THREE.Mesh(geometry, material);

    mesh.rotation.x = THREE.MathUtils.degToRad(tilt + 90);// Math.PI / 2;
    // mesh.rotation.set(THREE.Math.degToRad(tilt), 0, 0);

    //astrionomicalBodies.push(mesh);
    scene.add(mesh);
}