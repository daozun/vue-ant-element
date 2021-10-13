import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// todo: 生产环境按需引入 ant-design-vue， 开发环境全局引入增快反应时间。
import antV from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

// 引入初始化 css
import "@/assets/reset.scss";

createApp(App).use(store).use(router).use(antV).mount("#app");
