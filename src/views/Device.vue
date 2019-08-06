<template>
  <div class="devices">
    <h1 class="subheading grey--text">This is the Devices page</h1>
    <v-container class="my-5">
      <!-- row -->
      <v-layout row wrap>
        <!-- cards -->
        <v-card>
          <v-card-title>{{ device.model }}</v-card-title>
          <v-card-text>{{ device.make }}</v-card-text>
          <v-responsive class="text-center">
            <v-avatar size="200">
              <img :src="device.img" alt="avatar" />
            </v-avatar>
          </v-responsive>
          <v-card-text>{{ device.date }}</v-card-text>
        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import db from "@/firebase.js";
export default {
  props: ["id"],
  data() {
    return {
      device: {}
    };
  },
  created() {
    db.collection("devices")
      .doc(this.id)
      .get()
      .then(doc => {
        this.device = doc.data();
      });
  }
};
</script>

<style lang="scss" scoped></style>
