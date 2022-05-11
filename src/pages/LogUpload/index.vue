<template>
  <a-form :model="formState" name="normal_login" class="logupload-form" @finish="onFinish" @finishFailed="onFinishFailed">
    <a-form-item label="标题" name="title" :rules="[{ required: true, message: '' }]">
      <a-input v-model:value="formState.title">
      </a-input>
    </a-form-item>
    <a-form-item label="内容" name="content" :rules="[{required: true}]">
      <a-textarea v-model:value="formState.content" placeholder="" :rows="4" />
    </a-form-item>

    <a-form-item label="状态" name="status" :rules="[{ required: true, message: '' }]">
      <a-input type='number' v-model:value="formState.status">
      </a-input>
    </a-form-item>

    <a-form-item class="logupload-form-button">
      <a-button :disabled="disabled" type="primary" html-type="submit">
       提交
      </a-button>
    </a-form-item>
  </a-form>
</template>
<script setup lang="ts">
import { computed, reactive } from 'vue';
import {logInsert} from '../../api/index'
import { useStore } from '../../sotre';
import { message } from 'ant-design-vue';
interface FormState {
  title: string;
  content: string;
  status: string;
}

const formState = reactive<FormState>({
  title: '',
  content: '',
  status: '',
});
const store = useStore();
const onFinish = async (values: any) => {
  values.status = Number(values.status);
  const option = {...values, userFullname: store.state.name}
  const info:any = await logInsert(option);
  if (info.ok) {
    message.info('写入成功');
    formState.title = '';
    formState.content = '';
    formState.status = '';
  } else {
    alert(info.msg);
  }
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const disabled = computed(() => {
  return !(formState.title && formState.content && formState.status);
});

</script>
<style scoped>
  .logupload-form {
    width: 45%;
    margin: 0 auto;
  }
  .logupload-form-button {
    text-align: center;
    
  }
</style>
