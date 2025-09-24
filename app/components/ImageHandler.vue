<script setup>
import VueCropper from 'vue-cropperjs'
import 'cropperjs/dist/cropper.css'
import { createWorker } from 'tesseract.js'

const documentStore = useScanDocumentStore()

const text = ref('')
const inputImage = ref()
const progress = ref(0)

const imageReference = ref()
const imageCropped = ref('')

const cropper = ref()
const cropperReady = ref(false)
const cropperSetupIsFinished = ref(false)


async function cropImage() {
  if (cropperSetupIsFinished.value) {
    imageCropped.value = cropper.value.getCroppedCanvas().toDataURL()
  }
}

function cropperIsReady() {
  if (!cropperReady.value) {
    cropperReady.value = true
  }
}

function cropperSetup() {
  if(cropperReady.value && !cropperSetupIsFinished.value) {
    imageCropped.value = cropper.value.getCroppedCanvas().toDataURL()
    cropperSetupIsFinished.value = true
  }
}

function loadImage(event) {
  event.preventDefault();
  inputImage.value.click()
}

function setImage(e) {
  const file = e.target.files[0];
  if (file.type.indexOf('image/') === -1) {
    alert('Please select an image file');
    return;
  }
  if (typeof FileReader === 'function') {
    const reader = new FileReader();
    reader.onload = (event) => {
      console.log('asds');
      
      imageReference.value = event.target.result
      return
      // add image later into document store,
      // because it must be handled before modal is closed,
      // otherwise current opend image will be lost.
      // documentStore.addItem({
      //   reference: event.target.result
      // })
    };
    reader.readAsDataURL(file);
  } else {
    alert('Sorry, FileReader API not supported');
  }
}

function scanCroppedImage() {


}

defineExpose({
  cropper,
  cropperReady,
  cropperSetupIsFinished,
  imageReference,
  imageCropped,
  inputImage,
  progress,
  text,
  scanImage: async function() {
    if(cropper.value) {
      const worker = await createWorker('eng', 1, {
        logger: m => {
          if (m.jobId) {
            progress.value = m.progress == 0 ?
              0 :
              m.progress * 100;
          }
        }
      });

      const { data } = await worker.recognize(imageCropped.value)
      text.value = data.text

      // this.doc.push(text/*.replace(/\n/g, '<br />')*/);
      await worker.terminate();
    } else {
      console.log('show DismissibleAlert')
      
      // this.showDismissibleAlert = true;
    }
  },
  save: function() {
    documentStore.addItem({
      image: imageCropped.value,
      reference: imageReference.value,
      text: text.value
    })
  }
})

// mounted: function() {
//   this.$root.$on('saveRequest', () => {
//     if(this.doc.length) {
//       this.$root.$emit('saveResponse', {
//         croppedImage: this.croppedImage,
//         reference: this.imageSrc,
//         scannedText: this.doc[this.doc.length-1]
//       });
//     } else {
//       this.showDismissibleAlert = true;
//     }
//   });
// }
</script>

<template>
  <Container>
    <Row text-alignment="center">
      <Col>
        <slot name="alert" />
      </Col>
      <div class="w-100" />
      <Col v-if="!imageReference">
        <BIcon
          icon="fa-solid:image"
          style="font-size: 3.5rem;"
        />
        <br>
        No image here<br>
        <br>
        <b-a
          id="upld-wrpr"
          class="link-opacity-75 link-opacity-100-hover"
          size="lg"
          font-size="4"
          button="outline-success"
          link="dark"
          @click="loadImage"
        >
          <BIcon icon="line-md:uploading-loop" /> Open Image
        </b-a>
        <input
          ref="inputImage"
          type="file"
          name="image"
          accept="image/*"
          @change="setImage"
        >
      </Col>
      <div
        v-if="imageReference"
        id="preview-overlay">
        <b-img
          :src="imageCropped"
          fluid />
      </div>
      <!-- <slot name="cropper" /> -->
       
      <section
        class="cropper-area">
        <VueCropper
          v-if="imageReference"
          ref="cropper"
          :src="imageReference"
          alt="Source Image"
          :crop="cropperSetup"
          :cropend="cropImage"
          :ready="cropperIsReady()"
        />
      </section>
      <!-- <button @click="scanCroppedImage">Scan Text</button> -->
      <Progress
        v-if="imageReference"
        style="height: 20px"
        class="rounded-0"
      >
        <ProgressBar 
          :background-color="progress!=100? 'info':'success'"
          :striped="progress!=100"
          :animated="progress!=100"
          :value="progress"
        >
          {{ progress.toFixed(0) }}%
        </ProgressBar>
      </Progress>
      <div
        v-if="progress === 100"
        class="col-lg-12">
        <h3 class="text-center">
          Output goes here:
        </h3>
        <div>
          <p>{{ text }}</p>
        </div>
      </div>
    </Row>
  </Container>
</template>

<style scoped>
h1,
h3 {
  margin-top: 40px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a#menu-share i {
  animation: rotate-in 0.2s;
}

a#menu-share:hover i {
  animation: rotate-out 0.2s;
}

#preview-overlay {
  position: fixed;
  top: 91px;
  right: 0;
  min-width: 150px;
  max-width: 250px;
  height: 30%;
  max-height: 354px;
  overflow-y: hidden;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACmSURBVDhP7ZJLFsIgDEXlsyb2P2fAhoB4NbGnWqhHHDjxDlqS9BGah8s5X0aISO89peScs9QOSuS9RUv8xR/ynRg/h1h9gpo/FXMNQggWPEPJtiDQ1ZHWWilFL5OlHqDyYNEINOiPSjIcitLKwO5nF7Z4I9a2PF/Q6g99tvcSZ2L+jcHoWoe0oSWPjTPQ4KWO5zalHbVW3DrrjJ7v8FO7bZCPMYrIFb6yvwfm5nBeAAAAAElFTkSuQmCC');
  -webkit-box-shadow: -15px 15px 50px -5px rgba(0,0,0,0.6);
  -moz-box-shadow: -15px 15px 50px -5px rgba(0,0,0,0.6);
  box-shadow: -15px 15px 50px -5px rgba(0,0,0,0.6);
  z-index: 1;
}

#preview-overlay > .preview {
   position: absolute;
   bottom: 0;
   left: 0;
   padding: 5px;
   background-color: #FFF;
   border-top: 1px solid #000;
   border-right: 1px solid #000;
}

.progress {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}

.progress-bar {
  background-color: #42b983;
}

input[type="file"] {
  display: none;
}

.label-container {
  position: fixed;
  bottom: 48px;
  right: 105px;
  display: table;
  visibility: hidden;
}

.label-text {
  color: #FFF;
  background: rgba(51, 51, 51, 0.5);
  display: table-cell;
  vertical-align: middle;
  padding: 10px;
  border-radius: 3px;
}

.label-arrow {
  display: table-cell;
  vertical-align: middle;
  color: #333;
  opacity: 0.5;
}

.float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #0C9;
  color: #FFF;
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
  z-index: 1000;
  animation: bot-to-top 2s ease-out;
}

.my-float {
  font-size: 24px;
  margin-top: 18px;
}

@keyframes bot-to-top {
  0% {bottom: -40px}
  50% {bottom: 40px}
}

@keyframes scale-in {
  from {transform: scale(0);opacity: 0;}
  to {transform: scale(1);opacity: 1;}
}

@keyframes rotate-in {
  form {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
}

@keyframes rotate-out {
  form {transform: rotate(360deg);}
  to {transform: rotate(0deg);}
}
</style>
