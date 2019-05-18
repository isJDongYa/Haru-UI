<template>
  <div :class="['ha-rectangle', 'ha-rectangle-default', 'grid-r-c-span2']" :style="{ width, height, gridRowStart, gridColumnStart, gridRowEnd, gridColumnEnd, overflow }">
    <slot></slot>
  </div>
</template>
<script>
import coorMixin from '@mixins/coorMixin'
import whMixin from "@mixins/whMixin"


export default {
  name: 'ha-rectangle',
  mixins: [coorMixin, whMixin],
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
