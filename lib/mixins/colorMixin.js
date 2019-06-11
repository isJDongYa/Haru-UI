export default {
  props: {
    bgColor: {
      type: [String, Array],
      required: false,
      default: ''
    },
    fontColor: {
      type: [String, Array],
      required: false,
      default: ''
    }
  },
  methods: {
    getColorClass(c) {
      return this.$haru.colors[c] ? this.$haru.colors[c] : c
    },
    getColorNum(c) {
      return this.$haru.colorsNum[c] ? this.$haru.colorsNum[c] : c
      
    }
  },
  computed: {
    haColor() {
      if(Array.isArray(this.bgColor)) {
          return this.bgColor.map( c => {
            return this.getColorClass(c)
          })
      } else {
        return this.getColorClass(this.bgColor)
      }
    },
    haBgColorNum() {
      if(Array.isArray(this.bgColor)) {
          return this.bgColor.map( c => {
            return this.getColorNum(c)
          })
      } else {
        return this.getColorNum(this.bgColor)
      }
    },
    haFontColor() {
      if(Array.isArray(this.fontColor)) {
          return this.fontColor.map( c => {
            return this.getColorNum(c)
          })
      } else {
        return this.getColorNum(this.fontColor)
      }
    },
  }
}