<script lang='ts' setup>
import { onMounted, ref } from 'vue';
import { getGasCollection } from '../../api';
import FormList from '../../components/FormList.vue';
import Charts from '../../components/Charts.vue';
import { GASDOWNLOAD, GASDATA } from '../../api/index'

const columns = [
  {
    title: '序号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '数据名称',
    dataIndex: 'dataName',
    key: 'dataName',
  },
  {
    title: '数据',
    dataIndex: 'information',
    key: 'information',
  },
  {
    title: '单位',
    key: 'unit',
    dataIndex: 'unit',
  },
  {
    title: '时间',
    key: 'createTime',
    dataIndex: 'createTime',
  },
  {
    title: '用户名',
    key: 'userFullname',
    dataIndex: 'userFullname',
  },
  {
    title: '操作',
    key: 'action',
  },
];
const action = ['修改', '移动', '删除']
let data = ref([
  
]);

const gasReload = async() => {
  const info:any = await getGasCollection();
  if (info.ok) {
    data.value = info.data;
  } else {
    alert('数据加载失败');
  }
}
onMounted(async () => {
  gasReload();
})


</script>
<template>
  <FormList :columns='columns' :data='data' :action='action' :reload="gasReload"/>
  <Charts :downloadUrl="GASDOWNLOAD" :api="GASDATA"/>
</template>
<style>
</style>