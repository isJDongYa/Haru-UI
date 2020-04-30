import Vue from 'vue'
import VueRouter from 'vue-router'

import app from './App.vue'

Vue.config.devtools = process.env.NODE_ENV === 'development'

Vue.use(VueRouter)

import Haru from '../lib'

Vue.use(Haru)

// import '@style'

// import { 
//   HaRectangle, 
//   HaCoordinater, 
//   HaLetter, 
//   HaButton, 
//   HaMenuHorizontal,
//   HaCard,
//   HaTooltip,
//   HaDetailBox,
//   HaScroll
// } from '@lib'

// Vue.use(HaRectangle)
// Vue.use(HaCoordinater)
// Vue.use(HaLetter)
// Vue.use(HaButton)
// Vue.use(HaDetailBox)
// Vue.use(HaMenuHorizontal)
// Vue.use(HaTooltip)
// Vue.use(HaCard)
// Vue.use(HaScroll)

import Home from './view/home.vue'
import HaruUI from './view/haru-ui.vue'
import Coor from './view/coodinater.vue'
import Containers from './view/containers.vue'
import Stuffings from './view/stuffings.vue'
import Materials from './view/materials.vue'
import Others from './view/others.vue'
const router = new VueRouter({
   routes: [
     {
       path: '/',
       component: Home
     },
     {
       path: '/haru-ui',
       component: HaruUI,
       children: [
         {
           path: '/',
           component: Coor
         },
         {
           path: '/haru-ui/containers',
           component: Containers
         },
         {
           path: '/haru-ui/stuffings',
           component: Stuffings
         },
         {
           path: '/haru-ui/materials',
           component: Materials
         },
         {
           path: '/haru-ui/others',
           component: Others
         },
       ]
     }
   ]
})

new Vue({
  router,
  render: h => h(app)
}).$mount('#app')