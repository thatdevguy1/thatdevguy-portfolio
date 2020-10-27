var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;

document.body.appendChild(renderer.domElement);

//******CANVAS ASPECT RATIO 16:9 OPTION*****
// var canvas = document.querySelector("canvas");

// window.addEventListener('resize', () => {
//     renderer.setSize(canvas.width, canvas.height);
//     camera.aspect = canvas.width / canvas.height;
//     camera.updateProjectionMatrix();
// });

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  if (window.innerWidth < "800") {
    camera.position.set(0.4, 4.2, -0.3);
  } else if (window.innerWidth < "1000") {
    camera.position.set(0.5, 2.59, -0.4);
  } else if (window.innerWidth < "1260") {
    camera.position.set(0.5, 1.99, -0.4);
  } else {
    camera.position.set(0.5, 1.65, -0.4);
  }
});

//var controls = new THREE.OrbitControls( camera, renderer.domElement );
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
if (window.innerWidth < "800") {
  camera.position.set(0.4, 4.2, -0.3);
} else if (window.innerWidth < "1000") {
  camera.position.set(0.5, 2.59, -0.4);
} else if (window.innerWidth < "1260") {
  camera.position.set(0.5, 1.99, -0.4);
} else {
  camera.position.set(0.5, 1.65, -0.4);
}
camera.lookAt(0.24, -0.4, -0.9);

//controls.update();

var size = 1;
var divisions = 10;

var tileColor = "#e0ffe9";
// var gridHelper = new THREE.GridHelper( size, divisions );
// scene.add( gridHelper );

// Adding cube (card) object
var geometry = new THREE.BoxGeometry(20, 20, 0.01);
var material = new THREE.MeshLambertMaterial({
  color: new THREE.Color("#baffcd"),
});

var ground = new THREE.Mesh(geometry, material);
ground.receiveShadow = true;
ground.castShadow = true;
ground.position.set(0, 0.15, 0);
ground.name = "ground";
ground.rotation.x = -1.58;
scene.add(ground);

//2nd from top right
var geometry = new THREE.BoxGeometry(1.5, 1, 0.03);

