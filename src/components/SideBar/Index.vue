<template>
  <div class="sidebar">
    <div class="logo big-font">Vue Ant Admin</div>
    <a-menu
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      v-model:selectedKeys="selectedKeys"
    >
      <template v-for="item in list" :key="item.key">
        <template v-if="!item.children">
          <a-menu-item
            :key="item.key"
            style="margin-top: 0"
            @click="goRoute(item)"
          >
            <template #icon>
              <component :is="item.icon" />
            </template>
            {{ item.name }}
          </a-menu-item>
        </template>
        <template v-else>
          <SubMenu :menu-info="item" :key="item.key" />
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, toRaw, toRefs, watch, Component, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import SubMenu from "./SubMenu.vue";
import { MenuList } from "./model";
import { list } from "@/mock/sideBar";

const selectedKeys = computed(() => {
  return store.state.selectedKeys;
});

const collapsed = computed(() => store.state.isCollapsed);

const store = useStore();

const router = useRouter();

const goRoute = (item: MenuList) => {
  router.push(item.name);
  store.commit("addTagList", item);
  store.commit("changeTagStatus", item);
};
</script>

<style lang="scss" scoped>
.sidebar {
  .logo {
    position: relative;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #42b983;
    text-align: center;
    overflow: hidden;
    color: black;
    font-weight: bold;
  }

  ul {
    height: 100%;
  }
}
</style>
