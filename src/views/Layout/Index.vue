<template>
  <div :class="classObj">
    <SideBar class="sidebar"></SideBar>
    <div class="main">
      <header class="header">
        <NavBar></NavBar>
        <TagsView></TagsView>
      </header>
      <router-view class="container" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, toRaw, computed } from "vue";
import { useStore } from "vuex";
import SideBar from "@/components/SideBar/Index";
import NavBar from "@/components/NavBar/Index";
import TagsView from "@/components/TagsView/Index";

const store = useStore();

const classObj = computed(() => {
  return {
    hideSidebar: store.state.isCollapsed,
    openSidebar: !store.state.isCollapsed,
  };
});
</script>

<style lang="scss" scoped>
// todo: 简化css

.openSidebar {
  height: 100%;
  .sidebar {
    position: fixed;
    width: 250px;
    height: 100%;
  }

  .main {
    height: 100%;
    margin-left: 250px;
  }
}

.hideSidebar {
  height: 100%;
  .sidebar {
    position: fixed;
    width: 80px;
    height: 100%;
  }

  .main {
    height: 100%;
    margin-left: 80px;
  }
}

.main {
  height: 100%;

  .container {
    padding: 32px;
    position: relative;
  }
}
</style>
