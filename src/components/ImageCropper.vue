<template>
  <div>
    <vue-cropper
      v-if="image"
      ref="cropper"
      :src="image"
      alt="Source Image"
      :cropmove="croppedImage"
    />
    {{ exampleImage }}
  </div>
</template>

<script>
import Vue from 'vue';
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';

class ImageCropper extends Vue {
    exampleImage = 'dasd';
}

export default ImageCropper;
</script>

<style>

</style>
