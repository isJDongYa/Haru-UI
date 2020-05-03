
export default {
  install(Vue) {
    Vue.component('ha-input', () => import('./HaInput.vue'))
  }
}