<template>
  <div>
    <div class="wheel" :style="{ transform: 'rotate(' + rotation + 'deg)' }">
      <div v-for="(item, index) in items" :key="index" class="item">
        {{ item }}
      </div>
    </div>
    <button @click="startSpinning">抽奖</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rotation: 0,
      items: [
        "奖品1",
        "奖品2",
        "奖品3",
        "奖品4",
        "奖品5",
        "奖品6",
        "奖品7",
        "奖品8",
      ], // 奖项列表
      spinning: false,
    };
  },
  methods: {
    startSpinning() {
      if (this.spinning) return;

      this.spinning = true;
      const spinTime = Math.random() * 4000 + 3000; // 随机旋转时间（3000-7000毫秒）
      const spinRound = Math.floor(Math.random() * 4 + 4); // 随机旋转圈数（4-7圈）
      const targetIndex = Math.floor(Math.random() * this.items.length); // 随机选项索引

      const totalRotation =
        spinRound * 360 + (360 / this.items.length) * targetIndex;
      let currentRotation = 0;
      const rotationStep = 10;
      const interval = setInterval(() => {
        currentRotation += rotationStep;
        if (currentRotation >= totalRotation) {
          clearInterval(interval);
          this.rotation = totalRotation % 360;
          this.spinning = false;
        } else {
          this.rotation = currentRotation % 360;
        }
      }, 10);
    },
  },
};
</script>

<style scoped>
.wheel {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid #000;
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
  margin-top: 10px;
}

.item {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

button {
  display: block;
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
}
</style>
