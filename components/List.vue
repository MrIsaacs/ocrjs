<template>
  <b-col class="List">
    <div v-if="scanData.length > 0">
      <b-table
        striped
        hover
        :fields="fields"
        :items="scanData"
        @row-clicked="openEditModal">
        <template v-slot:cell(id)="data">
          {{data.index + 1}}
        </template>
        <template v-slot:cell(reference)="data">
          <b-img
            :src="data.item.reference"
            alt="Reference Image"
            fluid />
        </template>
        <template v-slot:cell(croppedImage)="data">
          <img
            :src="data.item.croppedImage"
            alt="Cropped Image">
        </template>
        <template v-slot:cell(scannedText)="data">
          <p v-text="data.item.scannedText" />
        </template>
      </b-table>
    </div>
    <div v-else>
      <v-icon
        style="font-size: 56px; margin: 15px 0;"
        icon="file-invoice" />
      <br>
      Empty Scanlist
    </div>
  </b-col>
</template>

<script>
export default {
    name: 'List',
    props: {
        items: {
            type: Array,
            default: function() {
                return [];
            }
        }
    },
    data: function() {
        return {
            fields: [
                'id',
                'reference',
                'croppedImage',
                'scannedText'
            ],
            scanData: this.items
        };
    },
    methods: {
        openEditModal(record, index) {
            this.$root.$emit('openEditModal', record, index);
        }
    }
};
</script>

<style scoped>
.List table img {
    max-width: 200px;
    max-height: 100px;
}
</style>
