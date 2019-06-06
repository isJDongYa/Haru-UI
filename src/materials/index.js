import HaTable from './ha-table'
import HaMenu from './ha-menu'
import HaPage from './ha-page'
import HaFile from './ha-file'


export default {
  install(Vue) {
    Vue.use(HaTable)
    Vue.use(HaMenu)
    Vue.use(HaPage)
    Vue.use(HaFile)
  }
}