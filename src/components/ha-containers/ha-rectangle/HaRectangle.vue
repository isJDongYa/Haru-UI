<template>
  <div :class="['ha-rectangle', 'ha-rectangle-default', 'grid-r-c-span2', haHover]" 
  :style="`width:${width};height:${height};grid-row-start:${gridRowStart};` +
    `grid-column-start:${gridColumnStart};grid-row-end:${gridRowEnd};` +
    `grid-column-end:${gridColumnEnd};overflow:${overflow};${getStyleStr}`">
    <slot></slot>
  </div>
</template>
<script>
import coorMixin from '@mixins/coorMixin'
import whMixin from "@mixins/whMixin"
import hoverMixin from '@mixins/hoverMixin'
import stylePropMixin from '@mixins/stylePropMixin'


export default {
  name: 'ha-rectangle',
  mixins: [coorMixin, stylePropMixin, whMixin, hoverMixin],
  props: {
    overflow: {
      type: String,
      required: false,
      default: 'hidden'
    }
  }
}
</script>

<style lang="scss" scoped>
  .ha-rectangle-default {
    display: inline-block;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
</style>
