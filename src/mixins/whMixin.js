export default {
  props: {
    width: {
      type: String,
      required: false,
      default: '100%'
    },
    height: {
      type: String,
      required: false,
      default: '100%'
    }
  },
  computed: {
    correctHeight() {
      return function(factor, opt, unit){
        unit = unit ? unit : 'px'
        const h = new Number(this.height.replace(unit,''))
        switch(opt) {
          case'+':
            return `${h+factor+unit}`
          case'-':
            return `${h-factor+unit}`
          case'*':
            return `${h*factor+unit}px`
          case'/':
            return `${h/factor+unit}px`
          default:
            return this.height
        }
      }
    },
    correctWidth() {
      return function(factor, opt){
        const h = new Number(this.width.replace('px',''))
        switch(opt) {
          case'+':
            return `${h+factor}px`
          case'-':
            return `${h-factor}px`
          case'*':
            return `${h*factor}px`
          case'/':
            return `${h/factor}px`
          default:
            return this.width
        }
      }
    }
  }
}

