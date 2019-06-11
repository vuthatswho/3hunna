import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Images from './images.vue'

Vue.component('app-header', Header)

// Vue.component('app-images', Images)
//
// Vue.component('app-images', {
//   props: ['img-path'],
//   // template: '<img :src="img-path" class="img-fluid" alt="Responsive image" data-toggle="tooltip" data-placement="bottom" title="Details about the photo">'
// })


Vue.component('accordion', {
  data: function () {
    return {
      count: 0
    }
  },
  template: ''
})

Vue.component('blog-post', {
  props: ['post-title'],
  template: '<h3>{{ postTitle }}</h3>'
})

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import {routes} from './routes';
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
