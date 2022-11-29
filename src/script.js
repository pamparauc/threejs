import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import { OBB } from 'three/examples/jsm/math/OBB'
import Stats from 'three/examples/jsm/libs/stats.module'

// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

let focus = 2;

const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

const geometry1 = new THREE.PlaneGeometry( 2.5, 0.01 );

const material1 = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const plane1 = new THREE.Mesh( geometry1, material1 );

scene.add( plane1 );
plane1.position.x = 0.7;
plane1.position.y = -0.1;

const geometry2 = new THREE.PlaneGeometry( 2.5, 0.01 );

const material2 = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const plane2 = new THREE.Mesh( geometry2, material2);

//plane2.geometry.userData.obb = new OBB().fromBox3(
 //   plane2.geometry.boundingBox as THREE.Box3
//)
//plane2.userData.obb = new OBB()
scene.add( plane2 );
plane2.position.x = -1;
plane2.position.y = 1;


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

/**
 * Animate
 */

const clock = new THREE.Clock()
plane2.scale.y *=2.9;
function tt(){
    
   
}
setInterval(tt, 100);
const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    plane1.rotation.z = .051 * elapsedTime
    plane2.rotation.z = .04 * elapsedTime

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
    if (detectCollisionCubes(plane2, plane1)) {
        console.log(focus);
        if (focus == 2)
        {
            plane2.scale.y/=2.9;
            plane1.scale.y*=2.9;
            focus =1;
            return;
        }
        if (focus == 1)
        {
            plane1.scale.y/=2.9;
            plane2.scale.y*=2.9;
            focus =2;
            return;
        }
    }
}
function detectCollisionCubes(object1, object2){
    object1.geometry.computeBoundingBox(); //not needed if its already calculated
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    
    var box1 = object1.geometry.boundingBox.clone();
    box1.applyMatrix4(object1.matrixWorld);
  
    var box2 = object2.geometry.boundingBox.clone();
    box2.applyMatrix4(object2.matrixWorld);
  
    return box1.intersectsBox(box2);
  }
tick()