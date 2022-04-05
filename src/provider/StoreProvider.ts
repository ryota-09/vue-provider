/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { InjectionKey, reactive, toRefs } from "vue";

//参考サイト: https://zenn.dev/okakyo/articles/f39d5c2c328b6d
//参考サイト: https://www.thisdot.co/blog/provide-inject-api-with-vue-3

//この部分の書き方は記事によってそれぞれ異なる。

type State = {
  count: number;
};

export const useStore = () => {
  //state
  const globalState = reactive<State>({
    count: 0,
  });

  //action
  const increment = () => {
    globalState.count++;
    console.log("Store内 increment", globalState.count);
  };
  const decrement = () => {
    globalState.count--;
    console.log("Store内 decrement", globalState.count);
  };
  //...でオブジェクトの中を一度バラバラにしている。
  return { ...toRefs(globalState), increment, decrement };
};

//親,子コンポーネントで用いるkey。return {  }の型の表現が33行目。
type storeType = ReturnType<typeof useStore>;
export const storeKey: InjectionKey<storeType> = Symbol("store");
