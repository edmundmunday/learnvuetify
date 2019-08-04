<template>
  <div>
    <!-- App header bar -->
    <v-app-bar app>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="appDrawer = !appDrawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">FederatedReturns</span>
        <span>Management</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text class="grey--text">
        <span left>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Nav-drawer -->
    <v-navigation-drawer v-model="appDrawer" class="primary" app>
      <!-- Link list -->
      <v-list nav>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="{ name: link.route }"
        >
          <v-list-item-icon>
            <v-icon class="white--text">mdi-{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appDrawer: false,
      links: [
        { icon: "view-dashboard", text: "Dashboard", route: "dashboard" },
        { icon: "cellphone", text: "Devices", route: "devices" },
        { icon: "receipt", text: "Tickets", route: "tickets" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
