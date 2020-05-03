
export default {
  install(Vue) {
    Vue.component('ha-scroll', () => import('./HaScroll.vue'))    
  }
}
