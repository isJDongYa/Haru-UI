import Components from './components'
// import Icons from './icons' 

// export const HaIcons = Icons

export default {
  install(Vue) {
    for (const c in Components) {
      if (Components.hasOwnProperty(c)) {
        const element = Components[c];
        Vue.use(element)
      }
    }
    // Vue.use(Icons)
    require('@style')
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
  HaMenuVertical,
  HaMenuHorizontal,
  HaInput,
  HaNotify,
  HaTooltip,
  HaScroll,
  HaMask,
  HaDetailBox,
} = Components
