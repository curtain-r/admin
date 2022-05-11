<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      {{data.Ptitle}}
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <router-link :to="data.toPath[0]"> {{data.Stitle}} </router-link>
        </a-menu-item>
        <a-menu-item>
          <router-link :to="data.toPath[1]"> {{data.Etitle}} </router-link>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script setup lang="ts">
import { DownOutlined } from '@ant-design/icons-vue';
const data = defineProps({
  Ptitle: String,
  Stitle: String,
  Etitle: String,
  toPath: Array,
})
</script>

