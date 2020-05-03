export default {
  install(Vue) {
    Vue.component('ha-letter', () => import('./HaLetter.vue'))
  }
}