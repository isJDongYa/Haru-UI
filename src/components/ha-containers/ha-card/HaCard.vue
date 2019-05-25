<template>
  <ha-rectangle :width="width" :height="height" :coor="coor" :hover="hover" :style="getStyleStr" >
    <!-- 垂直card -->
    <div :class="['ha-card-Ve-default', 'ha-card-Ve']" v-if="type==='Ver'">
      <div :class="['ha-card-Ve-head-default', haColor[0], 'ha-card-Ve-head']" v-if="$slots.header" :style="`height:${hcfHeight[0]}`">
        <slot name="header"></slot>
      </div>
      <div :class="['ha-card-Ve-content-default', haColor[1], 'ha-card-Ve-content']" :style="`height:${hcfHeight[1]}`">
        <slot name="content"></slot>
        <slot></slot>
      </div>
      <div :class="['ha-card-Ve-foot-default', haColor[2], 'ha-card-Ve-foot']" v-if="$slots.footer" :style="`height:${hcfHeight[2]}`">
        <slot name="footer"></slot>
      </div>
    </div>
    <!-- 水平card -->
    <div :class="['ha-card-Ho-default', 'ha-card-Ho']" v-if="type==='Hor'">
      <div :class="['ha-card-Ho-left-default', haColor[0], 'ha-card-Ho-left']" v-if="$slots.left" :style="`width:${lmrWidth[0]}`">
        <slot name="left"></slot>
      </div>
      <div :class="['ha-card-Ho-middle-default', haColor[1], 'ha-card-Ho-middle']" :style="`width:${lmrWidth[1]}`">
        <slot name="middle"></slot>
        <slot></slot>
      </div>
      <div :class="['ha-card-Ho-right-default', haColor[2], 'ha-card-Ho-right']" v-if="$slots.right" :style="`width:${lmrWidth[2]}`">
        <slot name="right"></slot>
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
  props: {
    type: {
      type: String,
      required: false,
      default: 'Ver',
      validator: (val) => {
        return val === 'Ver' || val === 'Hor' 
      }
    },
    hcfHeight: {
      type: Array,
      required: false,
      default: () => {
        return ['20%', '60%', '20%']
      }
    },
    lmrWidth: {
      type: Array,
      required: false,
      default: () => {
        return ['20%', '60%', '20%']
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@scss/local/hovers.scss';

.ha-card-Ve-default {
  width: 100%;
  height: 100%;
}
.ha-card-Ve-head-default {
  width: 94%;
  padding-left: 3%;
  padding-right: 3%;
  display: flex;
  justify-content:center;
  align-items: center;
  font-size: 20px;
  font-weight:600; 
}
.ha-card-Ve-content-default {
  width: 100%;
  display: flex;
  justify-content:center;
  align-items: center; 
}
.ha-card-Ve-foot-default {
  width: 94%; 
  padding-left: 3%;
  padding-right: 3%;
  display: flex;
  justify-content:center;
  align-items: center;    
}

.ha-card-Ho-default {
  width: 100%;
  height: 100%;
  display: table;
  word-spacing:-1em;
}
.ha-card-Ho-left-default {
  height: 100%;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
}
.ha-card-Ho-middle-default {
  height: 100%;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
}
.ha-card-Ho-right-default {
  height: 100%; 
  display: inline-block;
  vertical-align: middle;
  text-align: center;
}
</style>


