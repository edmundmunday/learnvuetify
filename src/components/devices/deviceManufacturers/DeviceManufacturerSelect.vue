<template>
  <div>
    <v-select
      v-model="selected"
      :items="listItems"
      :label="collectionTitle"
      @change="select"
    ></v-select>
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
