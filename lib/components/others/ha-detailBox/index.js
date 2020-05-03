
export default {
  install(Vue) {
    Vue.component('ha-detailBox', () => import('./HaDetailBox.vue'))
  }
}