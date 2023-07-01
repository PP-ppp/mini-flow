<template>
  <div class="containers" ref="container">
    <div class="canvas" ref="canvas"></div>
    <div ref="properties" class="panel"></div>
  </div>
</template>

<script setup>
// 引入相关的依赖
import BpmnModeler from 'bpmn-js/lib/Modeler';
import {
  BpmnPropertiesPanelModule,
  BpmnPropertiesProviderModule,
} from 'bpmn-js-properties-panel';
// import camundaModdle from 'camunda-bpmn-moddle/resources/camunda.json';
import { xmlStr } from '../mock/xmlStr'
import { onMounted, ref } from 'vue'
const canvas = ref(null)
const properties = ref(null)
const container = ref(null)
onMounted(() => {
  init()
})
async function init() {
  console.log('init');
  // 获取到属性ref为“canvas”的dom节点
  console.log(canvas.value);
  console.log(properties.value);
  // 建模
  const viewer = new BpmnModeler({
    container: canvas.value,
    // camunda: camundaModdle,
    propertiesPanel: {
      parent: properties.value
    },
    additionalModules: [
      // 左边工具栏以及节点
      BpmnPropertiesProviderModule,
      BpmnPropertiesPanelModule
    ]
  });
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
.panel{
	position: absolute;
	right: 0;
	top: 0;
	width: 300px;
}
</style>