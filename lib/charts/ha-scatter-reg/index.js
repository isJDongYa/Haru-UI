
export default {
  install(Vue) {
    Vue.component('ha-scatter-reg', () => import('./HaScatterReg.vue'))
  }
}