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
      return function(factor, opt){

        const rex = /px$|\%$/
        const unit = rex.exec(this.height)[0]
        console.log(unit)
        const h = new Number(this.height.replace(unit,''))
        switch(opt) {
          case'+':
            return `${h+factor+unit}`
          case'-':
            return `${h-factor+unit}`
          case'*':
            return `${h*factor+unit}`
          case'/':
            return `${h/factor+unit}`
          default:
            return this.height
        }
      }
    },
    correctWidth() {
      return function(factor, opt){
        const rex = /px$|\%$/
        const unit = rex.exec(this.width)[0]
        const h = new Number(this.width.replace(unit,''))
        switch(opt) {
          case'+':
            return `${h+factor+unit}`
          case'-':
            return `${h-factor+unit}`
          case'*':
            return `${h*factor+unit}`
          case'/':
            return `${h/factor+unit}`
          default:
            return this.width
        }
      }
    }
  }
}

