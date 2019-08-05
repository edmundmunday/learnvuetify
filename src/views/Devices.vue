<template>
  <div class="devices">
    <h1 class="subheading grey--text">This is the Devices page</h1>
    <v-container class="my-5">
      <!-- row -->
      <v-layout row wrap>
        <!-- cards -->
        <v-flex xs12 sm6 md4 lg3 v-for="device in devices" :key="device.model">
          <v-card class="ma-3">
            <v-responsive class="text-center">
              <v-avatar size="100">
                <img :src="device.img" alt="avatar" />
              </v-avatar>
            </v-responsive>

            <v-card-title primary-title>{{ device.model }}</v-card-title>
            <v-card-text>{{ device.make }}</v-card-text>
            <v-card-actions>
              <v-btn color="grey">
                <v-icon small left>mdi-wrench</v-icon>
                <span>Configure</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      devices: [
        {
          make: "Apple",
          model: "iPhone 6",
          img:
            "https://images-na.ssl-images-amazon.com/images/I/51BbI-8wpTL.jpg"
        },
        {
          make: "Apple",
          model: "iPhone 7",
          img:
            "https://static-www.o2.co.uk/sites/default/files/product_images/apple/apple_iphone_7_32gb_black/iphone-7-matt-black_sku-header.png"
        },
        {
          make: "Apple",
          model: "iPhone 8",
          img:
            "https://cdn.movertix.com/media/catalog/product/cache/image/1200x/a/p/apple-iphone-8-plus-64-gb-rojo-0190198746313.jpg"
        },
        {
          make: "Apple",
          model: "iPhone X",
          img:
            "https://switch.com.my/wp-content/uploads/2017/11/iPhoneX-SpaceGray-34BR-34FL-2up-US-EN-SCREEN.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
