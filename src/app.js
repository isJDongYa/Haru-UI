import Vue from 'vue'
import VueRouter from 'vue-router'

import app from './App.vue'
import HaComponents from './components'
import HaCoordinater from './coordinater'
import HaMaterials from './materials'
import HaOthers from './others'
import HaIcons from './icons'
import HaColors from './colors'
import './scss'

Vue.config.devtools = process.env.NODE_ENV === 'development'

// // Vue.use(VueRouter)

// import Haru from 'haru-ui'

// const { HaComponents, HaCoordinater, HaMaterials,HaOthers, HaIcons, HaColors } = Haru
Vue.use(HaColors)
Vue.use(HaComponents)
Vue.use(HaMaterials)
Vue.use(HaCoordinater)
Vue.use(HaOthers)
Vue.use(HaIcons)
// import Haru from 'haru-ui'
// Vue.use(Haru)

const router = new VueRouter({
   // (缩写) 相当于 routes: routes
})

new Vue({
  router,
  render: h => h(app)
}).$mount('#app')