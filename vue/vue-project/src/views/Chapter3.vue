<script setup>
import { ref } from "vue";

const fruits = "apple avocado";
const fruitArr = ["banana", "bulebarry"];

const visible = ref({ fruit: true });
const hidden = { fruit: false };

const changeVisible = () => {
  visible.value.fruit = !visible.value.fruit;
};

// 데이터가 많은데 문자열
const rect = "background-color: red; width: 200px; height: 100px";
const rectObj = {
  backgroundColor: "red",
  width: "200px",
  height: "100px",
  marginTop: "10px",
};
rectObj.backgroundColor = "blue";

let loading = false;
</script>

<template>
  <h1>Chanper3.vue</h1>
  <div :class="fruits">사과 / 아보카도</div>
  <div :class="fruitArr" :title="fruitArr">바나나 / 블루베리</div>
  <hr />
  <div :class="visible" class="pointer" @click="changeVisible">사과</div>
  <div :class="hidden">오이</div>
  <div :style="rect">rect</div>
  <div :style="rectObj">rect</div>

  <div v-if="loading">로딩 중!!</div>
  <div v-else>로딩 끝!!</div>

  <div v-show="loading">show loading</div>
</template>

<style scoped>
.fruit {
  color: red;
}
</style>
