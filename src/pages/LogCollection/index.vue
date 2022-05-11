<script lang='ts' setup>
import { onMounted, ref } from 'vue';
import { getLogCollection } from '../../api';
import FormList from '../../components/FormList.vue';

const columns = [
  {
    title: '序号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '上传者',
    dataIndex: 'userFullname',
    key: 'userFullname',
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '内容',
    key: 'content',
    dataIndex: 'content',
  },
  {
    title: '时间',
    key: 'postTime',
    dataIndex: 'postTime',
  },
  {
    title: '状态',
    key: 'status',
    dataIndex: 'status',
  },
  {
    title: '操作',
    key: 'action',
  },
];
const action = ['完成', '修改', '删除']
let data = ref([
  
]);

const logReload = async() => {
  const info:any = await getLogCollection();
  if (info.ok) {
    data.value = info.data;
  } else {
    alert('数据加载失败');
  }
}
onMounted(async () => {
  logReload();
  
})


</script>
<template>
  <FormList :columns='columns' :data='data' :action='action' :reload="logReload"/>
</template>
<style>
</style>