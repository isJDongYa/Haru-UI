<template>
 
    <div  class="ha-mask-default ha-mask"
          :style="`position:${position}`"
          v-show="dataShow"
          @click="mouseDown"
          ref="mask"
    >
      <slot></slot>
    </div>

</template>
<script>


import '@containers/ha-rectangle'
import { setTimeout, clearTimeout } from 'timers';

export default {
  data() {
    return {
      dataShow: this.show,
      timer: null
    }
  },
  props: {
    position: {
      type: String,
      required: false,
      default: 'fixed'
    },
    show: {
      type: Boolean,
      required: false,
      default: false
    },
    duration: {
      type: Number,
      required: false,
      default: 0
    }
  },
  watch: {
    show() {
      if(this.timer) clearTimeout(this.timer)
      if(this.duration) {
        if(this.show) {
          this.timer = setTimeout(() => {
            this.$emit('update:show', false)
          }, this.duration)
        }
      } 
      this.dataShow = this.show
    }
  },
  methods: {
    mouseDown(e) {
      e.stopPropagation()
      console.log(e)
      if(e.target === this.$refs.mask) {
        this.$emit('update:show', false)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.ha-mask-default {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 10000;
  background: rgba($color: #000000, $alpha: 0.5)
}
</style>


