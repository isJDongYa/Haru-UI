<template>
  <div :style="{ width, height, grid: gridComputed(grid) }" class="ha-coordinater ha-coordinater-default">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'ha-coordinater',
  data() {
    return {
      width: '100%',
      height: '100%',
      gridDem: this.grid[0],
      gridDemNum: 0,
    }
  },
  props: {
    grid: {
      type: Array,
      required: false,
      default: () => [[0, 0, 0]]
    }
  },
  computed: {
    gridComputed() {
      return function (grid) {
        let gridColumn = this.gridDem[1]
        let gridRow = this.gridDem[2]
        let row_culumn = ' 1fr '

        if( gridColumn === 0) {
          gridColumn = 20
        }
        if( gridRow === 0) {
          gridRow = 20
        }
        
        while (gridRow > 2) {
          row_culumn += ' 1fr '
          gridRow--
        }
        row_culumn += ' / ' 
        while (gridColumn> 2) {
          row_culumn += ' 1fr '
          gridColumn--
        }
        return row_culumn 
      }
    }
  },
  methods: {
    getWinWidth() {
          const winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
          return winWidth
    },
    onResize(vm) {
      return function() {
        const grid = vm.grid
        const getWinWidth = vm.getWinWidth
        if(grid.length === 1) return
        const winWidth = getWinWidth()
        let res = grid[0][0]
        for(let i=0;i<grid.length;i++) {
          if(grid[i][0]<winWidth) {
            res = grid[i]
            vm.gridDemNum = i
            break 
          }
        }
        vm.gridDem = res
      }
    }
  },
  mounted() {
    this.onResize(this)()
    window.addEventListener('resize', this.onResize(this))
  }
}
</script>
<style lang="scss" scoped>
.ha-coordinater-default {
  display: grid;
  margin: 0;
  
}
</style>

