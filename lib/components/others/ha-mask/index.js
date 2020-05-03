
export default {
  install(Vue) {
    Vue.component('ha-mask', () => import('./HaMask.vue'))
  }
}
