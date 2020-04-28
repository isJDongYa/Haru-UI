<template>
  <div ref="haLetter" class="ha-letter-default ha-letter">
    <canvas class="ha-letter-canvas-default ha-letter-canvas" v-for="(e, i) in (glowTube ? 26 : 1)" :key="i"></canvas>
  </div>
</template>
<script>
import colorMixin from '@mixins/colorMixin.js'

export default {
  name: 'ha-letter',
  mixins: [colorMixin],
  props: {
    letter: {
      type: String,
      required: false,
      default: 'a'
    },
    capital: {
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
      alphabet: [],
      flushListener: null
    }
  },
  watch: {
    letter() {
      this.flushCanvas(this)()
    }
  },
  methods: {
    flushCanvas(vm) {
      return function() {
        for(let i=vm.canvass.length-1;i>-1;i--) {
          vm.canvass[i].width = vm.$refs.haLetter.offsetWidth*3
          vm.canvass[i].height = vm.$refs.haLetter.offsetHeight*3
          if(vm.glowTube === true){
            if(vm.letter === vm.alphabet[i] ) {
              vm.fillLetter(vm.canvass[i], vm.alphabet[i])
            } else {
              vm.strokeLetter(vm.canvass[i], vm.alphabet[i])
            }
          }else{
            vm.fillLetter(vm.canvass[i], vm.letter)
          }
        }
      }
    },
    strokeLetter(c, letter) {
      const ctx = c.getContext('2d')
      const w = this.$refs.haLetter.offsetWidth
      const h = this.$refs.haLetter.offsetHeight
      ctx.font = `${2.4 * h}px ${this.family}`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'bottom'
      ctx.strokeStyle = '#dddddf'
      ctx.strokeText(letter, w*3/2, 3*h)
    },
    fillLetter(c, letter) {
      const ctx = c.getContext('2d')
      const w = this.$refs.haLetter.offsetWidth
      const h = this.$refs.haLetter.offsetHeight
      
      ctx.font = `${2.4*h}px ${ this.family }`
      ctx.textAlign = 'center'
      
      ctx.textBaseline = 'bottom'
      ctx.fillStyle = this.fillColorNum
      ctx.fillText(letter, w*3/2, 3*h)

    },
    init() {
      this.canvass = this.$refs.haLetter.children
      if(this.glowTube === true){
        const start = this.capital ? 65 : 97
        for(let i = 0; i < 26; i++) {
          this.alphabet.unshift(
            String.fromCharCode(start+i)
          )
        }
      }
      this.flushListener = this.flushCanvas(this)
      this.flushListener()
    }
  },
  mounted() {
    this.init()
    window.addEventListener('resize', this.flushListener)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.flushListener)
  }
}
</script>
<style lang="scss" scoped>
.ha-letter-default {
  position: relative;
  width: 100%;
  height: 100%;
}
.ha-letter-canvas-default {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>


