import notify from'./notify'
import HaTooltip from './ha-tooltip'
import HaScroll from './ha-scroll'
import HaMask from './ha-mask'

export default {
  install(Vue) {
    Vue.use(notify)
    Vue.use(HaTooltip)
    Vue.use(HaScroll)
    Vue.use(HaMask)
  }
}