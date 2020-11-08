import Vue from 'vue'
import App from './App.vue'
import router from './router'
import base from './assets/data.js'

Vue.config.productionTip = false

let data = {
  base: base,
  added: [], 
  userPlants: {}, // to contain <name>: [<plants>], <name>: [<plants>]
  username: "",
  tempname: ""
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
