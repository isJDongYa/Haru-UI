
export default {
  install(Vue) {
    Vue.component('ha-table', () => import('./HaTable.vue'))
  }
}
