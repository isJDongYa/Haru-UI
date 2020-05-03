
export default {
  install(Vue) {
    Vue.component('ha-back', () => import('./HaBack.vue'))
  }
}