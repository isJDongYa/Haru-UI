
const fillColor = {
  wihte: '#ffffff',
  black: '#000000',
  green: '#8BC34A',
  lightGreen: '#DCEDC8',
  darkGreen: '#689F38',
  accentGreen: '#4CAF50',
  blue: '#03A9F4',
  lightBlue: '#B3E5FC',
  darkBlue: '#0288D1',
  accentBlue: '#448AFF',
  red: '#F44336',
  lightRed: '#FFCDD2',
  darkRed: '#D32F2F',
  accentRed: '#FF4081',
  yellow: '#FFEB3B',
  lightYellow: '#FFF9C4',
  darkYellow: '#FBC02D',
  accentYellow: '#FF9800',
  orange: '#FF9800',
  lightOrange: '#FFE0B2',
  darkOrange: '#F57C00',
  accentOrange: '#FFC107',
  purple: '#9C27B0',
  lightPurple: '#E1BEE7',
  darkPurple: '#7B1FA2',
  accentPurple: '#7C4DFF',
  grey: '#9E9E9E',
  lightGrey: '#F5F5F5',
  darkGrey: '#616161',
  accentGrey: '#607D8B',
}


export default {
  props: {
    bgColor: {
      type: [String, Array],
      required: false,
      default: ''
    },
    fColor: {
      type: [String, Array],
      required: false,
      default: ''
    },
    fillColor: {
      type: String,
      required: false,
      default: 'balck'
    }
  },
  computed: {
    bgColorClass() {
      return this.getBgColorClass(this.bgColor)
    },
    fColorClass() {
      return this.getFColorClass(this.fColor)
    },
    fillColorNum() {
      return this.getFillColorNum(this.fillColor)
    }
  },
  methods: {
    getBgColorClass(c) {
      return c
    },
    getFColorClass(c) {
      return c
    },
    getFillColorNum(c) {
      return fillColor[c] ? fillColor[c] : c
    }
  }
}