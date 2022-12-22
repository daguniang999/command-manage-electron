import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css";
import "@/assets/css/common.css";
import svgIcon from "./components/common/svg/index.vue";
import "virtual:svg-icons-register";
import "ant-design-vue/dist/antd.css";
import { createPinia } from "pinia";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.component("svg-icon", svgIcon);

// 全局指令
app.directive("focus", {
  mounted(el) {
    el.focus();
  },
});

app.mount("#app");
