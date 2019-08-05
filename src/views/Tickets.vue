<template>
  <div class="tickets">
    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>Header</v-expansion-panel-header>

          <v-expansion-panel-content
            v-for="ticket in myTickets"
            :key="ticket.title"
          >
            <v-card class="px-4 grey--text">
              <v-card-text>
                <div class="font-weight-bold">{{ ticket.title }}</div>
                <div>Owner: {{ ticket.person }}</div>
                <div>Due Date: {{ ticket.due }}</div>
                <div>Status: {{ ticket.status }}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
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
          status: "transit",
          color: "#bbdefb"
        },
        {
          title: "Broken samsung",
          person: "John Smith",
          due: "14/07/19",
          status: "repair",
          color: "#ffcdd2"
        },
        {
          title: "Broken HTC",
          person: "Jane Doe",
          due: "24/09/19",
          status: "assess",
          color: "#ffecb3"
        },
        {
          title: "Janky shit",
          person: "Edmund Munday",
          due: "29/09/19",
          status: "transit",
          color: "#bbdefb"
        }
      ]
    };
  },
  computed: {
    myTickets() {
      return this.tickets.filter(ticket => {
        return ticket.person == "Edmund Munday";
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
