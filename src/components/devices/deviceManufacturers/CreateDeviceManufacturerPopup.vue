<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn color="blue lighten-2 mx-3" dark v-on="on"
        >Add New Device Manufacturer</v-btn
      >
    </template>

    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title
        >Add a New Device Manufacturer</v-card-title
      >

      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            name="name"
            label="Device Manufacturer Name"
            v-model="title"
            id="deviceManufacturerInput"
            :rules="rules"
          ></v-text-field>
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success" class="mt-3" :loading="saving" @click="submit"
          >Save Device Manufacturer</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import db from "@/firebase.js";

export default {
  data() {
    return {
      title: "",
      saving: false,
      rules: [value => !!value || "required"],
      dialog: false
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const deviceManufacturer = {
          title: this.title
        };
        this.saving = true;
        db.collection("deviceManufacturers")
          .add(deviceManufacturer)
          .then(() => {
            console.log("added device Manufacturer to db");
            this.$emit("success");
            this.$refs.form.reset();
            this.saving = false;
            this.dialog = false;
          });
      } else {
        console.log("didn't validate");
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
