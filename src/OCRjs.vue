<template>
  <div id="ocrjs">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <h1 class="h2 text-center">
            {{heading}}
          </h1>
          <List :items="scans" />
        </div>
        <Modal @save="onSave">
          <PictureHandler v-if="add" />
          <ScanView :content="getItem" v-else />
        </Modal>
        <a
          id="item-add"
          href="#"
          title="Add scanned text"
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
import ScanView from './components/Scans/ScanView';
import List from './components/List';

export default {
    name: 'OCRjs',
    components: {
        PictureHandler,
        Modal,
        ScanView,
        List
    },
    data: function() {
        return {
            heading: 'OCRjs',
            modalObj: null,
            add: false,
            tour: true,
            scans: []
        };
    },
    mounted: function () {
        this.$root.$on('openEditModal', (record, index) => {
            this.add = false;
            this.modalObj = record;
            this.$bvModal.show('modal');
        });
        this.$root.$on('openAddModal', (record, index) => {
            this.add = true;
            this.$bvModal.show('modal');
        });
    },
    methods: {
        openModal(record, index) {
            this.$root.$emit('openAddModal', record, index);
        },
        getItem() {
            // item is set by eventHandler
            return this.modalObj;
        },
        onSave(item) {
            this.scans.push(item);
        }
    }
};
</script>

<style>
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

a#item-add:hover {
    color: #FFF;
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
