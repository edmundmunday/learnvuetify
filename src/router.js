import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Devices from "@/views/Devices.vue";
import Tickets from "@/views/Tickets.vue";
import Device from "@/views/Device.vue";
import DeviceManufacturers from "@/views/devices/deviceManufacturers/DeviceManufacturers.vue";
import Locations from "@/views/Locations.vue";

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
      path: "/devices/devicemanufacturers",
      name: "deviceManufacturers",
      component: DeviceManufacturers
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
    },
    {
      path: "/devices/:id",
      name: "device",
      component: Device,
      props: true
    },
    {
      path: "/locations",
      name: "locations",
      component: Locations
    }
  ]
});
