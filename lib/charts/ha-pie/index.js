
export default {
  install(Vue) {
    Vue.component('ha-pie', () => import('./HaPie.vue'))
  }
}