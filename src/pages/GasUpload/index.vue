<template>
  <a-form :model="formState" name="normal_login" class="logupload-form" @finish="onFinish" @finishFailed="onFinishFailed">
    <a-form-item label="数据名称" name="dataName" :rules="[{ disable:true, message: '' }]">
      <a-input :value="formState.dataName">
      </a-input>
    </a-form-item>
    <a-form-item label="数据" name="information" :rules="[{required: true}]">
      <a-input v-model:value="formState.information" placeholder="" />
    </a-form-item>

    <a-form-item label="单位" name="unit" :rules="[{ required: true, message: '' }]">
      <a-input v-model:value="formState.unit">
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

import {gasInsert} from '../../api/index'
import { store } from '../../sotre';
interface FormState {
  dataName: string;
  information: string;
  unit: string;
}
const formState = reactive<FormState>({
  dataName: '瓦斯浓度',
  information: '',
  unit: '',
});
const onFinish = async (values: any) => {
  const option = {...values, userFullname: store.state.name};
  const info:any = await gasInsert(option);
  if (info.ok) {
    alert('写入成功')
  } else {
    alert(info.msg);
  }
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const disabled = computed(() => {
  return !(formState.dataName && formState.unit && formState.information);
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
