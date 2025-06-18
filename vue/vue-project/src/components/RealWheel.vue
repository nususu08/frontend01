<script setup>
import Tire from "./Tire.vue";
</script>

<template>
  <div class="real-wheel">
    <span>REAl-WHEEL</span>
    <Tire color="RED" />
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
