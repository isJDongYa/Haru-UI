<template>
  <div :class="['ha-rectangle', 'ha-rectangle-default', 'grid-r-c-span2', haHover]" 
  :style="`width:${width};height:${height};grid-row-start:${gridRowStart};` +
    `grid-column-start:${gridColumnStart};grid-row-end:${gridRowEnd};` +
    `grid-column-end:${gridColumnEnd};overflow:${overflow};` + 
    `z-index:${ z };` +
    `${getStyleStr}`"
    v-if="haShow"
    >
    <slot></slot>
  </div>
</template>
<script>
import coorMixin from '@mixins/coorMixin'
import whMixin from "@mixins/whMixin"
import hoverMixin from '@mixins/hoverMixin'
import stylePropMixin from '@mixins/stylePropMixin'
import zMixin from '@mixins/zMixin'
import overflowMixin from '@mixins/overflowMixin'
import showMixin from '@mixins/showMixin'


export default {
  name: 'ha-rectangle',
  mixins: [coorMixin, stylePropMixin, whMixin, hoverMixin, zMixin, overflowMixin, showMixin]
}
</script>

<style lang="scss" scoped>
  .ha-rectangle-default {
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    position: relative;
    margin: 0;
    padding: 0;
    border-style: none;
  }
</style>
