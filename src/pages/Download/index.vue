<script lang='ts' setup>
import { onMounted, ref } from 'vue';
import { downloadList, DOWNLOADEXCEL } from '../../api';
import FormList from '../../components/FormList.vue';

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
const action = '删除'
let data = ref([
  
]);

const downloadListReload = async() => {
  try {
    const info:any = await downloadList();
    if (info.ok) {
    data.value = info.data;
  } else {
    alert('数据加载失败');
  }
  } catch (error) {
    alert('接口调用失败')
  }
  
}
onMounted(async () => {
  downloadListReload();
})


</script>
<template>
  <FormList :columns='columns' :data='data' :action='action' :reload="downloadListReload"/>
  <button class="btn">
    <a :href="DOWNLOADEXCEL">下载</a>
  </button>
</template>
<style>
  .btn {
    position: absolute;
    right: 47vw;
  }
</style>