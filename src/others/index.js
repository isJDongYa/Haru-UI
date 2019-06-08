import notify from'./notify'
import HaTooltip from './ha-tooltip'

export default {
  install(Vue) {
    Vue.use(notify)
    Vue.use(HaTooltip)
  }
}