import HaTable from './ha-table'
import HaMenu from './ha-menu'

export default {
  install(Vue) {
    Vue.use(HaTable)
    Vue.use(HaMenu)
  }
}