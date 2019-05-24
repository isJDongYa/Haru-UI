<template>
  <ha-rectangle :width="width" :height="height" :coor="coor"  :hover="hover" :style="getStyleStr">
    <button :class="['ha-btn-default', haColor, 'ha-btn']" @click="click">{{ title }}</button>
  </ha-rectangle>
</template>
<script>
import coorMixin from '@mixins/coorMixin'
import colorMixin from '@mixins/colorMixin'
import stylePropMixin from '@mixins/stylePropMixin'
import whMixin from '@mixins/whMixin'
import hoverMixin from '@mixins/hoverMixin'


import '@containers/ha-rectangle'

export default {
  name: 'ha-button',
  mixins: [coorMixin, colorMixin, stylePropMixin, whMixin, hoverMixin],
  props: {
    title: {
      type: String,
      default: "ha-button"
    }
    
  },
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>
<style lang="scss" scoped>

  .ha-btn-default {
    display: inline-block;
    width: 100%;
    height: 100%;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    cursor: pointer;
    border-style: none;
    padding: 0;
  }
  
</style>

