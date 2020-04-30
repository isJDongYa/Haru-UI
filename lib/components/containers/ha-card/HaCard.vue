<template>
  <ha-rectangle 
    :width="$attrs['width']" :height="$attrs['height']" 
    :coor="$attrs['coor']" :hover="$attrs['hover']" 
    :border="$attrs['border']" :padding="$attrs['padding']" 
    :radius="$attrs['radius']" :haShow="$attrs['haShow']"
  >
    <!-- 垂直card -->
    <div :class="['ha-card-Ve-default', 'ha-card-Ve']" v-if="type==='Ver'">
      <div :class="['ha-card-Ve-head-default', bgColorClass[0], 'ha-card-Ve-head']" v-if="$slots.header" :style="`height:${hcfHeight[0]}`">
        <slot name="header"></slot>
      </div>
      <div :class="['ha-card-Ve-content-default', bgColorClass[1], 'ha-card-Ve-content']" :style="`height:${hcfHeight[1]}`">
        <slot name="content"></slot>
        <slot></slot>
      </div>
      <div :class="['ha-card-Ve-foot-default', bgColorClass[2], 'ha-card-Ve-foot']" v-if="$slots.footer" :style="`height:${hcfHeight[2]}`">
        <slot name="footer"></slot>
      </div>
    </div>
    <!-- 水平card -->
    <div :class="['ha-card-Ho-default', 'ha-card-Ho']" v-if="type==='Hor'">
      <div :class="['ha-card-Ho-left-default', bgColorClass[0], 'ha-card-Ho-left']" v-if="$slots.left" :style="`width:${lmrWidth[0]}`">
        <div class="ha-card-Ho-left-con-default">
          <slot name="left"></slot>
        </div>
      </div>
      <div :class="['ha-card-Ho-middle-default', bgColorClass[1], 'ha-card-Ho-middle']" :style="`width:${lmrWidth[1]}`">
        <div class="ha-card-Ho-middle-con-default">
          <slot name="middle"></slot>
          <slot></slot>
        </div>
      </div>
      <div :class="['ha-card-Ho-right-default', bgColorClass[2], 'ha-card-Ho-right']" v-if="$slots.right" :style="`width:${lmrWidth[2]}`">
        <div class="ha-card-Ho-right-con-default">
          <slot name="right"></slot>
        </div>
      </div>
    </div>
  </ha-rectangle>
</template>
<script>
import colorMixin from '@mixins/colorMixin'

import HaRectangle from '@containers/ha-rectangle/HaRectangle.vue'

export default {
  name:'ha-card',
  mixins: [colorMixin],
  components: {
    'ha-rectangle': HaRectangle
  },
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
        return ['0%', '100%', '0%']
      }
    },
    lmrWidth: {
      type: Array,
      required: false,
      default: () => {
        return ['0%', '100%', '0%']
      }
    }
  }
}
</script>
<style lang="scss" scoped>

.ha-card-Ve-default {
  width: 100%;
  height: 100%;
}
.ha-card-Ve-head-default,
.ha-card-Ve-content-default,
.ha-card-Ve-foot-default {
  width: 100%;
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
.ha-card-Ho-left-default,
.ha-card-Ho-middle-default,
.ha-card-Ho-right-default {
  height: 100%;
  display: inline-block;
  vertical-align: top;
}
.ha-card-Ho-left-con-default, 
.ha-card-Ho-middle-con-default,
.ha-card-Ho-right-con-default {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content:center;
  align-items: center; 
}
</style>


