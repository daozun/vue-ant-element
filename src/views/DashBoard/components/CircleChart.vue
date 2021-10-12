<template>
  <a-card title="经典语录">
    <div id="circleChart" :style="{ width, height }"></div>
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
  let circleChart = echarts.init(
    document.getElementById("circleChart") as HTMLCanvasElement
  );

  circleChart.setOption({
    legend: {
      bottom: "10",
      left: "center",
      data: ["哈哈哈哈", "起飞", "肉蛋葱鸡", "老师傅", "unbengable"],
    },
    series: [
      {
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
          emphasis: {
            show: true,
          },
        },
        labelLine: {
          show: false,
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "30",
            fontWeight: "bold",
          },
        },
        data: [
          { value: 335, name: "哈哈哈哈" },
          { value: 310, name: "起飞" },
          { value: 234, name: "肉蛋葱鸡" },
          { value: 135, name: "老师傅" },
          { value: 1548, name: "unbengable" },
        ],
      },
    ],
  });
});
</script>

<style lang="scss" scoped></style>
