<template>
  <div class="containers">
    <div class="canvas" ref="canvas"></div>
  </div>
</template>

<script setup>
// 引入相关的依赖
import BpmnJS from 'bpmn-js'
import { xmlStr } from '../mock/xmlStr'
import { onMounted, ref } from 'vue'
const name = 'MiniFlow'
const components = {}
const canvas = ref(null)
onMounted(() => {
  init()
})
async function init() {
  console.log('init');
  // 获取到属性ref为“canvas”的dom节点
  
  console.log(canvas.value);
  // 建模
  const viewer = new BpmnJS({ container: canvas.value });
  try {
    await viewer.importXML(xmlStr);
  } catch (err) {
    console.error('error loading BPMN 2.0 XML', err);
  }
}
</script>

<style scoped>
.containers {
  background-color: #ffffff;
  width: 100%;
  height: calc(100vh - 52px);
}

.canvas {
  width: 100%;
  height: 100%;
}

.panel {
  position: absolute;
  right: 0;
  top: 0;
  width: 300px;
}
</style>