import findNearestCoor from '@utils/findNearestCoor'

export default {
  props: {
    coor:{
      type: Array,
      required: false,
      default: () => [[[1, 1], [1, 1]]]
    }
  },
  computed: {
    gridColumnStart() {
      console.log(this.coor.length)
      const demNum = this.coor.length === 1 ? 0 : this.getDemNum()
      const coor0 = this.coor[demNum][0][0]
      const n = this.compareCoorX(coor0)
      return n === 0 ? coor0 : n
    },
    gridRowStart() {
      const demNum = this.coor.length === 1 ? 0 : this.getDemNum()
      const coor1 = this.coor[demNum][0][1]
      const n = this.compareCoorY(coor1)
      return n === 0 ? coor1 : n
    },
    gridColumnEnd() {
      const demNum = this.coor.length === 1 ? 0 : this.getDemNum()
      let coor0 = this.coor[demNum][1][0]
      return this.gridColumnStart+coor0
    },
    gridRowEnd() {
      const demNum = this.coor.length === 1 ? 0 : this.getDemNum()
      let coor1 = this.coor[demNum][1][1]
      return this.gridRowStart+coor1
    }
  },
  methods: {
    getDemNum() {
      const c = findNearestCoor(this)
      if(!c) return 0
      const demNum = c.$data.gridDemNum
      return demNum
    },
    compareCoorX(d) {
      const c = findNearestCoor(this)
      if(!c) return 0
      const g = c.$props.grid[0]
      if(d>g) {
        return g+2 //表示组件横坐标超过整体坐标，返回g+2替代用户设置的坐标值，该值会使组件在坐标系中纵坐标的最后位置
      } else {
        return 0 //返回0表示组件横坐标在正常范围内
      }
    },
    compareCoorY(d) {
      const c = findNearestCoor(this)
      if(!c) return 0
      const g = c.$props.grid[1]
      if(d>g) {
        return g+2 //表示组件纵坐标超过整体坐标，返回g+2替代用户设置的坐标值，该值会使组件在坐标系中纵坐标的最后位置
      } else {
        return 0 //返回0表示组件纵坐标在正常范围内
      }
    }
  }
}

