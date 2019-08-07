<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn color="blue lighten-2 mx-3" dark v-on="on">Add New Location</v-btn>
    </template>

    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title
        >Add a New Location</v-card-title
      >

      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            name="name"
            label="Location Name"
            v-model="name"
            id="nameInput"
            :rules="rules"
          ></v-text-field>
          <v-text-field
            name="name"
            label="Address 1"
            v-model="addressLine1"
            id="address1Input"
            :rules="rules"
          ></v-text-field>
          <v-text-field
            name="name"
            label="Address 2"
            v-model="addressLine2"
            id="address2Input"
          ></v-text-field>
          <v-text-field
            name="name"
            label="City"
            v-model="city"
            id="cityInput"
            :rules="rules"
          ></v-text-field>
          <v-text-field
            name="name"
            label="State"
            v-model="state"
            id="stateInput"
            :rules="rules"
          ></v-text-field>
          <v-text-field
            name="name"
            label="Post Code"
            v-model="postCode"
            id="postCodeInput"
            :rules="rules"
          ></v-text-field>
          <v-text-field
            name="name"
            label="Country"
            v-model="country"
            id="countryInput"
            :rules="rules"
          ></v-text-field>
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success" class="mt-3" :loading="saving" @click="submit"
          >Save Location</v-btn
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
      addressLine1: "",
      addressLine2: "",
      city: "",
      country: "",
      name: "",
      postCode: "",
      state: "",
      saving: false,
      rules: [value => !!value || "required"],
      dialog: false
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const location = {
          addressLine1: this.addressLine1,
          addressLine2: this.addressLine2,
          city: this.city,
          country: this.country,
          name: this.name,
          postcode: this.postCode,
          state: this.state
        };
        this.saving = true;
        db.collection("locations")
          .add(location)
          .then(() => {
            console.log("added location to db");
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
