import HaTable from './ha-table'
import HaMenu from './ha-menu'
import HaFile from './ha-file'
import HaInput from './ha-input'


export default {
  install(Vue) {
    Vue.use(HaTable)
    Vue.use(HaMenu)
    Vue.use(HaFile)
    Vue.use(HaInput)
  }
}