<script setup lang="ts">  

import { useStore } from '../sotre';
import Display from './Display.vue';

  const store = useStore();
  // 导航拦配置
</script>
<template>
  <div v-if="store.state.isLogin" id="home">
    <Display />
  </div>
  <div v-else id="container">
    <div id="nologin">
      <router-view></router-view>
    </div>
  </div>

</template>
<style scoped>
  #container {
    width: 100vw;
    height: 100vh;
    background-color: #c8bcbc;
  }
  #nologin {
  width: 45vw;
  height: 55vh;
  background-color: #c8bcbc;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow:  -20px -20px 60px #aaa0a0,
             20px 20px 60px #e6d8d8;
  border-radius: 8%;
}
  #nav {
    display: flex;
    flex-direction: column;
    width: 18vw;
    border: 1px solid black;
    text-align: center;
  }
  .nav-but {
    height: 60px;
    line-height: 40px;
    border-bottom: 1px solid black;
  }
  #main-view {
    flex: 1;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
  }
  #welcome,.logo {
    text-align: center;
    height: 50px;
    border-bottom: 1px solid black;
  }
  span {
    line-height: 50px;
    font-size: 18px;
  }
  #vs {
    margin-top: 5vh;
  }
  .login-form, .register-form {
  width: 65%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  text-align: center;
}
</style>