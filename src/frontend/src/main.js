import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'sweetalert2/dist/sweetalert2.min.css';

import { faHeart, faTimes } from '@fortawesome/free-solid-svg-icons';

import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import { library } from '@fortawesome/fontawesome-svg-core';
import router from './router/index.js';
import store from "./store";

library.add(faHeart);
library.add(faTimes);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(BootstrapVue);
Vue.use(VueSweetalert2);


Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
