<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import { useStore, storeKey } from "@/provider/StoreProvider";
export default defineComponent({
  //setupの中にフィールド変数もメソッドも記入。
  setup() {
    //基本的にはルートコンポーネントでprovideをかく。
    //親コンポーネントで必要。第一引数はkey, 第二引数はStore。
    provide(storeKey, useStore());
    return {};
  },
});
</script>

<style scoped></style>
