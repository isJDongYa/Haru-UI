<template>
  <div ref="haNumber" class="ha-number-default ha-number">
    <canvas class="ha-number-canvas-default ha-number-canvas" v-for="(e, i) in (this.glowTube?10:1)" :key="i"></canvas>
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
    },
    family: {
      type: String,
      required: false,
      default: 'YaHei'
    },
    glowTube: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      canvass: [],
      flushListener: null
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
        let n = this.glowTube ? 9 : vm.num
        for(let i=0;i<vm.canvass.length;i++) {
          vm.canvass[i].width = vm.$refs.haNumber.offsetWidth*3
          vm.canvass[i].height = vm.$refs.haNumber.offsetHeight*3
          if(n === vm.num) {
            vm.fillNum(vm.canvass[i], n)
            if(vm.glowTube){
              n--
            }
          } else {
            vm.strokeNum(vm.canvass[i], n)
            if(vm.glowTube){
              n--
            }
          }
          
        }
      }
    },
    strokeNum(c, num) {
      const ctx = c.getContext('2d')
      const w = this.$refs.haNumber.offsetWidth
      const h = this.$refs.haNumber.offsetHeight
      ctx.font = `${2.4*h}px ${this.family}`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'bottom'
      ctx.strokeStyle = '#dddddf'
      ctx.strokeText(num, w*3/2, 3*h)
    },
    fillNum(c, num) {
      const ctx = c.getContext('2d')
      const w = this.$refs.haNumber.offsetWidth
      const h = this.$refs.haNumber.offsetHeight
      ctx.font = `${ 2.4 * h }px ${ this.family }`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'bottom'
      ctx.fillStyle = this.fillColorNum
      ctx.fillText(num, w*3/2, 3*h)
      if(this.dot) {
        ctx.fillText('.', w*3/1.1, 3*h)
      }
    }
  },
  mounted() {
    this.canvass = this.$refs.haNumber.children
    this.flushListener = this.flushCanvas(this)
    this.flushListener()
    window.addEventListener('resize', this.flushListener)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.flushListener)
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


