
export default {
  install(Vue) {
    Vue.component('ha-check', () => import('./HaCheck.vue'))
  }
}