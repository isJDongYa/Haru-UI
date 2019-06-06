import Vue from 'vue'
import app from './App.vue'
import HaComponents from './components'
import HaCoordinater from './coordinater'
import HaMaterials from './materials'
import HaPlugins from './plugins'
import HaIcons from './icons'
import './scss'

Vue.config.devtools = process.env.NODE_ENV === 'development'

Vue.use(HaComponents)
Vue.use(HaMaterials)
Vue.use(HaCoordinater)
Vue.use(HaPlugins)
Vue.use(HaIcons)

new Vue({
  render: h => h(app)
}).$mount('#app')