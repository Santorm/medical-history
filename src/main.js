// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
// import VueAwesomeSwiper from 'vue-awesome-swiper'


//vue resources
// var Vue = require('vue');
// var VueResource = require('vue-resource');

//carrousell
// require('swiper/dist/css/swiper.css')
 
Vue.use(VueResource);
// Vue.use(VueAwesomeSwiper);
//

Vue.config.productionTip = false
// Vue.material.registerTheme({
//             app: {
//               primary: 'cyan'
//             },
//             about: {
//               primary: 'indigo'
//             },
//             contact: {
//               primary: 'teal'
//             }
//           })
Vue.material.registerTheme('default', {
  primary: '#928dg',
  accent: 'red',
  warn: 'red',
 })

//bus de datos para conectar el id del paciente con la cabecera y el resto de componentes
var bus = new Vue()


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
