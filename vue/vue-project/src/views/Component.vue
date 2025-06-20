<script setup>
import FrontWheel from "@/components/FrontWheel.vue";
import Realwheel from "@/components/RealWheel.vue";
</script>

<template>
  <h1>Components.vue</h1>
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
