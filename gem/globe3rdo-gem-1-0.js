// Setup scene, camera, and renderer
const container = document.getElementById('globe-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

renderer.setSize(300, 300);
container.appendChild(renderer.domElement);

// Create a sphere (Globe)
const geometry = new THREE.SphereGeometry(2, 32, 32);

// Use a basic material with a blue color (or apply a texture map)
const material = new THREE.MeshBasicMaterial({ 
  color: 0x3b82f6, 
  wireframe: true // Set to false if using an earth texture
});

const globe = new THREE.Mesh(geometry, material);
scene.add(globe);

camera.position.z = 6;

// Animation loop to rotate the globe
function animate() {
  requestAnimationFrame(animate);
  globe.rotation.y += 0.001; // Spin effect
  renderer.render(scene, camera);
}

animate();

