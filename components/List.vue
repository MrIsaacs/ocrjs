<script setup>
// interface ScanDocument {
//   reference: String,
//   image: String,
//   text: String
// }

// const props = defineProps({
//   docs: Object as PropType<ScanDocument>
// })
const props = defineProps({
  docs: {
    type: Object,
    required: false
  }
})
</script>

<template>
  <b-col class="List">
    <!-- <div v-if="scanData.length > 0"> -->
    <div v-if="docs.length">
      <b-table
        striped
        hover
      >
        <b-thead>
          <b-tr>
            <b-th scope="col">
              #
            </b-th>
            <b-th scope="col">
              Reference
            </b-th>
            <b-th scope="col">
              Cropped Image
            </b-th>
            <b-th scope="col">
              Scanned Text
            </b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr
            v-for="({ reference, image, text }, i) in docs"
            @click="$emit('trigger', { reference, image, text})"
          >
            <b-th scope="row">
              {{ i + 1 }}
            </b-th>
            <b-td>
              <img :src="reference">
            </b-td>
            <b-td>
              <img :src="image">
            </b-td>
            <b-td>
              <p>{{ text }}</p>
            </b-td>
          </b-tr>
        </b-tbody>
      </b-table>
      <!-- <b-table
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
      </b-table> -->
    </div>
    <div v-else>
        <BIcon style="font-size: 80px; margin: 15px 0;" icon="line-md:file-off" />
      <br>
      <span>
        Your document list<br>
        is currently empty
      </span>
    </div>
  </b-col>
</template>

<!-- <script>
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
</script> -->

<style scoped>
.List table img {
    max-width: 200px;
    max-height: 100px;
}
</style>
