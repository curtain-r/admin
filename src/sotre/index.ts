import { InjectionKey } from "vue";
import { Store, createStore, useStore as baseUseStore } from 'vuex';

// 创建state接口
export interface State {
  name: string,
  isLogin: boolean
}
// 以来vue3的 Provide 和 inject，所以需要提供一个Key来唯一取值
export const key: InjectionKey<Store<State>> = Symbol();

// 需要根据 interface State创建一个Store
export const store = createStore<State> ({
  state: {
    name: 'sam',
    isLogin: false,
  },
  mutations: {
    loginOk(state) {
      state.isLogin=true;
    },
    saveUser(state, name) {
      state.name = name;
    }
  },
  // getters
  // getters: {
  //   fullName: state => state.name + 'zhao'
  // }
})
// 给外部提供一个 useStore(key) 默认调用的 use Store
export function useStore() {
  return baseUseStore(key);
}