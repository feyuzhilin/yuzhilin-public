<template>
  <div ref="webglRef"></div>
</template>

<script setup>
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Color,
  AxesHelper,
  PlaneGeometry,
  MeshPhongMaterial,
  Mesh,
  BoxGeometry,
  SphereGeometry,
  SpotLight,
  TextureLoader,
  MeshBasicMaterial,
  MeshLambertMaterial,
} from "three";
import { onMounted, ref } from "vue";
const webglRef = ref(null);
function init() {
  //创建场景
  let scene = new Scene();
  scene.background = new TextureLoader().load("src/assets/DSC00883.dng");
  //创建相机 角度，宽高比，最近距离，最远距离
  let camera = new PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.x = -40;
  camera.position.y = 40;
  camera.position.z = 30;
  camera.lookAt(scene.position);

  //创建渲染器
  let renderer = new WebGLRenderer();
  //设置渲染器的初始颜色
  renderer.setClearColor(new Color(0xf5f5f5));
  //设置输出canvas画面的大小
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;

  //显示三维坐标系
  let axes = new AxesHelper(20);
  scene.add(axes);

  //创建地面
  let plane = new Mesh(
    new PlaneGeometry(60, 20),
    new MeshLambertMaterial({ color: 0xcccccc })
  );
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.x = 5;
  plane.position.y = 0;
  plane.position.z = 0;
  plane.receiveShadow = true;
  plane.castShadow = true;
  scene.add(plane);

  //创建正方体
  let cube = new Mesh(
    new BoxGeometry(4, 4, 4),
    new MeshPhongMaterial({ color: 0xff0000 })
  );
  cube.position.x = 0;
  cube.position.y = 4;
  cube.position.z = 2;
  cube.castShadow = true;
  cube.receiveShadow = true;
  scene.add(cube);

  //圆环缓冲几何体
  let sphere = new Mesh(
    new SphereGeometry(4, 20, 100),
    new MeshPhongMaterial({ color: 0x7777ff })
  );
  sphere.position.x = 20;
  sphere.position.y = 5;
  sphere.position.z = 0;
  sphere.castShadow = true;
  sphere.receiveShadow = true;
  scene.add(sphere);

  //灯光
  let spotLight = new SpotLight(0xffffff);
  spotLight.position.set(-40, 60, -10);
  spotLight.castShadow = true;
  scene.add(spotLight);
  let step = 0
  function animation() {
    webglRef.value.appendChild(renderer.domElement);
    cube.rotation.x += 0.02
    cube.rotation.y += 0.02
    cube.rotation.z += 0.02

    step += 0.04
    sphere.position.x = 2 + 10 * Math.cos(step)
    sphere.position.y = 2 + 10 * Math.abs(Math.sin(step))
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
</style>
