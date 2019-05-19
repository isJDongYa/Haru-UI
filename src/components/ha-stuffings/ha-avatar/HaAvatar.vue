<template>
  <ha-rectangle :width="width" :height="height" :coor="coor">
    <div 
    :class="['ha-avatar-default', haColor, 'ha-avatar']"
    :style="`${getStyleStr}`"
    >
      <img :src="url" :alt="alt" class="ha-avatar-img-default ha-avatar-img">
    </div>
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
    url: {
      type: String,
      required: false,
      default: ''
    },
    alt: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@scss/local/hovers.scss';

  .ha-avatar-default, .ha-avatar-img-default {
    display: block;
    width: 100%;
    height: 100%;
  }
  
</style>
