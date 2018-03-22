
import Vue from 'vue'
import router from './router'
import App from './App.vue'
import './mock/MockServer'
import store from './store'


// import VueLazyload from 'vue-lazyload'

/*Vue.use(VueLazyload ,{
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h =>h(App),
  store
})
