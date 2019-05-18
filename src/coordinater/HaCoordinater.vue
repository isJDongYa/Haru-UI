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
      height: '100%'
    }
  },
  props: {
    grid: {
      type: Array,
      required: false,
      default: () => [0, 0]
    },
  },
  computed: {
    gridComputed() {
      return function (grid) {
        let gridColumn = grid[0]
        let gridRow = grid[1]

        let row_culumn = ' 1fr '

        if( gridColumn === 0) {
          gridColumn = 20
        }
        if( gridRow === 0) {
          gridRow = 20
        }
        
        while (gridRow > 0) {
          row_culumn += ' 1fr '
          gridRow--
        }
        row_culumn += ' / ' 
        while (gridColumn> 0) {
          row_culumn += ' 1fr '
          gridColumn--
        }
        return row_culumn 
        

      }
    }
  }
}
</script>
<style lang="scss" scoped>
.ha-coordinater-default {
  display: grid;
}
</style>

