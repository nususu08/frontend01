<script setup>
import FrontWheel from "@/components/FrontWheel.vue";
import Realwheel from "@/components/RealWheel.vue";
</script>

<template>
  <h1>Hello Vue!</h1>
  <h1>Hello Vue!</h1>
  <FrontWheel></FrontWheel>
  <Realwheel></Realwheel>

  <div class="car">
    <FrontWheel />
    <Realwheel />
  </div>
</template>

<style scoped>
.car {
  display: flex;
  gap: 10px;
}
</style>
