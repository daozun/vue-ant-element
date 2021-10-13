<template>
  <a-card title="LOL战队">
    <div id="nightingaleChart" :style="{ width, height }"></div>
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

let nightingaleChart: any

onMounted(() => {
  nightingaleChart = echarts.init(
    document.getElementById("nightingaleChart") as HTMLCanvasElement
  );

  nightingaleChart.setOption({
    series: [
      {
        type: "pie",
        data: [
          {
            value: 100,
            name: "RNG",
          },
          {
            value: 200,
            name: "EDG",
          },
          {
            value: 300,
            name: "FPX",
          },
          {
            value: 400,
            name: "SKT",
          },
          {
            value: 500,
            name: "GEN.G",
          },
        ],
        roseType: "area",
      },
    ],
  });

  initResize(nightingaleChart);
});

onUnmounted(() => {
  cancelResize(nightingaleChart);
});
</script>

<style lang="scss" scoped></style>
