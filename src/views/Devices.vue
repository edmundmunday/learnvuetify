<template>
  <div class="devices">
    <h1 class="subheading grey--text">This is the Devices page</h1>
    <v-container class="my-5">
      <!-- row -->
      <v-layout row wrap>
        <!-- cards -->
        <v-flex xs12 sm6 md4 lg3 v-for="device in devices" :key="device.id">
          <v-card class="ma-3">
            <v-responsive class="text-center">
              <v-avatar size="100">
                <img :src="device.img" alt="avatar" />
              </v-avatar>
            </v-responsive>

            <v-card-title primary-title>{{ device.model }}</v-card-title>
            <v-card-text>{{ device.make }}</v-card-text>
            <v-card-actions>
              <router-link :to="{ name: 'device', params: { id: device.id } }">
                <v-btn color="grey">
                  <v-icon small left>mdi-wrench</v-icon>
                  <span>View</span>
                </v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import db from "@/firebase.js";
export default {
  data() {
    return {
      devices: []
    };
  },
  created() {
    db.collection("devices").onSnapshot(response => {
      const changes = response.docChanges();

      changes.forEach(change => {
        if (change.type === "added") {
          this.devices.push({
            ...change.doc.data(),
            id: change.doc.id
          });
        }
      });
    });
  }
};
</script>

<style lang="scss" scoped></style>
