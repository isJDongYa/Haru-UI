const hoverClassObject = {
  'shadow': 'ha-hover-shadow',
  'opacity': 'ha-hover-opacity'
}

export default {
  props: {
    hover: {
      type: String,
      requiredL: false,
      default: "none"
    }
  },
  methods: {
    getHoverClass(h) {
      return hoverClassObject[h]
    }
  },
  computed: {
    haHover() {
      return this.getHoverClass(this.hover)
    }
  }
}