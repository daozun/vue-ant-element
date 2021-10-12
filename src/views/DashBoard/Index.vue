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
        :tab-list="tabListTitle"
        :active-tab-key="activeKey"
        @tabChange="onTabChange"
      >
        <LineChart
          v-if="activeKey === 'tab1'"
          :width="width"
          :height="height"
        />
        <BarChart v-if="activeKey === 'tab2'" :width="width" :height="height" />
      </a-card>
    </a-row>
    <a-row :gutter="16" class="card">
      <a-col :span="8">
        <PieChart :width="width" :height="height" />
      </a-col>
      <a-col :span="8">
        <CircleChart :width="width" :height="height" />
      </a-col>
      <a-col :span="8">
        <NightingaleChart :width="width" :height="height" />
      </a-col>
    </a-row>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { cardList } from "@/mock/cardList";
import LineChart from "./components/LineChart.vue";
import BarChart from "./components/BarChart.vue";
import PieChart from "./components/PieChart.vue";
import CircleChart from "./components/CircleChart.vue";
import NightingaleChart from "./components/NightingaleChart.vue";

const tabListTitle = [
  {
    key: "tab1",
    tab: "访问数",
  },
  {
    key: "tab2",
    tab: "访问量",
  },
];
const activeKey = ref("tab1");

function onTabChange(key: string) {
  activeKey.value = key;
}

const width = ref("100%");
const height = ref("300px");
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
