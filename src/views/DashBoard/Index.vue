<template>
  <section class="dashboard">
    <a-row :gutter="16" class="card">
      <a-col :span="6" v-for="(item, index) in cardList" :key="index">
        <a-card :title="item.title">
          <template #extra>
            <a-tag :color="item.color">{{ item.actionTime }}</a-tag>
          </template>
          <div class="flex content">
            <p>{{ item.content }}</p>
            <component :is="item.icon" />
          </div>
        </a-card>
      </a-col>
    </a-row>
    <a-row class="line-chart">
      <a-card
        style="width: 100%"
        :tab-list="tabListNoTitle"
        :active-tab-key="noTitleKey"
        @tabChange="(key) => onTabChange(key, 'noTitleKey')"
      >
        <div
          v-show="noTitleKey === '访问数'"
          id="lineChart"
          style="width: 100%; height: 300px"
        ></div>
        <div
          v-show="noTitleKey === '访问量'"
          id="barChart"
          style="width: 100%; height: 300px"
        ></div>
      </a-card>
    </a-row>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
import { cardList } from "@/mock/cardList";

const tabListNoTitle = [
  {
    key: "访问数",
    tab: "访问数",
  },
  {
    key: "访问量",
    tab: "访问量",
  },
];
const key = ref("访问数");
const noTitleKey = ref("访问数");

onMounted(() => {
  let lineChart = echarts.init(
    document.getElementById("lineChart") as HTMLCanvasElement
  );

  let barChart = echarts.init(
    document.getElementById("barChart") as HTMLCanvasElement
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

  barChart.setOption({
    xAxis: {
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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

const onTabChange = (value: string, type: string) => {
  if (type === "key") {
    key.value = value;
  } else if (type === "noTitleKey") {
    noTitleKey.value = value;
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  background-color: #f0f2f5;

  .card {
    .content {
      justify-content: space-between;
      align-items: center;
      padding-right: 7px;

      p {
        color: #000000d9;
        font-size: 22px;
      }

      span {
        font-size: 30px;
        color: green;
      }
    }
  }

  .line-chart {
    margin: 20px 0 20px 0;
  }
}
</style>
