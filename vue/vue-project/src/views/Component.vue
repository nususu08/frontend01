<script setup>
import FrontWheel from "@/components/FrontWheel.vue";
import Realwheel from "@/components/RealWheel.vue";
import { useCounterStore } from "@/stores/counter.js";
const counterStore = useCounterStore();
</script>

<template>
  <h1>Components.vue</h1>
  <button @click="counterStore.increment">회전</button>
  <div class="car">
    <FrontWheel />
    <FrontWheel />
  </div>

  <div class="car">
    <Realwheel />
    <Realwheel />
  </div>
</template>

<style scoped>
.car {
  display: flex;
  gap: 10px;
}
</style>
