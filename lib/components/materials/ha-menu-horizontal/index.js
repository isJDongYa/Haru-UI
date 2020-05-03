
export default {
  install(Vue) {
    Vue.component('ha-menu-horizontal', () => import('./ha-menu-horizontal.vue'))
  }
}