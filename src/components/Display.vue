<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <book-outlined />
              <span>日志</span>
            </span>
          </template>
          <a-menu-item key="logcollection">
            <router-link to="logcollection">日志集</router-link>
          </a-menu-item>
          <a-menu-item key="logupload">
            <router-link to="logupload">写日志</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <template #title>
            <span>
              <span>温度</span>
            </span>
          </template>
          <a-menu-item key="tempcollection">
            <router-link to="tempcollection">结果集</router-link>
          </a-menu-item>
          <a-menu-item key="tempupload">
            <router-link to="tempupload">上传数据</router-link>
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="sub4">
          <template #title>
            <span>
              <span>湿度</span>
            </span>
          </template>
          <a-menu-item key="rhcollection">
            <router-link to="rhcollection">结果集</router-link>
          </a-menu-item>
          <a-menu-item key="rhupload">
            <router-link to="rhupload">上传数据</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <span>瓦斯浓度</span>
            </span>
          </template>
          <a-menu-item key="gascollection">
            <router-link to="gascollection">结果集</router-link>
          </a-menu-item>
          <a-menu-item key="gasupload">
            <router-link to="gasupload">上传数据</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <CloudDownloadOutlined />
          <router-link to="download" >
            下载数据
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>{{ store.state.name }}</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '500px' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        code by xxx
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {
  BookOutlined,
  CloudDownloadOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

import { useStore } from '../sotre';
export default defineComponent({
  components: {
    BookOutlined,
    CloudDownloadOutlined
  },
  data() {
    return {
      collapsed: ref<boolean>(false),
      selectedKeys: ref<string[]>(['1']),
    };
  },
  setup() {
    const store = useStore();
    return {
      store,
    }
  }
});
</script>
<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
