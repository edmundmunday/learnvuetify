<template>
  <div class="deviceManufacturer">
    <v-snackbar v-model="snackbar" color="success" right>
      {{ text }}
      <v-btn text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <v-container fluid>
      <v-layout ma-3 row wrap>
        <v-flex xs12>
          <v-card>
            <v-card-title primary-title>
              Device Manufacturer
              <v-spacer></v-spacer>
              <CreateDeviceManufacturerPopup
                @success="deviceManufacturerAdded"
              />
            </v-card-title>
            <ejs-grid
              :dataSource="deviceManufacturers"
              :allowSorting="true"
              :allowReordering="true"
              :allowPaging="true"
              :allowFiltering="true"
              :allowGrouping="true"
              :editSettings="editSettings"
              :actionBegin="actionBegin"
              :allowPdfExport="true"
              :allowExcelExport="true"
              :toolbarClick="toolbarClick"
              :toolbar="toolbarOptions"
              ref="grid"
              id="Grid"
              :groupSettings="{
                showToggleButton: false
              }"
              :filterSettings="{
                mode: 'Immediate',
                immediateModeDelay: '100',
                type: 'Menu'
              }"
              :pageSettings="{ pageSizes: true }"
            >
              <e-columns>
                <e-column
                  field="id"
                  :visible="false"
                  headerText="ID"
                  :isPrimaryKey="true"
                ></e-column>

                <e-column field="title" headerText="Title"></e-column>

                <e-column headerText="Manage" :commands="commands"></e-column>
              </e-columns>
            </ejs-grid>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import db from "@/firebase.js";
import CreateDeviceManufacturerPopup from "@/components/devices/deviceManufacturers/CreateDeviceManufacturerPopup.vue";
import {
  Page,
  Sort,
  Filter,
  Group,
  Reorder,
  Edit,
  CommandColumn,
  PdfExport,
  ExcelExport,
  Search,
  Toolbar
} from "@syncfusion/ej2-vue-grids";

export default {
  data() {
    return {
      deviceManufacturers: [],
      selected: [],
      loading: true,
      snackbar: false,
      text: "",

      //options for the toolbar
      toolbarOptions: ["ExcelExport", "PdfExport", "Search"],
      //settings for editing
      editSettings: {
        allowEditing: true,
        allowDeleting: true,
        showDeleteConfirmDialog: true
      },
      //different command types for the manage buttons
      commands: [
        {
          type: "Edit",
          buttonOption: { cssClass: "e-flat", iconCss: "e-edit e-icons" }
        },
        {
          type: "Delete",
          buttonOption: {
            cssClass: "e-flat",
            iconCss: "e-delete e-icons"
          }
        },
        {
          type: "Save",
          buttonOption: { cssClass: "e-flat", iconCss: "e-update e-icons" }
        },
        {
          type: "Cancel",
          buttonOption: { cssClass: "e-flat", iconCss: "e-cancel-icon e-icons" }
        }
      ]
    };
  },
  provide: {
    //plugins provided to the grid
    grid: [
      Page,
      Sort,
      Filter,
      Group,
      Reorder,
      Edit,
      CommandColumn,
      PdfExport,
      ExcelExport,
      Toolbar,
      Search
    ]
  },
  components: {
    CreateDeviceManufacturerPopup
  },
  methods: {
    //this is called when "actionBegin" is emitted from the grid
    actionBegin(event) {
      if (event.requestType === "save") {
        //if the event requestType is "save"
        let id = event.primaryKeyValue[0];
        let data = {
          title: event.data.title
        };
        //update the record in Firebase
        db.collection("deviceManufacturers")
          .doc(id)
          .set(data, { merge: true })
          .then(() => {
            this.$emit("success");
          });
      } else if (event.requestType === "delete") {
        //or if the event requestType is "delete"
        let id = event.data[0].id;
        //Delete the record from the db
        db.collection("deviceManufacturers")
          .doc(id)
          .delete()
          .then(() => {});
      }
    },
    //This gets called when a toolbar item is clicked
    toolbarClick: function(args) {
      if (args.item.id === "Grid_excelexport") {
        this.$refs.grid.excelExport();
      } else if (args.item.id === "Grid_pdfexport") {
        this.$refs.grid.pdfExport();
      }
    },
    //this gets called when a new manufacturer is added
    deviceManufacturerAdded() {
      this.text = "Device Manufacturer Successfully Added!";
      this.snackbar = true;
    }
  },
  //This runs when the component is created
  created() {
    db.collection("deviceManufacturers").onSnapshot(response => {
      const deviceManufacturersArray = [];
      response.forEach(response => {
        deviceManufacturersArray.push({ ...response.data(), id: response.id });
      });
      this.deviceManufacturers = deviceManufacturersArray;
      this.loading = false;
    });
  }
};
</script>

<style lang="scss" scoped></style>
