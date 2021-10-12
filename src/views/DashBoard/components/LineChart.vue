<template>
  <div id="lineChart" :style="{ width, height }"></div>
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
  let lineChart = echarts.init(
    document.getElementById("lineChart") as HTMLCanvasElement
  );

  lineChart.setOption({
    xAxis: {
      data: [
        "6:00",
        "7:00",
        "8:00",
        "9:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
      ],
    },
    yAxis: {},
    series: [
      {
        data: [
          10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150,
        ],
        type: "line",
        smooth: true,
      },
    ],
  });
});
</script>

<style lang="scss" scoped></style>
