<template>
  <div class="tag-view">
    <div>
      <a-tag
        v-for="(item, index) in tagList"
        :key="item.name"
        :closable="index > 1"
        @close="closeTag(item)"
        @click="goRoute(item)"
        :class="{ active: item.isActive }"
      >
        {{ item.name }}
      </a-tag>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, toRaw, computed, watch, unref, nextTick } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { Tag } from "@/store/model";

const store = useStore();

const router = useRouter();

const tagList = computed(() => {
  return store.state.tagList;
});

const closeTag = (item: Tag) => store.commit("delTagList", item);

const goRoute = async (item: Tag) => {
  await router.push(item.name);
  store.commit("changeTagStatus", item);
};
</script>

<style lang="scss" scoped>
.tag-view {
  width: 100%;
  height: 34px;
  line-height: 34px;
  border-bottom: 1px solid #d8dce5;

  span {
    margin-left: 15px;

    &.ant-tag {
      margin-right: 0 !important;
      cursor: pointer;
    }
  }

  .active {
    background-color: #1890ff;
    color: #fff;
  }
}
</style>
