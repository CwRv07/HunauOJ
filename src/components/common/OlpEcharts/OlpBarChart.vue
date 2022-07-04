<template>
  <div id="olpBarChart" ref="olpBarChart"></div>
</template>

<script setup lang="ts" name="olpBarChart">
import * as echarts from 'echarts';
const olpBarChart = ref();
onMounted(() => {
  const el = olpBarChart.value;
  var myChart = echarts.init(el);
  //设置参数
  myChart.setOption({
    title: {
      text: 'World Population',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: 'category',
      data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'],
    },
    series: [
      {
        name: '2011',
        type: 'bar',
        data: [203, 489, 34, 970, 744, 230],
        markPoint: {
          data: [
            { type: 'max', name: 'Max', symbolRotate: 270, symbolOffset: [5, 0], symbolSize: 55, label: { position: 'inside', offset: [5, 5] } },
            { type: 'min', name: 'Min', symbolRotate: 270, symbolOffset: [5, 0], symbolSize: 55, label: { position: 'inside', offset: [5, 5] } },
          ],
        },
      },
    ],
  });
});
</script>

<style lang="scss" scoped>
#olpBarChart {
  width: 100%;
  height: 100%;
}
</style>
