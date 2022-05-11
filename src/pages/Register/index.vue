<template>
  <a-form :model="formState" name="normal_login" class="register-form" @finish="onFinish" @finishFailed="onFinishFailed">
    <text class="text">用户注册</text>
    <a-form-item label="账号" name="username" :rules="[{ required: true, message: '请设置账号!' }]">
      <a-input v-model:value="formState.username">
        <template #prefix>
          <UserOutlined class="site-form-item-icon" />
        </template>
      </a-input>
    </a-form-item>

    <a-form-item label="密码" name="password" :rules="[{ required: true, message: '请设置密码!' }]">
      <a-input-password v-model:value="formState.password">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </a-input-password>
    </a-form-item>
    <a-form-item label="姓名" name="fullname" :rules="[{ required: true, message: '请输入用户名!' }]">
      <a-input v-model:value="formState.fullname">
      </a-input>
    </a-form-item>

    <a-form-item>
      <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
        注册
      </a-button>   
    </a-form-item>
    <router-link to="login">去登录</router-link>
  </a-form>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { UserOutlined, LockOutlined, AlipayCircleOutlined } from '@ant-design/icons-vue';
import { computed, reactive } from 'vue';
import { useStore } from '../../sotre';
import { register } from '../../api';

interface FormState {
  username: string;
  password: string;
  fullname: string;
}
// 看看全局状态
// 在登录成功后修改 islogin 为 true
const store = useStore();


// 编程式导航，在登录成功后跳转至home
const router = useRouter()

const formState = reactive<FormState>({
  username: '',
  password: '',
  fullname: '',
});
const onFinish = async (values: any) => {
  const info:any = await register(values);
  const ok = info.ok;
  if (ok) {
  // 登录成功跳转到主页面
    router.replace('login');
    alert('注册成功请登录！');
  } else {
    alert(info.msg);
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
