import Vue from 'vue'
import app from './App.vue'
import HaComponents from './components'
import HaCoordinater from './coordinater'
import HaMaterials from './materials'
import HaPlugins from './plugins'
import './scss'

Vue.config.devtools = process.env.NODE_ENV === 'development'

Vue.use(HaComponents)
Vue.use(HaMaterials)
Vue.use(HaCoordinater)
Vue.use(HaPlugins)

new Vue({
  render: h => h(app)
}).$mount('#app')