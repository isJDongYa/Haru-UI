import HaTableBase from './ha-table-base'
import HaTableAdvance from './ha-table-advance'

export default {
  install(Vue) {
    Vue.use(HaTableBase)
    Vue.use(HaTableAdvance)
  }
}
