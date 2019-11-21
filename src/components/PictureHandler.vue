<template>
  <div class="container">
    <b-row class="text-center">
      <b-col>
        <b-alert
          v-model="showDismissibleAlert"
          variant="warning"
          dismissible>
          First choose an image and then select the area which will be scanned!
        </b-alert>
      </b-col>
      <div class="w-100" />
      <b-col v-if="!imageSrc">
        <v-icon
          style="font-size: 56px;"
          icon="image" />
        <br>
        No image here<br>

        <b-button
          id="upld-wrpr"
          class="upload-wrapper"
          size="md"
          variant="outline-dark"
          @click="uploadImage">
          <v-icon icon="image" />
          Upload
        </b-button>
        <input
          ref="input"
          type="file"
          name="image"
          accept="image/*"
          @change="setImage">
      </b-col>
      <div
        v-if="imageSrc"
        id="preview-overlay">
        <b-img
          :src="croppedImage"
          fluid />
      </div>
      <section
        v-if="imageSrc"
        class="cropper-area">
        <VueCropper
          ref="cropper"
          :src="imageSrc"
          alt="Source Image"
          :ready="cropImage"
          :cropend="cropImage" />
      </section>
      <b-progress
        v-if="imageSrc"
        class="rounded-0"
        :max="100">
        <b-progress-bar
          :value="progress"
          :label="`${progress.toFixed(0)}%`"
          :max="100"
          show-progress />
      </b-progress>
      <div
        v-if="progress === 100"
        class="col-lg-12">
        <h3 class="text-center">
          Output goes here:
        </h3>
        <div>
          <p
            v-for="paragraph in doc"
            v-html="paragraph" />
        </div>
      </div>
    </b-row>
  </div>
</template>

<script>
import {createWorker} from 'tesseract.js';
// import ImageCropper from '@/components/ImageCropper.vue';
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';

export default {
    name: 'PictureHandler',
    components: {
        VueCropper
    },
    data: function() {
        return {
            text: '',
            doc: [],
            cropperReady: false,
            progress: 0,
            imageSrc: null,
            croppedImage: null,
            showDismissibleAlert: false
        };
    },
    computed: {
        getCroppedImage() {
            return this.croppedImage;
        }
    },
    mounted: function() {
        this.$root.$on('scanCrop', () => {
            this.scanCroppedImage();
        });
        this.$root.$on('saveRequest', () => {
            this.$root.$emit('saveResponse', {
                croppedImage: this.croppedImage,
                reference: this.imageSrc,
                scannedText: this.doc[this.doc.length-1]
            });
        });
    },
    methods: {
        cropImage() {
            if (this.$refs.cropper) {
                this.croppedImage = this.$refs.cropper.getCroppedCanvas().toDataURL();
            }
        },
        uploadImage(event) {
            event.preventDefault();
            this.$refs.input.click();
        },
        appendText() {
            this.doc.push(this.text);
        },
        cropperIsReady() {
            this.cropperReady = true;
            this.cropImage();
        },
        async scanCroppedImage() {
            if(this.$refs.cropper) {
                const worker = createWorker({
                    langPath: '../lang-data',
                    logger: m => {
                        if (m.jobId) {
                            this.progress = m.progress == 0 ?
                                0 :
                                m.progress * 100;
                        }
                    }
                });

                await worker.load();
                await worker.loadLanguage('deu');
                await worker.initialize('deu');
                const {
                    data: {text}
                } = await worker.recognize(this.croppedImage);
                this.doc.push(text/*.replace(/\n/g, '<br />')*/);
                await worker.terminate();
            } else {
                this.showDismissibleAlert = true;
            }
        },
        setImage(e) {
            const file = e.target.files[0];
            if (file.type.indexOf('image/') === -1) {
                alert('Please select an image file');
                return;
            }
            if (typeof FileReader === 'function') {
                const reader = new FileReader();
                reader.onload = (event) => {
                    this.imageSrc = event.target.result;
                };
                reader.readAsDataURL(file);
            } else {
                alert('Sorry, FileReader API not supported');
            }
        }
    }
};
</script>

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
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  font-size: 50px;
}

.upload-wrapper {
  position: relative;
  float: left;
  overflow: hidden;
}

.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.btn {
  color: gray;
  background-color: white;
  padding: 8px 20px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}

.upload-btn-wrapper input[type=file] {
  font-size: 50px;
  position: absolute;
  left: 0;
  top: 0;
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
