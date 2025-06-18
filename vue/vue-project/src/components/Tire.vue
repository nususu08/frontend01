<script setup>
//pors 외부어서 들어오는 데이터
const props = defineProps({
  color: String, // 타입지정
});
</script>

<template>
  <!-- :style 이것은 vue문법
     중괄호 2개 겹쳐져 있는 것은 콧수염(Mustache 템플릿) -->
  <div :style="{ color: props.color }">{{ props.color || "BLACK!!" }} TIRE</div>
</template>

<style scoped></style>
