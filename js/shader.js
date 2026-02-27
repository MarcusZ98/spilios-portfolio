import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js";

let instances = [];

async function init() {

  const containers = document.querySelectorAll(".showcase-shader");

  const { vertex, fragment } = await loadShaderSource("background");

  containers.forEach(container => {

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      premultipliedAlpha: false
    });

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2() },
      iMouse: { value: new THREE.Vector2() }
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: vertex,
      fragmentShader: fragment,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    function resize() {
      const rect = container.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height, false);
      uniforms.iResolution.value.set(rect.width, rect.height);
    }

    resize();
    window.addEventListener("resize", resize);

    instances.push({
      scene,
      camera,
      renderer,
      uniforms
    });
  });

  animate();
}

async function loadShaderSource(name) {
  const vertex = await fetch(new URL(`../shaders/${name}/vertex.glsl`, import.meta.url)).then(r => r.text());
  const fragment = await fetch(new URL(`../shaders/${name}/fragment.glsl`, import.meta.url)).then(r => r.text());
  return { vertex, fragment };
}
function animate(time = 0) {

  instances.forEach(instance => {
    instance.uniforms.iTime.value = time * 0.001;
    instance.renderer.render(instance.scene, instance.camera);
  });

  requestAnimationFrame(animate);
}

init();