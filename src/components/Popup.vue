<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn color="blue lighten-2 mx-3" dark v-on="on">Add New Device</v-btn>
    </template>

    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title
        >Add a New Device</v-card-title
      >

      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            name="name"
            label="make"
            v-model="make"
            id="makeInput"
            :rules="rules"
          ></v-text-field>
          <v-text-field
            name="name"
            label="model"
            v-model="model"
            id="modelInput"
            :rules="rules"
          ></v-text-field>
          <v-text-field
            name="name"
            label="img"
            v-model="img"
            id="imgInput"
            :rules="rules"
          ></v-text-field>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date"
                label="Date of Purchase"
                prepend-icon="mdi-calendar"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)"
                >OK</v-btn
              >
            </v-date-picker>
          </v-menu>

          <v-btn color="success" class="mt-3" :loading="saving" @click="submit"
            >Save Ticket</v-btn
          >
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import db from "@/firebase.js";

export default {
  data() {
    return {
      model: "",
      make: "",
      img: "",
      date: "",
      saving: false,
      menu: false,
      rules: [value => !!value || "required"],
      dialog: false
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const device = {
          model: this.model,
          make: this.make,
          img: this.img,
          date: this.date
        };
        this.saving = true;
        db.collection("devices")
          .add(device)
          .then(() => {
            console.log("added device to db");
            this.$emit("success");
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
