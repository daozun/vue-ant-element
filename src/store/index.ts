import { createStore } from "vuex";
import { Tag, State } from "./model";

export default createStore({
  state: (): State => ({
    isCollapsed: false,
    tagList: [
      {
        key: "1",
        name: "Dashboard",
        isActive: true,
      },
      {
        key: "2",
        name: "Document",
        isActive: false,
      },
    ],
    selectedKeys: ["1"],
  }),

  getters: {
    getCollapse() {
      return this.isCollapsed;
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
  },

  actions: {},

  modules: {},
});
