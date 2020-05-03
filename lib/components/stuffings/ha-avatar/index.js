
export default {
  install(Vue) {
    Vue.component('ha-avatar', () => import('./HaAvatar.vue'))
  }
}