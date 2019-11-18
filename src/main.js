import Vue from 'vue';
import OCRjs from './OCRjs';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faPlus, faImage, faFileInvoice} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(
    faPlus,
    faImage,
    faFileInvoice
);

Vue.use(BootstrapVue);
Vue.component('v-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
    render: h => h(OCRjs)
}).$mount('#ocrjs');
