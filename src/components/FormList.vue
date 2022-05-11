<template>

  <a-table :columns="columns" :data-source="data" :bordered="true" :rowKey="(record) => record.id">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'author'">
        <span>
          <smile-outlined />
          上传者
        </span>
      </template>
    </template>

    <template #bodyCell="{ column, record }" >
      <template v-if="column.key === 'author'">
        <a>
          {{ record.author }}
        </a>
      </template>
      <template v-else-if="column.key === 'action'">
        <span v-if="Array.isArray(action)">
          <a v-for="op of action" >
             <Modal :op="op" :record="record" :reload="reload"/>
          </a>
        </span>
        <span v-else>
          <a>
             <DownloadDelete  :record="record" :reload="reload"/>
          </a>
        </span>
      </template>
    </template>
   
  </a-table>
</template>
<script lang="ts" setup>
import { SmileOutlined } from '@ant-design/icons-vue';

import Modal from './Modal.vue';
import DownloadDelete from './DownloadDelete.vue';
defineProps({
  columns: Array,
  data: Array,
  action: Array || String,
  reload: Function,
})
// 模拟的数据


</script>

