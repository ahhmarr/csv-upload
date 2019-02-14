import Vue from "vue";
import LayoutMaster from "@/layouts/LayoutMaster.vue";
import router from "./router";
import store from "./store";
import "@/assets/style.scss";
import notification from "vue-snotify";
import "vue-snotify/styles/material.css";
Vue.use(notification);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(LayoutMaster)
}).$mount("#app");
