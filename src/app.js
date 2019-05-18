import Vue from 'vue'
import app from './App.vue'
import './components'
import './coordinater'
import './materials'
import './scss'

Vue.config.devtools = process.env.NODE_ENV === 'development'


new Vue({
  render: h => h(app)
}).$mount('#app')