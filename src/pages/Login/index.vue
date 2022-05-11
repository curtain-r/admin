<template>
  
  <a-form :model="formState" name="normal_login" class="login-form" @finish="onFinish" @finishFailed="onFinishFailed">
    <text class="text">巡检机器人上位机</text>
    <a-form-item label="账号" name="username" :rules="[{ }]">
      <a-input v-model:value="formState.username">
        <template #prefix>
          <UserOutlined class="site-form-item-icon" />
        </template>
      </a-input>
    </a-form-item>

    <a-form-item label="密码" name="password" :rules="[{ }]">
      <a-input-password v-model:value="formState.password">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </a-input-password>
    </a-form-item>
    <a-form-item>
      <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
        登录
      </a-button>
      <!-- <span>没有账号</span>
      <router-link to="register">去注册</router-link> -->
    </a-form-item>
    <router-link to="register">去注册</router-link>
  </a-form>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { computed, reactive } from 'vue';
import { useStore } from '../../sotre';
import { login } from '../../api';

interface FormState {
  username: string;
  password: string;
}
// 看看全局状态
// 在登录成功后修改 islogin 为 true
const store = useStore();


// 编程式导航，在登录成功后跳转至home
const router = useRouter()

const formState = reactive<FormState>({
  username: '',
  password: '',
});
const onFinish = async (values: any) => {
  // 1. 调用接口判读该用户是否正确登录
  const info:any = await login(values);
  const { ok } = info;
  // 2. 
  if (ok) {
    // 如果正确登录
    // 1. 切换主页面
    const {data} = info;
    store.commit('loginOk');
    // 保存用户姓名
    store.commit('saveUser', data);
    router.push('logcollection')
  } else {
    alert('error')
  }

};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const disabled = computed(() => {
  return !(formState.username && formState.password);
});

</script>
<style>
  .text {
    display: block;
    font-size: 1.5rem;
    margin-bottom: 3vh;
  }
</style>
