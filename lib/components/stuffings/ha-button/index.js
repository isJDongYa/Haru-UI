
export default {
  install(Vue) {
    Vue.component('ha-button', () => import('./HaButton.vue'))
  }
}