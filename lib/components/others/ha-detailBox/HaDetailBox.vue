<template>
  <div ref="detailbox" class="ha-detailbox-default ha-detailbox">
    <slot></slot>
  </div>
</template>
<script>
import colorMixin from '@mixins/colorMixin'
import Vue from 'vue'

export default {
  name: 'ha-detailbox',
  mixins: [colorMixin],
  props: {
    location: {
      type: String,
      required: false,
      default: "rightBottom"
    }
  },
  data() {
    return {
      detailbox: null,
      body: null,
      timer: null,
      count: 1
    }
  },
  methods: {
    setDetailBox() {
      const body = document.querySelector('body')
      this.body = body
      const children = this.$refs.detailbox.parentNode.children
        for (let i = 0; i < children.length; i++) {
          const dataset = children[i].dataset
          if(dataset.detailbox === 'detailbox'){
            this.detailbox = children[i]
            children[i].parentElement.removeChild(children[i])
            this.detailbox.style.position = 'fixed'
            this.detailbox.style.zIndex = 10000000
            this.detailbox.style.opacity = 0
            this.detailbox.style.transition = 'opacity .1s ease-in-out'
          }
        }
    },
    detailBoxMouseEnter(vm) {
      return function(e) {
        const isLeftP = vm.location === 'rightBottom' || vm.location === 'rightTop' 
        const isTopP = vm.location === 'rightBottom' || vm.location === 'leftBottom' 

        let left = 0
        let top = 0

        if(isLeftP) {
          vm.detailbox.style.left = e.clientX + 20 + 'px'
        }else {
          vm.detailbox.style.left = e.clientX - vm.detailbox.offsetWidth - 20 + 'px'
        }

        if(isTopP) {
          vm.detailbox.style.top = e.clientY + 20 + 'px'
        }else {
          vm.detailbox.style.top = e.clientY - vm.detailbox.offsetHeight - 20 + 'px'
        }
        vm.body.appendChild(vm.detailbox)
        
        if(vm.count === 1) { 
          vm.timer = setInterval(() => {
            vm.detailbox.style.opacity = vm.count * 0.1 
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

        const isLeftP = vm.location === 'rightBottom' || vm.location === 'rightTop' 
        const isTopP = vm.location === 'rightBottom' || vm.location === 'leftBottom' 

        let left = 0
        let top = 0

        if(isLeftP) {
          vm.detailbox.style.left = e.clientX + 20 + 'px'
        }else {
          vm.detailbox.style.left = e.clientX - vm.detailbox.offsetWidth - 20 + 'px'
        }

        if(isTopP) {
          vm.detailbox.style.top = e.clientY + 20 + 'px'
        }else {
          vm.detailbox.style.top = e.clientY - vm.detailbox.offsetHeight - 20 + 'px'
          
        }

      }
    },
    detailBoxMouseLeave(vm) {
      return function() {
        
        vm.body.removeChild(vm.detailbox)  
        vm.detailbox.style.opacity = 0
        vm.count = 1     
      }  
    },
  },
  mounted() {
    this.setDetailBox()
    if(this.detailbox) {
      this.$refs.detailbox.addEventListener('mouseenter', this.detailBoxMouseEnter(this))
      this.$refs.detailbox.addEventListener('mousemove', this.detailBoxMouseMove(this))
      this.$refs.detailbox.addEventListener('mouseleave', this.detailBoxMouseLeave(this))
    } 
  }
}
</script>
<style lang="scss" scoped>
.ha-detailbox-default {
  width: 100%;
  height: 100%;
  z-index: 100000000;
}
</style>
