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
            break;
        case 2:
            plane1.material.color.set(0xffff00); 
            plane2.material.color.set(0xff0000);// red
            plane3.material.color.set(0xffff00);
            plane4.material.color.set(0xffff00);
            plane5.material.color.set(0xffff00);
            break;
        case 3:
            plane1.material.color.set(0xffff00); 
            plane2.material.color.set(0xffff00);
            plane3.material.color.set(0xff0000);// red
            plane4.material.color.set(0xffff00);
            plane5.material.color.set(0xffff00);
            break;
        case 4:
            plane1.material.color.set(0xffff00); 
            plane2.material.color.set(0xffff00);
            plane3.material.color.set(0xffff00);
            plane4.material.color.set(0xff0000);// red
            plane5.material.color.set(0xffff00);
            break;
        case 5:
            plane1.material.color.set(0xffff00); 
            plane2.material.color.set(0xffff00);
            plane3.material.color.set(0xffff00);
            plane4.material.color.set(0xffff00);
            plane5.material.color.set(0xff0000);// red
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
            if (plane1.userData.obb.intersectsOBB(plane2.userData.obb)){
                res = "Esti pe axa 1; poti comuta pe axa 2";
                focus++;
                if (plane2.userData.obb.intersectsOBB(plane3.userData.obb)) {
                    res += " sau 3";
                    if (plane3.userData.obb.intersectsOBB(plane4.userData.obb)){
                        res += " sau 4";
                        if (plane4.userData.obb.intersectsOBB(plane5.userData.obb)){
                            res += " sau 5";
                            
                        }
                    }
                }
            }
            break;
        case 2:
            if (plane1.userData.obb.intersectsOBB(plane2.userData.obb)){
                res = "Esti pe axa 2; poti comuta pe axa 1";
                if (plane2.userData.obb.intersectsOBB(plane3.userData.obb)){
                    res += " sau 3";
                    if (plane3.userData.obb.intersectsOBB(plane4.userData.obb)){
                        res += " sau 4";
                        if (plane4.userData.obb.intersectsOBB(plane5.userData.obb)){
                            res += " sau 5";
                            
                            break;
                        }
                    }
                }
                focus++;
            }
            else{
                if (plane2.userData.obb.intersectsOBB(plane3.userData.obb)){
                    res += " Esti pe axa 2; poti comuta pe axa 3";
                    if (plane3.userData.obb.intersectsOBB(plane4.userData.obb)){
                        res += " sau 4";
                        if (plane4.userData.obb.intersectsOBB(plane5.userData.obb)){
                            res += " sau 5";
                        }
                    }
                    focus++;
                }
            }
            break;
        case 3:
            if (plane3.userData.obb.intersectsOBB(plane2.userData.obb)){
                res = "Esti pe axa 3; poti comuta pe axa 2";
                focus++;
                if (plane2.userData.obb.intersectsOBB(plane1.userData.obb)){
                    res += " sau 1";
                    if (plane3.userData.obb.intersectsOBB(plane4.userData.obb)){
                        res += " sau 4";
                        if (plane4.userData.obb.intersectsOBB(plane5.userData.obb)){
                            res += " sau 5";
                            
                            break;
                        }
                    }
                }
            }
            else{
                if (plane3.userData.obb.intersectsOBB(plane4.userData.obb)){
                    res += "Esti pe axa 3; poti comuta pe axa 4";
                    if (plane4.userData.obb.intersectsOBB(plane5.userData.obb)){
                        res += " sau 5";
                                            }
                    focus++;
                }
            }
            break;
        case 4:
            if (plane4.userData.obb.intersectsOBB(plane5.userData.obb)){
                res = "Esti pe axa 4; poti comuta pe axa 5";
                if (plane4.userData.obb.intersectsOBB(plane3.userData.obb)){
                    res += " sau 3";
                    if (plane3.userData.obb.intersectsOBB(plane2.userData.obb)){
                        res += " sau 2";
                        if (plane2.userData.obb.intersectsOBB(plane1.userData.obb)){
                            res += " sau 1";
                            
                            break;
                        }
                    }
                }
                focus++;
            }
            else{
                if (plane4.userData.obb.intersectsOBB(plane3.userData.obb)){
                    res += "Esti pe axa 4; poti comuta pe axa 3";
                    if (plane3.userData.obb.intersectsOBB(plane2.userData.obb)){
                        res += " sau 2";
                        if (plane2.userData.obb.intersectsOBB(plane1.userData.obb)){
                            res += " sau 1";
                            
                        }
                    }
                    focus++;
                }
            }
            break;
        case 5:
            if (plane5.userData.obb.intersectsOBB(plane4.userData.obb)){
                res += "Esti pe axa 5; poti comuta pe axa 4";
                if (plane4.userData.obb.intersectsOBB(plane3.userData.obb)){
                    res += " sau 3";
                    if (plane3.userData.obb.intersectsOBB(plane2.userData.obb)){
                        res += " sau 2";
                        if (plane2.userData.obb.intersectsOBB(plane1.userData.obb)){
                            res += " sau 1";
                            focus++;
                        }
                    }
                }
                focus=1;
            }
            break;
        default:
            break;
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

