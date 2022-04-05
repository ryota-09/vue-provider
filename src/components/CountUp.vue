<template>
  <div>
    <h4>カウントエリア</h4>
    <button v-on:click="onDecrement">-</button>
    <span>countの値: {{ store.count.value }} </span>
    <button v-on:click="onIncrement">+</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { storeKey } from "@/provider/StoreProvider";
export default defineComponent({
  //setupの中にフィールド変数もメソッドも記入。
  setup() {
    //injectにはexportしたキーを入れる。useStoreの中のstate,actionが使える。
    const store = inject(storeKey);

    //storeのエラーを回避。undefindeの可能性を潰すため。
    if(!store){
      throw new Error("")
    }

    const onIncrement = () => {
      store.increment();
    };
    const onDecrement = () => {
      store.decrement();
    };

    return { store, onIncrement, onDecrement };
  },
});
</script>

<style scoped></style>
