
export default {
  install(Vue) {
    Vue.component('ha-number', () => import('./HaNumber.vue'))
  }
}