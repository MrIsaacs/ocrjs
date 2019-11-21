import Vue from 'vue';
import OCRjs from './OCRjs';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCropAlt, faFileInvoice, faImage, faSave, faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(
    faCropAlt,
    faFileInvoice,
    faImage,
    faSave,
    faPlus
);

Vue.use(BootstrapVue);
Vue.component('v-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
    render: h => h(OCRjs)
}).$mount('#ocrjs');
