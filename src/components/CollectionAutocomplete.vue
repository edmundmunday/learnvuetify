<!-- a reusable component for selecting from a firebase collection.
pass in three props. 
collection="{name of your collection", 
collectionTitle="{plain english name for your collection}",
documentKey="{name of the key that you want to use as the text against each selector}"-->

<template>
  <div>
    <v-autocomplete
      v-model="selected"
      :items="listItems"
      :label="collectionTitle"
      @change="select"
    ></v-autocomplete>
  </div>
</template>

<script>
import db from "@/firebase.js";

export default {
  props: ["collection", "collectionTitle", "documentKey"],
  data() {
    return {
      listItems: [],
      loading: true,
      selected: {}
    };
  },
  methods: {
    select() {
      this.$emit("select", this.selected);
    }
  },
  created() {
    db.collection(this.collection).onSnapshot(response => {
      const listItems = [];
      response.forEach(response => {
        let listItem = {
          text: response.data()[this.documentKey],
          value: response.id
        };

        listItems.push(listItem);
      });
      this.listItems = listItems;
      this.loading = false;
    });
  }
};
</script>

<style lang="scss" scoped></style>
