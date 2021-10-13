import { createStore } from "vuex";
import { Tag, State } from "./model";
import { sideBarlist } from "@/mock/sideBar";

export default createStore({
  state: (): State => ({
    isCollapsed: false,
    currentRoute: "Dashboard",
    tagList: [sideBarlist[0], sideBarlist[1]],
    selectedKeys: [sideBarlist[0].key],
  }),

  getters: {
    getCollapse() {
      return this.isCollapsed;
    },

    getCurrentRoute() {
      return this.currentRoute;
    },
  },

  mutations: {
    setCollapse(state) {
      state.isCollapsed = !state.isCollapsed;
    },

    addTagList(state, item: Tag): void {
      const isHas = state.tagList.find((index) => index.name == item.name);
      if (!isHas) {
        state.tagList.push(item);
      }
    },

    delTagList(state, item: Tag): void {
      const index = state.tagList.indexOf(item);

      if (index > -1) {
        state.tagList.splice(index, 1);
      }
    },

    changeTagStatus(state, item: Tag): void {
      for (const tag of state.tagList) {
        tag.isActive = false;

        if (item.name === tag.name) {
          tag.isActive = true;

          state.selectedKeys[0] = item.key;
        }
      }
    },

    setCurrentRoute(state, currentRoute: string) {
      state.currentRoute = currentRoute;
    },
  },

  actions: {},

  modules: {},
});
