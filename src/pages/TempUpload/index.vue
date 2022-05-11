<template>
  <a-form :model="formState" name="normal_login" class="logupload-form" @finish="onFinish" @finishFailed="onFinishFailed">
    <a-form-item label="数据名称" name="dataName" :rules="[{ message: '' }]">
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
import {tempInsert} from '../../api/index'
import { useStore } from '../../sotre';
interface FormState {
  dataName: string;
  information: string;
  unit: string;
}
const formState = reactive<FormState>({
  dataName: '温度',
  information: '',
  unit: '',
});
const store = useStore();
const onFinish = async (values: any) => {
  const option = {...values, userFullname: store.state.name};
  const info:any = await tempInsert(option);
  if (info.ok) {
    alert('温度数据写入成功')
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
