<template>
  <ha-rectangle :width="width" :height="height" :coor="coor" :hover="hover" :style="getStyleStr">
    <div :class="['ha-card-default', haColor, 'ha-card']"
    
    >
      <div :class="['ha-card-head-default', haColor[0], 'ha-card-head']" v-if="$slots.header">
        <slot name="header"></slot>
      </div>
      <div :class="['ha-card-content-default', haColor[1], 'ha-card-content']" :style="`height:${contentHeight}%`">
        <slot name="content"></slot>
        <slot></slot>
      </div>
      <div :class="['ha-card-foot-default', haColor[2], 'ha-card-foot']" v-if="$slots.footer">
        <slot name="footer"></slot>
      </div>
    </div>
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
  name:'ha-card',
  mixins: [coorMixin, colorMixin, stylePropMixin, whMixin, hoverMixin],
  computed: {
    contentHeight() {
      let h = 100
      if(this.$slots.header) {
        h = h - 20
      }
      if(this.$slots.footer) {
        h = h - 20
      }
      return h
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@scss/local/hovers.scss';

.ha-card-default{
  width: 100%;
  height: 100%;
  
}
.ha-card-head-default {
  height: 20%;
  width: 94%;
  padding-left: 3%;
  padding-right: 3%;
  display: flex;
  justify-content:center;
  align-items: center;
  font-size: 20px;
  font-weight:600; 
}
.ha-card-content-default {
  width: 100%;
}
.ha-card-foot-default {
  height: 20%;
  width: 94%; 
  padding-left: 3%;
  padding-right: 3%;
  display: flex;
  justify-content:center;
  align-items: center;    
}
</style>


