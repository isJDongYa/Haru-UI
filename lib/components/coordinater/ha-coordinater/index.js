
export default  {
  install(Vue) {
    Vue.component('ha-coordinater', () => import('./HaCoordinater.vue'))
  }
}