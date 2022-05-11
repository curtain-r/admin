<template>
  <div>
    <a @click="showModal">删除</a>
    <a-modal v-model:visible="visible" :title="opTitle" :confirm-loading="confirmLoading" cancelText="取消" okText="删除" @ok="handleOk">
        <a-form-item label="数据名称" name="dataName" :rules="[{  message: '' }]">
          <a-input v-model:value="formState.dataName">
          </a-input>
        </a-form-item>
        <a-form-item label="数据" name="information" :rules="[{  }]">
          <a-input v-model:value="formState.information" placeholder="" />
        </a-form-item>

        <a-form-item label="单位" name="unit" :rules="[{  message: '' }]">
          <a-input v-model:value="formState.unit">
          </a-input>
        </a-form-item>

    </a-modal>
  </div>
</template>
<script lang="ts">

import { defineComponent, reactive, ref } from 'vue';
import { downloadListRemove } from '../api'
export default defineComponent({
  name: 'Modal',
  props: {
    op: String,
    record: Object,
    reload: Function,
  },
  setup(props) {
    
    const visible = ref<boolean>(false);
    const showModal = () => {
      visible.value = true;
    };
    const confirmLoading = ref<boolean>(false);
    const opTitle = ref<String>('删除操作');
    const {record, op, reload} = props;
    const formState = reactive({
      unit: record.unit,
      information: record.information,
      dataName: record.dataName
    });
    const handleOk = async (e: MouseEvent) => {
      confirmLoading.value = true;
      // 去请求
      try {
        const info:any = await downloadListRemove({id:record.id});
        if (info.ok) {
          alert('删除成功')
        } else {
          alert("删除失败")
        }
      } catch (error) {
        alert('出错啦111');
        console.error(error);
      }finally {
        confirmLoading.value = false;
        visible.value = false;
        reload();
      }
      
      
    };
    return {
      visible,
      opTitle,
      confirmLoading,
      showModal,
      handleOk,
      formState,
    };
  },
});
</script>

