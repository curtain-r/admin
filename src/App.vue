<script setup lang="ts">
import Home from './components/Home.vue';
import * as echarts from 'echarts';
import { provide } from 'vue';
provide('ec', echarts);
</script>
<template>
  <Home />
  <!-- <Layout /> -->
</template>
<style scoped>

</style>
