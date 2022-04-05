<template>
  <!-- providerをルートコンポーネントで囲う(slot部分) -->
  <StoreProvider>
    <div>
      <h1>provide / injectの使い方</h1>
      <h3>~ Vuexを使用しない状態管理 ~</h3>
      <p>例として、あえて入れ子構造にしていく。</p>
      <br />
      <CountUp />
    </div>
  </StoreProvider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CountUp from "@/components/CountUp.vue";
import StoreProvider from "../provider/StoreProvider.vue";

export default defineComponent({
  components: {
    CountUp,
    StoreProvider,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
