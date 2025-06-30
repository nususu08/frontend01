<script setup>
import { reactive, onMounted } from "vue";
import httpService from "@/services/HttpService";
import MemoCard from "@/components/MemoCard.vue";

const state = reactive({
  memos: [],
});

onMounted(() => {
  getItems({});
});

const getItems = async (param) => {
  const data = await httpService.getMemoList(param);
  state.memos = data.resultData;
  console.log("state.memos: ", state.memos);
};

const removeItem = async (id) => {
  if (confirm("삭제하시겠습니까?")) {
    console.log("삭제하겠다");
    const params = { memo_id: id };
    const data = await httpService.deleteMemo(params);
    if (data.resultData === 1) {
      // getItems({});
      const deleteIdx = state.memos.findIndex((item, idx) => item.id === id);
      if (deleteIdx >= 0) {
        state.memos.splice(deleteIdx, 1);
      }
    }
  }
};
</script>

<template>
  <router-link to="/add" class="add btn btn-light"> + 추가하기 </router-link>

  <div class="memo-list">
    <MemoCard
      @delete-item="removeItem"
      v-for="m in state.memos"
      :item="m"
      :key="m.id"
    />
  </div>
</template>

<style lang="scss" scoped>
.add {
  display: block;
  padding: 25px;
  border: 1px solid #eee;
}
</style>
