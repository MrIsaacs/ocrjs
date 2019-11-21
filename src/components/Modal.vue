<template>
  <b-modal
    id="modal"
    title="Add your Image here"
    size="xl"
    scrollable
    @cancel="scanCroppedArea"
    @ok="saveItem">
    <slot />
    <template v-slot:modal-footer="{cancel, ok}">
      <b-button
        id="scan-area"
        size="md"
        variant="outline-dark"
        @click="cancel">
        <v-icon icon="crop-alt" />
        Scan
      </b-button>
      <b-button
        id="save-item"
        size="md"
        variant="outline-dark"
        @click="ok">
        <v-icon icon="save" />
        Save/Exit
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
        saveItem(event) {
            event.preventDefault();
            this.$root.$emit('saveRequest');
        },
        scanCroppedArea(event) {
            event.preventDefault();
            this.$root.$emit('scanCrop');
        }
    }
};
</script>

<style scoped>
</style>
