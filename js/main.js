/*
the main has three basic responsibilities:
    * create the SceneManager, while passing a canvas to it (so that SceneManager won’t have to meddle with the DOM).
    * attach listeners to the DOM events we care about (such as windowresize or mousemove).
    * start the render loop, by calling requestAnimationFrame().

*/

import { SceneManager } from './SceneManager.js';

// run node server:  http-server --cors -o -c-1
const canvas = document.querySelector('#canvas');
const sceneManager = new SceneManager(canvas);



export function bindEventListeners() {
    window.onresize = resizeCanvas;
    resizeCanvas();
}

export function resizeCanvas() {
    canvas.style.width = '100%';
    canvas.style.height = '100%';

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    sceneManager.onWindowResize();
}

export function render(time) {
    // convert time into seconds
    time *= 0.001;
    requestAnimationFrame(render);
    sceneManager.update(time);
}

bindEventListeners(sceneManager);
render(0,sceneManager);