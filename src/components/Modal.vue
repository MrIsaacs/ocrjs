<template>
  <b-modal
    id="modal-add"
    title="Add your Image here"
    size="xl">
    <slot />
  </b-modal>
</template>

<script>
export default {
    name: 'Modal',
    data: function() {
        return {
            infoMessage: 'Crop your image in this window'
        };
    }
};
</script>

<style scoped>
</style>
