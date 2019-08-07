<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">This is the Dashboard page</h1>
    <v-container fluid class="my-5">
      <!-- sort buttons -->
      <v-layout row wrap class="mb-3 pa-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn color="grey mx-2" @click="sortBy('title')" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By Ticket Title</span>
            </v-btn>
          </template>
          <span>Sort by Ticket Title</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn color="grey mx-2" @click="sortBy('person')" v-on="on">
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort by Person Name</span>
        </v-tooltip>
      </v-layout>
      <!-- headers -->

      <v-card class="grey lighten-4 pa-3">
        <v-layout class="mx-3" row wrap>
          <v-flex class="pl-2" xs3>
            <div class="caption grey--text">Ticket Title</div>
          </v-flex>
          <v-flex xs3>
            <div class="caption grey--text">Person</div>
          </v-flex>
          <v-flex xs3>
            <div class="caption grey--text">Due By</div>
          </v-flex>
          <v-flex xs3>
            <div class="caption grey--text">Status</div>
          </v-flex>
        </v-layout>
      </v-card>

      <!-- rows -->
      <v-card
        v-for="ticket in tickets"
        :key="ticket.title"
        row
        wrap
        :class="`pa-3 ticket ${ticket.status}`"
      >
        <v-layout>
          <v-flex class="pl-2" xs3>
            <div>{{ ticket.title }}</div>
          </v-flex>
          <v-flex xs3>
            <div>{{ ticket.person }}</div>
          </v-flex>
          <v-flex xs3>
            <div>{{ ticket.due }}</div>
          </v-flex>
          <v-flex xs3>
            <div>
              <v-chip :color="ticket.color" class="caption my-2" small>{{
                ticket.status
              }}</v-chip>
            </div>
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
        }
      ]
    };
  },
  methods: {
    sortBy(prop) {
      this.tickets.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  }
};
</script>
<style>
.ticket.assess {
  border-left: 10px solid #ffecb3;
}

.ticket.repair {
  border-left: 10px solid #ffcdd2;
}

.ticket.transit {
  border-left: 10px solid #bbdefb;
}

.v-chip.transit {
  color: #bbdefb;
}

.v-chip.repair {
  color: #ffcdd2;
}

.v-chip.assess {
  color: #ffecb3;
}
</style>
