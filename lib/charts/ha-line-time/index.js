
export default {
  install(Vue) {
    Vue.component('ha-line-time', () => import('./HaLineTime.vue'))
  }
}