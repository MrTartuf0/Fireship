import './style.css'

 import * as THREE from 'three';

 const scene = new THREE.Scene();

 const camera = new THREE.PerspectiveCamera( 75 , window.innerWidth / window.innerHeight , 0.1 , 1000);

 const renderer = new THREE.WebGLRenderer({
   canvas: document.querySelector('#cilinder2'),
 });


 renderer.setPixelRatio(window.devicePixelRatio);
 renderer.setSize( 1600 , 300 );
 camera.position.setZ(30);


 const geometry = new THREE.CylinderGeometry( 1 , 1 , 20 , 100  )
 const material = new THREE.MeshStandardMaterial( { color: 0x0088FF } );
 const torus = new THREE.Mesh( geometry , material );

 scene.add(torus)

 const pointLight = new THREE.PointLight(0xffffff)
 const ambientLight = new THREE.AmbientLight(0xffffff)
 pointLight.position.set(30,30,30)
 ambientLight.position.set(0,0,100)
 scene.add(pointLight,ambientLight)

function animate() {
  requestAnimationFrame ( animate );

  // Questo lo possiamo considerare come il void loop() di arduino il codice si esegue ogni volta

  torus.rotation.y += 0.01; 
  torus.rotation.x += 0.01; 
  torus.rotation.z += 0.01; 

  renderer.render ( scene , camera );


}





 // Invece di chiamare la funzione renderer.render (scene,camera)
 // ogni volta per applicare modifiche per per renderizzare nuove mesh
 // lo fa in automatico chiamandosi da sola

animate() // La chiamo una volta cosi dopo va in recursive appena un frame si aggiorna



