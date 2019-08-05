<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn color="blue lighten-2 mx-3" dark v-on="on">Add New Ticket</v-btn>
    </template>

    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title
        >Add a New Ticket</v-card-title
      >

      <v-card-text>
        <v-form class="px-3">
          <v-text-field
            name="name"
            label="title"
            v-model="title"
            id="id"
          ></v-text-field>
          <v-textarea v-model="content"></v-textarea>
          <v-btn color="success" class="mt-3" @click="submit"
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
export default {
  data() {
    return {
      title: "",
      content: ""
    };
  },
  methods: {
    submit() {
      console.log(this.title + this.content);
    }
  }
};
</script>

<style lang="scss" scoped></style>
