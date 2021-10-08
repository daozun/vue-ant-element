<template>
  <div class="navbar">
    <div class="hamburger fl big-font" @click="toggleClick">
      <UnorderedListOutlined />
    </div>
    <div class="breadcrumb fl">
      <a-breadcrumb>
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item>文档</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="right-menu fr big-font">
      <SearchOutlined class="right-menu-item" />
      <CompressOutlined class="right-menu-item" />
      <TranslationOutlined class="right-menu-item" />
      <UserOutlined class="right-menu-item" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, toRaw } from "vue";
import { useStore } from "vuex";
import {
  UnorderedListOutlined,
  SearchOutlined,
  CompressOutlined,
  TranslationOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";

const store = useStore();
const toggleClick = () => {
  store.commit("setCollapse");
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  line-height: 50px;
  padding: 0 15px;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

  .breadcrumb {
    margin-left: 10px;

    .ant-breadcrumb {
      line-height: 50px;
    }
  }

  .right-menu-item {
    padding: 0 8px;
  }
}
</style>
