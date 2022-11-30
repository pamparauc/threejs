import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
var OrbitControls_1 = require("three/examples/jsm/controls/OrbitControls");
var stats_module_1 = require("three/examples/jsm/libs/stats.module");
var OBB_1 = require("three/examples/jsm/math/OBB");

// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
//scene.add(new THREE.AxesHelper(5));

let focus = 2;
let res = "";

const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)


// axa 1
const geometry1 = new THREE.PlaneGeometry( 2, 0.01 );
geometry1.computeBoundingBox();
const material1 = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} ); // rosu
const plane1 = new THREE.Mesh( geometry1, material1);
plane1.userData.obb = new OBB_1.OBB();
plane1.geometry.userData.obb = new OBB_1.OBB().fromBox3(plane1.geometry.boundingBox);
plane1.position.x = -1.95;
plane1.position.y = 1.2;
scene.add( plane1 );

let interest_plane = plane1;

// axa 2
const geometry2 = new THREE.PlaneGeometry( 2, 0.01 );
geometry2.computeBoundingBox();
const material2 = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const plane2 = new THREE.Mesh( geometry2, material2 );
plane2.userData.obb = new OBB_1.OBB();
plane2.geometry.userData.obb = new OBB_1.OBB().fromBox3(plane2.geometry.boundingBox);
plane2.position.x = -1.5;
plane2.position.y = .1;
scene.add( plane2 );

// axa 3
const geometry3 = new THREE.PlaneGeometry( 2, 0.01 );
geometry3.computeBoundingBox();
const material3 = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const plane3 = new THREE.Mesh( geometry3, material3 );
plane3.userData.obb = new OBB_1.OBB();
plane3.geometry.userData.obb = new OBB_1.OBB().fromBox3(plane3.geometry.boundingBox);
plane3.position.x = 0.3;
plane3.position.y = .7;
scene.add( plane3 );

// axa 4
const geometry4 = new THREE.PlaneGeometry( 2, 0.01 );
geometry4.computeBoundingBox();
const material4 = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const plane4 = new THREE.Mesh( geometry4, material4 );
plane4.userData.obb = new OBB_1.OBB();
plane4.geometry.userData.obb = new OBB_1.OBB().fromBox3(plane4.geometry.boundingBox);
plane4.position.x = 0.95;
plane4.position.y = -0.7;
scene.add( plane4 );

// axa 5
const geometry5 = new THREE.PlaneGeometry( 2, 0.01 );
geometry5.computeBoundingBox();
const material5 = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const plane5 = new THREE.Mesh( geometry5, material5 );
plane5.userData.obb = new OBB_1.OBB();
plane5.geometry.userData.obb = new OBB_1.OBB().fromBox3(plane5.geometry.boundingBox);
plane5.position.x = 1.99;
plane5.position.y = 0.3;
scene.add( plane5 );


/**
 * Sizes
 */
 const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})


/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
var controls = new OrbitControls_1.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
/**
 * Animate
 */

const clock = new THREE.Clock()

function mark_focus_on_red(){
    switch(focus){
        case 1:
            plane1.material.color.set(0xff0000); // red
            plane2.material.color.set(0xffff00);
            plane3.material.color.set(0xffff00);
            plane4.material.color.set(0xffff00);
            plane5.material.color.set(0xffff00);
            interest_plane = plane1;
            break;
        case 2:
            plane1.material.color.set(0xffff00); 
            plane2.material.color.set(0xff0000);// red
            plane3.material.color.set(0xffff00);
            plane4.material.color.set(0xffff00);
            plane5.material.color.set(0xffff00);
            interest_plane = plane2;
            break;
        case 3:
            plane1.material.color.set(0xffff00); 
            plane2.material.color.set(0xffff00);
            plane3.material.color.set(0xff0000);// red
            plane4.material.color.set(0xffff00);
            plane5.material.color.set(0xffff00);
            interest_plane = plane3;
            break;
        case 4:
            plane1.material.color.set(0xffff00); 
            plane2.material.color.set(0xffff00);
            plane3.material.color.set(0xffff00);
            plane4.material.color.set(0xff0000);// red
            plane5.material.color.set(0xffff00);
            interest_plane = plane4;
            break;
        case 5:
            plane1.material.color.set(0xffff00); 
            plane2.material.color.set(0xffff00);
            plane3.material.color.set(0xffff00);
            plane4.material.color.set(0xffff00);
            plane5.material.color.set(0xff0000);// red
            interest_plane = plane5;
            break;
        default:
            break;
    }
}
setInterval(mark_focus_on_red, 2);

