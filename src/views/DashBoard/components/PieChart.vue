<template>
  <a-card title="转化率">
    <div id="pieChart" :style="{ width, height }"></div>
  </a-card>
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
  let pieChart = echarts.init(
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
});
</script>

<style lang="scss" scoped></style>
