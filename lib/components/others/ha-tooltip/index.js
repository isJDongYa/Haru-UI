
export default {
  install(Vue) {
    Vue.component('ha-tooltip', () => import('./HaTooltip.vue'))
  }
}