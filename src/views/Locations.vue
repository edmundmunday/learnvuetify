<template>
  <div class="locations">
    <v-container fluid>
      <v-layout ma-3 row wrap>
        <v-flex xs12>
          <v-card>
            <v-card-title>
              Locations
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-folder-search"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              v-model="selected"
              :headers="headers"
              :items="locations"
              :search="search"
              :loading="loading"
              item-key="name"
              show-select
              class="elevation-1"
            ></v-data-table>
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
      loading: true,
      selected: [],
      search: "",
      headers: [
        { text: "Name", value: "name" },
        { text: "Address Line 1", align: "left", value: "addressLine1" },
        { text: "Address Line 2", value: "addressLine2" },
        { text: "City", value: "city" },
        { text: "State", value: "state" },
        { text: "Postcode", value: "postcode" },
        { text: "Country", value: "country" }
      ],
      locations: []
    };
  },
  created() {
    db.collection("locations").onSnapshot(response => {
      const locationsArray = [];
      response.forEach(response => {
        locationsArray.push({ ...response.data(), id: response.id });
      });
      console.log(locationsArray);
      this.locations = locationsArray;
      this.loading = false;
    });
  }
};
</script>

<style lang="scss" scoped></style>
