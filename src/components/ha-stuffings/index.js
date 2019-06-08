import HaButton from './ha-button'
import HaAvatar from './ha-avatar'
import HaCheck from './ha-check'
import HaInput from './ha-input'
import HaNumber from './ha-number'
import HaLetter from './ha-letter'
import HaBack from './ha-back'

export default {
  install(Vue) {
    Vue.use(HaButton)
    Vue.use(HaAvatar)
    Vue.use(HaCheck)
    Vue.use(HaInput)
    Vue.use(HaNumber)
    Vue.use(HaLetter)
    Vue.use(HaBack)
  }
} 
