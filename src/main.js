import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { AutoCompletePlugin } from "@syncfusion/ej2-vue-dropdowns";
import { firestorePlugin } from "vuefire";

Vue.use(GridPlugin, AutoCompletePlugin, firestorePlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
