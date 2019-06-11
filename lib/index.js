import HaComponents from './components'
import HaCoordinater from './coordinater'
import HaMaterials from './materials'
import HaOthers from './others'
import HaIcons from './icons'
import HaColors from './colors'
import './scss' 

export default {
  install(Vue) {
    Vue.use(HaComponents)
    Vue.use(HaCoordinater)
    Vue.use(HaMaterials)
    Vue.use(HaOthers)
    Vue.use(HaIcons)
    Vue.use(HaColors)
  }
}

