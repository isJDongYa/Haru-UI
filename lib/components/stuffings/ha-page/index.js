
export default {
  install(Vue) {
    Vue.component('ha-page', () => import('./HaPage.vue'))
  }
}