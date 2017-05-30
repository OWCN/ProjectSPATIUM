var container, scene, camera, renderer, raycaster, objects = [];
var keyState = {};
var playerShip;

var player;

var otherPlayers = [], asteroids = [], bullets = [], ores = [];

var loadWorld = function(){
    init();
    animate();

    function init(){
        container = document.getElementById('container');
        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 5;

        renderer = new THREE.WebGLRenderer({alpha: true});
        renderer.setSize(window.innerWidth, window.innerHeight);

        raycaster = new THREE.Raycaster();

        var loader = new THREE.JSONLoader();

        //
        //Add models here
        //
        loader.load("Assets/3D/JSON/AsteroidPH.json", addAsteroid)

        //

        var dirLight = new THREE.DirectionalLight(0xffffff, 1);
        dirLight.position.set(100, 100, 50);
        scene.add(dirLight);

        document.addEventListener('click', onMouseClick, false);
        document.addEventListener('keyup', onKeyUp, false);
        document.addEventListener('keydown', onKeyDown, false);
        document.addEventListener('mousemove', onMouseMove, false);
        document.addEventListener('resize', onWindowResize, false);

        container.appendChild(renderer.domElement);
        document.body.appendChild(container);
    }

    function animate(){
        requestAnimationFrame(animate);
        render();
    }

    function render(){
        if(asteroids.length != 0){
            camera.lookAt(asteroids[0].position);
        }
        renderer.clear();
        renderer.render(scene, camera);
    }

    function onMouseClick(){

    }

    function onKeyDown(event) {
        keyState[event.keyCode || event.which] = true;
    }

    function onKeyUp(event) {
        keyState[event.keyCode || event.which] = false;
    }

    function onMouseMove() {

    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );
    }
}

function addAsteroid(geometry, materials){
    var material = new THREE.MeshFaceMaterial(materials);
    asteroids.push(new THREE.Mesh(geometry, material));
    scene.add(asteroids[asteroids.length - 1]);
}
