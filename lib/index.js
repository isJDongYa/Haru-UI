import Components from './components'
import Icons from './icons' 
import Charts from './charts'

export const HaIcons = Icons

export const HaCharts = {
  install(Vue) {
    for (const c in Charts) {
      if (Charts.hasOwnProperty(c)) {
        const element = Charts[c];
        Vue.use(element)
      }
    }
  }
}

export const {
  HaLineCate,
  HaLineTime,
  HaBarCate,
  HaPie,
  HaCustomChart,
  HaScatterReg
} = Charts

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
  HaMenuVertical,
  HaMenuHorizontal,
  HaInput,
  HaNotify,
  HaTooltip,
  HaScroll,
  HaMask,
  HaDetailBox,
} = Components
