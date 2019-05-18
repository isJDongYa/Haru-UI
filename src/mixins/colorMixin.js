const colors = {
  'red50': 'ha-color-red50',
  'red100': 'ha-color-red100',
  'red200': 'ha-color-red200',
  'red300': 'ha-color-red300',
  'red400': 'ha-color-red400',
  'red500': 'ha-color-red500',
  'red600': 'ha-color-red600',
  'red700': 'ha-color-red700',
}


export default {
  props: {
    color: {
      type: [String, Array],
      required: false,
      default: 'primary'
    }
  },
  methods: {
    getColorClass(c) {
      switch(c) {
        case'white':
          return 'ha-color-white'
        case'black':
          return 'ha-color-black'
        case'darkPrimary':
          return 'ha-color-darkPrimary'
        case'lightPrimary':
          return 'ha-color-lightPrimary'
        case'accentPrimary':
          return 'ha-color-accentPrimary'
        case'red':
          return 'ha-color-red' 
        case'lightRed':
          return 'ha-color-lightRed' 
        case'darkRed':
          return 'ha-color-darkRed'  
        case'accentRed':
          return 'ha-color-accentRed' 
        case'grey':
          return 'ha-color-grey' 
        case'lightGrey':
          return 'ha-color-lightGrey' 
        case'darkGrey':
          return 'ha-color-darkGrey'  
        case'accentGrey':
          return 'ha-color-accentGrey' 
        case'yellow':
          return 'ha-color-yellow' 
        case'lightYellow':
          return 'ha-color-lightYellow' 
        case'darkYellow':
          return 'ha-color-darkYellow'  
        case'accentYellow':
          return 'ha-color-accentYellow' 
        case'blue':
          return 'ha-color-blue' 
        case'lightBlue':
          return 'ha-color-lightBlue' 
        case'darkBlue':
          return 'ha-color-darkBlue'  
        case'accentBlue':
          return 'ha-color-accentBlue'  
        default:
          return 'ha-color-primary'
      }
    }
  },
  computed: {
    haColor() {
      if(Array.isArray(this.color)) {
          return this.color.map( c => {
            return this.getColorClass(c)
          })
      } else {
        return this.getColorClass(this.color)
      }
    }
  }
}