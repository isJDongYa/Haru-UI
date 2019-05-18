<template>
  <ha-rectangle :width="correctWidth(4, '+')" :height="correctHeight(4, '+')" :coor="coor">
    <button 
    :class="['ha-btn-default', haColor, 'ha-btn']"
    :style="`${getStyleStr};width:${width};height:${height}`"
    >{{ title }}</button>
  </ha-rectangle>
</template>
<script>
import coorMixin from '@mixins/coorMixin'
import colorMixin from '@mixins/colorMixin'
import stylePropMixin from '@mixins/stylePropMixin'
import whMixin from '@mixins/whMixin'

import '@containers/ha-rectangle'

export default {
  name: 'ha-button',
  mixins: [coorMixin, colorMixin, stylePropMixin, whMixin],
  props: {
    title: {
      type: String,
      default: "ha-button"
    }
    
  }

}
</script>
<style lang="scss" scoped>
  @import '@scss/local/hovers.scss';

  .ha-btn-default {
    display: inline-block;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    cursor: pointer;
    border-style: none;
    border-radius: 4px;
    @include hoverShadow;
  }
  
</style>

