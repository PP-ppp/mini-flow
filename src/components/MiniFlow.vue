<template>
  <div class="containers">
    <div class="canvas" ref="canvas"></div>
  </div>
</template>

<script>
// 引入相关的依赖
import BpmnJS from 'bpmn-js'
import { xmlStr } from '../mock/xmlStr'
export default {
  name: 'MiniFlow',
  components: {},
// 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    console.log('MiniFlow created');
  },
// 生命周期 - 载入后, Vue 实例挂载到实际的 DOM 操作完成，一般在该过程进行 Ajax 交互
  mounted() {
    this.init()
  },
  data() {
    return {
      // bpmn建模器
      bpmnModeler: null,
      container: null,
      canvas: null
    }
  },
// 方法集合
  methods: {
    async init () {
      console.log('init');
      // 获取到属性ref为“canvas”的dom节点
      const canvas = this.$refs.canvas
      // 建模
      const viewer = new BpmnJS({ container: canvas });
      // this.bpmnModeler = new BpmnModeler({
      //   container: canvas
      // })
      try {
        console.log(this.xmlStr);
        await viewer.importXML(xmlStr);
      } catch (err) {
        console.error('error loading BPMN 2.0 XML', err);
      }
		},
		success () {
			// console.log('创建成功!')
		}
  },
// 计算属性
  computed: {}
}
</script>

<style scoped>
.containers{
	background-color: #ffffff;
	width: 100%;
	height: calc(100vh - 52px);
}
.canvas{
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