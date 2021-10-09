import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// 暂时全局引入 ant-design-vue
import antV from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

// 引入初始化 css
import "@/assets/reset.scss";

createApp(App).use(store).use(router).use(antV).mount("#app");
