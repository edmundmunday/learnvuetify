<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn color="blue lighten-2 mx-3" dark v-on="on"
        >Add New {{ entityTitle }}</v-btn
      >
    </template>

    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title
        >Add a New {{ entityTitle }}</v-card-title
      >

      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            name="name"
            label="Device Model Name"
            v-model="title"
            id="deviceModelInput"
            :rules="rules"
          ></v-text-field>
          <CollectionSelect
            collection="deviceManufacturers"
            collectionTitle="Device Manufacturers"
            documentKey="title"
            @select="select"
          />
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success" class="mt-3" :loading="saving" @click="submit"
          >Save {{ entityTitle }}</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import db from "@/firebase.js";
import CollectionSelect from "@/components/CollectionSelect.vue";

export default {
  data() {
    return {
      title: "",
      parent: "",
      saving: false,
      rules: [value => !!value || "required"],
      dialog: false
    };
  },
  props: ["entityDb", "entityTitle"],
  components: {
    CollectionSelect
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const entity = {
          title: this.title,
          parent: this.parent
        };
        this.saving = true;
        db.collection(this.entityDb)
          .add(entity)
          .then(() => {
            console.log(`added ${this.entityTitle} to db`);
            this.$emit("success");
            this.$refs.form.reset();
            this.saving = false;
            this.dialog = false;
          });
      } else {
        console.log("didn't validate");
      }
    },
    select(selection) {
      this.parent = selection;
    }
  }
};
</script>

<style lang="scss" scoped></style>
