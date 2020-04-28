<template>
  <div :class="['ha-rectangle', 'ha-rectangle-default', 'grid-r-c-span2', haHover]" 
  :style="`grid-row-start:${gridRowStart};grid-column-start:${gridColumnStart};` +
    `grid-row-end:${gridRowEnd};grid-column-end:${gridColumnEnd};` +
    `width:${width};height:${height};overflow:${overflow};z-index:${ z };border:${border};padding:${padding}`"
    v-if="haShow"
    
    >
    <slot></slot>
  </div>
</template>
<script>
import coorMixin from '@mixins/coorMixin'
import hoverMixin from '@mixins/hoverMixin'
import showMixin from '@mixins/showMixin'
import '@scss'



export default {
  name: 'ha-rectangle',
  mixins: [coorMixin, hoverMixin, showMixin],
  props: {
    width: {
      type: String,
      required: false,
      default: '100%'
    },
    height: {
      type: String,
      required: false,
      default: '100%'
    },
    z: {
      type: Number,
      required: false,
      default: 0
    },
    overflow: {
      type: String,
      required: false,
      default: 'hidden'
    },
    border: {
      type: String,
      required: false,
      default: ''
    },
    padding: {
      type: String,
      required: false,
      default: ''
    }
  }
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
