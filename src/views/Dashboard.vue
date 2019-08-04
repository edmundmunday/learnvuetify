<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">This is the Dashboard page</h1>
    <v-container class="my-5">
      <v-card class="pa-3">
        <!-- headers -->
        <v-layout class="mx-3" row wrap>
          <v-flex xs12 md6>
            <div class="caption grey--text">Ticket Title</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due By</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="caption grey--text">Status</div>
          </v-flex>
        </v-layout>

        <!-- rows -->
        <v-layout
          v-for="ticket in tickets"
          :key="ticket.title"
          row
          wrap
          class="mx-3"
        >
          <v-flex xs12 md6>
            <div>{{ ticket.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div>{{ ticket.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div>{{ ticket.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div>{{ ticket.status }}</div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tickets: [
        {
          title: "Broken iphone",
          person: "Edmund Munday",
          due: "29/09/19",
          status: "waiting for parts"
        },
        {
          title: "Broken samsung",
          person: "John Smith",
          due: "14/07/19",
          status: "assessment"
        },
        {
          title: "Broken HTC",
          person: "Jane Doe",
          due: "24/09/19",
          status: "transit"
        }
      ]
    };
  }
};
</script>
