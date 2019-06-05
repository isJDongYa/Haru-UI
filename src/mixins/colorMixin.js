const colorsClassObject = {
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
      switch(c) {
        case'white':
          return 'ha-color-white'
        case'black':
          return 'ha-color-black'
        case'green':
          return 'ha-color-green'
        case'darkGreen':
          return 'ha-color-darkGreen'
        case'lightGreen':
          return 'ha-color-lightGreen'
        case'accentGreen':
          return 'ha-color-accentGreen'
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
          return c
      }
    },
    getColorNum(c) {
      switch(c) {
        case'white':
          return '#ffffff'
        case'black':
          return '#000000'
        case'green':
          return '#8BC34A'
        case'darkGreen':
          return '#689F38'
        case'lightGreen':
          return '#DCEDC8'
        case'accentGreen':
          return '#4CAF50'
        case'red':
          return '#F44336' 
        case'lightRed':
          return '#FFCDD2' 
        case'darkRed':
          return '#D32F2F'  
        case'accentRed':
          return '#FF4081' 
        case'grey':
          return '#9E9E9E' 
        case'lightGrey':
          return '#F5F5F5' 
        case'darkGrey':
          return '#616161'  
        case'accentGrey':
          return '#607D8B' 
        case'yellow':
          return '#FFEB3B' 
        case'lightYellow':
          return '#FFF9C4' 
        case'darkYellow':
          return '#FBC02D'  
        case'accentYellow':
          return '#FF9800' 
        case'blue':
          return '#03A9F4' 
        case'lightBlue':
          return '#B3E5FC' 
        case'darkBlue':
          return '#0288D1'  
        case'accentBlue':
          return '#448AFF'  
        default:
          return c
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
    },
    haColorNum() {
      if(Array.isArray(this.color)) {
          return this.color.map( c => {
            return this.getColorNum(c)
          })
      } else {
        return this.getColorNum(this.color)
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