<template>
  <div id="barChart" :style="{ width, height }"></div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from "vue";
import * as echarts from "echarts";
import { initResize, cancelResize } from "@/utils/resize";

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

let barChart: any;

onMounted(() => {
  barChart = echarts.init(
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

  initResize(barChart);
});

onUnmounted(() => {
  cancelResize(barChart);
});
</script>

<style lang="scss" scoped></style>
