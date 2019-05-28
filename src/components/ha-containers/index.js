import HaRectangle from './ha-rectangle'
import HaCard from './ha-card'
import HaScroll from './ha-scroll'
import HaMask from './ha-mask'

export default {
  install(Vue) {
    Vue.use(HaRectangle)
    Vue.use(HaCard)
    Vue.use(HaScroll)
    Vue.use(HaMask)
  }
}




