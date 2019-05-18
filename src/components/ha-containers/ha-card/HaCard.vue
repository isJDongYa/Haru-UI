<template>
  <ha-rectangle :width="width" :height="height" :coor="coor">
    <div :class="['ha-card-default', haColor, 'ha-card']"
    :style="getStyleStr">
      <div :class="['ha-card-head-default', haColor[0], 'ha-card-head']">
        <slot name="head"></slot>
      </div>
      <div :class="['ha-card-content-default', haColor[1], 'ha-card-content']">
        <slot name="content"></slot>
        <slot></slot>
      </div>
      <div :class="['ha-card-foot-default', haColor[2], 'ha-card-foot']">
        <slot name="foot"></slot>
      </div>
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
  name:'ha-card',
  mixins: [coorMixin, colorMixin, stylePropMixin, whMixin],
  
}
</script>
<style lang="scss" scoped>
@import '@scss/local/hovers.scss';

.ha-card-default{
  width: 99%;
  height: 99%;
  @include hoverShadow;
}
.ha-card-head-default {
  height: 20%;
  width: 94%;
  padding-left: 3%;
  padding-right: 3%;
  display: flex;
  justify-content:flex-start;
  align-items: center;
  font-size: 20px;
  font-weight:600; 
}
.ha-card-content-default {
  height: 60%;
  width: 100%;
}
.ha-card-foot-default {
  height: 20%;
  width: 94%; 
  padding-left: 3%;
  padding-right: 3%;
  display: flex;
  justify-content:flex-end;
  align-items: center;    
}
</style>


