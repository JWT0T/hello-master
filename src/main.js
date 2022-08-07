//
// import {createApp} from "vue";
// import App from './app'
// const app = createApp(App)
// app.mount('#app')


import Vue from 'vue';
import VueRouter from 'vue-router';
// import VueAxios from 'vue-axios';
// import axios from 'axios';
import NProgress from 'nprogress';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
// import vueEventCalendar from 'vue-event-calendar';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueRouter);
// Vue.use(VueAxios, axios);
// Vue.use(vueEventCalendar, {
//     locale: 'zh',
//     color: '#82CAFA',
//     weekStartOn: 1
// });

import App from './app.vue';
import Home from './components/Home.vue';
import ChooseUni from './components/product/ChooseUni.vue';
import PersonalStatement from './components/product/PersonalStatement.vue';
import Application from './components/product/Application.vue';
import UnitedKingdom from './components/history/UnitedKingdom.vue';
import Europe from './components/history/Europe.vue';
import Australia from './components/history/Australia.vue';
import Singapore from './components/history/Singapore.vue';

// Vue.config.productionTip = false;

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'ChooseUni',
    path: '/product/chooseUni',
    component: ChooseUni
  },
  {
    name: 'PersonalStatement',
    path: '/product/personalStatement',
    component: PersonalStatement
  },
  {
    name: 'Application',
    path: '/product/application',
    component: Application
  },
  {
    name: 'UnitedKingdom',
    path: '/history/unitedKingdom',
    component: UnitedKingdom
  },
  {
    name: 'Europe',
    path: '/history/europe',
    component: Europe
  },
  {
    name: 'Australia',
    path: '/history/australia',
    component: Australia
  },
  {
    name: 'Singapore',
    path: '/history/singapore',
    component: Singapore
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
});

router.afterEach(() => {
  NProgress.done()
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
