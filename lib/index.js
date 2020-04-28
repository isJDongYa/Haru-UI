import Components from './components'
import Icons from './icons'
import './scss' 


export default {
  install(Vue) {
    for (const c in Components) {
      if (Components.hasOwnProperty(c)) {
        const element = Components[c];
        Vue.use(element)
      }
    }
    Vue.use(Icons)
  },
}

export const {
  HaCoordinater,
  HaRectangle,
  HaCard,
  HaButton,
  HaAvatar,
  HaCheck,
  HaNumber,
  HaLetter,
  HaBack,
  HaPage,
  HaTable,
  HaMenu,
  HaInput,
  notify,
  HaTooltip,
  HaScroll,
  HaMask,
  HaDetailBox,
} = Components


