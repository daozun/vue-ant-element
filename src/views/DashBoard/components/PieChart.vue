<template>
  <a-card title="转化率">
    <div id="pieChart" :style="{ width, height }"></div>
  </a-card>
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

let pieChart: any

onMounted(() => {
  pieChart = echarts.init(
    document.getElementById("pieChart") as HTMLCanvasElement
  );

  pieChart.setOption({
    series: [
      {
        type: "pie",
        data: [
          {
            value: 335,
            name: "直接访问",
          },
          {
            value: 234,
            name: "联盟广告",
          },
          {
            value: 1548,
            name: "搜索引擎",
          },
        ],
      },
    ],
  });

  initResize(pieChart);
});

onUnmounted(() => {
  cancelResize(pieChart);
});
</script>

<style lang="scss" scoped></style>
