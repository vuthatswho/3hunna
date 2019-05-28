import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue';
import Footer from './Footer.vue';
import VueRouter from 'vue-router';

Vue.component('app-header', Header);

Vue.component('app-footer', Footer);

Vue.component('blog-post', {
  props: ['postTitle'],
  template: '<h3>{{ postTitle }}</h3>'
})

Vue.component('button-counter', {
  data: function() {
    return {type: Number, count: 0}
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})


Vue.use(VueRouter);
import {routes} from './routes';
const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
