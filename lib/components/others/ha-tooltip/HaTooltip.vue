<template>
  <div ref="tooltip" class="ha-tooltip-default ha-tooltip">
    <slot></slot>
  </div>
</template>
<script>
import colorMixin from '@mixins/colorMixin'

export default {
  name: 'ha-tooltip',
  mixins: [colorMixin],
  props: {
    tip: {
      type: String,
      required: false,
      default: ''
    },
    wait: {
      type: Number,
      required: false,
      default: 2000
    },
    location: {
      type: String,
      required: false,
      default: 'top'
    }
  },
  data() {
    return {
      timer: null,
      tooltipText: null
    }
  },
  methods: {
    toolTipMouseMove(vm) {
      vm.tooltipText = document.createElement('div')
      return function(e) {
        vm.tooltipText.classList.add('ha-tooltip-text-default', 'ha-tooltip-text', vm.bgColorClass)
        vm.tooltipText.style.display = 'none'
        vm.tooltipText.style.position = 'fixed'
        if(vm.timer) clearTimeout(vm.timer)
        vm.timer = setTimeout(() => {
          vm.tooltipText.innerHTML = vm.tip
          vm.tooltipText.style.left = (0.95 * e.clientX) + 'px'
          vm.tooltipText.style.maxWidth = '300px'
          vm.tooltipText.style.padding = '6px'
          vm.tooltipText.style.flexWrap = 'wrap'
          vm.tooltipText.style.display = 'flex'

          vm.$root.$el.appendChild(vm.tooltipText)

          let offset = vm.location === 'top' ? -vm.tooltipText.offsetHeight : 20
          vm.tooltipText.style.top = (e.clientY + offset) + 'px'
        }, vm.wait)
      }
    },
    removeTip(vm) {
      return function() {
        if(vm.timer) clearTimeout(vm.timer)
        if(vm.tooltipText) vm.tooltipText.style.display = 'none'
      }
    }
  },
  mounted() {
    this.$refs.tooltip.addEventListener('mousemove', this.toolTipMouseMove(this))
    this.$refs.tooltip.addEventListener('mouseout', this.removeTip(this)) 
    this.$refs.tooltip.addEventListener('visibilitychange', this.removeTip(this)) 
    
  }
}
</script>
<style lang="scss" scoped>
.ha-tooltip-default {
  width: 100%;
  height: 100%;
}
</style>
