<template>
  <div>
    ss
    <VueCropper
      v-if="image"
      ref="cropper"
      :src="image"
      alt="Source Image"
      :cropmove="croppedImage" />
    {{exampleImage}}
  </div>
</template>

<script>
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';

export default {
    name: 'ImageCropper',
    components: {
        VueCropper
    },
    props: {
        exampleImage: {
            type: String,
            default: 'dasd'
        }
    }
};
</script>

<style>

</style>
