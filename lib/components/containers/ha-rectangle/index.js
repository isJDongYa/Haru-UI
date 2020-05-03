
export default {
  install(Vue) {
    Vue.component('ha-rectangle', () => import('./HaRectangle.vue'))
  }
}

