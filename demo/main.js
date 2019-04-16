import Vue from 'vue'
import App from './App.vue'
import Paginate from '../src'

Vue.component('paginate', Paginate)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
