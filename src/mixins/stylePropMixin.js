export default {
  props: {
    styleProp: {
      type: Object,
      required: false,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    getStyleStr() {
      let styles = []
      Object.keys(this.styleProp).forEach( s => {
        styles.push(`${s}:${this.styleProp[s]}`)
      })
      return styles.join(';')
    }
  }
}