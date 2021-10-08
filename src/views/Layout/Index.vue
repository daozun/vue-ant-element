<template>
  <div :class="classObj">
    <SideBar class="sidebar"></SideBar>
    <div class="main">
      <NavBar></NavBar>
      <TagsView></TagsView>
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
.openSidebar {
  .sidebar {
    position: fixed;
    width: 250px;
    height: 100%;
  }

  .main {
    margin-left: 250px;
  }
}

.hideSidebar {
  .sidebar {
    position: fixed;
    width: 80px;
    height: 100%;
  }

  .main {
    margin-left: 80px;
  }
}

.main {
  .container {
    padding: 32px;
  }
}
</style>