var cubeMaterial = [
  new THREE.MeshLambertMaterial({
    color: new THREE.Color(tileColor),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshLambertMaterial({
    color: new THREE.Color(tileColor),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshLambertMaterial({
    color: new THREE.Color(tileColor),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshLambertMaterial({
    color: new THREE.Color(tileColor),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("./assets/clanimba.png"),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshLambertMaterial({
    color: new THREE.Color(tileColor),
    side: THREE.DoubleSide,
  }),
];

var material = new THREE.MeshFaceMaterial(cubeMaterial);

var card = new THREE.Mesh(geometry, material);
card.castShadow = true;
card.receiveShadow = true;
card.position.set(1, 0.2, -1);
card.rotation.x = -1.58;
card.name = "clanimba";
scene.add(card);

// 2nd from bottom left
var geometry = new THREE.BoxGeometry(1.5, 1, 0.03);
var cubeMaterial = [
  new THREE.MeshLambertMaterial({
    color: new THREE.Color(tileColor),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshLambertMaterial({
    color: new THREE.Color(tileColor),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshLambertMaterial({
    color: new THREE.Color(tileColor),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshLambertMaterial({
    color: new THREE.Color(tileColor),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("./assets/about-me.png"),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshLambertMaterial({
    color: new THREE.Color(tileColor),
    side: THREE.DoubleSide,
  }),
];

var material = new THREE.MeshFaceMaterial(cubeMaterial);

var card = new THREE.Mesh(geometry, material);
card.castShadow = true;
card.receiveShadow = true;
card.position.set(-0.6, 0.2, 0.1);
card.rotation.x = -1.58;
card.name = "aboutme";
scene.add(card);

//2nd from bottom right
var geometry = new THREE.BoxGeometry(1.5, 1, 0.03);

var material = new THREE.MeshLambertMaterial({
  color: new THREE.Color(tileColor),
});

var card = new THREE.Mesh(geometry, material);
card.castShadow = true;
card.receiveShadow = true;
card.position.set(1, 0.2, 0.1);
card.rotation.x = -1.58;
card.name = "card";
scene.add(card);

//2nd from top left
var geometry = new THREE.BoxGeometry(1.5, 1, 0.03);
var cubeMaterial = [
  new THREE.MeshLambertMaterial({
    color: new THREE.Color(tileColor),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshLambertMaterial({
    color: new THREE.Color(tileColor),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshLambertMaterial({
    color: new THREE.Color(tileColor),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshLambertMaterial({
    color: new THREE.Color(tileColor),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("./assets/faux-dashboard.png"),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshLambertMaterial({
    color: new THREE.Color(tileColor),
    side: THREE.DoubleSide,
  }),
];

var material = new THREE.MeshFaceMaterial(cubeMaterial);

var card = new THREE.Mesh(geometry, material);
card.castShadow = true;
card.receiveShadow = true;
card.position.set(-0.6, 0.2, -1);
card.rotation.x = -1.58;
card.name = "faux-dashboard";
scene.add(card);

//top left
var geometry = new THREE.BoxGeometry(1.5, 1, 0.03);
var material = new THREE.MeshLambertMaterial({
  color: new THREE.Color(tileColor),
});

var card = new THREE.Mesh(geometry, material);
card.castShadow = true;
card.receiveShadow = true;
card.position.set(-0.6, 0.2, -2.1);
card.rotation.x = -1.58;
card.name = "card";
scene.add(card);

//top top top left
var geometry = new THREE.BoxGeometry(1.5, 1, 0.03);
var material = new THREE.MeshLambertMaterial({
  color: new THREE.Color(tileColor),
});

var card = new THREE.Mesh(geometry, material);
card.castShadow = true;
card.receiveShadow = true;
card.position.set(-2.24, 0.2, -2.1);
card.rotation.x = -1.58;
card.name = "card";
scene.add(card);

//outter bottom left again?
var geometry = new THREE.BoxGeometry(1.5, 1, 0.03);
var material = new THREE.MeshLambertMaterial({
  color: new THREE.Color(tileColor),
});

var card = new THREE.Mesh(geometry, material);
card.castShadow = true;
card.receiveShadow = true;
card.position.set(-2.28, 0.2, 1.2);
card.rotation.x = -1.58;
card.name = "card";
scene.add(card);

//bottom left
var geometry = new THREE.BoxGeometry(1.5, 1, 0.03);
var material = new THREE.MeshLambertMaterial({
  color: new THREE.Color(tileColor),
});

var card = new THREE.Mesh(geometry, material);
card.castShadow = true;
card.receiveShadow = true;
card.position.set(-0.6, 0.2, 1.2);
card.rotation.x = -1.58;
card.name = "card";
scene.add(card);

//outter bottom left
var geometry = new THREE.BoxGeometry(1.5, 1, 0.03);
var material = new THREE.MeshLambertMaterial({
  color: new THREE.Color(tileColor),
});

var card = new THREE.Mesh(geometry, material);
card.castShadow = true;
card.receiveShadow = true;
card.position.set(-2.25, 0.2, 0.1);
card.rotation.x = -1.58;
card.name = "card";
scene.add(card);

//outter top left
var geometry = new THREE.BoxGeometry(1.5, 1, 0.03);
var material = new THREE.MeshLambertMaterial({
  color: new THREE.Color(tileColor),
});

var card = new THREE.Mesh(geometry, material);
card.castShadow = true;
card.receiveShadow = true;
card.position.set(-2.25, 0.2, -1);
card.rotation.x = -1.58;
card.name = "card";
scene.add(card);

//outter bottom right
var geometry = new THREE.BoxGeometry(1.5, 1, 0.03);
var material = new THREE.MeshLambertMaterial({
  color: new THREE.Color(tileColor),
});

var card = new THREE.Mesh(geometry, material);
card.castShadow = true;
card.receiveShadow = true;
card.position.set(2.6, 0.2, -1);
card.rotation.x = -1.58;
card.name = "card";
scene.add(card);

//outter bottom right2
var geometry = new THREE.BoxGeometry(1.5, 1, 0.03);
var material = new THREE.MeshLambertMaterial({
  color: new THREE.Color(tileColor),
});

var card = new THREE.Mesh(geometry, material);
card.castShadow = true;
card.receiveShadow = true;
card.position.set(2.6, 0.2, 0.1);
card.rotation.x = -1.58;
card.name = "card";
scene.add(card);

//outter top right
var geometry = new THREE.BoxGeometry(1.5, 1, 0.03);
var material = new THREE.MeshLambertMaterial({
  color: new THREE.Color(tileColor),
});

var card = new THREE.Mesh(geometry, material);
card.castShadow = true;
card.receiveShadow = true;
card.position.set(2.6, 0.2, -2.1);
card.rotation.x = -1.58;
card.name = "card";
scene.add(card);

//outter top fill right
var geometry = new THREE.BoxGeometry(1.5, 1, 0.03);
var material = new THREE.MeshLambertMaterial({
  color: new THREE.Color(tileColor),
});

var card = new THREE.Mesh(geometry, material);
card.castShadow = true;
card.receiveShadow = true;
card.position.set(2.6, 0.2, -3.2);
card.rotation.x = -1.58;
card.name = "card";
scene.add(card);

//outter top fill left
var geometry = new THREE.BoxGeometry(1.5, 1, 0.03);
var material = new THREE.MeshLambertMaterial({
  color: new THREE.Color(tileColor),
});

var card = new THREE.Mesh(geometry, material);
card.castShadow = true;
card.receiveShadow = true;
card.position.set(1, 0.2, -3.2);
card.rotation.x = -1.58;
card.name = "card";
scene.add(card);

//top right
var geometry = new THREE.BoxGeometry(1.5, 1, 0.03);
var cubeMaterial = [
  new THREE.MeshLambertMaterial({
    color: new THREE.Color(tileColor),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshLambertMaterial({
    color: new THREE.Color(tileColor),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshLambertMaterial({
    color: new THREE.Color(tileColor),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshLambertMaterial({
    color: new THREE.Color(tileColor),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("./assets/tows4low.png"),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshLambertMaterial({
    color: new THREE.Color(tileColor),
    side: THREE.DoubleSide,
  }),
];

var material = new THREE.MeshFaceMaterial(cubeMaterial);

var card = new THREE.Mesh(geometry, material);
card.castShadow = true;
card.receiveShadow = true;
card.position.set(1, 0.2, -2.1);
card.rotation.x = -1.58;
card.name = "tows4low";
scene.add(card);

var hemLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.4);
scene.add(hemLight);

//Adding spot light
var light = new THREE.PointLight(0xffffff, 0.5, 500);
light.position.set(5, 5, 5);
light.castShadow = true;
light.shadow.radius = 2;
light.shadow.bias = -0.00001;
light.shadow.mapSize.width = 1024 * 4;
light.shadow.mapSize.height = 1024 * 4;
scene.add(light);

var render = () => {
  requestAnimationFrame(render);
  //controls.update();
  renderer.render(scene, camera);
};

var intersected;

function onMouseMove(event) {
  event.preventDefault();

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  var newvalueX = (window.innerWidth * mouse.x) / 100000;
  var newvalueY = (window.innerHeight * mouse.y) / 10000;

  camera.lookAt(newvalueX + 0.27, newvalueY, -0.9);

  raycaster.setFromCamera(mouse, camera);

  var intersects = raycaster.intersectObjects(scene.children);

  if (intersects.length > 0) {
    if (intersected && intersected.object.name !== intersects[0].object.name) {
      var tl = gsap.timeline();
      tl.to(intersected.object.position, {
        y: 0.2,
        duration: 0.4,
        ease: "ease.out(1, 0.3)",
      });
    }
    if (intersects[0].object.name != "ground") {
      intersected = intersects[0];
      var tl = gsap.timeline();
      tl.to(intersects[0].object.position, {
        y: 0.3,
        duration: 0.4,
        ease: "ease.out(1, 0.3)",
      });
    } else {
      if (intersected) {
        var tl = gsap.timeline();
        tl.to(intersected.object.position, {
          y: 0.2,
          duration: 0.4,
          ease: "ease.out(1, 0.3)",
        });
      }
    }
  }
}

let active = false;
let intersectsCoords = {};
let display;

function onMouseClick(event) {
  event.preventDefault();

  window.removeEventListener("click", onMouseClick, false);
  window.removeEventListener("mousemove", onMouseMove, false);

  raycaster.setFromCamera(mouse, camera);

  var intersects = raycaster.intersectObjects(scene.children);

  switch (intersects[0].object.name) {
    case "clanimba":
      display = "#clan-imba-container";
      break;
    case "aboutme":
      display = "#about-me-container";
      break;
    case "faux-dashboard":
      display = "#faux-dashboard-container";
      break;
    case "tows4low":
      display = "#tows4low-container";
      break;
    default:
      display = "";
  }

  var tl2 = new TimelineMax({
    onComplete: () => {
      closeBtn.addEventListener("click", closeBtnClick);
    },
  });

  if (active === false) {
    if (
      intersects[0].object.name != "ground" &&
      intersects[0].object.name != "card"
    ) {
      active = !active;

      intersectsCoords = { ...intersects[0].object.position };
      tl2.to(".logo-animation", { display: "none" });
      tl2.to("#info-container", { display: "block" });
      tl2.to(".logo", { opacity: 0, duration: 0.01 }, "-=.8");
      tl2.to(".logo", { display: "none", duration: 0.01 });
      tl2.to(
        intersects[0].object.position,
        {
          x: camera.position.x - 0.2,
          y: camera.position.y - 0.4,
          z: camera.position.z - 0.2,
          duration: 1,
        },
        "-=1"
      );
      tl2.to(
        intersects[0].object.rotation,
        {
          x: camera.rotation.x,
          y: camera.rotation.y,
          z: camera.rotation.z,
          duration: 1,
        },
        "-=1.5"
      );
      tl2.to("#info-container", { opacity: 1, duration: 1 }, "-=1");
      tl2.to(display, { display: "flex" });
    } else {
      window.addEventListener("click", onMouseClick, false);
      window.addEventListener("mousemove", onMouseMove, false);
    }
  } else {
    active = !active;
    window.addEventListener("mousemove", onMouseMove, false);
  }
}

function closeBtnClick() {
  closeBtn.removeEventListener("click", closeBtnClick);
  active = !active;
  var transitionTl = new TimelineMax({
    onComplete: () => {
      window.addEventListener("click", onMouseClick, false);
    },
  });
  transitionTl.to("#info-container", { opacity: 0, duration: 0.1 });
  transitionTl.to(".logo", { display: "block" }, "-=.1");
  transitionTl.to(".logo", { opacity: 1, duration: 0.4 }, ".9");
  transitionTl.to(
    intersected.object.position,
    { x: intersectsCoords.x, y: 0.2, z: intersectsCoords.z, duration: 1 },
    "-.05"
  );
  transitionTl.to(
    intersected.object.rotation,
    { x: -1.58, y: 0, z: 0, duration: 1 },
    "-.05"
  );

  window.addEventListener("mousemove", onMouseMove, false);

  transitionTl.to("#info-container", { display: "none" }, ".01");
  transitionTl.to(display, { display: "none" }, ".01");
  transitionTl.to(".logo-animation", { display: "block" }, "-=.1");
}

window.addEventListener("mousemove", onMouseMove, false);
window.addEventListener("click", onMouseClick, false);

render();
