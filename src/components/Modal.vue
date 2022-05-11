<template>
  <div>
    <a @click="showModal">{{ op }}</a>
    <a-modal v-model:visible="visible" :title="opTitle" :confirm-loading="confirmLoading" cancelText="取消" :okText="op" @ok="handleOk">
      <div v-if="record.unit">
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
      </div>
      <div v-else>
        <a-form-item label="标题" name="title" :rules="[{  message: '' }]">
          <a-input v-model:value="formState.title">
          </a-input>
        </a-form-item>
        <a-form-item label="内容" name="content" :rules="[{  }]">
          <a-textarea v-model:value="formState.content" placeholder="" :rows="4" />
        </a-form-item>
      </div>
    </a-modal>
  </div>
</template>
<script lang="ts">
import { message } from 'ant-design-vue';
import { defineComponent, reactive, ref } from 'vue';
import { opData } from '../api'
import { useStore } from '../sotre';
export default defineComponent({
  name: 'Modal',
  props: {
    op: String,
    record: Object,
    reload: Function,
  },
  setup(props) {
    
    const visible = ref<boolean>(false);
    const store = useStore();
    const showModal = () => {
      visible.value = true;
    };
    const confirmLoading = ref<boolean>(false);
    const opTitle = ref<String>(props.op + '操作');
    const {record, op, reload} = props;
    const formState = reactive({
      dataName: record.dataName,
      information: record.information,
      unit: record.unit,
      title: record.title,
      content: record.content,
    });
    const handleOk = async (e: MouseEvent) => {
      confirmLoading.value = true;
      const opertaion = op === '删除' ? "DELETE" : op === '修改' ? "UPDATA" : op === '完成' ? "FINISH" : "MOVE";
      const type = !record.unit ? "LOG" : record.dataName === '温度' ? "TEMP" : record.dataName === '湿度' ? "RH" : "GAS";
      const api =  type + opertaion;
      const params = {
        id: record.id, 
        title: formState.title, 
        content: formState.content,
        dataName: formState.dataName,
        information: formState.information,
        unit: formState.unit,
        userFullname: store.state.name
      };
      // 去请求
      try {
        const info:any = await opData(api, params);
        if (info.ok) {
        alert(op + '成功')
      } else {
        alert(op + "失败")
      }
      } catch (error) {
        alert('出错啦');
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

