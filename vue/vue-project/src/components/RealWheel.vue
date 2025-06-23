<script setup>
import Tire from "./Tire.vue";
import { useCounterStore } from "@/stores/counter.js";

const counterStore = useCounterStore();
</script>

<template>
  <div class="real-wheel">
    <span>REAl-WHEEL</span>
    <Tire color="Green" />
    <div>TIMES: {{ counterStore.count }}</div>
  </div>
</template>

<style scoped>
.real-wheel {
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
}
</style>
