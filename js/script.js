var renderer = null, scene = null, camera = null, cube = null;

var duration = 5e3;

var currentTime = Date.now();

function animate() {
    var now = Date.now();
    var deltat = now - currentTime;
    currentTime = now;
    var fract = deltat / duration;
    var angle = Math.PI * 2 * fract;
    cube.rotation.y += angle;
}

function run() {
    requestAnimationFrame(function() {
        run();
    });
    renderer.render(scene, camera);
    animate();
}

$(document).ready(function() {
    var canvas = document.getElementById("three");
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true
    });
    renderer.setSize(canvas.width, canvas.height);
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 1, 4e3);
    camera.position.set(0, 10,  20);
    scene.add(camera);
    var light = new THREE.DirectionalLight( 0xffffff, 1.5);

    light.position.set(0, 0, 1);
    scene.add( light );

    var mapUrl = "../images/texture.jpg";
    var map = THREE.ImageUtils.loadTexture(mapUrl);
    //    no shading
      var material = new THREE.MeshBasicMaterial({
          map: map
      });

    var material = new THREE.MeshPhongMaterial({ map: map });
    var geometry = new THREE.CubeGeometry(2, 2, 2);
    cube = new THREE.Mesh(geometry, material);
    cube.position.z = -8;
    cube.rotation.x = Math.PI / 5;
    cube.rotation.y = Math.PI / 5;
    var loader = new THREE.ColladaLoader();
    var d_url = "../3d/scene.dae";
    loader.load( d_url, function(data) {
      handleSceneLoaded(data)
    });

    scene.add(cube);
    camera.lookAt(cube);
    run();

    function handleSceneLoaded(data) {
      scene.add(data.scene);
    }
});
