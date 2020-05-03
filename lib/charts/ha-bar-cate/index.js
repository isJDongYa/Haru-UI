
export default {
  install(Vue) {
    
    console.log('habarcate');
    
    Vue.component('ha-bar-cate', () => import('./HaBarCate.vue'))
  }
}