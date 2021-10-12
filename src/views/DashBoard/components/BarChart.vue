<template>
  <div id="barChart" :style="{ width, height }"></div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import * as echarts from "echarts";

defineProps({
  width: {
    type: String,
    require: true,
  },

  height: {
    type: String,
    require: true,
  },
});

onMounted(() => {
  let barChart = echarts.init(
    document.getElementById("barChart") as HTMLCanvasElement
  );

  barChart.setOption({
    xAxis: {
      data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
    },
    yAxis: {},
    series: [
      {
        type: "bar",
        data: [23, 24, 18, 25, 27, 28, 25],
      },
    ],
  });
});
</script>

<style lang="scss" scoped></style>
