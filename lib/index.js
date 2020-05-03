import Components from './components' 

export default {
  install(Vue) {
    for (const c in Components) {
      if (Components.hasOwnProperty(c)) {
        const element = Components[c];
        Vue.use(element)
      }
    }
    require('@style')
  }
}

