
export default {
  install(Vue) {
    Vue.component('ha-line-cate', () => import('./HaLineCate.vue'))
  }
}