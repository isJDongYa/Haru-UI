export default {
  props: {
    width: {
      type: String,
      required: false,
      default: '97%'
    },
    height: {
      type: String,
      required: false,
      default: '97%'
    }
  },
  computed: {
    correctHeight() {
      return function(factor, opt){
        const h = new Number(this.height.replace('px',''))
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

