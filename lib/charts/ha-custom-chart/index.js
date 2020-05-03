export default {
  install(Vue) {
    Vue.component('ha-custom-chart', () => import('./HaCustomChart.vue'
    ))
  }
}