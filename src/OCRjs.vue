<template>
  <div id="ocrjs">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <h1 class="h2 text-center">
            {{heading}}
          </h1>
        </div>
        <Modal>
          <PictureHandler />
        </Modal>
        <a
          id="item-add"
          href="#"
          title="Scan the area"
          class="float"
          @click="openModal">
          <v-icon
            class="my-float"
            icon="plus" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import PictureHandler from './components/PictureHandler';
import Modal from './components/Modal';

export default {
    name: 'OCRjs',
    components: {
        PictureHandler,
        Modal
        // ScanAdd
    },
    props: {
        heading: {
            type: String,
            default: 'OCRjs'
        }
    },
    methods: {
        openModal() {
            this.$bvModal.show('modal-add');
        }
    }
};
</script>

<style>
a:hover {
  color: #FFF !important;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
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

a#item-add + ul {
  visibility: hidden;
}

a#item-add:hover + ul {
  visibility: visible;
  animation: scale-in 0.2s;
}

a#item-addshare i {
  animation: rotate-in 0.2s;
}

a#item-add:hover i {
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
