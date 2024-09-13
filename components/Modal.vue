<template>
  <b-modal
    id="modal"
    title="Add your Image here"
    size="xl"
    scrollable>
    <slot />
    <template v-slot:modal-footer>
      <b-button
        id="scan-area"
        size="lg"
        variant="outline-dark"
        @click="scanCroppedArea">
        <v-icon icon="crop-alt" />
        Scan
      </b-button>
      <b-button
        id="save-item"
        size="lg"
        variant="outline-dark"
        @click="saveItem">
        <v-icon icon="save" />
        Save
      </b-button>
      <b-button
        size="lg"
        variant="outline-dark"
        @click="exit">
        <v-icon icon="running" />
        Exit
      </b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        save: {
            type: Function,
            default: function() {
                return 42;
            }
        }
    },
    data: function() {
        return {
            infoMessage: 'Crop your image in this window',
            getRecord: this.save
        };
    },
    mounted: function() {
        this.$root.$on('saveResponse', (record) => {
            this.$emit('save', record);
        });
    },
    methods: {
        exit() {
            this.$bvModal.hide('modal');
        },
        scanCroppedArea() {
            this.$root.$emit('scanCrop');
        },
        saveItem() {
            this.$root.$emit('saveRequest');
        }
    }
};
</script>

<style scoped>
</style>
