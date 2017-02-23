"use strict"

var scene, renderer, camera;
var canvas = document.getElementById("three");
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(45, canvas.width/canvas.height, 1, 100);

renderer = new THREE.WebGLRenderer( {
    canvas: canvas,
       antialias: true
});


var geom = new THREE.SphereGeometry(5, 32, 16, 0, Math.PI);

var mat = new THREE.MeshPhongMaterial( {
    color: 0xbbbb00,
    emissive: 0, 
    specular: 0x070707,
    shininess: 50
} );

var obj = new THREE.Mesh(geom, mat);

var light = new THREE.DirectionalLight();
var am_light = new THREE.AmbientLight(0x111100);
light.position.set(0, 0, 0);
scene.add(camera);
scene.add(light);
scene.add(obj);
scene.add(am_light);

renderer.render( scene, camera);
