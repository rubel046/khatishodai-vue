import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VModal from 'vue-js-modal'
import Notifications from 'vue-notification'
import router from "./routers/router";
import VueAxios from 'vue-axios';
import Axios from 'axios'
import store from './utilities/store'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import DefaultLayout from "./components/layouts/DefaultLayout";
import DashboardLayout from "./components/layouts/DashboardLayout";

Vue.component('default-layout', DefaultLayout);
Vue.component('dashboard-layout', DashboardLayout);

//require('@/assets/css/font/css/all.min.css')
//require('@/assets/css/responsive.css')

// require('@/assets/dashboard/css/style.css')
// require('@/assets/dashboard/css/app.min.css')
// require('@/assets/dashboard/css/bootstrap.min.css')


Vue.use(VModal, {dynamic: true, injectModalsContainer: true})
Vue.use(Notifications)
Vue.use(VueAxios, Axios);


Vue.prototype.$store = store;
Axios.defaults.baseURL = process.env.VUE_APP_ROOT_API;

const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
