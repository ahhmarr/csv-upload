import Vue from "vue";
import Router from "vue-router";
import ImportContainer from "@/components/import/ImportContainer";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: ImportContainer
    }
  ]
});
