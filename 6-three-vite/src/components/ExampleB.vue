<template>
  <div class="dom" ref="webglRef"></div>
</template>

<script setup>
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  MeshPhongMaterial,
  Mesh,
  SphereBufferGeometry,
  SpotLight,
  TextureLoader,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { onMounted, ref } from "vue";
const webglRef = ref();
function init() {
  //创建场景
  let scene = new Scene();
  //创建相机 角度，宽高比，最近距离，最远距离
  let camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(20, 20, 40); //设置相机位置
  camera.lookAt(scene.position);

  //创建渲染器
  let renderer = new WebGLRenderer({ antialias: true, alpha: true });
  //设置输出canvas画面的大小
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;

  //球形几何体
  let sphere = new Mesh(
    new SphereBufferGeometry(10, 20, 100),
    new MeshPhongMaterial({
      map: new TextureLoader().load("src/assets/earth.jpg"),
    })
  );
  sphere.position.x = 0;
  sphere.position.y = 0;
  sphere.position.z = 0;
  sphere.castShadow = true;
  sphere.receiveShadow = true;
  scene.add(sphere);

  //灯光
  let spotLight = new SpotLight(0xffffff);
  spotLight.position.set(0, 0, 100);
  spotLight.castShadow = true;
  scene.add(spotLight);
  let controls = new OrbitControls(camera, renderer.domElement);

  function animation() {
    webglRef.value.appendChild(renderer.domElement);

    sphere.rotation.y += 0.013;
    requestAnimationFrame(animation);
    renderer.render(scene, camera);
  }
  animation();
}

onMounted(() => {
  init();
});
</script>

<style>
.dom{
  width: 100vw;
  height: 100vh;
  background:url("../assets/bg.jpg") no-repeat;
  background-size: 100% 100%;
}
</style>