function check_intersections(){
    res = "";
    plane1.userData.obb.copy(plane1.geometry.userData.obb);
    plane2.userData.obb.copy(plane2.geometry.userData.obb);
    plane3.userData.obb.copy(plane3.geometry.userData.obb);
    plane4.userData.obb.copy(plane4.geometry.userData.obb);
    plane5.userData.obb.copy(plane5.geometry.userData.obb);
    plane1.userData.obb.applyMatrix4(plane1.matrixWorld);
    plane2.userData.obb.applyMatrix4(plane2.matrixWorld);
    plane3.userData.obb.applyMatrix4(plane3.matrixWorld);
    plane4.userData.obb.applyMatrix4(plane4.matrixWorld);
    plane5.userData.obb.applyMatrix4(plane5.matrixWorld);
    switch(focus)
    {
        case 1:
            res = focus_on_1();
            break;
        case 2:
            res = focus_on_2();
            break;
        case 3:
            res = focus_on_3();
            break;
        case 4:
           res = focus_on_4();
            reak;
        case 5:
            res = focus_on_5();
            break;
        default:
            break;
    }
    
    return res;

}
function focus_on_1(){
    // res = "poti comuta pe axa ";
     if (plane1.userData.obb.intersectsOBB(plane2.userData.obb)){ // 1-2
         res += " 2";
     }
     if (plane1.userData.obb.intersectsOBB(plane3.userData.obb)){ // 1-3
         res += " 3";
     }
     if (plane1.userData.obb.intersectsOBB(plane4.userData.obb)){ // 1-4
         res += " 4";
     }
     if (plane1.userData.obb.intersectsOBB(plane5.userData.obb)){ // 1-5
         res += " 5.";    
     }
     return res;
 }
 
 function focus_on_2(){
     //res = "poti comuta pe axa ";
     if (plane2.userData.obb.intersectsOBB(plane1.userData.obb)){ // 2-1
         res += " 1";
     }
     if (plane2.userData.obb.intersectsOBB(plane3.userData.obb)){ // 2-3
         res += " 3";
     }
     if (plane2.userData.obb.intersectsOBB(plane4.userData.obb)){ // 2-4
         res += " 4";
     }
     if (plane2.userData.obb.intersectsOBB(plane5.userData.obb)){ // 2-5
         res += " 5.";    
     }
     return res;
 }
 function focus_on_3(){
     //res = "poti comuta pe axa ";
     if (plane3.userData.obb.intersectsOBB(plane1.userData.obb)){ // 3-1
         res += " 1";
     }
     if (plane3.userData.obb.intersectsOBB(plane2.userData.obb)){ // 3-2
         res += " 2";
     }
     if (plane3.userData.obb.intersectsOBB(plane4.userData.obb)){ // 3-4
         res += " 4";
     }
     if (plane3.userData.obb.intersectsOBB(plane5.userData.obb)){ // 3-5
         res += " 5.";    
     }
     return res;
 }
 function focus_on_4(){
     //res = "poti comuta pe axa ";
     if (plane4.userData.obb.intersectsOBB(plane1.userData.obb)){ // 4-1
         res += " 1";
     }
     if (plane4.userData.obb.intersectsOBB(plane2.userData.obb)){ // 4-2
         res += " 2";
     }
     if (plane4.userData.obb.intersectsOBB(plane3.userData.obb)){ // 4-3
         res += " 3";
     }
     if (plane4.userData.obb.intersectsOBB(plane5.userData.obb)){ // 3-5
         res += " 5.";    
     }
     return res;
 }
 function focus_on_5(){
     //res = "poti comuta pe axa ";
     if (plane5.userData.obb.intersectsOBB(plane1.userData.obb)){ // 5-1
         res += " 1";
     }
     if (plane5.userData.obb.intersectsOBB(plane2.userData.obb)){ // 5-2
         res += " 2";
     }
     if (plane5.userData.obb.intersectsOBB(plane3.userData.obb)){ // 5-3
         res += " 3";
     }
     if (plane5.userData.obb.intersectsOBB(plane5.userData.obb)){ // 5-4
         res += " 4.";    
     }
     return res;
 }
const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    plane1.rotation.z = .21 * elapsedTime
    plane2.rotation.z = .4 * elapsedTime
    plane3.rotation.z = .1 * elapsedTime
    plane4.rotation.z = .34 * elapsedTime
    plane5.rotation.z = .39 * elapsedTime

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)

    // check intersections
    res = check_intersections();

    // user hax to choose, but for now, just log it
    if (res != "")
        console.log(res);
}
tick()
document.onkeydown = function(e) {
	if (e.keyCode == 37){ // left arrow
		interest_plane.position.x -=0.01;
	}
    if (e.keyCode == 39){ // up arrow
		interest_plane.position.x +=0.01;
	}
    if (e.keyCode == 38){ // right arrow
		interest_plane.position.y +=0.01;
	}
    if (e.keyCode == 40){ // down arrow
		interest_plane.position.y -=0.01;
	}

    // these will be eliminated, because the focus will be received from
    // websockets, based on the text sent to it;
    if (e.keyCode == 49){ // tasta 1
        focus = 1;
    }
	if (e.keyCode == 50){ // tasta 2
       focus = 2;
    }
    if (e.keyCode == 51){ // tasta 3
        focus = 3;
    }
    if (e.keyCode == 52){ // tasta 4
        focus = 4;
    }
    if (e.keyCode == 53){ // tasta 5
        focus = 5;
    }
}

