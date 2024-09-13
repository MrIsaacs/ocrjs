<template>
  <div class="container">
    <div class="row">
      <div id="preview-overlay">
        <b-img
          :src="croppedImage"
          fluid />
      </div>
      <div class="content">
        <b-img
          :src="reference"
          fluid-grow />
        <div>
          <h4><u>Scanned Text:</u></h4>
          <p>{{scannedText}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ScanView',
    props: {
        content: {
            type: Function,
            default: function() {
                return 'SchuHschuH';
            }
        }
    },
    data: function() {
        return {
            reference: this.content().reference,
            croppedImage: this.content().croppedImage,
            scannedText: this.content().scannedText
        };
    }
};
</script>

<style scoped>
#preview-overlay {
  position: absolute;
  top: 0;
  right: 30px;
  max-width: 250px;
  height: 30%;
  /* old-school transparent tile background */
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACmSURBVDhP7ZJLFsIgDEXlsyb2P2fAhoB4NbGnWqhHHDjxDlqS9BGah8s5X0aISO89peScs9QOSuS9RUv8xR/ynRg/h1h9gpo/FXMNQggWPEPJtiDQ1ZHWWilFL5OlHqDyYNEINOiPSjIcitLKwO5nF7Z4I9a2PF/Q6g99tvcSZ2L+jcHoWoe0oSWPjTPQ4KWO5zalHbVW3DrrjJ7v8FO7bZCPMYrIFb6yvwfm5nBeAAAAAElFTkSuQmCC');
  -webkit-box-shadow: -15px 15px 50px -25px rgba(0,0,0,0.5);
  -moz-box-shadow: -15px 15px 50px -25px rgba(0,0,0,0.5);
  box-shadow: -15px 15px 50px -25px rgba(0,0,0,0.5);
  z-index: 1;
}
</style>
