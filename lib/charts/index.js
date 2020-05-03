import HaLineCate from './ha-line-cate'
import HaLineTime from './ha-line-time'
import HaBarCate from './ha-bar-cate'
import HaPie from './ha-pie'
import HaScatterReg from './ha-scatter-reg'

import HaCustomChart from './ha-custom-chart'

export default {
  install(Vue) {
    Vue.use(HaLineCate),
    Vue.use(HaLineTime),
    Vue.use(HaBarCate),
    Vue.use(HaPie),
    Vue.use(HaScatterReg),
    Vue.use(HaCustomChart)
  }
}