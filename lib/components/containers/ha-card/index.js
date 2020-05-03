 
export default {
  install(Vue) {
    Vue.component('ha-card', () => import('./HaCard.vue'))
  }
}