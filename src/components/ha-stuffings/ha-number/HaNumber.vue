<template>
  <div ref="haNumber" class="ha-number-default ha-number">
    <canvas class="ha-number-canvas-default ha-number-canvas" v-for="(e, i) in 10" :key="i"></canvas>
  </div>
</template>
<script>
import colorMixin from '@mixins/colorMixin.js'

export default {
  name: 'ha-number',
  mixins: [colorMixin],
  props: {
    num: {
      type: Number,
      required: false,
      default: 0
    },
    dot: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      canvass: []
    }
  },
  watch: {
    num() {
      this.flushCanvas(this)()
    }
  },
  methods: {
    flushCanvas(vm) {
      return function() {
        let n = 9
        for(let i=0;i<vm.canvass.length;i++) {
          vm.canvass[i].width = vm.$refs.haNumber.offsetWidth*3
          vm.canvass[i].height = vm.$refs.haNumber.offsetHeight*3
          if(n === vm.num) {
            vm.fillNum(vm.canvass[i], n)
            n--
          } else {
            vm.strokeNum(vm.canvass[i], n)
            n--
          }
          
        }
      }
    },
    strokeNum(c, num) {
      const ctx = c.getContext('2d')
      const w = this.$refs.haNumber.offsetWidth
      const h = this.$refs.haNumber.offsetHeight
      ctx.font = `${3 * h * 0.8}px 微软雅黑`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'bottom'
      ctx.strokeStyle = '#dddddf'
      ctx.strokeText(num, w*3/2, 3*h)
    },
    fillNum(c, num) {
      const ctx = c.getContext('2d')
      const w = this.$refs.haNumber.offsetWidth
      const h = this.$refs.haNumber.offsetHeight
      ctx.font = `${3 * h * 0.8}px 微软雅黑`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'bottom'
      ctx.fillStyle = this.haFontColor
      ctx.fillText(num, w*3/2, 3*h)
      if(this.dot) {
        ctx.fillText('.', w*3/1.1, 3*h)
      }
    }
  },
  mounted() {
    this.canvass = this.$refs.haNumber.children
    this.flushCanvas(this)()
    window.addEventListener('resize', this.flushCanvas(this))
  }
}
</script>
<style lang="scss" scoped>
.ha-number-default {
  position: relative;
  width: 100%;
  height: 100%;
}
.ha-number-canvas-default {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>


