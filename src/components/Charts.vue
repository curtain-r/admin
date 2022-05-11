<template>
  <div>
    <a-button class='charts' type="primary" @click="showModal">生成图表</a-button>
    <a-button class='download' type="primary">
      <a :href="downloadUrl">下载</a>
    </a-button>
    <a-modal v-model:visible="visible" title="图表" cancelText="取消" okText="确认" @ok="handleOk">
      <div id="chart"></div>
    </a-modal>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, toRefs } from 'vue';
import * as echarts from 'echarts';
import { chartData } from '../api/index'
const { api } = defineProps({
  downloadUrl: String,
  api: String,
})

const visible = ref<boolean>(false);
const showModal = async () => {
  visible.value = true;
  // 走网络请求，请求数据
  const info: any = await chartData(api);
  if (info.ok) {
    const container = document.getElementById('chart');
    const chart = echarts.init(container);
    const xData = [];
    const yData = [];
    const data = info.data;
    const unit = data[0].unit;
    data.forEach((v) => {
      xData.push(v.id),
        yData.push(v.information)
    })
    const option = {
      title: {
        text: "数据表"
      },
      xAxis: {
        name: '序号',
        type: 'category',
        data: xData //['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        name: unit,
        type: 'value'
      },
      series: [
        {
          data: yData, //[120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]
    };

    option && chart.setOption(option);
  } else {
    alert('数据加载失败！')
  }

};
const handleOk = (e: MouseEvent) => {

  visible.value = false;

};

//#region 
// echart
onMounted(() => {


})
//#endregion

</script>
<style scoped>
.charts {
  position: absolute;
  right: 20%;
}

.download {
  position: absolute;
  right: 10%;
}

#chart {
  width: 40vw;
  height: 50vh;
}
</style>

