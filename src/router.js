import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Devices from "@/views/Devices.vue";
import Tickets from "@/views/Tickets.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/devices",
      name: "devices",
      component: Devices
    },
    {
      path: "/tickets",
      name: "tickets",
      component: Tickets
    }
  ]
});
