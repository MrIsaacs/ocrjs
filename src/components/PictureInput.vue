<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="h2 text-center">
          {{ heading }}
        </h1>
        <picture-input
          width="200"
          height="200"
          accept="image/jpeg,image/png"
          button-class="btn btn-success"
          @change="draggedImaged"
        />
        <b-progress
          class="rounded-0"
          :max="100"
        >
          <b-progress-bar
            :value="progress"
            :label="`${progress.toFixed(0)}%`"
            :max="100"
            show-progress
          />
        </b-progress>
      </div>
      <div
        v-if="progress === 100"
        class="col-lg-12"
      >
        <h3 class="text-center">
          Output goes here:
        </h3>
        <div>
          <h4>Left and Right (or Start and End)</h4>
          <b-card
            :img-src="image"
            img-alt="Card image"
            img-left
            class="mb-3"
          >
            <!-- eslint-disable-next-line -->
            <b-card-text v-html="text" />
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createWorker } from "tesseract.js";
import PictureInput from "vue-picture-input";
import { Component, Vue } from "vue-property-decorator";

@Component({
    components: {
        PictureInput
    }
})
export default class TestPictureInput extends Vue {
    heading = "OCRjs";
    text = "";
    progress = 0;
    image = null;

    async draggedImaged(image) {
        if (image) {
            console.log("Picture loaded...");

            const worker = createWorker({
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
            await worker.loadLanguage("deu");
            await worker.initialize("deu");
            const {
                data: { text }
            } = await worker.recognize(image);
            this.text = text.replace(/\n/g, "<br />");
            await worker.terminate();

            this.image = image;
        } else {
            console.log("FileReader API not supported: use <form>, Luke!");
        }
    }
}


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

a {
  color: #42b983;
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
</style>
