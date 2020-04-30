<template>
  <div ref="detailBox" class="ha-detailBox-default ha-detailBox">
    <slot></slot>
  </div>
</template>
<script>
import colorMixin from '@mixins/colorMixin'
import Vue from 'vue'

export default {
  name: 'ha-detailBox',
  mixins: [colorMixin],
  props: {
    
  },
  data() {
    return {
      detailBox: null,
      body: null,
      timer: null,
      count: 1
    }
  },
  methods: {
    setDetailBox() {
      const body = document.querySelector('body')
      this.body = body
      const children = this.$parent.$el.children
        for (let i = 0; i < children.length; i++) {
          const dataset = children[i].dataset
          if(dataset.detailBox === 'detailBox'){
            this.detailBox = children[i]
            children[i].parentElement.removeChild(children[i])
            this.detailBox.style.position = 'fixed'
            this.detailBox.style.opacity = 0
            this.detailBox.style.transition = 'opacity .1s ease-in-out'
          }
        }
    },
    detailBoxMouseEnter(vm) {
      return function(e) {
        vm.detailBox.style.left = e.clientX + 'px'
        vm.detailBox.style.top = e.clientY + 'px'
        vm.body.appendChild(vm.detailBox)
        
        if(vm.count === 1) { 
          vm.timer = setInterval(() => {
            vm.detailBox.style.opacity = vm.count * 0.1 
            vm.count++
            if(vm.count === 11) {
              clearInterval(vm.timer)
            }
          }, 100);
        }
      }
    },
    detailBoxMouseMove(vm) {
      return function(e) {
        vm.detailBox.style.left = e.clientX + 20 + 'px'
        vm.detailBox.style.top = e.clientY + 20 + 'px'
      }
    },
    detailBoxMouseLeave(vm) {
      return function() {
        
        vm.body.removeChild(vm.detailBox)  
        vm.detailBox.style.opacity = 0
        vm.count = 1     
      }  
    },
  },
  mounted() {
    this.setDetailBox()
    this.$refs.detailBox.addEventListener('mouseenter', this.detailBoxMouseEnter(this))
    this.$refs.detailBox.addEventListener('mousemove', this.detailBoxMouseMove(this))
    this.$refs.detailBox.addEventListener('mouseleave', this.detailBoxMouseLeave(this))
    
  }
}
</script>
<style lang="scss" scoped>
.ha-detailBox-default {
  width: 100%;
  height: 100%;
  z-index: 100000000;
}
</style>
