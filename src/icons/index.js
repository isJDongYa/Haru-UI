import _png from './fileTypes/png.svg'
import _pdf from './fileTypes/pdf.svg'
import _7z from './fileTypes/7z.svg'
import _epub from './fileTypes/epub.svg'
import _fileUnknow from './fileTypes/fileUnknown.svg'

export default {
  install(Vue) {
    if(!Vue.prototype.$haru) {
      Vue.prototype.$haru = {}
    }
    Vue.prototype.$haru.icons = {
      fileTypes: {
        _png,
        _pdf,
        _7z,
        _epub,
        _fileUnknow
      }
    }
  }
}