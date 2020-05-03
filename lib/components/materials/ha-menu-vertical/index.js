
export default {
  install(Vue) {
    Vue.component('ha-menu-vertical', () => import('./ha-menu-vertical.vue'))
  }
}
