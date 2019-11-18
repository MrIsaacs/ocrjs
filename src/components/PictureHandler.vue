<template>
  <div class="row">
    <b-alert
      v-model="showDismissibleAlert"
      variant="warning"
      dismissible>
      First choose an image and then select the area which will be scanned!
    </b-alert>
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
    <div class="col-lg-12">
      <div class="content">
        <div class="upload-btn-wrapper">
          <a
            href="#"
            title="Upload an Image"
            class="btn"
            @click="chooseImage">
            <v-icon
              icon="image" />
            Upload File
            <input
              ref="input"
              type="file"
              name="image"
              accept="image/*"
              @change="setImage" />
          </a>
        </div>
        <section
          v-if="imageSrc"
          class="cropper-area">
          <VueCropper
            ref="cropper"
            :src="imageSrc"
            alt="Source Image"
            :cropend="cropImage" />
        </section>
        <section class="preview-area">
          <p>
            Preview
          </p>
          <div class="cropped-image">
            <img
              v-if="croppedImage"
              :src="croppedImage"
              alt="Cropped Image">
            <div
              v-else
              class="crop-placeholder" />
          </div>
        </section>
      </div>
      <!-- ImageCropper / -->
    </div>
    <div
      v-if="progress === 100"
      class="col-lg-12">
      <h3 class="text-center">
        Output goes here:
      </h3>
      <div>
        <b-card
          :img-src="imageSrc"
          img-alt="Card image"
          img-left
          class="mb-3">
          <b-card-text>
            <!-- eslint-disable-next-line -->
              <p v-for="paragraph in doc" v-html="paragraph" />
          </b-card-text>
        </b-card>
      </div>
    </div>
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
            progress: 0,
            imageSrc: null,
            croppedImage: null,
            showDismissibleAlert: false
        }
    },
    methods: {
        cropImage() {
            if (this.$refs.cropper) {
                this.croppedImage = this.$refs.cropper.getCroppedCanvas().toDataURL();
            }
        },
        createImage() {
            console.log('Croppen wurde beendet.');
        },
        chooseImage() {
            this.$refs.input.click();
        },
        appendText() {
            this.doc.push(this.text);
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
                        console.log(m);
                    }
                });

                await worker.load();
                await worker.loadLanguage('deu');
                await worker.initialize('deu');
                const {
                    data: {text}
                } = await worker.recognize(this.croppedImage);
                this.doc.push(text.replace(/\n/g, '<br />'));
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
                    console.log(event.target.result);
                    this.imageSrc = event.target.result;
                    this.croppedImage = this.cropImage();
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

img {
  max-width: 25rem;
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

.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
  cursor: pointer !important;
}

.btn {
  border: 2px solid gray;
  color: gray;
  background-color: white;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
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

.float-2nd {
  right: 120px;
}

.float-3nd {
  right: 200px;
}

ul{
  position: fixed;
  right: 40px;
  padding-bottom: 20px;
  bottom: 80px;
  z-index: 100;
}

ul li {
  list-style: none;
  margin-bottom: 10px;
}

ul li a {
  background-color: #0C9;
  color: #FFF;
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
  width: 60px;
  height: 60px;
  display: block;
}

ul:hover {
    visibility: visible!important;
    opacity: 1!important;
}

.my-float {
  font-size: 24px;
  margin-top: 18px;
}

a#menu-share + ul {
  visibility: hidden;
}

a#menu-share:hover + ul {
  visibility: visible;
  animation: scale-in 0.2s;
}

a#menu-share i {
  animation: rotate-in 0.2s;
}

a#menu-share:hover i {
  animation: rotate-out 0.2s;
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
