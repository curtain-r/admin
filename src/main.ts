import { createApp } from 'vue';
import Antd from 'ant-design-vue';

import App from './App.vue'
import router from './router';

import { store, key } from './sotre';

router.beforeEach((to, from, next) => {
  // const store = useStore();
  // 如果要求必须登录
  // to.name表示没有注册的路由
  if(to.name === undefined || (to.meta.requireAuth  && !store.state.isLogin)) {
    next({
      path: '/login'
    })
  } else {
    next();
  }
});

const app = createApp(App);
app.use(router);
app.use(Antd);
app.use(store, key);
app.mount('#app')
